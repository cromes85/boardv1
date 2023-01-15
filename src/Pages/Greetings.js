import React, { useState } from "react";

function Greetings() {
  const [index, setIndex] = useState(0);
  const languages = [
    "français",
    "anglais",
    "espagnol",
    "allemand",
    "italien",
    "portugais",
    "néerlandais",
    "russe",
    "chinois",
    "japonais",
  ];
  const greetings = [
    "bonjour",
    "hello",
    "hola",
    "hallo",
    "ciao",
    "olá",
    "hallo",
    "привет",
    "你好",
    "こんにちは",
  ];

  setTimeout(() => {
    setIndex((index + 1) % 10);
  }, 150);

  return (
    <div class="flex items-center justify-center h-screen">
      <div class="text-center text-8xl">
        {languages[index]}: {greetings[index]}
      </div>
    </div>
  );
}

export default Greetings;
