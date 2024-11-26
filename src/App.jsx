import React, { useState, useEffect } from "react";
import "./App.css";
import PopUp from "./components/PopUp/PopUp";

function App() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("gray");
  const [popupMessage, setPopupMessage] = useState("");
  const [hasReachedThousand, setHasReachedThousand] = useState(false);

  const increments = [1, 10, 100];

  const changeCount = (isIncrement) => {
    setCount((prevCount) => {
      let index = 0;

      if (prevCount >= 10 && prevCount < 100) {
        index = 1;
      } else if (prevCount >= 100) {
        index = 2;
      }

      const newCount =
        prevCount + (isIncrement ? increments[index] : -increments[index]);

      if (newCount >= 1000) {
        setHasReachedThousand(true);
      }

      return Math.max(0, newCount);
    });
  };

  useEffect(() => {
    if ([10, 100, 1000].includes(count)) {
      setBgColor(randomColor());
      setPopupMessage(`وصلت إلى ${count}`);

      const timer = setTimeout(() => setPopupMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  useEffect(() => {
    setPopupMessage("أهلاً بك في التطبيق!");

    const timer = setTimeout(() => setPopupMessage(""), 5000);
    return () => clearTimeout(timer);
  }, []);

  const randomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <div className="app">
      <div className="container" style={{ backgroundColor: bgColor }}>
        <h1 className="counter">العداد: {count}</h1>

        <button className="button1" onClick={() => changeCount(true)}>
          زيادة
        </button>

        {hasReachedThousand && (
          <button className="button2" onClick={() => changeCount(false)}>
            إنقاص
          </button>
        )}

        {popupMessage && <PopUp event={popupMessage} />}
      </div>
    </div>
  );
}

export default App;
