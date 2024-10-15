document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.hvr-grow-rotate');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(1.1) rotate(4deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0)'; 
            }, 300); 
        });
    });
});
