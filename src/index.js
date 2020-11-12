import "./scss/style.scss";
import rexTextField from "./modules/rexTextField";
import rexTextArea from "./modules/rexTextArea";
import rexSelect from "./modules/rexSelect";
import rexStepper from "./modules/rexStepper";
import rexSwitch from "./modules/rexSwitch";

/* On Load set component actions */
document.addEventListener("DOMContentLoaded", function (event) {
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }
  rexTextField();
  rexTextArea();
  rexSelect();
  rexStepper();
  rexSwitch();
});