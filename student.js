function switchForm(form) {
    document.querySelectorAll('.form-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.form-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('tab-' + form).classList.add('active');
    document.getElementById('form-' + form).classList.add('active');
}
// const passwordInput =
//     document.getElementById("password");

// const togglePassword =
//     document.getElementById("toggle-password");


// togglePassword.addEventListener("click", () => {

//     // Check current state directly from the DOM element
//     const isPassword = passwordInput.type === "password";

//     // Toggle input type
//     passwordInput.type = isPassword ? "text" : "password";

//     // Toggle icon (if using emoji or text)
//     togglePassword.textContent = isPassword ? "🙈" : "👁";
// }

// );
const passwordFields = [
    { input: document.getElementById("password"), toggle: document.getElementById("togglePassword") },
    { input: document.getElementById("confirm-password"), toggle: document.getElementById("toggleConfirmPassword") },
    { input: document.getElementById("enter-password"), toggle: document.getElementById("toggleEnterPassword") },
];

passwordFields.forEach(({ input, toggle }) => {
    toggle.addEventListener("click", () => {
        const isPassword = input.type === "password";
        input.type = isPassword ? "text" : "password";
        toggle.textContent = isPassword ? "🙈" : "👁";
    });
});