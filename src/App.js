import { useSelector } from "react-redux";
import "./App.css";
import Likes from "./components/Likes/Likes";
import Title from "./components/Title/Title";
import Comments from "./components/Comments/Comments";
import Spin from "./components/Spin/Spin";

function App() {
  const error = useSelector((state) => {
    return state.loaderReducer.error;
  });
  console.log("error: ", error);
  return (
    <div className="App">
      <div className="wrap">
        <Spin />
        <div className="card">
          {error && <div className="error-message">{error}</div>}
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing" />
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
