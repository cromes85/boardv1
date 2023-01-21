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
        <div className="self-center">
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

// Ajout de la classe "container mx-auto" pour que la page soit centrée et responsive,
et remplacement des classes "self-center" et "justify-around" par les classes de tailwind correspondantes "self-center" et "justify-around".

// import React from "react";
// import Connexion from "../Components/Barres/Connexion";
// import Logo from "../Components/accessoires/Logo";
// import NavigationPages from "../Components/Barres/NavigationPages";
// import ZoneB from "../Components/ZoneB";
// import JokeScroller from "../Components/accessoires/JokeScroller";

// const Home = () => {
//   return (
//     <div >
//       <div class=" flex items-stretch justify-around ">
//         <div class="self-center ">
//           <Connexion />
//         </div>
//         <div class="self-center">
//           <Logo />
//         </div>
//         <div class="self-center">
//           <NavigationPages />
//         </div>
//       </div>
//       <div class=" mt-4 mb-4 flex justify-center ">
//         <div><JokeScroller/></div>

//       </div>
//       <div>
//         <ZoneB />
//       </div>
//     </div>
//   );
// };

// export default Home;
