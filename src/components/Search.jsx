import React, { useEffect, useState } from 'react';
import { Search, X, Filter, Package } from 'lucide-react';
import axiosInstance from '../service/axiosInstance';
import { useNavigate } from 'react-router';

const SearchModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
    const [products,setProducts]=useState([])
    

  useEffect(()=>{
    (async function(){
      const {data:bikeproducts}=  await axiosInstance('/bikes')
      const {data:accessoriesproducts}=  await axiosInstance('/bikeAccessories')
      const fullProducts=[...bikeproducts,...accessoriesproducts]
      setProducts(fullProducts)


    })()
  },[])

  const showModal = () => {
    setIsModalOpen(true);
    setFilteredProducts(products.slice(0, 6)); // Show first 6 products initially
  };
const navigate=useNavigate()
  const handleCancel = () => {
    setIsModalOpen(false);
    setSearchQuery('');
    setFilteredProducts([]);
  };

  const handleSearch = (value) => {
    setSearchQuery(value);
    if (value.trim()) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(value.toLowerCase()) ||
        product.category.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products.slice(0, 6));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleCancel();
    }
  };
  const handleProduct=(id)=>{
    const category=id.startsWith('lux')?"bikes":"bikeAccessories"
    navigate(`/${category}/productview/${id}`)
        
    }

  React.useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isModalOpen]);

  return (<>
  
      

      {/* Floating Search Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={showModal}
          className="w-14 h-14 bg-gray-800 hover:bg-black text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
        >
          <Search className="w-6 h-6  transition-transform duration-300" />
        </button>
      </div>

      {/* Search Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={handleCancel}
          ></div>
          
          {/* Modal */}
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-white/95 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl overflow-hidden animate-modalSlide">
            {/* Header */}
            <div className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 p-6">
             
              
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search for products..."
                  className="w-full bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl pl-12 pr-12 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                  autoFocus
                />

              </div>
            </div>

            {/* Products Grid */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredProducts.map((product) => (
                    <div
                    onClick={()=>{handleProduct(product.id)}}
                      key={product.id}
                      className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-xl p-4 hover:bg-white/80 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                    >
                      <div className="text-center mb-3">
                        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                            <img src= {product.images[0]} alt={product.name}/>
                         
                        </div>
                        <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                          {product.name}
                        </h3>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {product.category}
                        </span>
                        <span className="font-bold text-green-600">
                          {product.offerPrice}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-500 mb-2">No products found</h3>
                  <p className="text-gray-400">Try searching with different keywords</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-white/80 backdrop-blur-md border-t border-gray-200/50 px-6 py-4">
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>
                  {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                </span>
                <span>Press ESC to close</span>
              </div>
            </div>
          </div>
        </div>
      )}
</>
  );
};

export default SearchModal;