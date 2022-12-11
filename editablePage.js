import { v4 as uuidv4 } from "uuid";
import { keydownHandler } from "./utils/keydownHandler";

export function editablePage() {
  editablePage.state = {
    prevKey: "",
    defaultBlocks: [
      { tag: "h1", text: "Untitled", id: uuidv4() },
      {
        tag: "div",
        text: "Press Enter to continue with an empty page, or pick a template (↑↓ to select)",
        id:"empty-state",
      },
    ],
    filteredCommands: [],
    selectedCommand:''
  };


  editablePage.state.defaultBlocks.map((block) => {
    const node = document.createElement(block.tag);
    node.setAttribute("id", block.id);
    node.addEventListener("keydown", (e) => {
      keydownHandler(e, block.id, editablePage.state);
    });

    node.setAttribute("contentEditable", "true");
    node.setAttribute("placeholder", block.text);
    document.getElementById("editablePage").appendChild(node);
  });
}
