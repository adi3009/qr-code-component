const themeSwitchers = document.getElementsByName("theme-switcher");

themeSwitchers.forEach((t) => t.addEventListener("change", (event) => {
  const theme = event.target.value == 1 ? "light" : "dark";
  const themeEvent = new CustomEvent("themeChanged", {detail: theme});
  document.dispatchEvent(themeEvent);
}));

const qrComponents = Array.from(document.getElementsByClassName("qr-component"));

document.addEventListener("themeChanged", (event) => {
  qrComponents.forEach((q) => onThemeChanged(q, event.detail));
});

const darkThemeComponentClass = "qr-component--dark";
const darkThemeElementClass = "qr-component__text--dark";

function onThemeChanged(component, theme) {
  const children = Array.from(component.children);
  const textElements = children.filter((c) => c.classList.contains("qr-component__text"));
  if (theme === "light") {
    component.classList.remove(darkThemeComponentClass);
    textElements.forEach((te) => te.classList.remove(darkThemeElementClass));
  } else {
    component.classList.add(darkThemeComponentClass);
    textElements.forEach((te) => te.classList.add(darkThemeElementClass));
  }
}