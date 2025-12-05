//Script's reference: https://dev.to/shubhamtiwari909/form-validation-with-js-and-tailwind-38ab

function validateFirstName() {
    const givenName = document.getElementById("firstNameInput")
    const givenNameInputError = document.getElementById("firstNameError")

    if (/^[A-Za-z]+$/.test(givenName.value)) {
        givenName.classList.add("border-green-400")
        givenName.classList.remove("border-red-400")
        givenNameInputError.classList.add("hidden")
        givenNameInputError.classList.remove("block")
        return True
    }
    else {
        givenName.classList.add("border-red-400")
        givenName.classList.remove("border-green-400")
        givenNameInputError.classList.add("block")
        givenNameInputError.classList.remove("hidden")
        return False
    }
}


function validateLastName() {
    const surname = document.getElementById("lastNameInput")
    const surnameInputError = document.getElementById("lastNameError")

    if (/^[A-Za-z]+$/.test(surname.value)) {
        surname.classList.add("border-green-400")
        surname.classList.remove("border-red-400")
        surnameInputError.classList.add("hidden")
        surnameInputError.classList.remove("block")
        return True
    }
    else {
        surname.classList.add("border-red-400")
        surname.classList.remove("border-green-400")
        surnameInputError.classList.add("block")
        surnameInputError.classList.remove("hidden")
        return False
    }
}


function validateEmail() {
    const email = document.getElementById("emailInput")
    const emailInputError = document.getElementById("emailError")

    if (/^\w+[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
        email.classList.add("border-green-400")
        email.classList.remove("border-red-400")
        emailInputError.classList.add("hidden")
        emailInputError.classList.remove("block")
        return True
    }
    else {
        email.classList.add("border-red-400")
        email.classList.remove("border-green-400")
        emailInputError.classList.add("block")
        emailInputError.classList.remove("hidden")
        return False
    }
}


function validateMessage() {
    const message = document.getElementById("messageInput")
    const messageInputError = document.getElementById("messageError")

    if (message.value == "") {
        message.classList.add("border-red-400")
        message.classList.remove("border-green-400")
        messageInputError.classList.add("block")
        messageInputError.classList.remove("hidden")
        return True
    }
    else {
        message.classList.add("border-green-400")
        message.classList.remove("border-red-400")
        messageInputError.classList.add("hidden")
        messageInputError.classList.remove("block")
        return True
    }
}


function submitForm() {
    const givenName = document.getElementById("firstNameInput")
    const surname = document.getElementById("lastNameInput")
    const email = document.getElementById("emailInput")
    const message = document.getElementById("messageInput")
    const userForm = document.getElementById("user-form")
    const dataContainer = document.getElementById("data-container")
    const submitButton = document.getElementById("sendButton")

    userForm.addEventListener("button", (e) => {
        e.preventDefault()
        if (givenName.classList.contains("bordern-green-400") && surname.classList.contains("bordern-green-400") && email.classList.contains("bordern-green-400") && message.classList.contains("bordern-green-400")) {
            let finalData = {
                givenName: givenName.value,
                surname: surname.value,
                email: email.value,
                message: message.value
            }
            dataContainer.innerHTML = `
            <div class="flex flex-col gap-3">
                <p>First Name - ${finalData["givenName"]}</p>
            </div>
            <div class="flex flex-col gap-3">
                <p>Last Name - ${finalData["surname"]}</p>
            </div>
            <div class="flex flex-col gap-3">
                <p>Email - ${finalData["email"]}</p>
            </div>
            <div class="flex flex-col gap-3">
                <p>Message - ${finalData["message"]}</p>
            </div>
            `
            submitButton.classList.add("bg-(--color-soft-blush)")
        }
    })
}
