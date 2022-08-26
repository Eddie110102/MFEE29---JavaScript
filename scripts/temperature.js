// 傳入溫度及溫度類別(華氏/攝氏)
function temperatureConvert(degree, type) {
  let degreeConvert;
  let typeConvert;
  if (type === "F") {
    degreeConvert = (((degree - 32) * 5) / 9).toFixed(2);
    typeConvert = 'C';
  } else {
    degreeConvert = (degree * (9 / 5) + 32).toFixed(2);
    typeConvert = 'F';
  }
  console.log(`攝氏${degree}℃可以轉換成華氏${degreeConvert}℉`);

  // 回傳 溫度轉換結果
  return [degreeConvert,typeConvert];
}
