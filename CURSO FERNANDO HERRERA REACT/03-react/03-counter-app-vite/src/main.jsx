import React from "react";
import ReactDOM from "react-dom/client";
import App from "./HelloWorldApp";
import FirstApp from "./FirstApp";
import "./index.css";
import CounterApp from "./CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
     {/* { <FirstApp
        title={"Hola soy goku"} 
      subtitle={"subtitulo pasado por props"}
      number={10} 
    />  }  */}
   <CounterApp value={20}/> 


  </React.StrictMode>
);
