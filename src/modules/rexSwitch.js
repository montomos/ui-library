export default function rexSwitch() {
  /* On Focus events */
  var handleOnChange = function handleOnChange(e) {
    var switchNativeParentEl = e.target.parentNode.parentNode;
    if (e.target.checked) {
      switchNativeParentEl.classList.add("checked");
    } else {
      switchNativeParentEl.classList.remove("checked");
    }
  };
  /* Asign events to all similar components */
  var rexSwitchList = document.querySelectorAll(
    "div[class^='rex-switch']"
  );
  rexSwitchList.forEach(function (rexSwitch) {
    var rexSwitchNative = rexSwitch.querySelector(".rex-switch input");

    rexSwitchNative.onchange = handleOnChange;
  });
}