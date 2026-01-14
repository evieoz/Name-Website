function generateName() {
    if (!validateInputs()) return;
    const prefix = getPrefix();
    const firstName = getFirstName();
    const lastName = getLastName();
    const middleName = getMiddleName();
    const suffix = getSuffix();
    const royalName = `${prefix} ${firstName} ${middleName} ${lastName} ${suffix}`;
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = royalName;
}

function getPrefix() {
    const prefix = document.getElementById("prefix").value;
    if (prefix === "Princess") return "Princess";
    else if (prefix === "Prince") return "Prince";
    else return "Royal"; 
}

function getFirstName() {
    const firstName = document.getElementById("firstName").value.trim();
    if (firstName !== "") return firstName;
    else return "YourName";
}

function getMiddleName() {
    const food = document.getElementById("food").value;
    switch (food) {
        case "Spicy":
            return "Flame";
        case "Sweet":
            return "Honey";
        case "Savory":
            return "Sage";
        default:
            return "Grace"; 
    }
}

function getLastName() {
    const location = document.getElementById("location").value;
    if (location === "North") return "Frostvale";
    else if (location === "South") return "Sunreach";
    else if (location === "East") return "Dawncrest";
    else if (location === "West") return "Ironmoor";
    else return "Crownford";
}


function getSuffix() {
    const wise = document.querySelector('input[name="virtue"][value="Wise"]');
    const courageous = document.querySelector('input[name="virtue"][value="Courageous"]');
    const charismatic = document.querySelector('input[name="virtue"][value="Charismatic"]');
    const clever = document.querySelector('input[name="virtue"][value="Clever"]');

    if (wise.checked) return "Keeper of Ancient Truths";
    else if (courageous.checked) return "Defender of the Crown";
    else if (charismatic.checked) return "Beloved of the People";
    else if (clever.checked) return "Master of Royal Strategy";
    else return "Bearer of Royal Grace"; 
}


function validateInputs() {
    const prefix = document.getElementById("prefix").value;
    const firstName = document.getElementById("firstName").value.trim();
    const food = document.getElementById("food").value;
    const location = document.getElementById("location").value;
    const wise = document.querySelector('input[name="virtue"][value="Wise"]').checked;
    const courageous = document.querySelector('input[name="virtue"][value="Courageous"]').checked;
    const charismatic = document.querySelector('input[name="virtue"][value="Charismatic"]').checked;
    const clever = document.querySelector('input[name="virtue"][value="Clever"]').checked;

    if (prefix === "" || firstName === "" || food === "" || location === "" || 
        (!wise && !courageous && !charismatic && !clever)) {
        alert("Please complete all royal fields before receiving your title.");
        return false;
    }
    return true;
}

