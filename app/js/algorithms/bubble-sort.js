function bubbleSort() {
    let lastUpdatedIdx = arraySize - 1;
    for (let i = 0; i < arraySize; i++) {
        let isSwapped = false;
        for (let j = 0; j < arraySize - i - 1; j++) {
            if (j > 0) {
                updateBarColor(barsArray[j - 1], barColor, delay + speed);
            }
            updateBarColor(barsArray[j], "#57a846", (delay += speed));
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
                updateBarColor(barsArray[j], "#ff0000", delay);
                updateBarColor(barsArray[j + 1], "#ff0000", (delay += speed));
                updateBarHeight(
                    barsArray[j],
                    barsArray[j + 1],
                    (delay += speed)
                );
            }
            isSwapped = true;
        }
        if (isSwapped == false) {
            break;
        }
        if (lastUpdatedIdx - 1 >= 0) {
            updateBarColor(
                barsArray[lastUpdatedIdx - 1],
                barColor,
                (delay += speed)
            );
        }
        updateBarColor(barsArray[lastUpdatedIdx--], "#b979ec", delay);
    }
    updateBarColor(barsArray[0], "#b979ec", (delay += speed));
    enableButtons(delay);
}
