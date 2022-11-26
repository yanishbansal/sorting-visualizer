function mergeSort() {
    mergeSort_(0, arraySize - 1);
    enableButtons(delay);
}

function mergeSort_(l, r) {
    if (l >= r) {
        return;
    }
    let mid = Math.floor(l + (r - l) / 2);
    updateBarColor(barsArray[mid], "#ff0000", (delay += speed));
    mergeSort_(l, mid);
    mergeSort_(mid + 1, r);
    merge(l, mid, r);
}

function merge(l, m, r) {
    let temp = [];
    let i = l,
        j = m + 1;
    while (i <= m && j <= r) {
        if (array[i] <= array[j]) {
            temp.push(array[i]);
            updateBarColor(barsArray[i], "#57a846", (delay += speed));
            i++;
        } else {
            temp.push(array[j]);
            updateBarColor(barsArray[j], "#57a846", (delay += speed));
            j++;
        }
    }
    while (i <= m) {
        temp.push(array[i]);
        updateBarColor(barsArray[i], "#57a846", (delay += speed));
        i++;
    }
    while (j <= r) {
        temp.push(array[j]);
        updateBarColor(barsArray[j], "#57a846", (delay += speed));
        j++;
    }
    for (let x = 0; x < temp.length; x++) {
        array[l + x] = temp[x];
        updateBarHeight_(barsArray[l + x], array[l + x], (delay += speed));
        updateBarColor(barsArray[l + x], "#b979ec", delay);
    }
}
