function likes(names) {
    // TODO
    // return names.toString().split(" ") + "likes this";

    let [first, second, ...rest ] = names;
    // if (first === undefined) {
    //     console.log('no one likes this')
    // }
    // if (names.length > 1) {
    //     console.log(names[0] + ", " + names[1] + " and " +  names[2] + " likes this");
    // }
    // console.log(rest.length);
    // const totalRest = ...rest.reduce
    // ßconsole.log(first + " likes this");
    // console.log(names.length === 1 ? names.toString().split(" ") + " likes this" : (names.length === 0 ? (names.length > 1 ? first +" and "+ second +","+" and " + rest.length + " likes this": "Try again man"):"no one likes this"));

    console.log(names.length === 1 ? names.toString().split(" ") + " likes this" : (names.length === 0 ? "no one likes this":(names.length > 1 ? first +" and "+ second + ","+ " and " + rest.length + " likes this": "Try again man")));
  }
  likes([])
  likes(['Peter']);
  likes(['Jacob', 'Alex']);
  likes(['Max', 'John', 'Mark', 'Gustave', 'James', 'Jack']);