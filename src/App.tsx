import React, { useState, useEffect } from "react";
import Dropdown from "./DropDown";
import InputBox from "./InputBox";
import AddItemButton from "./AddItemButton";
import axios from "axios";
import { Category } from "./Category";

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [itemName, setItemName] = useState<string>("");
  const [initialPrice, setInitialPrice] = useState<number>(0);

  useEffect(() => {
    fetchCategories();
    document.title = "Admin";
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/categories");
      if (!response.status) {
        throw new Error("Failed!");
      }
      const data = await response.data;
      setCategories(data);
      console.log(data)
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="container">
        <h2>Items</h2>
        <div className="dropdown">
          <Dropdown
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className="inputbox">
          <InputBox
            setInputValue={setItemName}
            setInitialPrice={setInitialPrice}
          />
        </div>
        <div className="addItemButton">
          <AddItemButton
            selectedCategory={selectedCategory}
            itemName={itemName}
            initialPrice={initialPrice}
          />
        </div>
      </div>
    </>
  );
};

export default App;
