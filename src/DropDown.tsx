import { Category } from "./Category";

export default function Dropdown({
  categories,
  selectedCategory,
  setSelectedCategory,
}: {
  categories: Category[];
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}) {
  return (
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      {categories.map((category) => (
        <option key={category.name} value={category.category_id}>
          {category.name}
        </option>
      ))}
    </select>
  );
}
