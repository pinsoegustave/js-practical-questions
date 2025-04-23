function fill_gaps(timesheet) {
    const filled = [...timesheet];
      
    for (let i = 1; i < filled.length; i++) {
        if (filled[i] === null && filled[i - 1] !== null) {
            filled[i] = filled[i - 1];
        }
    }
      
    for (let i = filled.length - 2; i >= 0; i--) {
        if (filled[i] === null && filled[i + 1] !== null) {
            filled[i] = filled[i + 1];
        }
    }  
        return filled;
}
      
const timesheet = ['Project A', null, null, 'Project A', 'Project B', null, 'Project B'];
const filledTimesheet = fill_gaps(timesheet);
      
console.log(filledTimesheet);
