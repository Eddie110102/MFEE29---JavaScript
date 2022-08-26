// document.write("<h4>Hello JavaScript!!</h4>");

const h1 = document.getElementById("h1");
console.log(h1.innerText);
h1.innerText = "EDDIE";

const H1text = "<h2>HTML</h2>";
const H2text = "<h2>Text</h2>";
// 清空 h1 中的內容
h1.innerHTML = "";
h1.innerHTML += H1text;
h1.innerHTML += H2text;
