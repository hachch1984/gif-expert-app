 
import ReactDOM from "react-dom";
import GifExpertApp from "./components/gifExpertApp";
import './index.css'

const Root = document.getElementById("root");

const Index = () => {
  return (
    <>
      <GifExpertApp/>
    </>
  );
};

ReactDOM.render(<Index />, Root);
