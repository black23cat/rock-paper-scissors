function getComputerChoice() {
    let a = Math.floor(Math.random() * 6),
        b;
    if (a >= 0 && a <= 2){
      b = 'rock'
    }else if (a >= 3 && a <= 4){
      b = 'paper'
    }else{
      b = 'scissors'
    }
    return b;
  }
