import './style.css'
import { editablePage } from './editablePage'

document.querySelector("#app").innerHTML = `
  <div>
    <div id="editablePage"/>
  </div>
`;

editablePage()
