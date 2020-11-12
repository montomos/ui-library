export default function rexSelect() {
  /* On Focus events */
  var handleOnFocus = function handleOnFocus(e) {
    var selectNativeEl = e.target;
    var outsideBorderEl = e.target.parentNode;
    var outsideLabelEl = e.target.parentNode.previousElementSibling;
    selectNativeEl.classList.add("active");
    outsideBorderEl.classList.add("active");
    outsideLabelEl.classList.add("active");
  };

  /* On Blur events */
  var handleOnFocusOut = function handleOnFocusOut(e) {
    var selectNativeEl = e.target;
    var outsideBorderEl = e.target.parentNode;
    var outsideLabelEl = e.target.parentNode.previousElementSibling;
    selectNativeEl.classList.remove("active");
    outsideBorderEl.classList.remove("active");
    outsideLabelEl.classList.remove("active");
  };
  /* Asign events to all similar components */
  var rexSelectList = document.querySelectorAll(
    "div[class^='rex-select-label']"
  );
  rexSelectList.forEach(function (rexSelect) {
    var rexSelectNative = rexSelect.querySelector(".rex-select-native");

    rexSelectNative.onfocus = handleOnFocus;
    rexSelectNative.onblur = handleOnFocusOut;
  });
}