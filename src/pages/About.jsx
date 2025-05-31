import React from 'react';
import { Bike, Shield, Award, Users, Target, Heart } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function CycleAboutPage() {
  const navigate=useNavigate()
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality First",
      description: "Every product is carefully selected and tested to ensure durability and performance."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expert Service",
      description: "Our team of cycling enthusiasts provides professional advice and support."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Focused",
      description: "Building a stronger cycling community through quality products and service."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion Driven",
      description: "We're cyclists serving cyclists with genuine love for the sport."
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "5000+", label: "Happy Customers" },
    { number: "500+", label: "Products Available" },
    { number: "24/7", label: "Customer Support" }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}


      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">About Our Story</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Born from a passion for cycling, we've been serving the cycling community for over 15 years. 
            From premium bicycles to essential accessories, we provide everything you need for your cycling journey.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold">{stat.number}</div>
                <div className="text-gray-400 uppercase tracking-wide text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To empower every cyclist with high-quality bicycles and accessories that enhance their 
                riding experience. We believe cycling is more than just transportation – it's a lifestyle, 
                a passion, and a path to better health and environmental consciousness.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're a weekend warrior, daily commuter, or competitive athlete, we're here 
                to support your cycling journey with expert advice and premium products.
              </p>
            </div>
            <div className="relative">

             

            <div className="relative w-full h-96 rounded-2xl overflow-hidden">
                                        {/* Background image with blur */}
                                        <img
                                            src="https://img.freepik.com/free-photo/expirienced-young-master-is-repairing-customer-s-bicycle-workplace_613910-20759.jpg?uid=R25325760&ga=GA1.1.148018904.1747591743&semt=ais_hybrid&w=740"
                                            alt="Background"
                                            className="absolute inset-0 w-full h-full object-cover filter "
                                        />
            
            
                                        {/* Icon centered on top */}
                                        <div className="relative flex items-center justify-center h-full">
                                            {/* <Target className="w-32 h-32 text-white" /> */}
                                        </div>
                                    </div>

            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Our Values</h3>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center text-black">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">What We Offer</h3>
            <p className="text-xl text-gray-600">Complete cycling solutions for every rider</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                <Bike className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-semibold">Premium Bicycles</h4>
              <p className="text-gray-600">Road bikes, mountain bikes, electric bikes, and more from top brands</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-semibold">Safety Gear</h4>
              <p className="text-gray-600">Helmets, lights, reflective gear, and protective equipment</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-semibold">Accessories</h4>
              <p className="text-gray-600">Tools, bags, clothing, and everything else you need</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h3>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Visit our store or browse online to discover the perfect bike and accessories for your needs.
          </p>
          <button onClick={()=>{navigate('/')}} className="bg-white text-black px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-200 duration-200 ease-in  transition-colors">
            Shop Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Bike className="w-6 h-6" />
            <span className="text-lg font-semibold">bcycle</span>
          </div>
          <p className="text-gray-600">© 2025 bcycle. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}