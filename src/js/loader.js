import { body } from "./selectors";
import loaderEllipseSrc from "../images/brand/loader/Ellipse-1.png";
import loaderLogoSrc from "../images/brand/mcd-store.svg";


const loaderElement = document.createElement("div");
loaderElement.setAttribute("id", "loader");

loaderElement.innerHTML = `
<img
  id="ellipse"
  alt="Ellipse"
/>
<img id="logo" src="src/images/brand/mcd-store.svg" alt="Loader logo" />
`;

function loader() {
  document.documentElement.onload = function () {
    document.getElementById("loader").style.display = "block";
  };
  
  window.onload = function () {
    document.getElementById("loader").style.display = "none";
  };
};

loader();
body.prepend(loaderElement);

const loaderEllipse = document.getElementById("ellipse");
const loaderLogo = document.getElementById("logo");
loaderEllipse.src = loaderEllipseSrc;
loaderLogo.src = loaderLogoSrc;

export { loader, loaderElement};

