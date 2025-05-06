document.addEventListener("DOMContentLoaded", function() {
    
    const closeBtn = document.querySelector(".close-btn");
    const details = document.querySelector("details");

    closeBtn.addEventListener('click', () => {
        details.removeAttribute('open')
    });
});
