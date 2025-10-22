import { useState, useEffect } from "react";
import * as React from 'react';



const Home = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const counter = count + 1;
      setCount(counter);
    }, 500);
  });

  return  (
  
  //<Button> TESTE</Button>
  <>
  <h1> Welcome !!</h1>
  <h1>I have rendered {count} times!</h1>
  </>
  );
  

};
  
  export default Home;