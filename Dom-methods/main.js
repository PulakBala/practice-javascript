function validationForm() {
    const form = document.forms['myForm'];
    const value = form['fname'].value;

    if(value === '') {
        alert("Must write your name");
    
    }

    return false;
}