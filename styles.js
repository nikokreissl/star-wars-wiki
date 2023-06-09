import { createGlobalStyle } from "styled-components";
import Starjedi from "./fonts/Starjedi.ttf";

export default createGlobalStyle`
@font-face {
    font-family: "Starjedi";
    src: url(${Starjedi});  
}

* {
  margin: 0;
  box-sizing: border-box;
}

:root {
    --star-wars-yellow: #ffe81f;
}

body {
    font-family: 'Starjedi', sans-serif;
    background-image: url("/images/stars-background.jpg");
    background-repeat: repeat;
    background-size: 100vw 100vh;
    color: white;
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

p {
  color: white;
}

button {
  font-family: 'Starjedi', sans-serif;
}
`;
