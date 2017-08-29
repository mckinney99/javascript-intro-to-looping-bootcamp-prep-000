function forLoop(array){
  for (let i = 0; i < 25; i++) {
    if (i ==1) {
      array.push("I am " + i + " strange loop")
    }
    else {
      array.push ("I am + `${i}` + strange loops.")
    }

  }
  return array
}

function whileLoop(number){
  let countdown = number;
  while (countdown > 0) {
    console.log(--countdown)

  }
  return "done"
}

function doWhileLoop(array){
  function maybeTrue() {
    return array.length-- < 0 && maybeTrue()
  }

  do {
    console.log('doo-bee-doo-bee-doo')
  } while (maybeTrue());
  return array
}
