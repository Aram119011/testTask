


function generateCombinations(arr, length) {
    const result = [];
    function combine(prefix, start) {
        if (prefix.length === length) {
            result.push(prefix);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            combine([...prefix, arr[i]], i + 1);
        }
    }
    combine([], 0);
    return result;
}

module.exports = generateCombinations;
