import './style.css'
import { editablePage } from './editablePage'
import { navbar } from './component/navbar'

document.querySelector("#app").innerHTML = `
  <div>
    <div id="editablePage"/>
    ${navbar()}
  </div>
`;

editablePage()
