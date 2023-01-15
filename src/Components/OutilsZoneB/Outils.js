import React from "react";
import { NavLink } from "react-router-dom";

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
              class="w-10 h-10 rounded-full"
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
            class="w-10 h-10 rounded-full "
            src="./google.jpg"
            
          />
          </a>
        </li>
        <li>
          
            <NavLink to="/Greetings">
            <img
            class="w-10 h-10 rounded-full "
            src="./mem.png"
            
          />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Outils;
