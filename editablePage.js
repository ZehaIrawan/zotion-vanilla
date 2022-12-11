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
        id: uuidv4(),
      },
    ],
    filteredCommands: [],
    selectedCommand:''
  };

    // commandsMenu.state = {
    //   filteredCommands: query
    //     ? commandList.filter((item) => item.tag.includes(query))
    //     : commandList,
    // };

    // commandsMenu.selectedState = {
    //   command: commandsMenu.state.filteredCommands[0],
    // };

  // const handleBlur = (e) => {
  //    const currentElement = document.getElementById(document.activeElement.id);
  //    currentElement.
  //    removeAttribute("placeholder");
  //   console.log(e);
  // }

  //  let prevKey = "";

  editablePage.state.defaultBlocks.map((block) => {
    const node = document.createElement(block.tag);
    node.setAttribute("id", block.id);
    // node.addEventListener("keydown", keydownHandler);
    node.addEventListener("keydown", (e) => {
      keydownHandler(e, "123e-asdas", editablePage.state);
    });

    node.setAttribute("contentEditable", "true");
    node.setAttribute("placeholder", block.text);
    document.getElementById("editablePage").appendChild(node);
  });
}
