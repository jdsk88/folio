function solution(N) {
    const X = Array.from(new Set(N)).filter(x => x > 0).sort((a, b) => a - b);
    let i = 1;
    for (const val of X) {
        if (i < val) {
            return i;
        }
        i++;
    }
    return console.log(i);
}
solution()