export default {
    todaysDate: "Today is {{date, MM/DD/YYYY}}",
    pages: {
        home: {
            title: "Home",
            content: {
                whatThisIsFor: "This app is to display the usefulness of using dictionary files for internationalization. Click the button below to toggle between english and spanish."
            },
            buttons: {
                changeLanguage: "Change language to {{lang}}"
            }
        },
        login: {
            title: "Login",
            content: {
                whatThisIsFor: "Type your username and password below to show how pluralization works.",
                pressLoginButton: "Press login button to show other pluralization techniques"
            },
            labels: {
                username: 'Username',
                password: 'Password'
            },
            buttons: {
                submit: "Login"
            },
            errorMessages: {
                minPasswordCharacterLength: 'You entered {{count}} character. The minimum is 6.',
                minPasswordCharacterLength_plural: 'You entered {{count}} characters. The minimum is 6.'
            }
        },
        contact: {
            title: "Contact",
            content: {
                whatThisIsFor: "Fill the form out below to contact us. This also shows the internationalization for numbers"
            },
            labels: {
                firstName: "First Name",
                lastName: "Last Name",
                email: "Email",
                phone: "Phone #"
            },
            buttons: {
                submit: "Submit"
            }
        }
    }
}