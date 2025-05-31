import { useEffect } from "react";
import toast from "react-hot-toast";

function Razorpay({ amount = 1100, setPayment }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    script.onload = () => {
      try {
        const options = {
          key: "rzp_test_DizNfpRBICW9tQ",
          amount: amount * 83.5 * 100, // in paise
          currency: "INR",
          image: "/bike.svg",
          name: "Bcycle",
          description: "Payment for Bicycle Product",
          handler: (response) => {
            console.log("Payment success:", response);
            toast.success("Payment successful");
            setPayment(false); // close modal or change state
          },
          modal: {
            ondismiss: () => {
              toast("Payment cancelled");
              setPayment(false); // close modal if user closes it manually
            },
          },
          theme: {
            color: "#1f1f1f",
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } catch (error) {
        console.error("Razorpay Error:", error);
        toast.error("Razorpay error occurred");
        setPayment(false);
      }
    };

    script.onerror = () => {
      toast.error("Failed to load Razorpay SDK");
      setPayment(false);
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      setPayment(false); // cleanup when component unmounts
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

export default Razorpay;
