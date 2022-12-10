import { v4 as uuidv4 } from "uuid";
import { keydownHandler } from "./keydownHandler";

export const handleCreateBlock = (state) => {
  console.log("create new block");

  const handleFocus = () => {
    console.log("focus");
    const currentElement = document.getElementById(document.activeElement.id);
    currentElement.setAttribute("placeholder", "Type '/' for commands");
  };

  state.defaultBlocks.push({
    tag: "div",
    // text: "Type '/' for commands",
    id: uuidv4(),
  });

  const lastBlock = state.defaultBlocks[state.defaultBlocks.length - 1];

  const node = document.createElement(lastBlock.tag);
  node.setAttribute("id", lastBlock.id);
  node.addEventListener("keydown", (e) => {
    keydownHandler(e, lastBlock.id,state);
  });
  node.addEventListener("focus", handleFocus);
  // node.addEventListener("blur", handleBlur);
  node.setAttribute("contentEditable", "true");
  // node.setAttribute("placeholder", lastBlock.text);
  document.getElementById("editablePage").appendChild(node);
  node.focus();
};
