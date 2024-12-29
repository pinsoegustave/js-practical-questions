// 4. **Merging Objects with Priority:**
//     - Given two objects:
const defaultSettings = { theme: "light", notifications: true };
const userSettings = { theme: "dark" };
//     Write a program to merge them so that `userSettings` overrides any matching keys in `defaultSettings`.

const solution = Object.assign(defaultSettings, userSettings);
console.log(solution);