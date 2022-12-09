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

  const keydownHandler = (e) => {
    console.log(`${e.key} pressed`)
    if (e.key === "Enter") {
      e.preventDefault();
      handleCreateBlock();
    }
    if (e.key === "/") {
      alert('show command')
    }
    // arrow up => move to previous block
    // arrow down => move to next block
    // backspace => delete block
  }

  const handleCreateBlock = () => {
    console.log('create new block')
    defaultBlocks.push({
      tag: "div",
      text: "Type &#47 for commands",
      id: uuidv4(),
    });

    const lastBlock = defaultBlocks[defaultBlocks.length - 1];
     const node = document.createElement(lastBlock.tag);
     node.setAttribute("id", lastBlock.id);
     node.addEventListener("keydown", keydownHandler);
     node.setAttribute("contentEditable", "true");
     node.setAttribute("placeholder", lastBlock.text);
     document.getElementById("editablePage").appendChild(node);
     node.focus()
  }

  defaultBlocks.map(block => {
    const node = document.createElement(block.tag);
    node.setAttribute("id", block.id);
    node.addEventListener("keydown", keydownHandler);
    node.setAttribute("contentEditable", "true");
    node.setAttribute("placeholder", block.text);
    document.getElementById("editablePage").appendChild(node);
  })


}
