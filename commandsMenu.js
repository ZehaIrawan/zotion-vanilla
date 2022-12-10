import {keydownHandler} from './utils/keydownHandler'

export function commandsMenu(query) {
  const changeTag = (node, tag) => {
    const clone = document.createElement(tag);
    clone.addEventListener("keydown", keydownHandler);
    for (const attr of node.attributes) {
      clone.setAttributeNS(null, attr.name, attr.value);
    }
    // no way to set event listener
    while (node.firstChild) {
      clone.appendChild(node.firstChild);
    }
    node.replaceWith(clone);
    return clone;
  };

  const handleClick = (e, tag) => {
    const currentElement = document.getElementById(document.activeElement.id);
    changeTag(currentElement, tag);

    const menu = document.getElementById("commandsMenu")
    menu.parentNode.removeChild(menu);
  }

  document.querySelector("#commandsMenu").innerHTML = `
    <div class="commands-container">
    <h4>Add blocks</h4>
    <span>Keep typing to filter, or escape to exit</span>
    <br/>
    <span>Filtering keyword ${query}</span>
    <br/>

    <div id="h1-command" class="command">
      <span>Heading 1</span>
      <span>Shortcut: type # + space </span>
    </div>

    <div id="h2-command" class="command">
      <span>Heading 2</span>
      <span>Shortcut type ## + space</span>
    </div>

    </div>
`;

  document
    .getElementById("h1-command")
    .addEventListener("click", (e) => handleClick(e, "h1"));
  document
    .getElementById("h1-command")
    .addEventListener("mousedown", (e) => e.preventDefault());

  document
    .getElementById("h2-command")
    .addEventListener("click", (e) => handleClick(e, "h2"));
  document
    .getElementById("h2-command")
    .addEventListener("mousedown", (e) => e.preventDefault());
}

