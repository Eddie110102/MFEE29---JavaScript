function isLeapYear(a) {
  // 西元除以400可整除，為閏年。
  // 西元除以4可整除但除以100不可整除，為閏年。
  if (a % 400 === 0 || (a % 4 === 0 && a % 100 !== 0)) {
    return `西元${a}年是閏年`;
  }
  // 西元除以4不可整除，為平年。
  // 西元除以100可整除但除以400不可整除，為平年
  else if (a % 4 !== 0 || (a % 100 === 0 && a % 400 !== 0)) {
    return `西元${a}年不是閏年`;
  }
}
