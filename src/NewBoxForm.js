import React, { useState } from "react";

/** Create a form for adding a box
 * Props: function addBox => adds a new box
 * State: object of form data
 */
function NewBoxForm({ addBox }) {
  const initialState = { height: "", width: "", backgroundColor: "" };
  const [formData, setFormData] = useState(initialState);

  /** Updates the state with new changes */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  /** Sets the state for a new box and clears the form */
  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
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
