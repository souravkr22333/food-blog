import React from "react";
import Herosection from "./homepage/herosection"; 
import Popularchoice from "./homepage/popularchoice";
import Treanding from "./homepage/treanding";
import Signup from "./homepage/signup";
import AdvancedStarRating from "../components/starrating";

const homepage = () => {
  return (
    <>
      <header className="pt-5">
        <div className="container">

          {/* hero section */}
          
          < Herosection />
          {/* popular choice section */}
          <Popularchoice />
  
          {/* tranding recipes section */}

          <Treanding />
          {/* star rating demo */}
          <AdvancedStarRating />


          

          
             
        </div>
      </header>
      <Signup />
    </>
  );
};

export default homepage;
