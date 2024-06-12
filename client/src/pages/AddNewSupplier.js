import React, { useState } from 'react';

const AddSupplierPage = () => {
  const [supplierId, setSupplierId] = useState('');
  const [supplierName, setSupplierName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [rawMaterial, setRawMaterial] = useState('');
  const [rawMaterialId, setRawMaterialId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the logic to submit the supplier data
    console.log('Supplier submitted:', { supplierId, supplierName, address, phone, email, rawMaterial, rawMaterialId });
    // Reset form fields after submission
    setSupplierId('');
    setSupplierName('');
    setAddress('');
    setPhone('');
    setEmail('');
    setRawMaterial('');
    setRawMaterialId('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#E6F0DC]">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Add New Supplier</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="supplierId" className="block mb-1">Supplier ID</label>
            <input type="text" id="supplierId" value={supplierId} onChange={(e) => setSupplierId(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="supplierName" className="block mb-1">Supplier Name</label>
            <input type="text" id="supplierName" value={supplierName} onChange={(e) => setSupplierName(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-1">Phone No</label>
            <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="rawMaterialId" className="block mb-1">Raw Material ID</label>
            <input type="text" id="rawMaterialId" value={rawMaterialId} onChange={(e) => setRawMaterialId(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSupplierPage;
