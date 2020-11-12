export default function rexTextArea() {
  /* On Focus events */
  var handleOnFocus = function handleOnFocus(e) {
    var textareaNativeEl = e.target;
    var outsideBorderEl = e.target.parentNode;
    var outsideLabelEl = e.target.parentNode.previousElementSibling;
    textareaNativeEl.classList.add("active");
    outsideBorderEl.classList.add("active");
    outsideLabelEl.classList.add("active");
  };

  /* On Blur events */
  var handleOnFocusOut = function handleOnFocusOut(e) {
    var textareaNativeEl = e.target;
    var outsideBorderEl = e.target.parentNode;
    var outsideLabelEl = e.target.parentNode.previousElementSibling;
    textareaNativeEl.classList.remove("active");
    outsideBorderEl.classList.remove("active");
    outsideLabelEl.classList.remove("active");
  };
  /* Asign events to all similar components */
  var rexTextAreaList = document.querySelectorAll(
    "div[class^='rex-textarea-label']"
  );
  rexTextAreaList.forEach(function (rexTextArea) {
    var rexTextAreaNative = rexTextArea.querySelector(".rex-textarea-ui");
    rexTextAreaNative.onfocus = handleOnFocus;
    rexTextAreaNative.onblur = handleOnFocusOut;
  });
}