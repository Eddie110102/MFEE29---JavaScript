function drawTree(a,icon) {
  for (let i = 2; i < 10; i++) {
    let res = `${icon}`;
    for (let j = 0; j < i - 2; j++) {
      res += `${icon}${icon}`;
    }
    a.innerHTML += `<p style= 'margin: 0;padding: 0;'>${res}</p>`;
  }
  for (let i = 1; i <= 2; i++) {
    let res = `${icon}`;
    a.innerHTML += `<p style= 'margin: 0;padding: 0;'>${res}</p>`;
  }
//   a.removeChild(a.childNodes[0]);
}