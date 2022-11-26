function selectionSort() {
    for (let i = 0; i < arraySize; i++) {
        let min = i;
        updateBarColor(barsArray[i], "#ff0000", delay);
        for (let j = i + 1; j < arraySize; j++) {
            if (j - 1 >= 0 && j - 1 != min) {
                updateBarColor(barsArray[j - 1], barColor, delay + speed);
            }
            updateBarColor(barsArray[j], "#57a846", (delay += speed));
            if (array[j] < array[min]) {
                updateBarColor(barsArray[min], barColor, delay);
                updateBarColor(barsArray[j], "#ff0000", delay);
                min = j;
            }
        }
        updateBarColor(barsArray[arraySize - 1], barColor, (delay += speed));
        swap(array, i, min);
        updateBarHeight(barsArray[i], barsArray[min], (delay += speed));
        updateBarColor(barsArray[min], barColor, delay);
        updateBarColor(barsArray[i], "#b979ec", delay);
    }
    enableButtons(delay);
}
