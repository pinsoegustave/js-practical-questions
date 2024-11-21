function enough(cap, on, wait) {
    let remainingSpace = cap - on;
  //   let actualSpace = remainingSpace - cap;
    if (remainingSpace >= wait) {
        // console.log(remainingSpace - wait);
        console.log(0);
    }
    else if (remainingSpace < wait) {
        let result = wait - remainingSpace;
        console.log(result);
    }
    // console.log(remainingSpace);
  }

enough(100, 60, 50)  //should return 10;
enough(10, 5, 5)  //should return 0;
enough(20, 5, 5);  //should return 0;
enough(74, 18, 77);
enough(65, 19, 25);
enough(62, 30, 58);  //return 26
