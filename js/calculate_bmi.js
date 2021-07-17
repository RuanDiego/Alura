var patients = document.querySelectorAll(".patients");
patients.forEach(function(patient) {
    var tdWeight = patient.querySelector(".weight-info");
    var weight = tdWeight.textContent;
    var tdHeight = patient.querySelector(".height-info");
    var height = tdHeight.textContent;
    
    var tdBMI = patient.querySelector(".bmi-info");
    
    if (validateWeight(weight) && validateHeight(height)) {
        tdBMI.textContent = calculateBMI(weight, height);
    } else {
        patient.classList.add("invalid-patient");
        tdBMI.textContent = "Dados inválidos!";
    }
});


function calculateBMI(weight, height) {
    
    return (weight / height ** 2).toFixed(2);
}
