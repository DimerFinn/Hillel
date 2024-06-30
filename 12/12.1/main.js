
let enteredLink = '';
document.getElementById('enterLinkButton').addEventListener('click', function() {
    const link = prompt('Будь ласка, введіть посилання:');
    if (link) {
        enteredLink = link;
    }
});
document.getElementById('redirectButton').addEventListener('click', function() {
    if (enteredLink) {
        window.location.href = enteredLink;
    } else {
        alert('Будь ласка, введіть посилання!!!!');
    }
});
