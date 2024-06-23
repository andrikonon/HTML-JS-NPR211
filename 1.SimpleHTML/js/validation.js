const validate = f => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            const valid = form.checkValidity()
            event.preventDefault()
            if (!valid) {
                event.stopPropagation()
            } else {
                console.log("Form submit valid", form.id)
                f()
            }

            form.classList.add('was-validated')
        }, false)
    })
}