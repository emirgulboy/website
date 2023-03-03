import React from 'react';
import ImageHoverSlow from '../components/imageholder';
import Pic1 from '../assets/images/thumbnail.webp';
import ass from '../assets/images/logo_final.png'

console.log(Pic1)
function Home() {
  return (
    <><div>
      <h1> Home </h1>
      <image src={ass}></image>
      <ImageHoverSlow
      defaultImgPath={Pic1} />
      <img
        src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
        alt="car"
      />
    </div>
    </>
              
  );
}

export default Home;
