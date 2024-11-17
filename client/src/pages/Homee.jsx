import Card1 from "../components/Card1";
import Footer from "../components/Footer";
import HomeStore from "../components/HomeStore";
import React,{useEffect} from "react";
import Card from "../components/Card";
import BlockService from "../components/BlockService";




function Homee() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="App">
      <div>
        <Card/>
        <Card1/>
         <HomeStore/>
         <BlockService/>
        <Footer/>
       </div>
    </div>
  );
}

export default Homee;
