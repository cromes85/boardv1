import React from "react";

const Outils = () => {
  return (
    <div>
      <ul class="grid grid-low gap-3 mx-3 py-3">
        <li>
          <a
            href="https://chat.openai.com/chat"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img
              class="w-10 h-10 rounded-full hover:ring-3 ring-blue-500 shadow-2xl"
              src="./ia.jpg"
              alt="Rounded avatar"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            <img
            class="w-10 h-10 rounded-full hover:ring-3 ring-blue-500 shadow-2xl"
            src="./google.jpg"
            
          />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Outils;
