import React from 'react';
import ImageHover from '../components/imageholder';
import Pic1 from "../assets/images/thumbnail.webp";

console.log(Pic1)
function Home() {
  return (
    <><div>
      <h1> Home </h1>
      <ImageHover imgSrc={Pic1} text1={"a"} text2={"b"} />
      <ImageHover imgSrc={Pic1} text1={"a"} text2={"b"} />

    </div>
    </>
              
  );
}

export default Home;
