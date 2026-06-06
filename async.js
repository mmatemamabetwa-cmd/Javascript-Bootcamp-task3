document.addEventListener("DOMContentLoaded", function () {

    const resendBtn = document.getElementById("resendBtn");

    let seconds = 10;

    const countdown = setInterval(() => {

        resendBtn.textContent =
            `Resend Verification (${seconds})`;

        seconds--;

        if (seconds < 0) {
            clearInterval(countdown);

            resendBtn.disabled = false;

            resendBtn.textContent =
                "Resend Verification";
        }

    }, 1000);

});


function synchronousExample() {

    console.log("Step-1 - The function is starting");
    console.log("Step-2 - The Process is in action");
    console.log("Step-3 - The function reached the final stage");
}

synchronousExample();


const studentDatabase = [
    { id: 1, firstName: "kamo", lastName: "Mabetwa" },
    { id: 2, firstName: "Sharon", lastName: "Ndlovu" },
    { id: 3, firstName: "Mmatema", lastName: "Diale" }
];

function getStudents() {

    setTimeout(() => {
        console.log("Student Records:");

        studentDatabase.forEach(student => {
            console.log(student);
        });

    }, 3000);
}

getStudents();