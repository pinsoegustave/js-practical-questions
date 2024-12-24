// Before we wrap up, let’s put your knowledge of JavaScript Date and Time to the test! Can you solve the following challenge?

// Challenge:
// Write a function to convert a date from "dd-mm-yyyy" format to "mm-dd-yyyy" format.

// Suppose the input date string "15-02-2020", is given in the "dd-mm-yyyy" format.
// Return date after converting it to "mm-dd-yyyy" format, i.e., "02-15-2020".
// For example, if date = "15-02-2020", the expected output is "02-15-2020".

function convertDateFormat(date) {
    const parts = date.split("-");

    // Check if the input date is valid (it should have exactly 3 parts)
    if (parts.length !== 3) {
        return "Invalid date format";
    }

    // Rearrange the parts to "mm-dd-yyyy" format
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];

    // Return the new formatted date
    return `${month}-${day}-${year}`;
}

console.log(convertDateFormat("15-02-2020")); // expected 02-15-2020