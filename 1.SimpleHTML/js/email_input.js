
const email_valid = /^(\w+(\.?\w+)*)@([A-Za-z]+\w*)\.([A-Za-z]+\w*)$/;

(() => {
    const input = document.getElementById('user-email')
    input.addEventListener('onchange', e => {
        const email = e.target.value
        console.log(email)
        if (email_valid.test(email)) {
            e.target.classList.remove('is-invalid')
            e.target.classList.add('is-valid')
        } else {
            e.target.classList.remove('is-valid')
            e.target.classList.add('is-invalid')
        }
    })
})()