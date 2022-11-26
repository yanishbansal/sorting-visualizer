function quickSort() {
    quickSort_(0, arraySize - 1);
    enableButtons(delay);
}

function quickSort_(l, r) {
    if (l > r) {
        return;
    }
    let pivIdx = partition(l, r);
    quickSort_(l, pivIdx - 1);
    quickSort_(pivIdx + 1, r);
}

function partition(l, r) {
    let pivot = array[r];
    updateBarColor(barsArray[r], "#ff0000", delay);
    let i = l,
        j = l;
    while (j <= r) {
        let ifBlock = false;
        if (array[j] > pivot) {
            updateBarColor(barsArray[j], "#57a846", (delay += speed));
            j++;
            ifBlock = true;
        } else {
            swap(array, i, j);
            updateBarColor(barsArray[j], "#57a846", (delay += speed));
            updateBarColor(barsArray[i], "#57a846", delay);
            updateBarHeight(barsArray[i], barsArray[j], delay);
            i++;
            j++;
        }
        if (ifBlock === false) {
            updateBarColor(barsArray[i - 1], barColor, delay + speed);
        }
        updateBarColor(barsArray[j - 1], barColor, delay + speed);
    }
    updateBarColor(barsArray[i - 1], "#b979ec", delay + speed);
    return i - 1;
}
