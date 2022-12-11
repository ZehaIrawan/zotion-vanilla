import './style.css'
import { editablePage } from './editablePage'
import { navbar } from './component/navbar'
import {decoration} from './component/decoration'

document.querySelector("#app").innerHTML = `
${navbar()}
  <div class="content">
    <div id="editablePage"/>
    ${decoration()}
  </div>
`;

editablePage()
