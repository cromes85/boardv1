import React, { useState, useEffect } from "react";

function JokeScroller() {
  const [jokes, setJokes] = useState([]);
  const [currentJoke, setCurrentJoke] = useState(0);

  useEffect(() => {
    fetch("./blague.json")
      .then(res => res.json())
      .then(data => setJokes(data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJoke(currentJoke => (currentJoke + 1) % jokes.length);
    }, 86400000); // 86400000ms = 24h
    return () => clearInterval(interval);
  }, [jokes, currentJoke]);

  return (
    <div  class="inline-block align-middle text-center">
      <p class="text-xl">{jokes[currentJoke]?.joke}</p>
      <p class="text-xl">{jokes[currentJoke]?.answer}</p>
    </div>
  );
}

export default JokeScroller;
