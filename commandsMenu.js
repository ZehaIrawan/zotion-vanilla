
export function commandsMenu(query) {

  console.log(query,"this is qyert");

  const handleClick = () => {
    console.log("clicked");
    // check if focused element not body
    document.getElementById("commandsMenu").classList.add("hide-commands");
    document.getElementById("commandsMenu").classList.remove("show-commands");
    if (
      document.hasFocus() &&
      document.activeElement !== document.body &&
      document.activeElement !== document.documentElement
    ) {
      // focused_element = document.activeElement;
      console.log(document.activeElement);
    }
  }

  document.querySelector("#commandsMenu").innerHTML = `
    <div class="commands-container">
    <h4>Add blocks</h4>
    <span>Keep typing to filter, or escape to exit</span>
    <br/>
    <span>Filtering keyword ${query}</span>
    <br/>

    <div id="h1-command">
    Heading 1
    Shortcut
    </div>

    Expendable Heading 1
    Shortcut type >># + space
    </div>
`;

  document.getElementById("h1-command").addEventListener("click", handleClick);
}