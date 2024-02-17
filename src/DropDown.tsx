import { Category } from "./Category";

interface DropdownProps {
  categories: Category[];
  selectedCategory: number;
  setSelectedCategory: (value: number) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategoryId = parseInt(e.target.value);  
    setSelectedCategory(selectedCategoryId);  
  };

  return (
    <select
      value={selectedCategory}
      onChange={handleSelectChange} 
    >
      {categories.map((category) => (
        <option key={category.name} value={category.category_id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};
export default Dropdown;
