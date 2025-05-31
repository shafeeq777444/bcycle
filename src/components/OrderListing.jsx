import React, { useState } from 'react';
import { 
  Package, 
  MapPin, 
  Star, 
  Calendar, 
  ShoppingBag,
  Eye,
  ChevronDown,
  ChevronUp,
  IndianRupee
} from 'lucide-react';

const OrderListing = ({orders}) => {
    console.log(orders,"--ordrs--")
  const [expandedOrders, setExpandedOrders] = useState({});

  // Sample order data based on your structure
//   const orders = [
//     {
//       "products": [
//         {
//           "id": "2",
//           "category": "Comfort",
//           "name": "Brooks B17 Leather Saddle",
//           "description": "A classic leather saddle known for its comfort and durability.",
//           "features": [
//             "Leather Material",
//             "Steel Rails",
//             "Handcrafted"
//           ],
//           "originalPrice": 138,
//           "offerPrice": 124.2,
//           "reviews": 1000,
//           "rating": 4.8,
//           "images": [
//             "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=400&h=300&fit=crop",
//             "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop",
//             "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
//           ],
//           "feedback": [
//             {
//               "id": 1,
//               "name": "Vintage Rider Bob",
//               "rating": 5,
//               "date": "20 Nov 2024",
//               "comment": "After 500 miles, this saddle has molded perfectly to my body. The leather quality is exceptional and it just gets more comfortable with time. Worth every penny!",
//               "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
//             },
//             {
//               "id": 2,
//               "name": "Long Distance Lucy",
//               "rating": 4,
//               "date": "12 Nov 2024",
//               "comment": "Best saddle I've ever owned! The handcrafted quality shows in every detail. No more discomfort on long rides. Brooks really knows their craft.",
//               "avatar": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
//             }
//           ],
//           "quantity": 1
//         }
//       ],
//       "total": 134.136,
//       "id": 1748618305111,
//       "status": "Delivered",
//       "orderDate": "2024-11-25",
//       "deliveryDate": "2024-11-28",
//       "address": {
//         "address": {
//           "fullAddress": "kakkanchery,kinfra,neospace",
//           "city": "kakkanchey",
//           "state": "kerala",
//           "pincode": "673634"
//         }
//       }
//     },
//     {
//       "products": [
//         {
//           "id": "3",
//           "category": "Performance",
//           "name": "Shimano Ultegra Groupset",
//           "description": "Professional-grade cycling components for serious riders.",
//           "features": [
//             "11-Speed",
//             "Carbon Fiber",
//             "Precision Engineering"
//           ],
//           "originalPrice": 899,
//           "offerPrice": 799,
//           "reviews": 750,
//           "rating": 4.9,
//           "images": [
//             "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop"
//           ],
//           "feedback": [
//             {
//               "id": 1,
//               "name": "Pro Cyclist Sam",
//               "rating": 5,
//               "date": "15 Nov 2024",
//               "comment": "Incredible precision and smooth shifting. This groupset transformed my bike's performance completely.",
//               "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
//             }
//           ],
//           "quantity": 1
//         }
//       ],
//       "total": 863.14,
//       "id": 1748518305112,
//       "status": "In Transit",
//       "orderDate": "2024-11-20",
//       "deliveryDate": "2024-12-02",
//       "address": {
//         "address": {
//           "fullAddress": "Technopark, Trivandrum",
//           "city": "Trivandrum",
//           "state": "Kerala",
//           "pincode": "695581"
//         }
//       }
//     }
//   ];

  const toggleExpanded = (orderId) => {
    setExpandedOrders(prev => ({
      ...prev,
      [orderId]: !prev[orderId]
    }));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'In Transit': return 'bg-blue-100 text-blue-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Orders</h1>
        <p className="text-gray-600">Track and manage your cycling gear orders</p>
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {orders?.map((order) => (
          <div key={order.id} className=" rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Order Header */}
            <div className="p-6 border-b  border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Package className="w-5 h-5 text-blue-600" />
                    <span className="text-lg font-semibold text-gray-900">
                      Order #{order.id.toString().slice(-6)}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status ||'In Transit')}`}>
                      In Transit
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Ordered: {new Date().toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{order?.address.address.city}, {order?.address.address.state}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-xl font-bold text-gray-900 mb-1">
                    <IndianRupee className="w-5 h-5" />
                    <span>{order.total.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => toggleExpanded(order.id)}
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    {expandedOrders[order.id] ? 'Hide Details' : 'View Details'}
                    {expandedOrders[order.id] ? 
                      <ChevronUp className="w-4 h-4" /> : 
                      <ChevronDown className="w-4 h-4" />
                    }
                  </button>
                </div>
              </div>

              {/* Product Preview */}
              <div className="flex items-center gap-4">
                <img
                  src={order.products[0].images[0]}
                  alt={order.products[0].name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{order.products[0].name}</h3>
                  <p className="text-sm text-gray-600">{order.products[0].category}</p>
                  {order.products.length > 1 && (
                    <p className="text-xs text-blue-600 mt-1">
                      +{order.products.length - 1} more item{order.products.length > 2 ? 's' : ''}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Expanded Content */}
            {expandedOrders[order.id] && (
              <div className="p-6 bg-gray-50">
                {/* Products Details */}
                <div className="space-y-6">
                  {order.products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg p-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        {/* Product Images */}
                        <div>
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-lg mb-3"
                          />
                          <div className="flex gap-2">
                            {product.images.slice(1, 3).map((img, idx) => (
                              <img
                                key={idx}
                                src={img}
                                alt=""
                                className="w-16 h-16 object-cover rounded"
                              />
                            ))}
                            {product.images.length > 3 && (
                              <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-600">
                                +{product.images.length - 3}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Product Info */}
                        <div className="md:col-span-2">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                              <p className="text-gray-600 mb-3">{product.description}</p>
                              <div className="flex items-center gap-4 mb-3">
                                <div className="flex items-center gap-1">
                                  {renderStars(product.rating)}
                                  <span className="text-sm text-gray-600 ml-1">
                                    {product.rating} ({product.reviews} reviews)
                                  </span>
                                </div>
                                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                  {product.category}
                                </span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center gap-1 text-lg font-bold text-gray-900 mb-1">
                                <IndianRupee className="w-4 h-4" />
                                <span>{product.offerPrice}</span>
                              </div>
                              <div className="flex items-center gap-1 text-sm text-gray-500 line-through">
                                <IndianRupee className="w-3 h-3" />
                                <span>{product.originalPrice}</span>
                              </div>
                              <div className="text-sm text-gray-600 mt-1">
                                Qty: {product.quantity}
                              </div>
                            </div>
                          </div>

                          {/* Features */}
                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                            <div className="flex flex-wrap gap-2">
                              {product.features.map((feature, idx) => (
                                <span
                                  key={idx}
                                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Recent Feedback */}
                          {product.feedback && product.feedback.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Recent Reviews:</h4>
                              <div className="space-y-3">
                                {product.feedback.slice(0, 2).map((review) => (
                                  <div key={review.id} className="bg-gray-50 p-4 rounded-lg">
                                    <div className="flex items-start gap-3">
                                      <img
                                        src={review.avatar}
                                        alt={review.name}
                                        className="w-10 h-10 rounded-full"
                                      />
                                      <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                          <span className="font-medium text-gray-900">{review.name}</span>
                                          <div className="flex items-center">
                                            {renderStars(review.rating)}
                                          </div>
                                          <span className="text-sm text-gray-500">{review.date}</span>
                                        </div>
                                        <p className="text-gray-700 text-sm">{review.comment}</p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Delivery Address */}
                <div className="mt-6 p-4 bg-white rounded-lg border">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Delivery Address
                  </h4>
                  <p className="text-gray-700">
                    {order.address.address.fullAddress}<br />
                    {order.address.address.city}, {order.address.address.state} - {order.address.address.pincode}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Empty State (if no orders) */}
      {orders.length === 0 && (
        <div className="text-center py-12">
          <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No orders yet</h3>
          <p className="text-gray-600">Start shopping for your cycling gear!</p>
        </div>
      )}
    </div>
  );
};

export default OrderListing;