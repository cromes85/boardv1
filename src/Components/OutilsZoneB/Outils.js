import React from "react";

const Outils = () => {
  return (
    <div>
      <ul class="grid grid-low gap-3">
        <li>
          <a href="https://chat.openai.com/chat">
            {" "}
            <img
              class="w-10 h-10 rounded-full"
              src="./ia.jpg"
              alt="Rounded avatar"
              target="_blank"
              rel="noopener noreferrer"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Outils;
