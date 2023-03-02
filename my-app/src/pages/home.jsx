import React from 'react';
import ImageHoverSlow from '../components/imageholder';
import Pic1 from '../assets/images/14h3t.png';
import ass from '../assets/images/logo_final.png'
function Home() {
  require('../assets/images/xxx.jpg');
  require('../assets/images/14h3t.png')
  return (
    <><div className="sec__one">
      <h1> Home </h1>
      <image src="../assets/images/xxx.jpg"></image>
      
    </div>
    <ImageHoverSlow
      defaultImgPath={Pic1.toString()} />
    </>
              
  );
}

export default Home;
