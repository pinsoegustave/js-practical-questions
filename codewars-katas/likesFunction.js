function likes(names) {
    // TODO
    let [first, second,  ...rest ] = names;

    let [ , , third] = names;


    console.log(names.length === 1 ? names.toString().split(" ") + " likes this" : (names.length === 0 ? "no one likes this":(names.length > 3 ? first +", "+ second + " and " + rest.length + " others like this": (names.length === 2 ? first +" and "+ second + " like this" : first + ", "+ second + " and " + third + " like this"))));
  }
  // likes([])
  // likes(['Peter']);
  // likes(['Jacob', 'Alex']);
  // likes(['Max', 'John', 'Mark', 'Gustave', 'James', 'Jack']);
  likes(['Alex', 'Jacob', 'Mark', 'Max'])  // 'Alex, Jacob and 2 others like this'
  // likes(['Max', 'John', 'Mark']);