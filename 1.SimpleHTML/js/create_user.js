(() => {
    const addButton = document.getElementById('add-button');
    addButton.addEventListener('click',
        () => {
            const name = document.getElementById('user-name').value
            const pfpurl = document.getElementById('user-pfp').value
            const email = document.getElementById('user-email').value
            const phone = document.getElementById('user-phone').value

            localStorage.numberOfUsers = Number(localStorage.numberOfUsers) + 1
            localStorage.setItem(`user${localStorage.numberOfUsers}`, JSON.stringify({
                name: name,
                pfpurl: pfpurl,
                email: email,
                phone: phone,
            }))
        }
    )
})