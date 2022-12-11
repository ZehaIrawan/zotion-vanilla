import { keydownHandler } from "./keydownHandler";

export const changeHTMLTag = (node, element, state) => {

  const clone = document.createElement(element.tag);

  for (const attr of node.attributes) {
    clone.setAttributeNS(null, attr.name, attr.value);
  }

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
  if(menu){
    menu.parentNode.removeChild(menu);
  }
  clone.focus();
  return clone;
};
