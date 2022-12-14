import { commandsMenu } from "../component/commandsMenu";
import { handleCreateBlock } from "./handleCreateBlock";
import { changeHTMLTag } from "./changeHTMLtag";
import { commandList } from "../utils/commandList";

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
    if( state.prevKey === "/") {
      const menu = document.getElementById("commandsMenu");
      menu.parentNode.removeChild(menu);
      state.prevKey = ""
    }
    // delete current block
  }
  if (e.key === "Escape") {
    if (state && state.prevKey === "/") {
      const menu = document.getElementById("commandsMenu");
      menu.parentNode.removeChild(menu);
    }
  }

  if (e.key === "#") {
    state.prevKey = "#";
  }

  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
    if (state && state.prevKey === "#") {

      changeHTMLTag(
        currentElement,
        commandList.filter((item) => item.id == "heading1")[0],
        state,
      );
      state.prevKey = "";
    }
  }

  // arrow up => move to previous block
  // arrow down => move to next block
};
