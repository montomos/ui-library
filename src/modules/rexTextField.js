export default function rexTextField() {
  var e = function (a) {
      var c = a.target.parentNode,
        b = a.target.parentNode.parentNode,
        d = a.target.parentNode.parentNode.previousElementSibling;
      a =
        a.target.classList.contains("error") ||
        a.target.classList.contains("valid");
      b.disabled ||
        a ||
        (d.classList.add("active"),
        c.classList.add("active"),
        b.classList.add("active"));
    },
    f = function (a) {
      var c = a.target.parentNode,
        b = a.target.parentNode.parentNode,
        d = a.target.parentNode.parentNode.previousElementSibling;
      a =
        a.target.classList.contains("error") ||
        a.target.classList.contains("valid");
      b.disabled ||
        a ||
        (d.classList.remove("active"),
        c.classList.remove("active"),
        b.classList.remove("active"));
    };
  document
    .querySelectorAll("div[class^='rex-text-field-label']")
    .forEach(function (a) {
      a = a.querySelector(".rex-text-field-native");
      a.onfocus = e;
      a.onblur = f;
    });
}
