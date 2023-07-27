// input
const fNameInput = document.getElementById("f_name");
const lNameInput = document.getElementById("l_name");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");

// output
const nameOutput = document.getElementById("r_name");
const bmiOutput = document.getElementById("r_bmi");
const statusOutput = document.getElementById("r_weight");
const emeOutput = document.getElementById("r_eme");
// button
const calculateBtn = document.getElementById("calculates");

function calculate() {

    // input values
    const fName = fNameInput.value;
    const lName = lNameInput.value;
    const height = heightInput.value;
    const weight = weightInput.value;

    const bmi = ((weight * 10000)/ (height ** 2)).toFixed(2);

    nameOutput.innerHTML = `${fName} ${lName}`;
    bmiOutput.innerHTML = bmi;

    let status;
    let emergency;
    let stylebmi;
    let stylews;
    stylebmi = "background-color: var(--light-color); color: black; border: none; padding: 2px; padding-left: 8px; padding-right: 8px; margin-top:10px; border-radius: 8px;";
    if (bmi < 18.5 && bmi >= 0) {
        stylews = "background-color: var(--secondary-color); color: black; border: none; padding: 2px; padding-left: 8px; padding-right: 8px; margin-top:10px; border-radius: 10px;";
        bmiOutput.style = stylebmi;
        status = "Underweight";
        statusOutput.textContent = status;
        emeOutput.innerHTML = null;
        emeOutput.style = null;
        statusOutput.style = stylews;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        stylews = "background-color: #4CAF50; color: black; border: none;padding: 2px; padding-left: 8px; padding-right: 8px; margin-top:10px; border-radius: 10px;";
        bmiOutput.style = stylebmi;
        status = "Normal";
        emeOutput.innerHTML = null;
        emeOutput.style = null;
        statusOutput.style = stylews;
    } else if (bmi >= 25 && bmi <= 29.9) {
        stylews = "background-color: #f44336; color: black; border: none; padding: 2px; padding-left: 8px; padding-right: 8px; margin-top:10px; border-radius: 10px;";
        bmiOutput.style = stylebmi;
        status = "Overweight";
        emeOutput.innerHTML = null;
        emeOutput.style = null;
        statusOutput.style = stylews;
    } else if (bmi >= 30 && bmi <= 34.9) {
        stylews = "background-color: #f44336; color: black; border: none; padding: 2px; padding-left: 8px; padding-right: 8px; margin-top:10px; border-radius: 10px;";
        status = "Obese";
        bmiOutput.style = stylebmi;
        emeOutput.innerHTML = null;
        emeOutput.style = null;
        statusOutput.style = stylews;
    } else if (bmi >= 35 && bmi <= 150) {
        stylews = "background-color: #f44336; color: black; border: none; padding: 2px; padding-left: 8px; padding-right: 8px; margin-top:10px; border-radius: 10px;";
        emergency = "You are in danger";
        status = "Extremely Obese";
        bmiOutput.style = stylews;
        emeOutput.textContent = emergency;
        emeOutput.style = stylews;
    }
    else{
        alert("Please enter valid values");
        stylews = "background-color: #ffffff; color: black; border: none; padding: 2px; padding-left: 8px; padding-right: 8px; margin-top:10px; border-radius: 10px;";
        emeOutput.textContent = null;
        stylebmi = stylews
        bmiOutput.style = stylebmi;
        emeOutput.style = stylews;
        status = "Enter a valid input";
        bmiOutput.innerHTML = "Enter a valid input";
    }
    statusOutput.innerHTML = status;
    
    
    bmiOutput.style = stylebmi;
    statusOutput.style = stylews;

}

calculateBtn.addEventListener("click", calculate);