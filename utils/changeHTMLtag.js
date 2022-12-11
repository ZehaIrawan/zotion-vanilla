import {keydownHandler} from './keydownHandler'

export const changeHTMLTag = (node, element) => {
  const clone = document.createElement(element.tag);
  clone.addEventListener("keydown", keydownHandler);
  for (const attr of node.attributes) {
    console.log(attr,'attr');
    clone.setAttributeNS(null, attr.name, attr.value);
    // clone.setAttributeNS(null, attr.name, attr.value);
  }
  // no way to set event listener
  while (node.firstChild) {
    clone.appendChild(node.firstChild);
  }
  clone.innerHTML = ""
  clone.setAttribute("placeholder",element.label);
  node.replaceWith(clone);
  const menu = document.getElementById("commandsMenu");
  menu.parentNode.removeChild(menu);
  clone.focus()
  return clone;
};
