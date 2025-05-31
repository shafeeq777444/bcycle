import { Bike, Menu, ShoppingCart } from 'lucide-react'
import React from 'react'

const Nabarr = ({setIsMenuOpen,isMenuOpen}) => {
  return (
    <div>
      <nav className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bike className="w-8 h-8 text-black" />
              <h1 className="text-2xl font-bold">CycleGear Pro</h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-gray-600 transition-colors">Home</a>
              <a href="#" className="hover:text-gray-600 transition-colors">Products</a>
              <a href="#" className="hover:text-gray-600 transition-colors">About</a>
              <a href="#" className="hover:text-gray-600 transition-colors">Contact</a>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-2">
                <ShoppingCart className="w-4 h-4" />
                <span>Cart</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-4">
                <a href="#" className="hover:text-gray-600 transition-colors">Home</a>
                <a href="#" className="hover:text-gray-600 transition-colors">Products</a>
                <a href="#" className="hover:text-gray-600 transition-colors">About</a>
                <a href="#" className="hover:text-gray-600 transition-colors">Contact</a>
                <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-2 w-fit">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Cart</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Nabarr
