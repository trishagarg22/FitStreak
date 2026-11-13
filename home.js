const tips = [
    "Hydration is the key to a perfect fitness workout.",
    "Take a 10-minute walk after meals to help digestion.",
    "Aim for 7 to 9 hours of sleep every night.",
    "Stretch for a few minutes when you wake up.",
    "Add a fruit or vegetable to every meal.",
    "Stand up and move for a minute every hour you sit.",
    "Warm up before exercise and cool down after it.",
    "Keep a water bottle within reach during the day.",
    "Start small. A short workout done daily beats a long one done rarely."
];

const tipText = document.getElementById("tiptext");
const tipBtn = document.getElementById("tipbtn");

let lastIndex = -1;

function showRandomTip() {
    let index;
    do {
        index = Math.floor(Math.random() * tips.length);
    } while (index === lastIndex);

    lastIndex = index;
    tipText.textContent = tips[index];
}

tipBtn.addEventListener("click", showRandomTip);
