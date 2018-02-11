export function winningLogic(x1 = [], x2 = [], x3 = []) { // x1 == firstLine, x2 == secondLine...

  if (x1[0] == x1[1] && x1[1] == x1[2] && x1[2] == x1[3] && x1[3] == x1[4]) { //1
    return {
      winningIcons: [1, 34, 67, 100, 133],
      winningCoins: 50
    }
  } else if (x1[0] == x1[1] && x1[1] == x1[2] && x1[2] == x1[3] && x1[3] == x2[4]) { //2
    return {
      winningIcons: [1, 34, 67, 100, 134],
      winningCoins: 40
    }
  } else if (x1[0] == x1[1] && x1[1] == x1[2] && x1[2] == x2[3] && x2[3] == x1[4]) { //3
    return {
      winningIcons: [1, 34, 67, 101, 133],
      winningCoins: 40
    }
  } else if (x1[0] == x1[1] && x1[1] == x1[2] && x1[2] == x2[3] && x2[3] == x2[4]) { //4
    return {
      winningIcons: [1, 34, 67, 101, 134],
      winningCoins: 40
    }
  } else if (x1[0] == x1[1] && x1[1] == x1[2] && x1[2] == x2[3] && x2[3] == x3[4]) { //5
    return {
      winningIcons: [1, 34, 67, 101, 135],
      winningCoins: 30
    }
  } else if (x1[0] == x1[1] && x1[1] == x2[2] && x2[2] == x1[3] && x1[3] == x1[4]) { //6
    return {
      winningIcons: [1, 34, 68, 100, 133],
      winningCoins: 40
    }
  } else if (x1[0] == x1[1] && x1[1] == x2[2] && x2[2] == x1[3] && x1[3] == x2[4]) { //7
    return {
      winningIcons: [1, 34, 68, 100, 134],
      winningCoins: 30
    }
  } else if (x1[0] == x1[1] && x1[1] == x2[2] && x2[2] == x2[3] && x2[3] == x1[4]) { //8
    return {
      winningIcons: [1, 34, 68, 101, 133],
      winningCoins: 30
    }
  } else if (x1[0] == x1[1] && x1[1] == x2[2] && x2[2] == x2[3] && x2[3] == x2[4]) { //9
    return {
      winningIcons: [1, 34, 68, 101, 134],
      winningCoins: 30
    }
  } else if (x1[0] == x1[1] && x1[1] == x2[2] && x2[2] == x2[3] && x2[3] == x3[4]) { //10
    return {
      winningIcons: [1, 34, 68, 101, 135],
      winningCoins: 20
    }
  } else if (x1[0] == x1[1] && x1[1] == x2[2] && x2[2] == x3[3] && x3[3] == x2[4]) { //11
    return {
      winningIcons: [1, 34, 68, 102, 134],
      winningCoins: 10
    }
  } else if (x1[0] == x1[1] && x1[1] == x2[2] && x2[2] == x3[3] && x3[3] == x3[4]) { //12
    return {
      winningIcons: [1, 34, 68, 102, 135],
      winningCoins: 15
    }
  } else if (x1[0] == x2[1] && x2[1] == x1[2] && x1[2] == x1[3] && x1[3] == x1[4]) { //13
    return {
      winningIcons: [1, 35, 67, 100, 133],
      winningCoins: 40
    }
  } else if (x1[0] == x2[1] && x2[1] == x1[2] && x1[2] == x1[3] && x1[3] == x2[4]) { //14
    return {
      winningIcons: [1, 35, 67, 100, 134],
      winningCoins: 20
    }
  } else if (x1[0] == x2[1] && x2[1] == x1[2] && x1[2] == x2[3] && x2[3] == x1[4]) { //15
    return {
      winningIcons: [1, 35, 67, 101, 134],
      winningCoins: 30
    }
  } else if (x1[0] == x2[1] && x2[1] == x1[2] && x1[2] == x2[3] && x2[3] == x2[4]) { //16
    return {
      winningIcons: [1, 35, 67, 101, 134],
      winningCoins: 15
    }
  } else if (x1[0] == x2[1] && x2[1] == x1[2] && x1[2] == x2[3] && x2[3] == x3[4]) { //17
    return {
      winningIcons: [1, 35, 67, 101, 135],
      winningCoins: 10
    }
  } else if (x1[0] == x2[1] && x2[1] == x2[2] && x2[2] == x1[3] && x1[3] == x1[4]) { //18
    return {
      winningIcons: [1, 35, 68, 100, 133],
      winningCoins: 30
    }
  } else if (x1[0] == x2[1] && x2[1] == x2[2] && x2[2] == x1[3] && x1[3] == x2[4]) { //19
    return {
      winningIcons: [1, 35, 68, 100, 134],
      winningCoins: 10
    }
  } else if (x1[0] == x2[1] && x2[1] == x2[2] && x2[2] == x2[3] && x2[3] == x1[4]) { //20
    return {
      winningIcons: [1, 35, 68, 101, 133],
      winningCoins: 20
    }
  } else if (x1[0] == x2[1] && x2[1] == x2[2] && x2[2] == x2[3] && x2[3] == x2[4]) { //21
    return {
      winningIcons: [1, 35, 68, 101, 134],
      winningCoins: 40
    }
  } else if (x1[0] == x2[1] && x2[1] == x2[2] && x2[2] == x2[3] && x2[3] == x3[4]) { //22
    return {
      winningIcons: [1, 35, 68, 101, 135],
      winningCoins: 20
    }
  } else if (x1[0] == x2[1] && x2[1] == x2[2] && x2[2] == x3[3] && x3[3] == x2[4]) { //23
    return {
      winningIcons: [1, 35, 68, 102, 134],
      winningCoins: 15
    }
  } else if (x1[0] == x2[1] && x2[1] == x2[2] && x2[2] == x3[3] && x3[3] == x3[4]) { //24
    return {
      winningIcons: [1, 35, 68, 102, 135],
      winningCoins: 15
    }
  } else if (x1[0] == x2[1] && x2[1] == x3[2] && x3[2] == x2[3] && x2[3] == x1[4]) { //25
    return {
      winningIcons: [1, 35, 69, 101, 133],
      winningCoins: 35
    }
  } else if (x1[0] == x2[1] && x2[1] == x3[2] && x3[2] == x2[3] && x2[3] == x2[4]) { //26
    return {
      winningIcons: [1, 35, 69, 101, 134],
      winningCoins: 15
    }
  } else if (x1[0] == x2[1] && x2[1] == x3[2] && x3[2] == x2[3] && x2[3] == x3[4]) { //27
    return {
      winningIcons: [1, 35, 69, 101, 135],
      winningCoins: 20
    }
  } else if (x1[0] == x2[1] && x2[1] == x3[2] && x3[2] == x3[3] && x3[3] == x2[4]) { //28
    return {
      winningIcons: [1, 35, 69, 102, 134],
      winningCoins: 20
    }
  } else if (x1[0] == x2[1] && x2[1] == x3[2] && x3[2] == x3[3] && x3[3] == x3[4]) { //29
    return {
      winningIcons: [1, 35, 69, 102, 135],
      winningCoins: 30
    }
  } else if (x2[0] == x1[1] && x1[1] == x1[2] && x1[2] == x1[3] && x1[3] == x1[4]) { //30
    return {
      winningIcons: [2, 34, 67, 100, 133],
      winningCoins: 40
    }
  } else if (x2[0] == x1[1] && x1[1] == x1[2] && x1[2] == x1[3] && x1[3] == x2[4]) { //31
    return {
      winningIcons: [2, 34, 67, 100, 134],
      winningCoins: 30
    }
  } else if (x2[0] == x1[1] && x1[1] == x1[2] && x1[2] == x2[3] && x2[3] == x1[4]) { //32
    return {
      winningIcons: [2, 34, 67, 101, 133],
      winningCoins: 20
    }
  } else if (x2[0] == x1[1] && x1[1] == x1[2] && x1[2] == x2[3] && x2[3] == x2[4]) { //33
    return {
      winningIcons: [2, 34, 67, 101, 134],
      winningCoins: 30
    }
  } else if (x2[0] == x1[1] && x1[1] == x1[2] && x1[2] == x2[3] && x2[3] == x3[4]) { //34
    return {
      winningIcons: [2, 34, 67, 101, 135],
      winningCoins: 20
    }
  } else if (x2[0] == x1[1] && x1[1] == x2[2] && x2[2] == x1[3] && x1[3] == x1[4]) { //35
    return {
      winningIcons: [2, 34, 68, 100, 133],
      winningCoins: 20
    }
  } else if (x2[0] == x1[1] && x1[1] == x2[2] && x2[2] == x1[3] && x1[3] == x2[4]) { //36
    return {
      winningIcons: [2, 34, 68, 100, 134],
      winningCoins: 30
    }
  } else if (x2[0] == x1[1] && x1[1] == x2[2] && x2[2] == x2[3] && x2[3] == x1[4]) { //37
    return {
      winningIcons: [2, 34, 68, 101, 133],
      winningCoins: 15
    }
  } else if (x2[0] == x1[1] && x1[1] == x2[2] && x2[2] == x2[3] && x2[3] == x2[4]) { //38
    return {
      winningIcons: [2, 34, 68, 101, 134],
      winningCoins: 40
    }
  } else if (x2[0] == x1[1] && x1[1] == x2[2] && x2[2] == x2[3] && x2[3] == x3[4]) { //39
    return {
      winningIcons: [2, 34, 68, 101, 135],
      winningCoins: 20
    }
  } else if (x2[0] == x1[1] && x1[1] == x2[2] && x2[2] == x3[3] && x3[3] == x2[4]) { //40
    return {
      winningIcons: [2, 34, 68, 102, 134],
      winningCoins: 30
    }
  } else if (x2[0] == x1[1] && x1[1] == x2[2] && x2[2] == x3[3] && x3[3] == x3[4]) { //41
    return {
      winningIcons: [2, 34, 68, 102, 135],
      winningCoins: 20
    }
  } else if (x2[0] == x2[1] && x2[1] == x1[2] && x1[2] == x1[3] && x1[3] == x1[4]) { //42
    return {
      winningIcons: [2, 35, 67, 100, 133],
      winningCoins: 30
    }
  } else if (x2[0] == x2[1] && x2[1] == x1[2] && x1[2] == x1[3] && x1[3] == x2[4]) { //43
    return {
      winningIcons: [2, 35, 67, 100, 134],
      winningCoins: 20
    }
  } else if (x2[0] == x2[1] && x2[1] == x1[2] && x1[2] == x2[3] && x2[3] == x1[4]) { //44
    return {
      winningIcons: [2, 35, 67, 101, 133],
      winningCoins: 20
    }
  } else if (x2[0] == x2[1] && x2[1] == x1[2] && x1[2] == x2[3] && x2[3] == x2[4]) { //45
    return {
      winningIcons: [2, 35, 67, 101, 134],
      winningCoins: 40
    }
  } else if (x2[0] == x2[1] && x2[1] == x1[2] && x1[2] == x2[3] && x2[3] == x3[4]) { //46
    return {
      winningIcons: [2, 35, 67, 101, 135],
      winningCoins: 20
    }
  } else if (x2[0] == x2[1] && x2[1] == x2[2] && x2[2] == x1[3] && x1[3] == x1[4]) { //47
    return {
      winningIcons: [2, 35, 68, 100, 133],
      winningCoins: 30
    }
  } else if (x2[0] == x2[1] && x2[1] == x2[2] && x2[2] == x1[3] && x1[3] == x2[4]) { //48
    return {
      winningIcons: [2, 35, 68, 100, 134],
      winningCoins: 40
    }
  } else if (x2[0] == x2[1] && x2[1] == x2[2] && x2[2] == x2[3] && x2[3] == x1[4]) { //49
    return {
      winningIcons: [2, 35, 68, 101, 133],
      winningCoins: 40
    }
  } else if (x2[0] == x2[1] && x2[1] == x2[2] && x2[2] == x2[3] && x2[3] == x2[4]) { //50
    return {
      winningIcons: [2, 35, 68, 101, 134],
      winningCoins: 50
    }
  } else if (x2[0] == x2[1] && x2[1] == x2[2] && x2[2] == x2[3] && x2[3] == x3[4]) { //51
    return {
      winningIcons: [2, 35, 68, 101, 135],
      winningCoins: 40
    }
  } else if (x2[0] == x2[1] && x2[1] == x2[2] && x2[2] == x3[3] && x3[3] == x2[4]) { //52
    return {
      winningIcons: [2, 35, 68, 102, 134],
      winningCoins: 40
    }
  } else if (x2[0] == x2[1] && x2[1] == x2[2] && x2[2] == x3[3] && x3[3] == x3[4]) { //53
    return {
      winningIcons: [2, 35, 68, 102, 135],
      winningCoins: 30
    }
  } else if (x2[0] == x2[1] && x2[1] == x3[2] && x3[2] == x2[3] && x2[3] == x1[4]) { //54
    return {
      winningIcons: [2, 35, 69, 101, 133],
      winningCoins: 20
    }
  } else if (x2[0] == x2[1] && x2[1] == x3[2] && x3[2] == x2[3] && x2[3] == x2[4]) { //55
    return {
      winningIcons: [2, 35, 69, 101, 134],
      winningCoins: 40
    }
  } else if (x2[0] == x2[1] && x2[1] == x3[2] && x3[2] == x2[3] && x2[3] == x3[4]) { //56
    return {
      winningIcons: [2, 35, 69, 101, 135],
      winningCoins: 30
    }
  } else if (x2[0] == x2[1] && x2[1] == x3[2] && x3[2] == x3[3] && x3[3] == x2[4]) { //57
    return {
      winningIcons: [2, 35, 69, 102, 134],
      winningCoins: 30
    }
  } else if (x2[0] == x2[1] && x2[1] == x3[2] && x3[2] == x3[3] && x3[3] == x3[4]) { //58
    return {
      winningIcons: [2, 35, 69, 102, 135],
      winningCoins: 30
    }
  } else if (x2[0] == x3[1] && x3[1] == x2[2] && x2[2] == x1[3] && x1[3] == x1[4]) { //59
    return {
      winningIcons: [2, 36, 68, 100, 133],
      winningCoins: 20
    }
  } else if (x2[0] == x3[1] && x3[1] == x2[2] && x2[2] == x1[3] && x1[3] == x2[4]) { //60
    return {
      winningIcons: [2, 36, 68, 100, 134],
      winningCoins: 30
    }
  } else if (x2[0] == x3[1] && x3[1] == x2[2] && x2[2] == x2[3] && x2[3] == x1[4]) { //61
    return {
      winningIcons: [2, 36, 68, 101, 133],
      winningCoins: 20
    }
  } else if (x2[0] == x3[1] && x3[1] == x2[2] && x2[2] == x2[3] && x2[3] == x2[4]) { //63
    return {
      winningIcons: [2, 36, 68, 101, 134],
      winningCoins: 40
    }
  } else if (x2[0] == x3[1] && x3[1] == x2[2] && x2[2] == x2[3] && x2[3] == x3[4]) { //63
    return {
      winningIcons: [2, 36, 68, 101, 135],
      winningCoins: 30
    }
  } else if (x2[0] == x3[1] && x3[1] == x2[2] && x2[2] == x3[3] && x3[3] == x2[4]) { //64
    return {
      winningIcons: [2, 36, 68, 102, 134],
      winningCoins: 30
    }
  } else if (x2[0] == x3[1] && x3[1] == x2[2] && x2[2] == x3[3] && x3[3] == x3[4]) { //65
    return {
      winningIcons: [2, 36, 68, 102, 135],
      winningCoins: 30
    }
  } else  if (x2[0] == x3[1] && x3[1] == x3[2] && x3[2] == x2[3] && x2[3] == x1[4]) { //66
    return {
      winningIcons: [2, 36, 69, 101, 133],
      winningCoins: 20
    }
  } else if (x2[0] == x3[1] && x3[1] == x3[2] && x3[2] == x2[3] && x2[3] == x2[4]) { //67
    return {
      winningIcons: [2, 36, 69, 101, 134],
      winningCoins: 30
    }
  } else if (x2[0] == x3[1] && x3[1] == x3[2] && x3[2] == x2[3] && x2[3] == x3[4]) { //68
    return {
      winningIcons: [2, 36, 69, 101, 135],
      winningCoins: 30
    }
  } else if (x2[0] == x3[1] && x3[1] == x3[2] && x3[2] == x3[3] && x3[3] == x2[4]) { //69
    return {
      winningIcons: [2, 36, 69, 102, 134],
      winningCoins: 30
    }
  } else if (x2[0] == x3[1] && x3[1] == x3[2] && x3[2] == x3[3] && x3[3] == x3[4]) { //70
    return {
      winningIcons: [2, 36, 69, 102, 135],
      winningCoins: 40
    }
  } else if (x3[0] == x2[1] && x2[1] == x1[2] && x1[2] == x1[3] && x1[3] == x1[4]) { //71
    return {
      winningIcons: [3, 35, 67, 100, 133],
      winningCoins: 20
    }
  } else if (x3[0] == x2[1] && x2[1] == x1[2] && x1[2] == x1[3] && x1[3] == x2[4]) { //72
    return {
      winningIcons: [3, 35, 67, 100, 134],
      winningCoins: 20
    }
  } else if (x3[0] == x2[1] && x2[1] == x1[2] && x1[2] == x2[3] && x2[3] == x1[4]) { //73
    return {
      winningIcons: [3, 35, 67, 101, 133],
      winningCoins: 20
    }
  } else if (x3[0] == x2[1] && x2[1] == x1[2] && x1[2] == x2[3] && x2[3] == x2[4]) { //74
    return {
      winningIcons: [3, 35, 67, 101, 134],
      winningCoins: 20
    }
  } else if (x3[0] == x2[1] && x2[1] == x1[2] && x1[2] == x2[3] && x2[3] == x3[4]) { //75
    return {
      winningIcons: [3, 35, 67, 101, 135],
      winningCoins: 30
    }
  } else if (x3[0] == x2[1] && x2[1] == x2[2] && x2[2] == x1[3] && x1[3] == x1[4]) { //76
    return {
      winningIcons: [3, 35, 68, 100, 133],
      winningCoins: 20
    }
  } else if (x3[0] == x2[1] && x2[1] == x2[2] && x2[2] == x1[3] && x1[3] == x2[4]) { //77
    return {
      winningIcons: [3, 35, 68, 100, 134],
      winningCoins: 20
    }
  } else if (x3[0] == x2[1] && x2[1] == x2[2] && x2[2] == x2[3] && x2[3] == x1[4]) { //78
    return {
      winningIcons: [3, 35, 68, 101, 133],
      winningCoins: 30
    }
  } else if (x3[0] == x2[1] && x2[1] == x2[2] && x2[2] == x2[3] && x2[3] == x2[4]) { //79
    return {
      winningIcons: [3, 35, 68, 101, 134],
      winningCoins: 40
    }
  } else if (x3[0] == x2[1] && x2[1] == x2[2] && x2[2] == x2[3] && x2[3] == x3[4]) { //80
    return {
      winningIcons: [3, 35, 68, 101, 135],
      winningCoins: 30
    }
  } else if (x3[0] == x2[1] && x2[1] == x2[2] && x2[2] == x3[3] && x3[3] == x2[4]) { //81
    return {
      winningIcons: [3, 35, 68, 102, 134],
      winningCoins: 30
    }
  } else if (x3[0] == x2[1] && x2[1] == x2[2] && x2[2] == x3[3] && x3[3] == x3[4]) { //82
    return {
      winningIcons: [3, 35, 68, 102, 135],
      winningCoins: 30
    }
  } else if (x3[0] == x2[1] && x2[1] == x3[2] && x3[2] == x2[3] && x2[3] == x1[4]) { //83
    return {
      winningIcons: [3, 35, 69, 101, 133],
      winningCoins: 20
    }
  } else if (x3[0] == x2[1] && x2[1] == x3[2] && x3[2] == x2[3] && x2[3] == x2[4]) { //84
    return {
      winningIcons: [3, 35, 69, 101, 134],
      winningCoins: 30
    }
  } else if (x3[0] == x2[1] && x2[1] == x3[2] && x3[2] == x2[3] && x2[3] == x3[4]) { //85
    return {
      winningIcons: [3, 35, 69, 101, 135],
      winningCoins: 30
    }
  } else if (x3[0] == x2[1] && x2[1] == x3[2] && x3[2] == x3[3] && x3[3] == x2[4]) { //86
    return {
      winningIcons: [3, 35, 69, 102, 134],
      winningCoins: 30
    }
  } else if (x3[0] == x2[1] && x2[1] == x3[2] && x3[2] == x3[3] && x3[3] == x3[4]) { //87
    return {
      winningIcons: [3, 35, 69, 102, 135],
      winningCoins: 40
    }
  } else if (x3[0] == x3[1] && x3[1] == x2[2] && x2[2] == x1[3] && x1[3] == x1[4]) { //88
    return {
      winningIcons: [3, 36, 68, 100, 133],
      winningCoins: 20
    }
  } else if (x3[0] == x3[1] && x3[1] == x2[2] && x2[2] == x1[3] && x1[3] == x2[4]) { //89
    return {
      winningIcons: [3, 36, 68, 100, 134],
      winningCoins: 20
    }
  } else if (x3[0] == x3[1] && x3[1] == x2[2] && x2[2] == x2[3] && x2[3] == x1[4]) { //90
    return {
      winningIcons: [3, 36, 68, 101, 133],
      winningCoins: 20
    }
  } else if (x3[0] == x3[1] && x3[1] == x2[2] && x2[2] == x2[3] && x2[3] == x2[4]) { //91
    return {
      winningIcons: [3, 36, 68, 101, 134],
      winningCoins: 30
    }
  } else if (x3[0] == x3[1] && x3[1] == x2[2] && x2[2] == x2[3] && x2[3] == x3[4]) { //92
    return {
      winningIcons: [3, 36, 68, 101, 134],
      winningCoins: 30
    }
  } else if (x3[0] == x3[1] && x3[1] == x2[2] && x2[2] == x3[3] && x3[3] == x2[4]) { //93
    return {
      winningIcons: [3, 36, 68, 102, 134],
      winningCoins: 30
    }
  } else if (x3[0] == x3[1] && x3[1] == x2[2] && x2[2] == x3[3] && x3[3] == x3[4]) { //94
    return {
      winningIcons: [3, 36, 68, 102, 135],
      winningCoins: 40
    }
  } else if (x3[0] == x3[1] && x3[1] == x3[2] && x3[2] == x2[3] && x2[3] == x1[4]) { //95
    return {
      winningIcons: [3, 36, 69, 101, 133],
      winningCoins: 20
    }
  } else if (x3[0] == x3[1] && x3[1] == x3[2] && x3[2] == x2[3] && x2[3] == x2[4]) { //96
    return {
      winningIcons: [3, 36, 69, 101, 134],
      winningCoins: 30
    }
  } else if (x3[0] == x3[1] && x3[1] == x3[2] && x3[2] == x2[3] && x2[3] == x3[4]) { //97
    return {
      winningIcons: [3, 36, 69, 101, 135],
      winningCoins: 40
    }
  } else if (x3[0] == x3[1] && x3[1] == x3[2] && x3[2] == x3[3] && x3[3] == x2[4]) { //98
    return {
      winningIcons: [3, 36, 69, 102, 134],
      winningCoins: 40
    }
  } else if (x3[0] == x3[1] && x3[1] == x3[2] && x3[2] == x3[3] && x3[3] == x3[4]) { //99
    return {
      winningIcons: [3, 36, 69, 102, 135],
      winningCoins: 50
    }
  } else if (x1[1] == x2[1] && x2[1] == x3[0] && x3[0] == x3[1] && x3[1] == x3[2]) { //100
    return {
      winningIcons: [34, 35, 3, 36, 69],
      winningCoins: 30
    }
  } else if (x1[2] == x2[2] && x2[2] == x3[1] && x3[1] == x3[2] && x3[2] == x3[3]) { //101
    return {
      winningIcons: [67, 68, 36, 69, 102],
      winningCoins: 30
    }
  } else if (x1[3] == x2[3] && x2[3] == x3[2] && x3[2] == x3[3] && x3[3] == x3[4]) { //102
    return {
      winningIcons: [100, 101, 69, 102, 135],
      winningCoins: 30
    }
  } else if (x1[0] == x1[1] && x1[1] == x1[2] && x1[2] == x2[1] && x2[1] == x3[1]) { //103
    return {
      winningIcons: [1, 34, 67, 35, 36],
      winningCoins: 30
    }
  } else if (x1[1] == x1[2] && x1[2] == x1[3] && x1[3] == x2[2] && x2[2] == x3[2]) { //104
    return {
      winningIcons: [34, 67, 100, 68, 69],
      winningCoins: 30
    }
  } else if (x1[2] == x1[3] && x1[3] == x1[4] && x1[4] == x2[3] && x2[3] == x3[3]) { //105
    return {
      winningIcons: [67, 100, 133, 101, 102],
      winningCoins: 30
    }
  } else if (x1[0] == x1[4] && x1[4] == x2[2] && x2[2] == x3[0] && x3[0] == x3[4]) { //106
    return {
      winningIcons: [1, 133, 68, 3, 135],
      winningCoins: 30
    }
  } else if (x2[0] == x2[1] && x2[1] == x1[2] && x1[2] == x2[2] && x2[2] == x3[2]) { //107
    return {
      winningIcons: [2, 35, 67, 68, 69],
      winningCoins: 30
    }
  } else if (x1[2] == x2[2] && x2[2] == x3[2] && x3[2] == x2[3] && x2[3] == x2[4]) { //108
    return {
      winningIcons: [67, 68, 69, 101, 134],
      winningCoins: 30
    }
  } else if (x2[0] == x1[1] && x1[1] == x2[1] && x2[1] == x3[1] && x3[1] == x2[2]) { //109
    return {
      winningIcons: [2, 34, 35, 36, 68],
      winningCoins: 40
    }
  } else if (x2[1] == x1[2] && x1[2] == x2[2] && x2[2] == x3[2] && x3[2] == x2[3]) { //110
    return {
      winningIcons: [35, 67, 68, 69, 101],
      winningCoins: 40
    }
  } else if (x2[2] == x1[3] && x1[3] == x2[3] && x2[3] == x3[3] && x3[3] == x2[4]) { //111
    return {
      winningIcons: [68, 100, 101, 102, 134],
      winningCoins: 40
    }
  } else if (x1[0] == x2[1] && x2[1] == x3[2]) { //112
    return {
      winningIcons: [1, 35, 69],
      winningCoins: 20
    }
  } else if (x1[1] == x2[2] && x2[2] == x3[3]) { //113
    return {
      winningIcons: [34, 68, 102],
      winningCoins: 20
    }
  } else if (x1[2] == x2[3] && x2[3] == x3[4]) { //114
    return {
      winningIcons: [67, 101, 135],
      winningCoins: 20
    }
  } else if (x3[0] == x2[1] && x2[1] == x1[2]) { //115
    return {
      winningIcons: [3, 35, 67],
      winningCoins: 20
    }
  } else if (x3[1] == x2[2] && x2[2] == x1[3]) { //116
    return {
      winningIcons: [36, 68, 100],
      winningCoins: 20
    }
  } else if (x3[2] == x2[3] && x2[3] == x1[4]) { //117
    return {
      winningIcons: [69, 101, 133],
      winningCoins: 20
    }
  } else if (x1[0] == x2[0] && x2[0] == x3[0]) { //118
    return {
      winningIcons: [1, 2, 3],
      winningCoins: 20
    }
  } else if (x1[1] == x2[1] && x2[1] == x3[1]) { //119
    return {
      winningIcons: [34, 35, 36],
      winningCoins: 30
    }
  } else if (x1[2] == x2[2] && x2[2] == x3[2]) { //120
    return {
      winningIcons: [67, 68, 69],
      winningCoins: 30
    }
  } else if (x1[3] == x2[3] && x2[3] == x3[3]) { //121
    return {
      winningIcons: [100, 101, 102],
      winningCoins: 30
    }
  } else if (x1[4] == x2[4] && x2[4] == x3[4]) { //122
    return {
      winningIcons: [133, 134, 135],
      winningCoins: 30
    }
  }
}