import { keydownHandler } from "./keydownHandler";

export const changeHTMLTag = (node, element, state) => {
  console.log(state, "tag");

  const clone = document.createElement(element.tag);

  for (const attr of node.attributes) {
    clone.setAttributeNS(null, attr.name, attr.value);
    // clone.setAttributeNS(null, attr.name, attr.value);
  }
  // no way to set event listener
  while (node.firstChild) {
    clone.appendChild(node.firstChild);
  }

  clone.innerHTML = "";
  clone.setAttribute("placeholder", element.label);
  clone.addEventListener("keydown", keydownHandler);
  clone.addEventListener("keydown", (e) => {
    keydownHandler(e, clone.id, state);
  });

  node.replaceWith(clone);
  const menu = document.getElementById("commandsMenu");
  menu.parentNode.removeChild(menu);
  clone.focus();
  return clone;
};
