export default function rexStepper() {
   /* Initial setting */
  var maxValue = 100;
  var minValue = 0;
  var initialCounter = 0;

  /* Plus Button element */
  var rexStepperPlusButtonList = document.querySelectorAll(
    "button[class^='rex-icon-button plus']"
  );

  /* Minus Button element */
  var rexStepperMinusButtonList = document.querySelectorAll(
    "button[class^='rex-icon-button minus']"
  );

  /* Increase */
  var onIncrease = function onIncrease(e) {
    var parentNode = e.target.parentNode;
    var counterNode = parentNode.parentNode.querySelector(".rex-stepper-counter");
    var counter = initialCounter;
    counter = counterNode.value;
    if (counter < maxValue) {
      counter++;
      counterNode.value = counter;
    }
  };

  /* Decrease */
  var onDecrease = function onDecrease(e) {
    var parentNode = e.target.parentNode;
    var counterNode = parentNode.parentNode.querySelector(
      ".rex-stepper-counter"
    );
    var counter = initialCounter;
    counter = counterNode.value;
    if (counter > minValue) {
      counter--;
      counterNode.value = counter;
    }
  };


  rexStepperPlusButtonList.forEach(function (rexStepperPlusButton) {
    rexStepperPlusButton.onclick = onIncrease;
  });

  rexStepperMinusButtonList.forEach(function (rexStepperMinusButton) {
    rexStepperMinusButton.onclick = onDecrease;
  });
}
