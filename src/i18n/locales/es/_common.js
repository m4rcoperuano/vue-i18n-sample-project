export default {
    pages: {
        home: {
            title: "Casa",
            content: {
                whatThisIsFor: "Esta aplicación es para mostrar la utilidad del uso de archivos de diccionarios para la internacionalización. Haga clic en el botón de abajo para alternar entre inglés y español."
            },
            buttons: {
                changeLanguage: "Cambiar el idioma a {{lang}}"
            }
        },
        login: {
            title: "Iniciar Sesion",
            content: {
                whatThisIsFor: "Escriba su nombre de usuario y contraseña a continuación para mostrar cómo funciona la pluralización.",
                pressLoginButton: "Presione el botón de inicio de sesión para mostrar otras técnicas de pluralización."
            },
            labels: {
                username: 'Nombre de usuario',
                password: 'Contraseña'
            },
            buttons: {
                submit: "Iniciar Sesion"
            },
            errorMessages: {
                minPasswordCharacterLength: 'Has introducido el carácter {{count}}. El mínimo es 6.',
                minPasswordCharacterLength_plural: 'Has introducido {{count}} caracteres. El mínimo es 6.'
            }
        },
        contact: {
            title: "Contactar",
            content: {
                whatThisIsFor: "Rellene el siguiente formulario para contactarnos. Esto también muestra la internacionalización de los números."
            },
            labels: {
                firstName: "Nombre de pila",
                lastName: "Apellido",
                email: "Correo Electrónico",
                phone: "Teléfono #"
            },
            buttons: {
                submit: "Enviar"
            }
        }
    }
}