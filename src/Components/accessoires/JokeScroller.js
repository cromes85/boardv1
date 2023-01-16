import React, { useState, useEffect } from "react";

function JokeScroller() {
  const [jokes, setJokes] = useState([]);
  const [currentJoke, setCurrentJoke] = useState(0);

  useEffect(() => {
    fetch("./blague.json")
      .then((res) => res.json())
      .then((data) => setJokes(shuffleArray(data)))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJoke((currentJoke) => (currentJoke + 1) % jokes.length);
    }, 10000); // 86400000ms = 24h
    return () => clearInterval(interval);
  }, [jokes, currentJoke]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div class="inline-block align-middle text-center">
      <p class="text-xl">{jokes[currentJoke]?.joke}  {jokes[currentJoke]?.answer}</p>
      <p class="text-xl"></p>
    </div>
  );
}

export default JokeScroller;
