
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('search-input');
    const button = document.getElementById('button-search');
    input.addEventListener('input', function() {
        button.disabled = input.value.trim() === '';
    });
});