function formatDuration(seconds) {
    if (seconds === 0) return "now";
    
    const timeUnits = [
        { unit: "year", seconds: 31536000 },
        { unit: "day", seconds: 86400 },
        { unit: "hour", seconds: 3600 },
        { unit: "minute", seconds: 60 },
        { unit: "second", seconds: 1 }
    ];
    
    let result = [];
    
    for (let { unit, seconds: unitSeconds } of timeUnits) {
        if (seconds >= unitSeconds) {
            let unitValue = Math.floor(seconds / unitSeconds);
            seconds %= unitSeconds;
            result.push(`${unitValue} ${unit}${unitValue > 1 ? 's' : ''}`);
        }
    }
    
    return result.length > 1 
        ? result.slice(0, -1).join(", ") + " and " + result.slice(-1) 
        : result[0];
}
console.log(formatDuration(3662));
console.log(formatDuration(3662));
console.log(formatDuration(0));