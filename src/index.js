module.exports = function toReadable (number) {
  const num0_9 = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const num11_19 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const num10_90 = ['ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const numberToString = number.toString();
  const num_10 = number % 10;
  const num_100 = number % 100;

  if (number < 10) {
    return num0_9[number];
  }
  if (number > 10 && number < 20) {
    return num11_19[num_10 - 1];
  }
  if (num_10 === 0 && number < 100) {
    return num10_90[numberToString[0] - 1];
  }
  if (num_10 !== 0 && number < 100) {
    return `${num10_90[numberToString[0] - 1]} ${num0_9[num_10]}`;
  }
  if (number >= 100) {
    let str = `${num0_9[numberToString[0]]} num_100`;
  }
  if (num_100 === 0) return str;
  if (num_100 !== 0) {
    if (num_10 === 0) return `${str} ${num10_90[numberToString[1] - 1]}`;
  }
}