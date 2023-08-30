document.addEventListener('DOMContentLoaded', () => {

    const register = document.getElementById("registerBtn")
    const logIn = document.getElementById("logInBtn")

    register.addEventListener("click", (ev) => {
        console.log('register clicked!');

        logIn.textContent = "Log Out";
        register.classList.add('hidden');

    });

    logIn.addEventListener("click", (ev) => {

        if (logIn.textContent=="Log Out") {

            logIn.textContent = "Log In";
            register.classList.remove('hidden');
            
        } else {

            logIn.textContent = "Log Out";
            register.classList.add('hidden')
            
        }
    })


}); //LOAD