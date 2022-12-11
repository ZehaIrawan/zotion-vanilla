import { keydownHandler } from "../utils/keydownHandler";
import { commandList } from "../utils/commandList";
import { changeHTMLTag } from "../utils/changeHTMLtag";

export function commandsMenu(query, state) {
  state.filteredCommands = query
    ? commandList.filter((item) => item.tag.includes(query.toLowerCase()))
    : commandList;

  state.selectedCommand = state.filteredCommands[0];

  const handleClick = (e, clickedCommand) => {
    const currentElement = document.getElementById(document.activeElement.id);
    state.prevKey = ""
    changeHTMLTag(currentElement, clickedCommand, state);
  };

  const noResult = () => {
    if (state.filteredCommands.length === 0) {
      return `<div class="command selected-command">
              <span>No results</span>
            </div>`;
    }
    return "";
  };

  document.querySelector("#commandsMenu").innerHTML = `
    <div class="commands-container">
      <h4>Add blocks</h4>
      <span>Keep typing to filter, or escape to exit</span>
   <br/>
      ${
        query
          ? `
                <span>Filtering keyword <span class="query">   ${query}</span></span>
           <br/>
      `
          : ""
      }


      ${noResult()}

      ${state.filteredCommands
        .map((command) => {
          const selectedId = state.selectedCommand.id;
          return `<div id=${command.id} class="command ${
            selectedId === command.id ? "selected-command" : ""
          }">
            <span>${command.label}</span>
            <span>${command.shortcut}</span>
          </div>`;
        })
        .join("")}
    </div>`;

  state.filteredCommands.forEach((commandOption) => {
   const target =  document
      .getElementById(commandOption.id)

      target.addEventListener("click", (e) =>
        handleClick(
          e,
          commandList.filter((item) => item.id == commandOption.id)[0],
        ),
        )

        target.addEventListener("mousedown", (e) => {
          e.preventDefault();
          e.stopPropagation()
        })

  });
}
