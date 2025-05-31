import React, { useState } from 'react';
import { Bike, Shield, Award, Users, Target, Heart, Star, ArrowRight, Menu, X, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router';
import { 
  Mountain, 
  Zap, 
  MapPin, 
  Wrench 
} from 'lucide-react';
export default function CycleHomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate=useNavigate()

  const featuredProducts = [
    {
      id: 1,
      name: "Mountain Pro X1",
      category: "Mountain Bike",
      price: "$2,499",
      image: "🚵",
      rating: 4.9
    },
    {
      id: 2,
      name: "City Cruiser Elite",
      category: "City Bike",
      price: "$899",
      image: "🚲",
      rating: 4.8
    },
    {
      id: 3,
      name: "Pro Racing Helmet",
      category: "Safety Gear",
      price: "$149",
      image: "🪖",
      rating: 4.9
    },
    {
      id: 4,
      name: "Electric Power E-Bike",
      category: "E-Bike",
      price: "$3,299",
      image: "⚡",
      rating: 5.0
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Amazing quality bikes and fantastic customer service. Highly recommended!",
      rating: 5
    },
    {
      name: "Mike Chen",
      text: "Found the perfect mountain bike here. The staff really knows their stuff.",
      rating: 5
    },
    {
      name: "Emily Davis",
      text: "Great selection of accessories and very competitive prices.",
      rating: 5
    }
  ];

 const categories = [
  { name: "Road Bikes", icon: <Bike/>, count: "50+ Models" },
  { name: "Mountain Bikes", icon: <Mountain/>, count: "40+ Models" },
  { name: "E-Bikes", icon: <Zap/>, count: "25+ Models" },
  { name: "City Bikes", icon: <MapPin/>, count: "30+ Models" },
  { name: "Safety Gear", icon: <Shield/>, count: "100+ Items" },
  { name: "Accessories", icon: <Wrench/>, count: "200+ Items" }
];
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}


      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-6xl font-bold mb-6 leading-tight">
                Ride Your 
                <span className="block">Dreams</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover premium bicycles and accessories designed for every adventure. 
                From city commutes to mountain trails, we have everything you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={()=>{navigate('/bikes')}} className="bg-black text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
                  <span>Shop Now</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className=" text-black px-8 py-4 text-lg font-semibold rounded-lg hover:bg-black hover:text-white transition-colors">
                  Ride More
                </button>
              </div>
            </div>
           <div className="relative w-full h-96 rounded-2xl overflow-hidden">
  {/* Background image with blur */}
  <img
    src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=2922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover filter "
  />

  {/* Overlay to darken background a bit (optional for better icon contrast) */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Icon centered on top */}
  <div className="relative flex items-center justify-center h-full">
    <Bike className="w-32 h-32 text-white" />
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Shop by Category</h3>
            <p className="text-xl text-gray-600">Find exactly what you're looking for</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-black hover:text-white transition-all duration-300">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">{category.name}</h4>
                  <p className="text-gray-600 group-hover:text-gray-300">{category.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}


      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Why Choose bcycle?</h3>
            <p className="text-xl text-gray-300">The reasons thousands trust us</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <Shield className="w-12 h-12 mx-auto" />
              <h4 className="text-xl font-semibold">Premium Quality</h4>
              <p className="text-gray-300">Only the best brands and products</p>
            </div>
            <div className="text-center space-y-4">
              <Award className="w-12 h-12 mx-auto" />
              <h4 className="text-xl font-semibold">Expert Service</h4>
              <p className="text-gray-300">Professional advice and support</p>
            </div>
            <div className="text-center space-y-4">
              <Users className="w-12 h-12 mx-auto" />
              <h4 className="text-xl font-semibold">Community</h4>
              <p className="text-gray-300">Join thousands of happy cyclists</p>
            </div>
            <div className="text-center space-y-4">
              <Heart className="w-12 h-12 mx-auto" />
              <h4 className="text-xl font-semibold">Passion</h4>
              <p className="text-gray-300">We love cycling as much as you do</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">What Our Customers Say</h3>
            <p className="text-xl text-gray-600">Real reviews from real cyclists</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-black fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Stay in the Loop</h3>
          <p className="text-xl text-gray-600 mb-8">Get the latest news, tips, and exclusive offers</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Bike className="w-8 h-8" />
                <h4 className="text-xl font-bold">bcycle</h4>
              </div>
              <p className="text-gray-400">Your trusted partner for all cycling needs.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Products</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Road Bikes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mountain Bikes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">E-Bikes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2025 bcycle. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}