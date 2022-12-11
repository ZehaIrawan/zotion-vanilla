import { commandsMenu } from "../commandsMenu";
import { handleCreateBlock } from "./handleCreateBlock";
import { changeHTMLTag } from "./changeHTMLtag";

export const keydownHandler = (e, id, state) => {
  const currentElement = document.getElementById(document.activeElement.id);
  let observer;

  if (state && state.prevKey === "/") {

    const config = {
      characterData: true,
    };

    // Callback function to execute when mutations are observed
    const callback = (mutationList, observer) => {
      for (const mutation of mutationList) {
        commandsMenu(mutation.target.data.replace(/\//g, ""), state);
      }
    };

    // Create an observer instance linked to the callback function
    observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(currentElement.childNodes[0], config);
  }

  if (e.key === "Enter") {
    e.preventDefault();

    if (state && state.prevKey === "/") {
      state.prevKey = "";
      changeHTMLTag(currentElement, state.selectedCommand, state);
      observer.disconnect();
    } else {
      handleCreateBlock(state);
    }
  }
  if (e.key === "/") {
    state.prevKey = "/";
    const editablePage = document.getElementById("editablePage");
    const commandsContainer = document.createElement("div");
    commandsContainer.setAttribute("id", "commandsMenu");
    commandsContainer.setAttribute("class", "relative");
    editablePage.appendChild(commandsContainer);

    commandsMenu(null, state);
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
  if(e.key === "Escape"){
     if (state && state.prevKey === "/") {
       const menu = document.getElementById("commandsMenu");
       menu.parentNode.removeChild(menu);
    }
  }

  // arrow up => move to previous block
  // arrow down => move to next block
};
