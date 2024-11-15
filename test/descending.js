function descendingOrder(n){
    console.log(typeof(n));
    console.log(typeof(n.toString()));
    const descendNum = n.toString().split('').sort((a, b) => b - a).join('');
    console.log(descendNum)
    const largNum = parseInt(descendNum, 10)
    return largNum;
  }
descendingOrder(1021);