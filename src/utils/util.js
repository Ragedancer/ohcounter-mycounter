
// Figure out which radio input is checked
export function whichIsChecked(radioGroup) {
    for (let i=0; i < radioGroup.length; i++) {
        if (radioGroup[i].checked) {
            return radioGroup[i];
        }
    }
}

// Figure out which checkbox inputs are checked
export function whichAreChecked(checkboxGroup) {
    let group = [];
    for (let i = 0; i < checkboxGroup.length; i++) {
        if (checkboxGroup[i].checked) {
            group[group.length] = checkboxGroup[i];
        }
    }
    return group;
}

// Select all of the checkboxes
export function selectAll(checkboxGroup) {
    for (let i = 0; i < checkboxGroup.length; i++) {
        checkboxGroup[i].checked = true;
    }
}

// Clear the screen
export function clearScreen() {
    document.getElementById('content').innerHTML = '';
}