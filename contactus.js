const loading = document.querySelector(".loading");
const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector(".contact-form");
const inputs = document.querySelectorAll(".field");

// Automatically show the form after 1 seconds
setTimeout(() => {
    loading.classList.add("hide");
    formWrapper.classList.add("show");
}, 1000);

inputs.forEach(input => {
    input.addEventListener("focus", () => {
        input.parentElement.classList.add("focus");
    });

    input.addEventListener("blur", () => {
        if (input.value === "") {
            input.parentElement.classList.remove("focus");
        }
    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Simulate form submission
    const submitBtn = form.querySelector(".submit-btn");
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
        submitBtn.style.backgroundColor = "#28a745";

        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.style.backgroundColor = "";
            form.reset();
            inputs.forEach(input => input.parentElement.classList.remove("focus"));
        }, 2000);
    }, 2000);
});