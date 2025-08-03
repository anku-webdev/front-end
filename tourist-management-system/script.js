// access the locations
let users = document.querySelector("#Users");
let booking = document.querySelector("#Booking");
let enquries = document.querySelector("#Enquries");

// Generate random no.
let randomUsers = Math.floor(Math.random() * 1000);
let randomBookings = Math.floor(Math.random() * 1000);
let randomEnquries = Math.floor(Math.random() * 1000);

// print numbers
users.textContent = randomUsers;
booking.textContent = randomBookings;
enquries.textContent = randomEnquries;


// hide and show password sign up 
let showbtn = document.querySelector("#showIcon");
let passwordinput = document.querySelector("#signUpPassword");

document.addEventListener("DOMContentLoaded", () => {
    const showbtn = document.querySelector("#showIcon");
    const passwordinput = document.querySelector("#signUpPassword");

    if (!showbtn || !passwordinput) {
        console.error("Icon or password input not found");
        return;
    }

    showbtn.addEventListener("click", () => {
        const type = passwordinput.getAttribute("type") === "password" ? "text" : "password";
        passwordinput.setAttribute("type", type);

        // Toggle the icon
        showbtn.classList.toggle("fa-eye");
        showbtn.classList.toggle("fa-eye-slash");
    });
});



// // user inform you sign up complete
// let signupBtn = document.querySelector("#signUpBtn");
// const successMsg = document.querySelector("#signupSuccessMsg");

// signupBtn.addEventListener("click", (e) => {
//     e.preventDefault(); // prevent form from submitting (for now)

//     successMsg.classList.remove("d-none");
//     setTimeout(() => {
//         successMsg.classList.add('d-none');
//     }, 3000);

// });


// dom content loaded true submit btn


// document.addEventListener('DOMContentLoaded', () => {
//     // let fullname = document.querySelector('#fullname');
//     // let mobileNO = document.querySelector('#mobileNo');
//     // let emailId = document.querySelector('#emailId');
//     // let passWord = document.querySelector('#passWord');

//     const

// })
document.addEventListener("DOMContentLoaded", () => {
    const signUpForm = document.querySelector("#signUpForm");
    const inputs = signUpForm.querySelectorAll("input[required]");
    const signupBtn = document.querySelector("#signUpBtn");
    const successMsg = document.querySelector("#signupSuccessMsg");

    // Function to check if all required fields are filled
    const checkInputs = () => {
        let allFilled = true;
        inputs.forEach((input) => {
            if (input.value.trim() === "") {
                allFilled = false;
            }
        });
        signupBtn.disabled = !allFilled;
    };

    // Check inputs every time the user types
    inputs.forEach((input) => {
        input.addEventListener("input", checkInputs);
    });

    // Show success message on form submission
    signupBtn.addEventListener("click", (e) => {
        e.preventDefault(); // prevent actual form submit
        successMsg.classList.remove("d-none");
        setTimeout(() => {
            successMsg.classList.add("d-none");
        }, 3000);

        signUpForm.reset(); // clear form
        signupBtn.disabled = true; // disable button again
    });
});
