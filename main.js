import './style.css'
import { editablePage } from './editablePage'
import { commandsMenu } from './commandsMenu'

document.querySelector("#app").innerHTML = `
  <div>
    <div id="editablePage"/>
    <div id="commandsMenu" class="hide-commands"/>
  </div>
`;

editablePage()
commandsMenu()