const algorithmBtn = document.querySelector(".algorithm-button"),
    algorithmsContainer = document.querySelector(".algorithms-container"),
    algoArrow = document.querySelector(".algorithm-down-arrow"),
    algorithms = document.querySelectorAll(".algorithm-text"),
    controlsBtn = document.querySelector(".controls-button"),
    controlsContainer = document.querySelector(".controls-container"),
    controlsArrow = document.querySelector(".controls-down-arrow"),
    nav = document.querySelector(".nav"),
    randomizeBtn = document.querySelector(".randomize-button"),
    arraySizeSlider = document.querySelector(".array-size-slider"),
    speedSlider = document.querySelector(".speed-slider"),
    sortBtn = document.querySelector(".sort-btn"),
    main = document.querySelector(".main");

let isAlgorithmsContainerVisible = false;
let isControlsContainerVisible = false;

const MAX_SPEED = 1100;
let array = [];
let barsArray = [];
let arraySize = 15;
let speed = MAX_SPEED - speedSlider.value;
let barColor = "#5bc9b1";
let delay = 0;

const hidePopup = (ele, text, arrow) => {
    ele.classList.add("hide");
    ele.classList.remove("show");
    text.style.color = "#7c7c7d";
    arrow.setAttribute("src", "/img/down-filled-triangular-arrow-gray.png");
};

const showPopup = (ele, text, arrow) => {
    ele.classList.add("show");
    ele.classList.remove("hide");
    text.style.color = "#181819";
    arrow.setAttribute("src", "/img/down-filled-triangular-arrow.png");
};

const disableButtons = () => {
    nav.style.pointerEvents = "none";
};

const enableButtons = (delay) => {
    window.setTimeout(() => {
        nav.style.removeProperty("pointer-events");
    }, delay);
};

const executeSelectedAlgorithm = (algo) => {
    switch (algo) {
        case "Bubble Sort":
            bubbleSort();
            break;

        case "Selection Sort":
            selectionSort();
            break;

        case "Merge Sort":
            mergeSort();
            break;

        case "Quick Sort":
            quickSort();
            break;

        default:
            console.log("End of the switch statement!");
            break;
    }
};

const randomNumberInRange = (l, r) => {
    return Math.floor(Math.random() * (r - l) + l) + 1;
};

const randomizeArray = (size) => {
    for (let i = 0; i < size; i++) {
        array.push(randomNumberInRange(15, 75));
    }
};

const renderBars = (size) => {
    randomizeArray(size);
    array.map((val, idx) => {
        let div = document.createElement("div");
        div.setAttribute("class", `bar flex flex-jc-c`);
        div.textContent = `${val}`;
        div.style.height = `${val}vh`;
        div.style.backgroundColor = barColor;
        barsArray.push(div);
        main.appendChild(div);
    });
};

const removeBarsFromScreen = () => {
    const bars = document.querySelectorAll(".bar");
    bars.forEach((ele) => {
        main.removeChild(ele);
    });
};

const updateBarColor = (bar, color, delay) => {
    window.setTimeout(() => {
        bar.style.backgroundColor = color;
    }, delay);
};

const updateBarHeight = (bar1, bar2, delay) => {
    window.setTimeout(() => {
        let temp = bar1.style.height;
        bar1.style.height = bar2.style.height;
        bar2.style.height = temp;
        bar1.textContent = bar1.style.height.substring(
            0,
            bar1.style.height.length - 2
        );
        bar2.textContent = bar2.style.height.substring(
            0,
            bar2.style.height.length - 2
        );
    }, delay);
};

const updateBarHeight_ = (bar, height, delay) => {
    window.setTimeout(() => {
        bar.style.height = height + "vh";
        bar.textContent = height;
    }, delay);
};

const swap = (height, i, j) => {
    let temp = height[i];
    height[i] = height[j];
    height[j] = temp;
};

algorithmBtn.addEventListener("click", () => {
    if (isAlgorithmsContainerVisible) {
        hidePopup(algorithmsContainer, algorithmBtn, algoArrow);
        isAlgorithmsContainerVisible = false;
    } else {
        showPopup(algorithmsContainer, algorithmBtn, algoArrow);
        hidePopup(controlsContainer, controlsBtn, controlsArrow);
        isAlgorithmsContainerVisible = true;
        isControlsContainerVisible = false;
    }
});

controlsBtn.addEventListener("click", () => {
    if (isControlsContainerVisible) {
        hidePopup(controlsContainer, controlsBtn, controlsArrow);
        isControlsContainerVisible = false;
    } else {
        showPopup(controlsContainer, controlsBtn, controlsArrow);
        hidePopup(algorithmsContainer, algorithmBtn, algoArrow);
        isAlgorithmsContainerVisible = false;
        isControlsContainerVisible = true;
    }
});

algorithms.forEach((ele) => {
    ele.addEventListener("click", () => {
        algorithmBtn.textContent = ele.textContent;
        hidePopup(algorithmsContainer, algorithmBtn, algoArrow);
        isAlgorithmsContainerVisible = false;
    });
});

sortBtn.addEventListener("click", () => {
    disableButtons();
    hidePopup(controlsContainer, controlsBtn, controlsArrow);
    hidePopup(algorithmsContainer, algorithmBtn, algoArrow);
    isControlsContainerVisible = false;
    isAlgorithmsContainerVisible = false;
    delay = 0;
    executeSelectedAlgorithm(algorithmBtn.textContent);
});

randomizeBtn.addEventListener("click", () => {
    array = [];
    barsArray = [];
    removeBarsFromScreen();
    renderBars(arraySize);
});

arraySizeSlider.addEventListener("input", () => {
    arraySize = arraySizeSlider.value;
    randomizeBtn.click();
});

speedSlider.addEventListener("change", () => {
    speed = MAX_SPEED - speedSlider.value;
});

renderBars(arraySize);
