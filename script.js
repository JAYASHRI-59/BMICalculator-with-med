alert("Calculate your BMI by entering the required credentials.");
let bmiCategory = "";

function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let name = document.getElementById("name").value;

    if (weight === "" || height === "" || weight <= 0 || height <= 0) {
        alert("Please enter valid values for weight and height.");
        return;
    }

    height = height / 100; 
    let bmi = (weight / (height * height)).toFixed(2);

    if (bmi < 18.5) {
        bmiCategory = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = "Overweight";
    } else {
        bmiCategory = "Obese";
    }

    document.getElementById("result").innerHTML = `${name}'s, BMI is <b>${bmi}</b> (${bmiCategory})`;

    document.getElementById("adviceBtn").style.display = "block";

    document.getElementById("advice").innerHTML = "";
}

function getAdvice() {
    let adviceText = "";
    let medicineLink = "";

    switch (bmiCategory) {
        case "Underweight":
            adviceText = "You are underweight. Try eating a balanced diet with more protein and healthy fats. Consider strength training to build muscle mass.";
            medicineLink = `<a href="https://www.wheezalstore.com/product/29176232/ALFAGIN-MALT?srsltid=AfmBOoqnvPZvyXpl37X6O9oQ3RYjG6ro-UNIQp0I1n3j3ssS6KIQrV5A" target="_blank">Check weight gain supplement</a>`;

            break;
        case "Normal weight":
            adviceText = "You have a normal BMI. Maintain a healthy lifestyle with a balanced diet and regular exercise.";
            medicineLink = `<a href="https://www.wheezalstore.com/product/29732972/VITAMIN-D--CAPSULES-5-Strips-X-10-Capsules-?srsltid=AfmBOorfxoMYAf_3lSEIxhBkhlpuyyf6Jma0ntkb2-Li9veJ5P2uVtCN" target="_blank">Check multivitamins for daily health</a>`;
            break;
        case "Overweight":
            adviceText = "You are overweight. Try incorporating a balanced diet with portion control and increase physical activity.<br> Some medicines";
            medicineLink = `<a href="https://www.wheezalstore.com/product/29188231/GOSLIM?srsltid=AfmBOopRztpgMga8ieMtRxbHCk60h6VWbWzZaQnAY3QznMJlH2EXKpIw" target="_blank">Check weight loss supplements</a>`;

            break;
        case "Obese":
            adviceText = "Your BMI indicates obesity. Consider consulting a nutritionist and increasing physical activity for a healthier lifestyle.";
            medicineLink = `<a href="https://www.wheezalstore.com/product/29976271/Garcinia-Cambogia-Drops?srsltid=AfmBOorCGF42REoX-9-BtY9evP2D5S2e1cW4ZWtQOievc7eYU0KIwU8-" target="_blank">Check obesity management products</a>`;
            break;
        default:
            adviceText = "Please calculate your BMI first.";
            medicineLink = "";
    }

    document.getElementById("advice").innerHTML = `${adviceText} <br><br> ${medicineLink}`;
}