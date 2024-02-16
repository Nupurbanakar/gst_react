import React, { useState } from "react";

interface InputBoxProps {
  setInputValue: (value: string) => void;
  setInitialPrice: (price: number) => void;
}

const InputBox: React.FC<InputBoxProps> = ({setInputValue,setInitialPrice,}) => {
  const [itemName, setItemName] = useState<string>("");
  const [itemPrice, setItemPrice] = useState<number>(0);

  return (
    <>
      <div className="inputbox">
        <h3>Name</h3>
        <input
          type="text"
          value={itemName}
          onChange={(event) => {setItemName(event.target.value); setInputValue(event.target.value);}}
        />
      </div>
      <div>
        <h3>Price</h3>
        <input
          type="number"
          value={itemPrice.toString()}
          onChange={(event) => {const price = parseFloat(event.target.value);setItemPrice(price);setInitialPrice(price);}}
        />
      </div>
    </>
  );
};

export default InputBox;
