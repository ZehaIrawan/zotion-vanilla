import { commandsMenu } from "../commandsMenu";

export const keydownHandler = (e, id) => {
  let prevKey = "";

  console.log(`${e.key} pressed ${id}`);
  if (prevKey === "/") {
    const currentElement = document.getElementById(document.activeElement.id);
    // currentElement.addEventListener("DOMSubtreeModified", handleChange);
    // console.log(currentElement,'TXT');

    console.log(currentElement.childNodes[0]);

    const config = {
      characterData: true,
    };

    // Callback function to execute when mutations are observed
    const callback = (mutationList, observer) => {
      for (const mutation of mutationList) {
        commandsMenu(mutation.target.data.replace(/\//g, ""));
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
    prevKey = "/";
    const editablePage = document.getElementById("editablePage");
    const commandsContainer = document.createElement("div");
    commandsContainer.setAttribute("id", "commandsMenu");
    commandsContainer.setAttribute("class", "relative");
    editablePage.appendChild(commandsContainer);

    commandsMenu();
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

  // arrow up => move to previous block
  // arrow down => move to next block
};
