import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

/** Create a list of boxes
 * Props: none
 * State: array of [{width, height, bgColor ...}]
 * Boxlist ->
 *  NewBoxForm
 *  Box
 */
function BoxList() {
  const [boxes, setBoxes] = useState([]);

  /** Receives form data to add a new box with a uuid */
  function addBox(formData) {
    const newBox = { ...formData, id: uuid() };
    setBoxes((oldBoxes) => [...oldBoxes, newBox]);
  }

  /** Receives a target id for a box to remove */
  function removeBox(id) {
    setBoxes((oldBoxes) => oldBoxes.filter((box) => box.id !== id));
  }

  return (
    <>
      <div>
        <NewBoxForm addBox={addBox} />
      </div>
      <div>
        {boxes.map((box) => (
          <Box
            key={box.id}
            id={box.id}
            bgColor={box.backgroundColor}
            width={box.width}
            height={box.height}
            removeBox={removeBox}
          />
        ))}
      </div>
    </>
  );
}

export default BoxList;
