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
    --primary-color: #2D2727;
    --secondary-color: #D7C235;
    --tertiary-color: #1C418C;
    --alt-color: #A60321;
}

body {
    font-family: 'Starjedi', sans-serif;
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;
