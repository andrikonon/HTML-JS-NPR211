const phone_valid = /^\+[1-9]\d{0,2}[\s-]?\(?\d{2,3}\)?([\s-]?\d{2,4}){2,3}$/;

(() => {
    const input = document.getElementById('user-phone')
    input.addEventListener("onchange", e => {
        const phone = e.target.value
        console.log(phone)
        if (phone_valid.test(phone)) {
            e.target.classList.remove('is-invalid')
            e.target.classList.add('is-valid')
        } else {
            e.target.classList.remove('is-valid')
            e.target.classList.add('is-invalid')
        }
    })
})()