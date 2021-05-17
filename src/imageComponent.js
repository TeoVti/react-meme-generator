function ImageComponent(props) {
  return (
    <div className="img">
      <img src={props.realUrl} alt="" />
    </div>
  );
}
export default ImageComponent;
