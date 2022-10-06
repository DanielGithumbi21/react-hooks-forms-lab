import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [data, setData] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    handleSearchFilter();
  };

  const submitForm = (formData) => {
    setData([...data, formData]);
  };

  const handleSearchFilter = () => {
    const filteredData = data.filter((item) => {
      const name = item.name.toLowerCase();
      const newSearch = search.toLowerCase();

      return name.includes(newSearch);
    });
    setData(filteredData);
  };

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={submitForm} />
      <Filter
        onSearchChange={handleSearchChange}
        search={search}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {data.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
