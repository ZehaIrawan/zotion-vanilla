import { v4 as uuidv4 } from "uuid";
import { commandsMenu } from "./commandsMenu";

export function editablePage() {
  let defaultBlocks = [
    { tag: "h1", text: "Untitled", id: uuidv4() },
    {
      tag: "div",
      text: "Press Enter to continue with an empty page, or pick a template (↑↓ to select)",
      id: uuidv4(),
    },
  ];


  const changeTag = (node, tag) => {
    const clone = document.createElement(tag);
    for (const attr of node.attributes) {
      clone.setAttributeNS(null, attr.name, attr.value);
    }
    while (node.firstChild) {
      clone.appendChild(node.firstChild);
    }
    node.replaceWith(clone);
    return clone;
  };

  const keydownHandler = (e, id) => {
    console.log(`${e.key} pressed ${id}`);
    if (e.key === "Enter") {
      e.preventDefault();
      handleCreateBlock();
    }
    if (e.key === "/") {
      const currentElement = document.getElementById("editablePage");
      // currentElement.setAttribute("class","absolute")
      const commandsContainer = document.createElement("div");
      commandsContainer.setAttribute("id","commandsMenu")
      commandsContainer.setAttribute("class","relative")
      currentElement.appendChild(commandsContainer);
      // if (commandsMenu.classList.contains("hide-commands")) {
      //   commandsMenu.classList.remove("hide-commands");
      //   commandsMenu.classList.add("show-commands");
      // }
      commandsMenu();
      // <div id="commandsMenu" class="hide-commands" />;
    }
    if (e.key === "ArrowUp") {
      console.log(
        defaultBlocks.indexOf(
          defaultBlocks.filter((block) => block.id === id)[0],
        ),
      );
    }
    if (e.key === "ArrowDown") {
      console.log(document.activeElement.id);
    }

    if (e.key === "Backspace") {
      //  close command
      if (commandsMenu.classList.contains("show-commands")) {
        commandsMenu.classList.remove("show-commands");
        commandsMenu.classList.add("hide-commands");
      }
      // delete current block
    }

    if (e.key === "1") {
      const currentElement = document.getElementById(document.activeElement.id);

      changeTag(currentElement, "h1");
    }
    // arrow up => move to previous block
    // arrow down => move to next block
  };

  const handleCreateBlock = () => {
    console.log("create new block");
    defaultBlocks.push({
      tag: "div",
      text: "Type &#47 for commands",
      id: uuidv4(),
    });

    const lastBlock = defaultBlocks[defaultBlocks.length - 1];

    const node = document.createElement(lastBlock.tag);
    node.setAttribute("id", lastBlock.id);
    node.addEventListener("keydown", (e) => {
      keydownHandler(e, lastBlock.id);
    });
    node.setAttribute("contentEditable", "true");
    node.setAttribute("placeholder", lastBlock.text);
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
