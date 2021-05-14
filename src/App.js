import './App.css';
import { useState } from 'react';

function App() {
  const [topText, setTopText] = useState('memes');
  const [bottomText, setBottomText] = useState('memes everywhere');
  const [img, setImg] = useState('buzz');
  const imgUrl = `https://api.memegen.link/images/${img}/${topText}/${bottomText}.png`;

  const handleOnChangeTop = (event) => {
    setTopText(event.currentTarget.value);
  };
  const handleOnChangeBottom = (event) => {
    setBottomText(event.currentTarget.value);
  };
  const handleOnChangeImg = (event) => {
    setImg(event.currentTarget.value);
  };

  return (
    <div className="content">
      <input value={topText} type="text" onChange={handleOnChangeTop}></input>
      <input
        value={bottomText}
        type="text"
        onChange={handleOnChangeBottom}
      ></input>
      <input value={img} type="text" onChange={handleOnChangeImg}></input>
      <div>
        <a href={imgUrl} download="jhg">
          <img src={imgUrl} alt={img} />
        </a>
      </div>
    </div>
  );
}
export default App;
