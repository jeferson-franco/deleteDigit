function solution(n) {
    let max = 0;
    const str = n.toString();
    for (let i = 0; i < str.length; i++) {
        const num = parseInt(str.slice(0, i) + str.slice(i + 1));
        if (num > max) {
            max = num;
        }
    }
    return max;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test deleteDigit

// alternative solution
