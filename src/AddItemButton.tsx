import React, { useState } from "react";
import axios from "axios";

interface AddItemButtonProps {
  selectedCategory: string;
  itemName: string;
  initialPrice: number;
}

const AddItemButton: React.FC<AddItemButtonProps> = ({selectedCategory,itemName,initialPrice}) => {
  const [addItemLoading, setAddItemLoading] = useState<boolean>(false);
  const [addItemError, setAddItemError] = useState<string | null>(null);

  const addItem = async () => {
    try {
      setAddItemLoading(true);
      const response = await axios.post("http://localhost:8080/items", {
        category_id: selectedCategory,
        name: itemName,
        price: initialPrice
      });
      console.log("Item added!:", response.data);
    } catch (error) {
      console.error("Error adding item:", error);
      setAddItemError("Please try again!");
    } finally {
      setAddItemLoading(false);
    }
  };

  return (
    <div>
      <button disabled={addItemLoading} onClick={addItem}>
        {addItemLoading ? "Adding Item..." : "Add Item"}
      </button>
      {addItemError && <p className="error-message">{addItemError}</p>}
    </div>
  );
};

export default AddItemButton;
