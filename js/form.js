var button = document.querySelector("#add-patient");
button.addEventListener("click", function(event) {

    event.preventDefault();
    var form = document.querySelector("form");
 
    var formIsValid = validateForm(form);
    if (!formIsValid) {
        return;
    }
    
    var patient = getPatientData(form);
    addPatient(patient);
    form.reset();
});

function getPatientData(inputs) {

    return {name: inputs.name.value,
            weight: inputs.weight.value,
            height: inputs.height.value,
            fat: inputs.fat.value,
            bmi: calculateBMI(inputs.weight.value, inputs.height.value)};
}

function makeTr(dataPatient) {

    var tr = document.createElement("tr");
    tr.classList.add("patient");
    
    tr.appendChild(makeTd(dataPatient.name, "name"));
    tr.appendChild(makeTd(dataPatient.weight, "weight"));
    tr.appendChild(makeTd(dataPatient.height, "height"));
    tr.appendChild(makeTd(dataPatient.fat, "fat"));
    tr.appendChild(makeTd(dataPatient.bmi, "bmi"));

    return tr;
    
}

function makeTd(data, type) {

    var td = document.createElement("td");
    td.textContent = data;
    td.classList.add(type + "-info");
    return td;
}

function addPatient(patient) {

    var table = document.querySelector("#patient-table");
    table.appendChild(makeTr(patient));
}
