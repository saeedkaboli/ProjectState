//The Components

import { useState } from "react";

function App() {
  const [state, setState] = useState({
    Text: "",
  });

  //The handler
  const handlerText = ({ target }) => {
    setState({ Text: target.value });
  };
  return (
    <div className="w-full h-[100vh] flex justify-center items-center" id="App">
      <div className="container flex flex-col justify-center items-center h-full">
        <div id="Title-Level">
          <h1 className="py-20 text-white text-4xl font-bold">
            The First Level
          </h1>
        </div>
        <div
          className="w-full md:w-1/3 h-52 bg-gray-800 rounded-lg shadow-xl flex flex-col justify-center items-center"
          id="Box"
        >
          {/* The Title */}
          <div className="text-white py-5 text-2xl md:text-3xl" id="Title">
            State
          </div>
          {/* The Input*/}
          <input
            type="text"
            placeholder="Text"
            className="w-7/12 py-1 px-2 rounded-md focus:outline-blue-900"
            onChange={handlerText}
            minLength={3}
            maxLength={10}
          />
          {/* The Rsult */}
          <p className="text-white py-5">{`The Result:  ${state.Text} `}</p>
        </div>
      </div>
    </div>
  );
}
export default App;
