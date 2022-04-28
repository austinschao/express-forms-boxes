import React, { useState } from "react";

function NewBoxForm({ addBox }) {
  const initialState = { height: "", width: "", backgroundColor: "" };
  const [formData, setForm] = useState(initialState);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setForm(initialState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height">Height</label>
      <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      ></input>
      <label htmlFor="width">width</label>
      <input
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      ></input>
      <label htmlFor="backgroundColor">backgroundColor</label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      ></input>
      <button>Add a new box!</button>
    </form>
  );
}

export default NewBoxForm;
