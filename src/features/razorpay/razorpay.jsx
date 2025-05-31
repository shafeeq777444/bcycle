import { useEffect } from "react";
import toast from "react-hot-toast";

function Razorpay({ amount = 1100, setPayment }) {

    //scripting (not clearly study)----------------------------------
    useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://checkout.razorpay.com/v1/checkout.js";
  script.async = true;

  script.onload = () => {



    try {
      const options = {
        key: "rzp_test_DizNfpRBICW9tQ",
        amount: amount * 100, // Razorpay expects amount in paise (100 paise = 1 INR)
        currency: "USD",
        image: "/bike.svg",
        name: "Bcycle",
        description: "Payment for Bicycle Product",
        handler: (response) => {
          console.log(response);
          toast.success("Payment successful");
          setPayment(false);
        },
        theme: {
          color: "#1f1f1f",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(error);
      toast.error("Razorpay error");

    }
  };

  script.onerror = () => {
    toast.error("Failed to load Razorpay SDK");
  };

  document.body.appendChild(script);

  return () => {
    setPayment(false);
    if (document.body.contains(script)) {
      document.body.removeChild(script);
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);



    return (
        <>
        </>
    );
}

export default Razorpay;
