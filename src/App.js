import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Blush",
  "😄": "Smiling",
  "💀": "Dead",
  "🧑‍✈️": "Pilot",
  "😁": "Grin",
  "🤡 ": "Clown Face",
  "😆": "Laughing",
  "🤣": "Rolling on the floor laughing",
  "😋": "Yum",
  "😔": "Sad",
  "😑": "Expressionless",
  "😏": "Smirk",
  "❤️": "Love",
  "🧑‍🚀": "Asronaut",
  "👷": "Construction Worker",
  "👑": "Crown"
};

var emojiDisplay = {
  "😊": "Blush",
  "😄": "Smiling",
  "💀": "Dead",
  "🧑‍✈️": "Pilot",
  "😁": "Grin",
  "🤡 ": "Clown Face"
};

var emojisWeKnow = Object.keys(emojiDisplay);

var inputEmoji;

export default function App() {
  const [meaning, setMeaning] = useState("");

  //While Inputing the Emoji
  function emojiChangeHandler(event) {
    inputEmoji = event.target.value;
    console.log(inputEmoji);

    var meaning = emojiDictionary[inputEmoji];

    if (meaning === undefined) {
      meaning = "We dont have this emoji in our database!";
    }

    setMeaning(meaning);
  }

  //For Clicking the emoji on display
  function emojiClickHandler(emoji) {
    var meaning = emojiDisplay[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside Outt !!</h1>
      <input
        placeholder="Search your emoji"
        onChange={emojiChangeHandler}
      ></input>
      <h2>{inputEmoji}</h2>
      <h3>{meaning}</h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => {
              emojiClickHandler(emoji);
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
