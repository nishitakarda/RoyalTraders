import React, { useState } from "react";
import { assets } from "../assets/admin_assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({token}) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [image5, setImage5] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Nuts & Dry Fruits");
  const [subCategory, setSubCategory] = useState("Almonds");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try{

        const formData = new FormData()

        formData.append("name", name)
        formData.append("description", description)
        formData.append("price", price)
        formData.append("category", category)
        formData.append("subCategory", subCategory)
        formData.append("bestseller", bestseller)
        formData.append("sizes", JSON.stringify(sizes))

        image1 && formData.append("image1", image1)
        image2 && formData.append("image2", image2)
        image3 && formData.append("image3", image3)
        image4 && formData.append("image4", image4)
        image5 && formData.append("image5", image5)

        const response = await axios.post(backendUrl + "/api/product/add", formData, {headers:{token}})
        
        if(response.data.success){
            toast.success(response.data.message)
            setName('')
            setDescription('')
            setImage1(false)
            setImage2(false)
            setImage3(false)
            setImage4(false)
            setImage5(false)
            setPrice('')
        }else{
            toast.error(response.data.message)
        }

    } catch(error){
        console.log(error);
        toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
      {/* Upload Images */}
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img className="w-20" src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
            <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden />
          </label>
          <label htmlFor="image2">
            <img className="w-20" src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
            <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden />
          </label>
          <label htmlFor="image3">
            <img className="w-20" src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
            <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden />
          </label>
          <label htmlFor="image4">
            <img className="w-20" src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
            <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden />
          </label>
          <label htmlFor="image5">
            <img className="w-20" src={!image5 ? assets.upload_area : URL.createObjectURL(image5)} alt="" />
            <input onChange={(e)=>setImage5(e.target.files[0])} type="file" id="image5" hidden />
          </label>
        </div>
      </div>

      {/* Product Name */}
      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
          onChange={(e)=>setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
        />
      </div>

      {/* Product Description */}
      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea
          onChange={(e)=>setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Write content here"
        ></textarea>
      </div>

      {/* Category + Sub Category + Price (one line) */}
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        {/* Category */}
        <div>
          <p className="mb-2">Product Category</p>
          <select onChange={(e)=>setCategory(e.target.value)}
            className="w-full px-3 py-2">
            <option value="Nuts & Dry Fruits">Nuts & Dry Fruits</option>
            <option value="Dates">Dates</option>
            <option value="Exclusives">Exclusives</option>
            <option value="Seeds">Seeds</option>
            <option value="Berries">Berries</option>
          </select>
        </div>

        {/* Sub Category */}
        <div>
          <p className="mb-2">Sub Category</p>
          <select onChange={(e)=>setSubCategory(e.target.value)} className="w-full px-3 py-2">
            <option value="">None</option>
            <option value="Almonds">Almonds</option>
            <option value="Cashews">Cashews</option>
            <option value="Pistachios">Pistachios</option>
            <option value="Walnuts">Walnuts</option>
            <option value="Raisins">Raisins</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <p className="mb-2">Product Price</p>
          <input onChange={(e)=>setPrice(e.target.value)}
            value={price}
            className="w-full px-3 py-2 sm:w-[120px]"
            type="number"
            placeholder="250"
          />
        </div>
      </div>

      {/* Quantity Selection */}
      <div>
      <p className="mb-2">Product Quantity</p>
      <div className="flex gap-3 flex-wrap">
        <div
          onClick={() =>
            setSizes((prev) =>
              prev.includes("100g")
                ? prev.filter((item) => item !== "100g")
                : [...prev, "100g"]
            )
          }
        >
        <p className={`${sizes.includes("100g") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>100g</p>
      </div>

      <div
        onClick={() =>
          setSizes((prev) =>
            prev.includes("250g")
              ? prev.filter((item) => item !== "250g")
              : [...prev, "250g"]
          )
        }
      >
        <p className={`${sizes.includes("250g") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>250g</p>
      </div>

      <div
        onClick={() =>
          setSizes((prev) =>
            prev.includes("500g")
              ? prev.filter((item) => item !== "500g")
              : [...prev, "500g"]
          )
        }
      >
        <p className={`${sizes.includes("500g") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>500g</p>
      </div>

      <div
        onClick={() =>
          setSizes((prev) =>
            prev.includes("1kg")
              ? prev.filter((item) => item !== "1kg")
              : [...prev, "1kg"]
          )
        }
      >
        <p className={`${sizes.includes("1kg") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>1kg</p>
      </div>

      <div
        onClick={() =>
          setSizes((prev) =>
            prev.includes("2kg")
          ? prev.filter((item) => item !== "2kg")
          : [...prev, "2kg"]
        )
       }
      >
        <p className={`${sizes.includes("2kg") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>2kg</p>
      </div>

      <div
          onClick={() =>
          setSizes((prev) =>
              prev.includes("5kg")
              ? prev.filter((item) => item !== "5kg")
              : [...prev, "5kg"]
          )
          }
      >
          <p className={`${sizes.includes("5kg") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>5kg</p>
      </div>
      </div>

      </div>

      {/* Bestseller */}
      <div className="flex gap-2 mt-2 ">
        <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id="bestseller" />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to Bestseller
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-28 py-3 mt-4 bg-black text-white cursor-pointer"
      >
        ADD
      </button>
    </form>
  );
};

export default Add;
