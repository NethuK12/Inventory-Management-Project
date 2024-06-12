import React, { useState } from 'react';

const AddRawMaterialPage = () => {
  const [materialId, setMaterialId] = useState('');
  const [materialName, setMaterialName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unitPrice, setUnitPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the logic to submit the raw material data
    console.log('Raw material submitted:', { materialId, materialName, quantity, unitPrice });
    // Reset form fields after submission
    setMaterialId('');
    setMaterialName('');
    setQuantity('');
    setUnitPrice('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#E6F0DC]">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Add Raw Material</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="materialId" className="block mb-1">Material ID</label>
            <input type="text" id="materialId" value={materialId} onChange={(e) => setMaterialId(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="materialName" className="block mb-1">Material Name</label>
            <input type="text" id="materialName" value={materialName} onChange={(e) => setMaterialName(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block mb-1">Quantity</label>
            <input type="text" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="unitPrice" className="block mb-1">Unit Price</label>
            <input type="text" id="unitPrice" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRawMaterialPage;
