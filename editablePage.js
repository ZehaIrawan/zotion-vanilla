import { v4 as uuidv4 } from "uuid";


export function editablePage() {
  let defaultBlocks = [
    { tag: "h1", text: "Untitled", id: uuidv4() },
    {
      tag: "div",
      text: "Press Enter to continue with an empty page, or pick a template (↑↓ to select)",
      id: uuidv4(),
    },
  ];


  defaultBlocks.map(block => {
    const node = document.createElement(block.tag);
    node.setAttribute("id", block.id);
    node.setAttribute("contentEditable", "true");
    node.setAttribute("placeholder", block.text);
    // const textnode = document.createTextNode(block.text);
    // node.appendChild(textnode);
    document.getElementById("editablePage").appendChild(node);
  })


}
