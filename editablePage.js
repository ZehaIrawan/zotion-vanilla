import { v4 as uuidv4 } from "uuid";
import { keydownHandler } from "./utils/keydownHandler"

export function editablePage() {
  let defaultBlocks = [
    { tag: "h1", text: "Untitled", id: uuidv4() },
    {
      tag: "div",
      text: "Press Enter to continue with an empty page, or pick a template (↑↓ to select)",
      id: uuidv4(),
    },
  ];

  const handleFocus = () => {
    console.log("focus");
    const currentElement = document.getElementById(document.activeElement.id);
    currentElement.setAttribute("placeholder", "Type '/' for commands");
  };

  // const handleBlur = (e) => {
  //    const currentElement = document.getElementById(document.activeElement.id);
  //    currentElement.
  //    removeAttribute("placeholder");
  //   console.log(e);
  // }



  const handleCreateBlock = () => {
    console.log("create new block");
    defaultBlocks.push({
      tag: "div",
      // text: "Type '/' for commands",
      id: uuidv4(),
    });

    const lastBlock = defaultBlocks[defaultBlocks.length - 1];

    const node = document.createElement(lastBlock.tag);
    node.setAttribute("id", lastBlock.id);
    node.addEventListener("keydown", (e) => {
      keydownHandler(e, lastBlock.id);
    });
    node.addEventListener("focus", handleFocus);
    // node.addEventListener("blur", handleBlur);
    node.setAttribute("contentEditable", "true");
    // node.setAttribute("placeholder", lastBlock.text);
    document.getElementById("editablePage").appendChild(node);
    node.focus();
  };

  defaultBlocks.map((block) => {
    const node = document.createElement(block.tag);
    node.setAttribute("id", block.id);
    node.addEventListener("keydown", keydownHandler);
    node.setAttribute("contentEditable", "true");
    node.setAttribute("placeholder", block.text);
    document.getElementById("editablePage").appendChild(node);
  });
}
