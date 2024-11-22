function getDrinkByProfession(param){

    let word = param.toLowerCase();
    
    switch(word) {
       
        case "jabroni": 
          param = "Patron Tequila"
        break;
        case "school counselor":
          param = "Anything with Alcohol"
        break;
        case "programmer":
          param = "Hipster Craft Beer"
        break;
        case "bike gang member":
          param = "Moonshine"
        break;
        case "politician":
          param = "Your tax dollars"
        break;
        case "rapper":
          param = "Cristal"
        break;
         default: 
            param = "Beer";
        break;
        
    }
    return param;
  
}
console.log(getDrinkByProfession("bike gang Member"));