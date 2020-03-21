export const addZeroes = num => {
  let value = Number(num);
  const res = num.split(".");
  if (res.length == 1 || res[1].length < 3) {
      value = value.toFixed(2);
  }
  return value;
}

export const strPad = n => String("0" + n).slice(-2)
