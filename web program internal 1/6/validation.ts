function validateForm(): boolean {
    const genderRadio = document.querySelector<HTMLInputElement>('input[name="gender"]:checked');
    const selectedHobby = document.getElementById('hobby') as HTMLSelectElement;

    if (!genderRadio) {
        alert('Please select your gender.');
        return false;
    }
    if (selectedHobby.value === '') {
        alert('Please select a hobby.');
        return false;
    }

    return true;
}