import { useState } from "react";

const ProductForm = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    images: [],
  });

  const handleInputChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value }  );
  };

  const handleFileChange = (e) => {
    setProductData({ ...productData, images: Array.from(e.target.files) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("description", productData.description);
    formData.append("price", productData.price);
    formData.append("category", productData.category);
    
    
    productData.images.forEach((image) => {
      formData.append("images", image);
    });
  
    try {
      const response = await fetch("http://localhost:8080/createProduct", {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        alert("Product added successfully!");
        setProductData({
          name: "",
          description: "",
          price: "",
          category: "",
          images: [],
        });
      } else {
        alert("Failed to add product");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding product");
    }
  };
  

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Add a New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleInputChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Price</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Category</label>
          <input
            type="text"
            name="category"
            value={productData.category}
            onChange={handleInputChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Upload Images</label>
          <input
            type="file"
            name="images"
            onChange={handleFileChange}
            multiple
            className="w-full border rounded p-2"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded shadow"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;


  
