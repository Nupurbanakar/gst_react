import { Category } from "./Category";

export default function Dropdown({ categories, selectedCategory, setSelectedCategory, }:
  {
    categories: Category[];
    selectedCategory: string;
    setSelectedCategory: (value: string) => void;
  })
    
{

  return (
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}>
      {categories.map((item, index) => (<option key={index}>{item.name}</option>))}
    </select>
  );
}
