import { v4 as uuidv4 } from "uuid";
import { keydownHandler } from "./keydownHandler";

export const handleCreateBlock = (state) => {
  if (state) {
    const handleFocus = () => {
      const currentElement = document.getElementById(document.activeElement.id);
      currentElement.setAttribute("placeholder", "Type '/' for commands");
    };

    state.defaultBlocks.push({
      tag: "div",
      id: uuidv4(),
    });

    const lastBlock = state.defaultBlocks[state.defaultBlocks.length - 1];

    const node = document.createElement(lastBlock.tag);
    node.setAttribute("id", lastBlock.id);
    node.addEventListener("keydown", (e) => {
      keydownHandler(e, lastBlock.id, state);
    });
    node.addEventListener("focus", handleFocus);
    node.setAttribute("contentEditable", "true");
    document.getElementById("editablePage").appendChild(node);
    node.focus();
  }
};
