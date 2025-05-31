import React, { useState } from 'react';

const ProductFilter = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (e) => {
    setSortType(e.target.value);
  };

//   const filteredItems = items
//     .filter((item) =>
//       item.title.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .sort((a, b) => {
//       switch (sortType) {
//         case 'az':
//           return a.title.localeCompare(b.title);
//         case 'za':
//           return b.title.localeCompare(a.title);
//         case 'priceLow':
//           return a.price - b.price;
//         case 'priceHigh':
//           return b.price - a.price;
//         default:
//           return 0;
//       }
//     });

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        className="border p-2 w-full mb-4 rounded"
      />
      <select
        onChange={handleSort}
        className="border p-2 w-full mb-4 rounded"
      >
        <option value="">Sort By</option>
        <option value="az">A - Z</option>
        <option value="za">Z - A</option>
        <option value="priceLow">Price: Low to High</option>
        <option value="priceHigh">Price: High to Low</option>
      </select>

      {/* <ul className="space-y-2">
        {filteredItems.map((item, idx) => (
          <li key={idx} className="border p-2 rounded">
            <div className="font-semibold">{item.title}</div>
            <div className="text-sm text-gray-600">${item.price}</div>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default ProductFilter;
