import React, {useEffect} from "react";
import "./App.css";

import {SkynetClient} from "skynet-js";
const skynetClient = new SkynetClient("https://skynetpro.net/");

function App() {
  useEffect(() => {
    skynetClient.loadMySky("localhost").then(() => {
      console.log("loaded mysky");
    });
  }, []);

  return <div className="App">hello</div>;
}

export default App;
