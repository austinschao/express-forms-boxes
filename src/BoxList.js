import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function addBox(formData) {
    const newBox = { ...formData };
    setBoxes((oldBoxes) => [...oldBoxes, newBox]);
  }
  console.log(boxes, "boxes");
  return (
    <>
      <div>
        <NewBoxForm addBox={addBox} />
      </div>
      <div>
        {boxes.map((box) => (
          <Box
            bgColor={box.backgroundColor}
            width={box.width}
            height={box.height}
          />
        ))}
      </div>
    </>
  );
}

export default BoxList;
