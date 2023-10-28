module.exports = function toReadable (number) {
  const small = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const big = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const bigest = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const numberToString = number.toString();
  const bigNumber1 = number % 10;
  const bigNumber2 = number % 100;

  if (number < 10) {
    write = small[number];
  } else if (number >= 20 && number < 100) {
    if (small ===0) {
        write =
    }
  }


}
