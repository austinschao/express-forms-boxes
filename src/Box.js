/** Create a box containing a background color
 * Props: bgColor, width, height, removeBox, id
 * State: none
 */
function Box({ bgColor, width, height, removeBox, id }) {
  const myStyles = {
    backgroundColor: bgColor,
    height: `${height}px`,
    width: `${width}px`,
  };
  return (
    <div>
      <div style={myStyles} id={id}></div>
      <button className="remove-box" onClick={() => removeBox(id)}>
        X
      </button>
    </div>
  );
}
export default Box;
