const blockNumber = document.getElementById("blockNumber");
const blockData = document.getElementById("blockData");
const viewMessage = document.getElementById("viewMessage");
const addMessage = document.getElementById("addMessage");
const block = document.getElementById("block");
const blockHeader = document.getElementById("block-header");
const blockResult = document.getElementById("block-result");
const clear = document.getElementById("clear");

let viewTimeout1, viewTimeout2;

function msg(txt, target) {
  target.innerHTML = txt;
  if (viewTimeout1) clearTimeout(viewTimeout1);
  viewTimeout1 = setTimeout(() => {
    target.classList.toggle("fade");
    if (viewTimeout2) clearTimeout(viewTimeout2);
    viewTimeout2 = setTimeout(() => {
      target.innerHTML = "";
      target.classList.toggle("fade");
    }, 1000);
  }, 500);
  return false;
}

function showBlock(header, data) {
  blockHeader.innerHTML = header;
  blockResult.innerHTML = JSON.stringify(data);
  block.style.display = "block";
  clear.style.display = "block";
}
function viewBlock() {
  const number = blockNumber.value;
  if (!number) return msg("Enter a block number.", viewMessage);

  fetch(`block/${number}`)
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      showBlock(`Display Block ${number}`, data);
    })
    .catch(e => console.log("Fetch failed with error =>", e));
  return false;
}

function addBlock() {
  const data = blockData.value;
  if (!data) return msg("Enter block data.", addMessage);

  fetch(`block`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({ data: data })
  })
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      const number = data.height;
      showBlock(`Added Block ${number}`, data);
    })
    .catch(e => console.log("Fetch failed with error =>", e));
  return false;
}

function clearBelow() {
  block.style.display = "none";
  clear.style.display = "none";
}
