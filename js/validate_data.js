function validateWeight(weight) {

    if (weight > 0 && weight < 1000) {
        return true;
    } else {
        return false;
    }
};

function validateHeight(height) {
    
    if (height > 0 && height < 3.0) {
        return true;
    } else {
        return false;
    }
};

function validateFat(fat) {
    
    if (fat > 0 && fat < 50) {
        return true;
    } else {
        return false;
    };
}

function validateForm(form) {

    var isValid = true;
    form.name.classList.remove("invalid-input");
    form.weight.classList.remove("invalid-input");
    form.height.classList.remove("invalid-input");
    form.fat.classList.remove("invalid-input");
    
    if (form.name.value.length == 0) {
        form.name.classList.add("invalid-input");
        isValid = false;
    }

    if (!validateWeight(form.weight.value)) {
        form.weight.classList.add("invalid-input");
        isValid = false;
    }
                
    if (!validateHeight(form.height.value)) {
        form.height.classList.add("invalid-input");
        isValid = false;
    }
    
    if (!validateFat(form.fat.value)) {
        form.fat.classList.add("invalid-input");
        isValid = false;
    }

    return isValid;
}
