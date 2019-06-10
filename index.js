(function () {
  const coins = [20, 13, 2, 22, 1, 14]
  const value = 3.55;

  const changer = (value, coins) => {
    let valueLeft = value * 100
    const reversedCoins = [...coins].reverse()
    const returnedCoins = [0, 0, 0, 0, 0, 0]
    const totalAvailableArray = [
      (reversedCoins[0] * 100),
      (reversedCoins[1] * 50),
      (reversedCoins[2] * 25),
      (reversedCoins[3] * 10),
      (reversedCoins[4] * 5),
      (reversedCoins[5] * 1)
    ]
    const reducer = (accumulator, currentValue) => {
      return accumulator + currentValue
    }

    const totalAvailable = totalAvailableArray.reduce(reducer)

    if (valueLeft > totalAvailable) {
      return console.log('The machine can\'t complete the operation')
    }

    const calc = (newValueleft, coinIndice, coinValue) => {
      if (valueLeft >= coinValue && reversedCoins[coinIndice] > 0) {
        valueLeft -= coinValue;
        reversedCoins[coinIndice]--
        returnedCoins[coinIndice]++
        calc(newValueleft, coinIndice, coinValue)
      }
    }
    calc(valueLeft, 0, 100)
    calc(valueLeft, 1, 50)
    calc(valueLeft, 2, 25)
    calc(valueLeft, 3, 10)
    calc(valueLeft, 4, 5)
    calc(valueLeft, 5, 1)

    let totalReturnedArray = [
      (returnedCoins[0] * 100),
      (returnedCoins[1] * 50),
      (returnedCoins[2] * 25),
      (returnedCoins[3] * 10),
      (returnedCoins[4] * 5),
      (returnedCoins[5] * 1)
    ]
    const totalReturned = (totalReturnedArray.reduce(reducer))
    if ((totalReturned / 100) !== value) {
      return console.log('The machine dont have coins enough to finish the operation')
    }

    return console.log([...returnedCoins].reverse())
  }

  changer(value, coins);
})()