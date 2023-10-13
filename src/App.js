import { useState } from "react";
import "./App.css";
import List from "./components/List";
const colorList = [
  {
    id: 1,
    color: "green",
  },
  {
    id: 2,
    color: "orange",
  },
  {
    id: 3,
    color: "gray",
  },
  {
    id: 4,
    color: "blue",
  },
  {
    id: 5,
    color: "lightblue",
  },
  {
    id: 6,
    color: "yellow",
  },
  {
    id: 7,
    color: "teal",
  },
  {
    id: 8,
    color: "purple",
  },
  {
    id: 9,
    color: "black",
  },
];

function App() {
  const [isList, setisList] = useState(false);
  const [bcolor, setbcolor] = useState("black");
  const change = (color) => {
    setbcolor(color);
    setisList(false);
  };
  return (
    <div className="grid place-items-center h-screen">
      <div className="flex flex-col ">
        <div>
          {isList ? (
            <div className="flex gap-1 justify-center">
              {colorList.map((i) => {
                return <List data={i} handleChange={change} />;
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => {
              setisList(!isList);
            }}
            className="w-fit px-2 py-1 mt-5 text-white"
            style={{ backgroundColor: `${bcolor}` }}
          >
            Pick a color
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
