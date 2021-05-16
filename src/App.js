import './App.css';
import { useState } from 'react';
import ImageComponent from './imageComponent';

function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [img, setImg] = useState('afraid');
  const imgUrl = `https://api.memegen.link/images/${img}/${topText}/${bottomText}.png`;
  const options = {};
  const [realUrl, SetRealUrl] = useState();

  const handleOnChangeTop = (event) => {
    setTopText(event.currentTarget.value);
  };
  const handleOnChangeBottom = (event) => {
    setBottomText(event.currentTarget.value);
  };
  const handleOnChangeImg = (event) => {
    setImg(event.currentTarget.value);
  };

  const displayData = () => {
    SetRealUrl(imgUrl);
  };

  const dwnl = () => {
    fetch(imgUrl, options)
      .then((res) => res.blob())
      .then((blob) => {
        downloadBlob(blob, 'meme.png');
      });

    function downloadBlob(blob, name = 'meme.png') {
      // Convert your blob into a Blob URL (a special url that points to an object in the browser's memory)
      const blobUrl = URL.createObjectURL(blob);

      // Create a link element
      const link = document.createElement('a');

      // Set link's href to point to the Blob URL
      link.href = blobUrl;
      link.download = name;

      // Append link to the body
      document.body.appendChild(link);

      // Dispatch click event on the link
      // This is necessary as link.click() does not work on the latest firefox
      link.dispatchEvent(
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window,
        }),
      );
      // Remove link from body
      document.body.removeChild(link);
    }
  };

  return (
    <div className="content">
      <div className="column">
        <ImageComponent realUrl={realUrl} />
      </div>
      <div className="column">
        <div className="card">
          <div className="form">
            <input
              placeholder="Type top text"
              value={topText}
              type="text"
              onChange={handleOnChangeTop}
            ></input>
            <input
              placeholder="Type bottom text"
              value={bottomText}
              type="text"
              onChange={handleOnChangeBottom}
            ></input>
            <form>
              <select onChange={handleOnChangeImg}>
                <option selected="true" value="Background image" disabled>
                  Select image
                </option>
                <option value="afraid">Afraid</option>
                <option value="ackbar">Ackbar</option>
                <option value="aag">Aag</option>
                <option value="buzz">Buzz</option>
              </select>
            </form>
            <button onClick={displayData}>Generate</button>
            <button onClick={dwnl}>Download</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
