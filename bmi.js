const form = document.getElementById("bmi-form");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const errorBox = document.getElementById("error");
const resultCard = document.getElementById("result-card");
const resultText = document.getElementById("result");
const categoryText = document.getElementById("category");
const tableRows = document.querySelectorAll("tbody tr");


function getCategory(bmi) {
    if (bmi < 18.5) return { key: "under", label: "Underweight" };
    if (bmi < 25)   return { key: "normal", label: "Normal weight" };
    if (bmi < 30)   return { key: "over", label: "Overweight" };
    return { key: "obese", label: "Obese" };
}

function calculate(event) {
    event.preventDefault();          

    const weight = Number(weightInput.value);
    const height = Number(heightInput.value);

    if (weightInput.value === "" || heightInput.value === "") {
        showError("Please enter both weight and height.");
        return;
    }
    if (weight < 10 || weight > 300) {
        showError("Weight should be between 10 and 300 kg.");
        return;
    }
    if (height < 50 || height > 250) {
        showError("Height should be between 50 and 250 cm.");
        return;
    }

    errorBox.textContent = "";

    const bmi = weight * 10000 / (height * height);
    const category = getCategory(bmi);

    resultText.textContent = bmi.toFixed(1);       // 1 decimal place
    categoryText.textContent = category.label;
    categoryText.className = "category " + category.key;
    resultCard.hidden = false;

    tableRows.forEach(function (row) {
        row.classList.toggle("current", row.dataset.cat === category.key);
    });
}

function showError(message) {
    errorBox.textContent = message;
    resultCard.hidden = true;
}

form.addEventListener("submit", calculate);
