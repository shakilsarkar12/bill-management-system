import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const CategoriesBtn = () => {
      const navigate = useNavigate();
  const [catagories, setCatagories] = useState();

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then(data=> setCatagories(data));
  }, []);
    
      const handleChange = (e) => {
        const selectedId = e.target.value;
        navigate(`/bills/${selectedId}`);
      };
  return (
    <div className="w-11/12 mx-auto my-12 flex flex-col sm:flex-row  items-center justify-self-start gap-4">
      <h2 className="text-2xl font-medium text-gray-700">
        Select Category
      </h2>
      <select
        onChange={handleChange}
        defaultValue=""
        className="border border-accent focus:outline-accent  mx-4 w-full sm:w-sm md:w-md px-4 py-2 rounded-sm"
      >
        {catagories?.map((category) => (
          <option className="" key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoriesBtn;
