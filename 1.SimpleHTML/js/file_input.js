(() => {

    const input = document.getElementById('user-pfp')
    input.addEventListener("change", e => {
        const img = document.getElementById('pfp-preview')
        const file = e.target.files[0]
        if (file) {
            if (file.type.startsWith('image/')) {
                let reader = new FileReader()
                reader.addEventListener('loadend', event => {
                    localStorage.setItem(file.name, reader.result)
                }, false)
                reader.readAsDataURL(file)
                
                img.src = window.URL.createObjectURL(file)
            } else {
                alert('Тип файлу не картинка')
                img.src = 'images/user.jpg'
                e.target.value = ''
            }
        }
        else {
            alert('Оберіть файл!')
        }
    })
})()