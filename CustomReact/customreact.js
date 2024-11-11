function customRender(reactElement, container) {
  var domElement = Object.assign(document.createElement(reactElement.type), {
    href: reactElement.props.href,
    target: reactElement.props.target,
    innerHTML: reactElement.children,
  });
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.getElementById("root");
customRender(reactElement, mainContainer);
