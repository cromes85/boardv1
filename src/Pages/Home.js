import React from "react";
import Connexion from "../Components/Barres/Connexion";
import Logo from "../Components/accessoires/Logo";
import NavigationPages from "../Components/Barres/NavigationPages";
import ZoneB from "../Components/ZoneB";

const Home = () => {
  return (
    <div class="">
      <div class="h-48 flex items-stretch justify-around border">
        <div class="self-center">
          <Connexion />
        </div>
        <div class="self-center">
          <Logo />
        </div>
        <div class="self-center">
          <NavigationPages />
        </div>
      </div>
      <div>
        <ZoneB />
      </div>
    </div>
  );
};

export default Home;
