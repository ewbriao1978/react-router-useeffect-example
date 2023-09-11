import { useState, useEffect } from "react";

const Home = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const counter = count + 1;
      setCount(counter);
    }, 1000);
  });

  return  <h1>I have rendered {count} times!</h1>;
  

};
  
  export default Home;