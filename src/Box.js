function Box({ bgColor, width, height }) {
  const myStyles = {
    backgroundColor: bgColor,
    height: `${height}px`,
    width: `${width}px`,
  };
  return <div style={myStyles}></div>;
}
export default Box;
