import React, { useState, useEffect } from "react";

function JokeScroller() {
  const [jokes, setJokes] = useState([]);
  const [currentJoke, setCurrentJoke] = useState(0);

  useEffect(() => {
    fetch("/public/blague.json")
      .then(res => res.json())
      .then(data => setJokes(data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJoke(currentJoke => (currentJoke + 1) % jokes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [jokes, currentJoke]);

  return (
    <div>
      <p>{jokes[currentJoke]?.joke}</p>
      <p>{jokes[currentJoke]?.answer}</p>
    </div>
  );
}

export default JokeScroller;
