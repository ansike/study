async function getComponent() {
  try {
    const { default: _ } = await import("lodash");
    const element = document.createElement("div");
    element.innerHTML = _.join(["Hello", "webpack"], " ");
    return element;
  } catch (error) {
    console.log("An error occurred while loading the component");
    return false;
  }
}
(async () => {
  const component = await getComponent();
  if (component) document.querySelector("#app").appendChild(component);
})();
