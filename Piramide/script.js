function createPyramid(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';

        for (let j = 1; j <= n - i; j++) {
            row += ' ';
        }

        for (let k = 1; k <= 2 * i - 1; k++) {
            row += '*';
        }

        for (let l = 1; l <= n - i; l++) {
            row += ' ';
        }
        console.log(row);
    }
}

// Пример использования:
createPyramid(15);
createPyramid(5);
createPyramid(20);
