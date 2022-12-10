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

  let prevKey = "";

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

  // const handleChange = (e) => {
  //   console.log(e,'EVEE');
  // }

  const keydownHandler = (e, id) => {
    console.log(`${e.key} pressed ${id}`);
    if(prevKey === "/"){
       const currentElement = document.getElementById(
         document.activeElement.id,
       );
       // currentElement.addEventListener("DOMSubtreeModified", handleChange);
       // console.log(currentElement,'TXT');

       console.log(currentElement.childNodes[0]);

       const config = {
         characterData: true,

       };

       // Callback function to execute when mutations are observed
       const callback = (mutationList, observer) => {

         for (const mutation of mutationList) {
           commandsMenu(mutation.target.data.replace(/\//g, ""))
         }
       };

       // Create an observer instance linked to the callback function
       const observer = new MutationObserver(callback);

       // Start observing the target node for configured mutations
       observer.observe(currentElement.childNodes[0], config);

    }

    if (e.key === "Enter") {
      e.preventDefault();
      handleCreateBlock();
    }
    if (e.key === "/") {
      prevKey = "/"
      const editablePage = document.getElementById("editablePage");
      // currentElement.setAttribute("class","absolute")
      const commandsContainer = document.createElement("div");
      commandsContainer.setAttribute("id", "commandsMenu");
      commandsContainer.setAttribute("class", "relative");
      editablePage.appendChild(commandsContainer);
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
      // if (commandsMenu.classList.contains("show-commands")) {
      //   commandsMenu.classList.remove("show-commands");
      //   commandsMenu.classList.add("hide-commands");
      // }
      // delete current block
    }

    // if (e.key === "1") {
    //   const currentElement = document.getElementById(document.activeElement.id);

    //   changeTag(currentElement, "h1");
    // }
    // arrow up => move to previous block
    // arrow down => move to next block
  };

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
