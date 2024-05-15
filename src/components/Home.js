import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <img src={`${process.env.PUBLIC_URL}/img/img4/buster166.webp`} alt="Buster" className="buster-image" />
      <h1>In Loving Memory of Buster</h1>
      <h2>R.I.P Little Man</h2>
      <p>Buster was born in September 2003. I adopted him from my niece in 2006. Buster was my best friend for almost 16 years, but sadly I had to do the worst thing any pet owner will have to do, and on the 15th of January 2022, I had to let him go.</p>
      <p>"In loving memory of our dear Buster, who brought endless joy and happiness into our lives.</p>
      <p>Buster was more than just a pet; he was a loyal companion, a source of comfort, and a true member of our family. We will forever cherish the special moments we shared with him, from playful days in the park to quiet nights by the fireplace.</p>
      <p>Buster's boundless energy, unwavering loyalty, and gentle nature touched the hearts of everyone he met.</p>
      <p>His wagging tail and affectionate kisses brightened even the darkest days.</p>
      <p>Buster's memory will forever live on in our hearts. As we say goodbye to our beloved friend, we take solace in knowing that he is now resting peacefully.</p>
      <p>Buster, you will always be loved and missed even more.</p>
      <p>R.I.P. Little Man. Until we meet again, dear Buster."</p>
    </div>
  );
}

export default Home;
