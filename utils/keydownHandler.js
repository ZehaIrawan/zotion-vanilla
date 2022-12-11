import { commandsMenu } from "../commandsMenu";
import {handleCreateBlock} from './handleCreateBlock'
import {changeHTMLTag} from './changeHTMLtag'

export const keydownHandler = (e, id,state) => {

    const currentElement = document.getElementById(document.activeElement.id);

  if (state.prevKey === "/") {


    const currentElement = document.getElementById(document.activeElement.id);
    // currentElement.addEventListener("DOMSubtreeModified", handleChange);
    // console.log(currentElement,'TXT');

    // console.log(currentElement.childNodes[0]);

    const config = {
      characterData: true,
    };

    // Callback function to execute when mutations are observed
    const callback = (mutationList, observer) => {
      for (const mutation of mutationList) {
        // console.log('mutation');
        commandsMenu(mutation.target.data.replace(/\//g, ""), state);
      }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(currentElement.childNodes[0], config);
  }

  if (e.key === "Enter") {
    e.preventDefault();
    if( state.prevKey === "/"){
      changeHTMLTag(currentElement,state.selectedCommand.tag)
    }else{
      handleCreateBlock(state);
    }
  }
  if (e.key === "/") {
    state.prevKey = "/";
    // console.log(prevKey, "prev2");
    const editablePage = document.getElementById("editablePage");
    const commandsContainer = document.createElement("div");
    commandsContainer.setAttribute("id", "commandsMenu");
    commandsContainer.setAttribute("class", "relative");
    editablePage.appendChild(commandsContainer);

    commandsMenu(null,state);
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
