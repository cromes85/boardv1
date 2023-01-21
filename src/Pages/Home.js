import React from "react";
import Connexion from "../Components/Barres/Connexion";
import Logo from "../Components/accessoires/Logo";
import NavigationPages from "../Components/Barres/NavigationPages";
import ZoneB from "../Components/ZoneB";
import JokeScroller from "../Components/accessoires/JokeScroller";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className=" flex items-stretch justify-around">
        <div className="self-center">
          <Connexion />
        </div>
        <div className="self-center z-0">
          <Logo />
        </div>
        <div className="self-center">
          <NavigationPages />
        </div>
      </div>
      <div className="mt-4 mb-4 flex justify-center">
        <div>
          <JokeScroller />
        </div>
      </div>
      <div>
        <ZoneB />
      </div>
    </div>
  );
};

export default Home;

