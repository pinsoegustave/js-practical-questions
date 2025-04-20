function one(call_two) {
    call_two();

    
    console.log(" step 1 complete. Please call step 2w");

}

function two() {
    console.log(" step 2 ")
}

one(two);