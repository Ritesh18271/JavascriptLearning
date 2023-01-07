console.log("----------- fibonacci series  -------------");

    const num = 7;
    let a = 0;
    let b = 1;
    console.log(a);
    console.log(b);
    for (let index = 0; index <= 5; index++) {
       let temp = a + b ;
       console.log(temp);
       a = b;
       b = temp;
      
    }
    // 0 1 2 3  4 5  6 7
    // 1 2