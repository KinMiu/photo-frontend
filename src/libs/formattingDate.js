const FormattingDate = (data) => {
  const dataWaktu = data

  const dateObject = new Date(dataWaktu)

  function getMonth(index) {
    const month = ["January", 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return month[index]
  }

  let formatting = `${dateObject.getDate()} ${getMonth(dateObject.getMonth())} ${dateObject.getFullYear()}`

  return formatting
  // function padZero(number) {
  //   return number < 10 ? `0${number}` : number
  // }
}

export default FormattingDate