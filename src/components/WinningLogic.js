let icons = document.getElementsByTagName('svg')
export let winningCoins = 0

export function winningLogic(x1 = [], x2 = [], x3 = []) { // x1 == firstLine, x2 == secondLine...
  for (let i = 0; i < icons.length; i++) {
    icons[i].classList.remove('winning-animation')
  }
  winningCoins = 0

  if (x1[0] == x1[1] && x1[1] == x1[2] && x1[2] == x1[3] && x1[3] == x1[4]) { //1
    icons[1].classList.add('winning-animation')
    icons[34].classList.add('winning-animation')
    icons[67].classList.add('winning-animation')
    icons[100].classList.add('winning-animation')
    icons[133].classList.add('winning-animation')
    winningCoins += 50
  } else if (x1[0] == x1[1] && x1[1] == x1[2] && x1[2] == x1[3] && x1[3] == x2[4]) { //2
    icons[1].classList.add('winning-animation')
    icons[34].classList.add('winning-animation')
    icons[67].classList.add('winning-animation')
    icons[100].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 40
  } else if (x1[0] == x1[1] && x1[1] == x1[2] && x1[2] == x2[3] && x2[3] == x1[4]) { //3
    icons[1].classList.add('winning-animation')
    icons[34].classList.add('winning-animation')
    icons[67].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[133].classList.add('winning-animation')
    winningCoins += 40
  } else if (x1[0] == x1[1] && x1[1] == x1[2] && x1[2] == x2[3] && x2[3] == x2[4]) { //4
    icons[1].classList.add('winning-animation')
    icons[34].classList.add('winning-animation')
    icons[67].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 40
  } else if (x1[0] == x1[1] && x1[1] == x1[2] && x1[2] == x2[3] && x2[3] == x3[4]) { //5
    icons[1].classList.add('winning-animation')
    icons[34].classList.add('winning-animation')
    icons[67].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[135].classList.add('winning-animation')
    winningCoins += 30
  } else if (x1[0] == x1[1] && x1[1] == x2[2] && x2[2] == x1[3] && x1[3] == x1[4]) { //6
    icons[1].classList.add('winning-animation')
    icons[34].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[100].classList.add('winning-animation')
    icons[133].classList.add('winning-animation')
    winningCoins += 40
  } else if (x1[0] == x1[1] && x1[1] == x2[2] && x2[2] == x1[3] && x1[3] == x2[4]) { //7
    icons[1].classList.add('winning-animation')
    icons[34].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[100].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 30
  } else if (x1[0] == x1[1] && x1[1] == x2[2] && x2[2] == x2[3] && x2[3] == x1[4]) { //8
    icons[1].classList.add('winning-animation')
    icons[34].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[133].classList.add('winning-animation')
    winningCoins += 30
  } else if (x1[0] == x1[1] && x1[1] == x2[2] && x2[2] == x2[3] && x2[3] == x2[4]) { //9
    icons[1].classList.add('winning-animation')
    icons[34].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 30
  } else if (x1[0] == x1[1] && x1[1] == x2[2] && x2[2] == x2[3] && x2[3] == x3[4]) { //10
    icons[1].classList.add('winning-animation')
    icons[34].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[135].classList.add('winning-animation')
    winningCoins += 20
  } else if (x1[0] == x1[1] && x1[1] == x2[2] && x2[2] == x3[3] && x3[3] == x2[4]) { //11
    icons[1].classList.add('winning-animation')
    icons[34].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[102].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 10
  } else if (x1[0] == x1[1] && x1[1] == x2[2] && x2[2] == x3[3] && x3[3] == x3[4]) { //12
    icons[1].classList.add('winning-animation')
    icons[34].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[102].classList.add('winning-animation')
    icons[135].classList.add('winning-animation')
    winningCoins += 15
  } else if (x1[0] == x2[1] && x2[1] == x1[2] && x1[2] == x1[3] && x1[3] == x1[4]) { //13
    icons[1].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[67].classList.add('winning-animation')
    icons[100].classList.add('winning-animation')
    icons[133].classList.add('winning-animation')
    winningCoins += 40
  } else if (x1[0] == x2[1] && x2[1] == x1[2] && x1[2] == x1[3] && x1[3] == x2[4]) { //14
    icons[1].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[67].classList.add('winning-animation')
    icons[100].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 20
  } else if (x1[0] == x2[1] && x2[1] == x1[2] && x1[2] == x2[3] && x2[3] == x1[4]) { //15
    icons[1].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[67].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[133].classList.add('winning-animation')
    winningCoins += 30
  } else if (x1[0] == x2[1] && x2[1] == x1[2] && x1[2] == x2[3] && x2[3] == x2[4]) { //16
    icons[1].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[67].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 15
  } else if (x1[0] == x2[1] && x2[1] == x1[2] && x1[2] == x2[3] && x2[3] == x3[4]) { //17
    icons[1].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[67].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[135].classList.add('winning-animation')
    winningCoins += 10
  } else if (x1[0] == x2[1] && x2[1] == x2[2] && x2[2] == x1[3] && x1[3] == x1[4]) { //18
    icons[1].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[100].classList.add('winning-animation')
    icons[133].classList.add('winning-animation')
    winningCoins += 30
  } else if (x1[0] == x2[1] && x2[1] == x2[2] && x2[2] == x1[3] && x1[3] == x2[4]) { //19
    icons[1].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[100].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 10
  } else if (x1[0] == x2[1] && x2[1] == x2[2] && x2[2] == x2[3] && x2[3] == x1[4]) { //20
    icons[1].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[133].classList.add('winning-animation')
    winningCoins += 20
  } else if (x1[0] == x2[1] && x2[1] == x2[2] && x2[2] == x2[3] && x2[3] == x2[4]) { //21
    icons[1].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 40
  } else if (x1[0] == x2[1] && x2[1] == x2[2] && x2[2] == x2[3] && x2[3] == x3[4]) { //22
    icons[1].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[135].classList.add('winning-animation')
    winningCoins += 20
  } else if (x1[0] == x2[1] && x2[1] == x2[2] && x2[2] == x3[3] && x3[3] == x2[4]) { //23
    icons[1].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[102].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 15
  } else if (x1[0] == x2[1] && x2[1] == x2[2] && x2[2] == x3[3] && x3[3] == x3[4]) { //24
    icons[1].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[102].classList.add('winning-animation')
    icons[135].classList.add('winning-animation')
    winningCoins += 15
  } else if (x1[0] == x2[1] && x2[1] == x3[2] && x3[2] == x2[3] && x2[3] == x1[4]) { //25
    icons[1].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[69].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[133].classList.add('winning-animation')
    winningCoins += 35
  } else if (x1[0] == x2[1] && x2[1] == x3[2] && x3[2] == x2[3] && x2[3] == x2[4]) { //26
    icons[1].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[69].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 15
  } else if (x1[0] == x2[1] && x2[1] == x3[2] && x3[2] == x2[3] && x2[3] == x3[4]) { //27
    icons[1].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[69].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[135].classList.add('winning-animation')
    winningCoins += 20
  } else if (x1[0] == x2[1] && x2[1] == x3[2] && x3[2] == x3[3] && x3[3] == x2[4]) { //28
    icons[1].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[69].classList.add('winning-animation')
    icons[102].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 20
  } else if (x1[0] == x2[1] && x2[1] == x3[2] && x3[2] == x3[3] && x3[3] == x3[4]) { //29
    icons[1].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[69].classList.add('winning-animation')
    icons[102].classList.add('winning-animation')
    icons[135].classList.add('winning-animation')
    winningCoins += 30
  } else if (x2[0] == x1[1] && x1[1] == x1[2] && x1[2] == x1[3] && x1[3] == x1[4]) { //30
    icons[2].classList.add('winning-animation')
    icons[34].classList.add('winning-animation')
    icons[67].classList.add('winning-animation')
    icons[100].classList.add('winning-animation')
    icons[133].classList.add('winning-animation')
    winningCoins += 40
  } else if (x2[0] == x1[1] && x1[1] == x1[2] && x1[2] == x1[3] && x1[3] == x2[4]) { //31
    icons[2].classList.add('winning-animation')
    icons[34].classList.add('winning-animation')
    icons[67].classList.add('winning-animation')
    icons[100].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 30
  } else if (x2[0] == x1[1] && x1[1] == x1[2] && x1[2] == x2[3] && x2[3] == x1[4]) { //32
    icons[2].classList.add('winning-animation')
    icons[34].classList.add('winning-animation')
    icons[67].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[133].classList.add('winning-animation')
    winningCoins += 20
  } else if (x2[0] == x1[1] && x1[1] == x1[2] && x1[2] == x2[3] && x2[3] == x2[4]) { //33
    icons[2].classList.add('winning-animation')
    icons[34].classList.add('winning-animation')
    icons[67].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 30
  } else if (x2[0] == x1[1] && x1[1] == x1[2] && x1[2] == x2[3] && x2[3] == x3[4]) { //34
    icons[2].classList.add('winning-animation')
    icons[34].classList.add('winning-animation')
    icons[67].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[135].classList.add('winning-animation')
    winningCoins += 20
  } else if (x2[0] == x1[1] && x1[1] == x2[2] && x2[2] == x1[3] && x1[3] == x1[4]) { //35
    icons[2].classList.add('winning-animation')
    icons[34].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[100].classList.add('winning-animation')
    icons[133].classList.add('winning-animation')
    winningCoins += 20
  } else if (x2[0] == x1[1] && x1[1] == x2[2] && x2[2] == x1[3] && x1[3] == x2[4]) { //36
    icons[2].classList.add('winning-animation')
    icons[34].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[100].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 30
  } else if (x2[0] == x1[1] && x1[1] == x2[2] && x2[2] == x2[3] && x2[3] == x1[4]) { //37
    icons[2].classList.add('winning-animation')
    icons[34].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[133].classList.add('winning-animation')
    winningCoins += 15
  } else if (x2[0] == x1[1] && x1[1] == x2[2] && x2[2] == x2[3] && x2[3] == x2[4]) { //38
    icons[2].classList.add('winning-animation')
    icons[34].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 40
  } else if (x2[0] == x1[1] && x1[1] == x2[2] && x2[2] == x2[3] && x2[3] == x3[4]) { //39
    icons[2].classList.add('winning-animation')
    icons[34].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[135].classList.add('winning-animation')
    winningCoins += 20
  } else if (x2[0] == x1[1] && x1[1] == x2[2] && x2[2] == x3[3] && x3[3] == x2[4]) { //40
    icons[2].classList.add('winning-animation')
    icons[34].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[102].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 30
  } else if (x2[0] == x1[1] && x1[1] == x2[2] && x2[2] == x3[3] && x3[3] == x3[4]) { //41
    icons[2].classList.add('winning-animation')
    icons[34].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[102].classList.add('winning-animation')
    icons[135].classList.add('winning-animation')
    winningCoins += 20
  } else if (x2[0] == x2[1] && x2[1] == x1[2] && x1[2] == x1[3] && x1[3] == x1[4]) { //42
    icons[2].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[67].classList.add('winning-animation')
    icons[100].classList.add('winning-animation')
    icons[133].classList.add('winning-animation')
    winningCoins += 30
  } else if (x2[0] == x2[1] && x2[1] == x1[2] && x1[2] == x1[3] && x1[3] == x2[4]) { //43
    icons[2].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[67].classList.add('winning-animation')
    icons[100].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 20
  } else if (x2[0] == x2[1] && x2[1] == x1[2] && x1[2] == x2[3] && x2[3] == x1[4]) { //44
    icons[2].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[67].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[133].classList.add('winning-animation')
    winningCoins += 20
  } else if (x2[0] == x2[1] && x2[1] == x1[2] && x1[2] == x2[3] && x2[3] == x2[4]) { //45
    icons[2].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[67].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 40
  } else if (x2[0] == x2[1] && x2[1] == x1[2] && x1[2] == x2[3] && x2[3] == x3[4]) { //46
    icons[2].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[67].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[135].classList.add('winning-animation')
    winningCoins += 20
  } else if (x2[0] == x2[1] && x2[1] == x2[2] && x2[2] == x1[3] && x1[3] == x1[4]) { //47
    icons[2].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[100].classList.add('winning-animation')
    icons[133].classList.add('winning-animation')
    winningCoins += 30
  } else if (x2[0] == x2[1] && x2[1] == x2[2] && x2[2] == x1[3] && x1[3] == x2[4]) { //48
    icons[2].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[100].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 40
  } else if (x2[0] == x2[1] && x2[1] == x2[2] && x2[2] == x2[3] && x2[3] == x1[4]) { //49
    icons[2].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[133].classList.add('winning-animation')
    winningCoins += 40
  } else if (x2[0] == x2[1] && x2[1] == x2[2] && x2[2] == x2[3] && x2[3] == x2[4]) { //50
    icons[2].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 50
  } else if (x2[0] == x2[1] && x2[1] == x2[2] && x2[2] == x2[3] && x2[3] == x3[4]) { //51
    icons[2].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[135].classList.add('winning-animation')
    winningCoins += 40
  } else if (x2[0] == x2[1] && x2[1] == x2[2] && x2[2] == x3[3] && x3[3] == x2[4]) { //52
    icons[2].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[102].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 40
  } else if (x2[0] == x2[1] && x2[1] == x2[2] && x2[2] == x3[3] && x3[3] == x3[4]) { //53
    icons[2].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[102].classList.add('winning-animation')
    icons[135].classList.add('winning-animation')
    winningCoins += 30
  } else if (x2[0] == x2[1] && x2[1] == x3[2] && x3[2] == x2[3] && x2[3] == x1[4]) { //54
    icons[2].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[69].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[133].classList.add('winning-animation')
    winningCoins += 20
  } else if (x2[0] == x2[1] && x2[1] == x3[2] && x3[2] == x2[3] && x2[3] == x2[4]) { //55
    icons[2].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[69].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 40
  } else if (x2[0] == x2[1] && x2[1] == x3[2] && x3[2] == x2[3] && x2[3] == x3[4]) { //56
    icons[2].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[69].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[135].classList.add('winning-animation')
    winningCoins += 30
  } else if (x2[0] == x2[1] && x2[1] == x3[2] && x3[2] == x3[3] && x3[3] == x2[4]) { //57
    icons[2].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[69].classList.add('winning-animation')
    icons[102].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 30
  } else if (x2[0] == x2[1] && x2[1] == x3[2] && x3[2] == x3[3] && x3[3] == x3[4]) { //58
    icons[2].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[69].classList.add('winning-animation')
    icons[102].classList.add('winning-animation')
    icons[135].classList.add('winning-animation')
    winningCoins += 30
  } else if (x2[0] == x3[1] && x3[1] == x2[2] && x2[2] == x1[3] && x1[3] == x1[4]) { //59
    icons[2].classList.add('winning-animation')
    icons[36].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[100].classList.add('winning-animation')
    icons[133].classList.add('winning-animation')
    winningCoins += 20
  } else if (x2[0] == x3[1] && x3[1] == x2[2] && x2[2] == x1[3] && x1[3] == x2[4]) { //60
    icons[2].classList.add('winning-animation')
    icons[36].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[100].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 30
  } else if (x2[0] == x3[1] && x3[1] == x2[2] && x2[2] == x2[3] && x2[3] == x1[4]) { //61
    icons[2].classList.add('winning-animation')
    icons[36].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[133].classList.add('winning-animation')
    winningCoins += 20
  } else if (x2[0] == x3[1] && x3[1] == x2[2] && x2[2] == x2[3] && x2[3] == x2[4]) { //63
    icons[2].classList.add('winning-animation')
    icons[36].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 40
  } else if (x2[0] == x3[1] && x3[1] == x2[2] && x2[2] == x2[3] && x2[3] == x3[4]) { //63
    icons[2].classList.add('winning-animation')
    icons[36].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[135].classList.add('winning-animation')
    winningCoins += 30
  } else if (x2[0] == x3[1] && x3[1] == x2[2] && x2[2] == x3[3] && x3[3] == x2[4]) { //64
    icons[2].classList.add('winning-animation')
    icons[36].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[102].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 30
  } else if (x2[0] == x3[1] && x3[1] == x2[2] && x2[2] == x3[3] && x3[3] == x3[4]) { //65
    icons[2].classList.add('winning-animation')
    icons[36].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[102].classList.add('winning-animation')
    icons[135].classList.add('winning-animation')
    winningCoins += 30
  } else  if (x2[0] == x3[1] && x3[1] == x3[2] && x3[2] == x2[3] && x2[3] == x1[4]) { //66
    icons[2].classList.add('winning-animation')
    icons[36].classList.add('winning-animation')
    icons[69].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[133].classList.add('winning-animation')
    winningCoins += 20
  } else if (x2[0] == x3[1] && x3[1] == x3[2] && x3[2] == x2[3] && x2[3] == x2[4]) { //67
    icons[2].classList.add('winning-animation')
    icons[36].classList.add('winning-animation')
    icons[69].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 30
  } else if (x2[0] == x3[1] && x3[1] == x3[2] && x3[2] == x2[3] && x2[3] == x3[4]) { //68
    icons[2].classList.add('winning-animation')
    icons[36].classList.add('winning-animation')
    icons[69].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[135].classList.add('winning-animation')
    winningCoins += 30
  } else if (x2[0] == x3[1] && x3[1] == x3[2] && x3[2] == x3[3] && x3[3] == x2[4]) { //69
    icons[2].classList.add('winning-animation')
    icons[36].classList.add('winning-animation')
    icons[69].classList.add('winning-animation')
    icons[102].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 30
  } else if (x2[0] == x3[1] && x3[1] == x3[2] && x3[2] == x3[3] && x3[3] == x3[4]) { //70
    icons[2].classList.add('winning-animation')
    icons[36].classList.add('winning-animation')
    icons[69].classList.add('winning-animation')
    icons[102].classList.add('winning-animation')
    icons[135].classList.add('winning-animation')
    winningCoins += 40
  } else if (x3[0] == x2[1] && x2[1] == x1[2] && x1[2] == x1[3] && x1[3] == x1[4]) { //71
    icons[3].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[67].classList.add('winning-animation')
    icons[100].classList.add('winning-animation')
    icons[133].classList.add('winning-animation')
    winningCoins += 20
  } else if (x3[0] == x2[1] && x2[1] == x1[2] && x1[2] == x1[3] && x1[3] == x2[4]) { //72
    icons[3].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[67].classList.add('winning-animation')
    icons[100].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 20
  } else if (x3[0] == x2[1] && x2[1] == x1[2] && x1[2] == x2[3] && x2[3] == x1[4]) { //73
    icons[3].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[67].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[133].classList.add('winning-animation')
    winningCoins += 20
  } else if (x3[0] == x2[1] && x2[1] == x1[2] && x1[2] == x2[3] && x2[3] == x2[4]) { //74
    icons[3].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[67].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 20
  } else if (x3[0] == x2[1] && x2[1] == x1[2] && x1[2] == x2[3] && x2[3] == x3[4]) { //75
    icons[3].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[67].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[135].classList.add('winning-animation')
    winningCoins += 30
  } else if (x3[0] == x2[1] && x2[1] == x2[2] && x2[2] == x1[3] && x1[3] == x1[4]) { //76
    icons[3].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[100].classList.add('winning-animation')
    icons[133].classList.add('winning-animation')
    winningCoins += 20
  } else if (x3[0] == x2[1] && x2[1] == x2[2] && x2[2] == x1[3] && x1[3] == x2[4]) { //77
    icons[3].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[100].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 20
  } else if (x3[0] == x2[1] && x2[1] == x2[2] && x2[2] == x2[3] && x2[3] == x1[4]) { //78
    icons[3].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[133].classList.add('winning-animation')
    winningCoins += 30
  } else if (x3[0] == x2[1] && x2[1] == x2[2] && x2[2] == x2[3] && x2[3] == x2[4]) { //79
    icons[3].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 40
  } else if (x3[0] == x2[1] && x2[1] == x2[2] && x2[2] == x2[3] && x2[3] == x3[4]) { //80
    icons[3].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[135].classList.add('winning-animation')
    winningCoins += 30
  } else if (x3[0] == x2[1] && x2[1] == x2[2] && x2[2] == x3[3] && x3[3] == x2[4]) { //81
    icons[3].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[102].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 30
  } else if (x3[0] == x2[1] && x2[1] == x2[2] && x2[2] == x3[3] && x3[3] == x3[4]) { //82
    icons[3].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[102].classList.add('winning-animation')
    icons[135].classList.add('winning-animation')
    winningCoins += 30
  } else if (x3[0] == x2[1] && x2[1] == x3[2] && x3[2] == x2[3] && x2[3] == x1[4]) { //83
    icons[3].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[69].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[133].classList.add('winning-animation')
    winningCoins += 20
  } else if (x3[0] == x2[1] && x2[1] == x3[2] && x3[2] == x2[3] && x2[3] == x2[4]) { //84
    icons[3].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[69].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 30
  } else if (x3[0] == x2[1] && x2[1] == x3[2] && x3[2] == x2[3] && x2[3] == x3[4]) { //85
    icons[3].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[69].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[135].classList.add('winning-animation')
    winningCoins += 30
  } else if (x3[0] == x2[1] && x2[1] == x3[2] && x3[2] == x3[3] && x3[3] == x2[4]) { //86
    icons[3].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[69].classList.add('winning-animation')
    icons[102].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 30
  } else if (x3[0] == x2[1] && x2[1] == x3[2] && x3[2] == x3[3] && x3[3] == x3[4]) { //87
    icons[3].classList.add('winning-animation')
    icons[35].classList.add('winning-animation')
    icons[69].classList.add('winning-animation')
    icons[102].classList.add('winning-animation')
    icons[135].classList.add('winning-animation')
    winningCoins += 40
  } else if (x3[0] == x3[1] && x3[1] == x2[2] && x2[2] == x1[3] && x1[3] == x1[4]) { //88
    icons[3].classList.add('winning-animation')
    icons[36].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[100].classList.add('winning-animation')
    icons[133].classList.add('winning-animation')
    winningCoins += 20
  } else if (x3[0] == x3[1] && x3[1] == x2[2] && x2[2] == x1[3] && x1[3] == x2[4]) { //89
    icons[3].classList.add('winning-animation')
    icons[36].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[100].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 20
  } else if (x3[0] == x3[1] && x3[1] == x2[2] && x2[2] == x2[3] && x2[3] == x1[4]) { //90
    icons[3].classList.add('winning-animation')
    icons[36].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[133].classList.add('winning-animation')
    winningCoins += 20
  } else if (x3[0] == x3[1] && x3[1] == x2[2] && x2[2] == x2[3] && x2[3] == x2[4]) { //91
    icons[3].classList.add('winning-animation')
    icons[36].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 30
  } else if (x3[0] == x3[1] && x3[1] == x2[2] && x2[2] == x2[3] && x2[3] == x3[4]) { //92
    icons[3].classList.add('winning-animation')
    icons[36].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[135].classList.add('winning-animation')
    winningCoins += 30
  } else if (x3[0] == x3[1] && x3[1] == x2[2] && x2[2] == x3[3] && x3[3] == x2[4]) { //93
    icons[3].classList.add('winning-animation')
    icons[36].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[102].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 30
  } else if (x3[0] == x3[1] && x3[1] == x2[2] && x2[2] == x3[3] && x3[3] == x3[4]) { //94
    icons[3].classList.add('winning-animation')
    icons[36].classList.add('winning-animation')
    icons[68].classList.add('winning-animation')
    icons[102].classList.add('winning-animation')
    icons[135].classList.add('winning-animation')
    winningCoins += 40
  } else if (x3[0] == x3[1] && x3[1] == x3[2] && x3[2] == x2[3] && x2[3] == x1[4]) { //95
    icons[3].classList.add('winning-animation')
    icons[36].classList.add('winning-animation')
    icons[69].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[133].classList.add('winning-animation')
    winningCoins += 20
  } else if (x3[0] == x3[1] && x3[1] == x3[2] && x3[2] == x2[3] && x2[3] == x2[4]) { //96
    icons[3].classList.add('winning-animation')
    icons[36].classList.add('winning-animation')
    icons[69].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 30
  } else if (x3[0] == x3[1] && x3[1] == x3[2] && x3[2] == x2[3] && x2[3] == x3[4]) { //97
    icons[3].classList.add('winning-animation')
    icons[36].classList.add('winning-animation')
    icons[69].classList.add('winning-animation')
    icons[101].classList.add('winning-animation')
    icons[135].classList.add('winning-animation')
    winningCoins += 40
  } else if (x3[0] == x3[1] && x3[1] == x3[2] && x3[2] == x3[3] && x3[3] == x2[4]) { //98
    icons[3].classList.add('winning-animation')
    icons[36].classList.add('winning-animation')
    icons[69].classList.add('winning-animation')
    icons[102].classList.add('winning-animation')
    icons[134].classList.add('winning-animation')
    winningCoins += 40
  } else if (x3[0] == x3[1] && x3[1] == x3[2] && x3[2] == x3[3] && x3[3] == x3[4]) { //99
    icons[3].classList.add('winning-animation')
    icons[36].classList.add('winning-animation')
    icons[69].classList.add('winning-animation')
    icons[102].classList.add('winning-animation')
    icons[135].classList.add('winning-animation')
    winningCoins += 50
  } else {
    winningCoins += 0
  }
}