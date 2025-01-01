function past(h, m, s){
    //#Happy Coding! ^_^
    if ( h === 0 ) h = 1;
    
    let mins = 60*h;
    console.log(mins);

    let secs = 60*mins
    console.log(secs);

    let mlsec = 1000*secs;
    console.log(mlsec);
}
console.log(past(0, 1, 1)); // should return 6100
   