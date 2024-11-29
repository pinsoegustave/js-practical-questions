function past(h, m, s){
    //#Happy Coding! ^_^
    if ( h === 0 ) return 1;
    
    let mins = 60*h;
    let secs = 60*mins;
    if (s === 0) return 1;
    
    let lsecs = 1000*secs*s;
     

    console.log(lsecs);
}
past(1,0,0);
past(1,0,1);