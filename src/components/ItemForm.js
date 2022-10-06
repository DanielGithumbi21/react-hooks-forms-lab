import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const initialState = { id: uuid(), name: "", category: "Produce" };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onItemFormSubmit(formData);
  };
  return (
    <form className="NewItem " onSubmit={onSubmit}>
      <label>
        Name:
        <input onChange={handleChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
