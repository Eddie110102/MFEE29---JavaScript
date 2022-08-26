function bomb(a, b) {
  //   console.log(b);
  if (a === "" || a > 100 || a < 1) {
    return "請輸入正確數字，範圍 1 ~ 100";
  } else {
    if (a < b) {
      return "猜大一點";
    } else if (b < a) {
      return "猜小一點";
    } else if (a == b) {
      // theBomb只是變數
      theBomb = Math.floor(Math.random() * 100);
      return "恭喜中獎";
    }
  }
}
