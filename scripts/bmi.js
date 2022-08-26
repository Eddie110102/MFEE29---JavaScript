// 讓使用者可以輸入自己的體重及身高，根據算出來的BMI值顯示下列訊息
//  BMI = 體重(公斤)/身高(公尺)的平方
// BMI ＜ 18.5：過輕
// 18.5≦BMI＜24：正常
// 24≦BMI＜27：過重
// 27≦BMI＜30：輕度肥胖
// 30≦BMI＜35：中度肥胖
// BMI≧35：重度肥胖
function outputMyBMI(W, H) {
  let amIFat;
  //   console.log(`${H.length}`);
  let MyBMI = Number(W) / (Number(H) * Number(H));
  BMIanswer.innerText = MyBMI;
  //   console.log(MyBMI);
  MyBMI < 18.5
    ? (amIFat = "過輕")
    : 18.5 <= MyBMI < 24
    ? (amIFat = "正常")
    : 24 <= MyBMI < 27
    ? (amIFat = "過重")
    : 27 <= MyBMI < 30
    ? (amIFat = "輕度肥胖")
    : 30 <= MyBMI < 35
    ? (amIFat = "中度肥胖")
    : (amIFat = "重度肥胖");
  isFat.innerText = amIFat;
}
