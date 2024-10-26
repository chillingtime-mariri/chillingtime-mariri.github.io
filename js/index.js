function checkInput() {
    const hisInput = document.getElementById('secret');
    const secretWord = 'jetaimeluv';

    if (hisInput.value === secretWord) {
        // Jika kata sandi benar, arahkan ke halaman email
        window.open('pages/secret.html', '_blank');
    } else {
        alert('You are not him!');
    }

    return
}
