const users = [
    {
        name: "Капранов Олексій Романович", 
        email: "okapr543@gmail.com",
        phone: "+38 (099) 763 23 43",
        pfpurl: "images/normal.png"
    },
    {
        name: "Малик Володимир Іванович",
        email: "malvol@gmail.com",
        phone: "+38 (067) 237 83 94",
        pfpurl: "images/normal.png"
    },
    {
        name: "Гак Степан Валентинович",
        email: "hackstepan@gamil.com",
        phone: "+38 (095) 883 70 63",
        pfpurl: "images/normal.png"
    },
    {
        name: "Писар Віталій Павлович",
        email: "pysar17792@gmail.com",
        phone: "+38 (099) 498 23 73",
        pfpurl: "images/normal.png"
    },
    {
        name: "Давидюк Лілія Федорівна",
        email: "lilyd639@gmail.com",
        phone: "+38 (051) 378 29 02",
        pfpurl: "images/normal.png"
    },
    {
        name: "Горовий Юліан Михайлович",
        email: "yuliengoo@gmail.com",
        phone: "+38 (099) 550 72 77",
        pfpurl: "images/normal.png"
    },
    {
        name: "Шевченко Іван Миколайович",
        email: "epicgamer145@gmail.com",
        phone: "+38 (099) 827 19 98",
        pfpurl: "images/normal.png"
    },
    {
        name: "Ломило Станіслав Гордієвич",
        email: "stas23lo@gmail.com",
        phone: "+38 (067) 230 78 91",
        pfpurl: "images/normal.png"
    },
    {
        name: "Ярило Микола Давидович",
        email: "koliaril023@gmail.com",
        phone: "+38 (096) 852 52 67",
        pfpurl: "images/normal.png"
    },
    {
        name: "Ройце Марі",
        email: "reutzemarie@gmail.com",
        phone: "+38 (050) 139 72 02",
        pfpurl: "images/normal.png"
    }
];

(() => {
    const add_user = user => {
        const {name, email, phone, pfpurl} = user


        let table = document.getElementById('users-table')
        let old_index = 0
        if (table.rows.length > 1) {
            old_index = table.rows[table.rows.length-1].children[0].innerHTML
        }
        let row = table.insertRow()
        let cell1 = row.insertCell()
        cell1.innerHTML = `${+old_index + 1}`
        let cell2 = row.insertCell()
        cell2.innerHTML = `<img src="${pfpurl}" class="pfp">`
        cell2.classList.add('pfp')
        let cell3 = row.insertCell()
        cell3.innerHTML = name
        cell3.classList.add('name')
        let cell4 = row.insertCell()
        cell4.innerHTML = email
        cell4.classList.add('email')
        let cell5 = row.insertCell()
        cell5.innerHTML = phone
        cell5.classList.add('phone')
    }
    
    const update_users = () => {
        if (!localStorage.numberOfUsers) {
            localStorage.setItem('numberOfUsers', '0')
            
            
            
            for (let user of users) {
                add_user(user)
                localStorage.numberOfUsers = `${Number(localStorage.numberOfUsers) + 1}`;
                localStorage.setItem(`user${localStorage.numberOfUsers}`, JSON.stringify(user))
            }
        } else {
            const numberOfUsers = Number(localStorage.numberOfUsers);
            for (let i = 0; i < numberOfUsers; i++) {
                let user = JSON.parse(localStorage.getItem(`user${i + 1}`))
                const file = /C:\\fakepath\\(.*)/.exec(user.pfpurl)
                if (file !== null) {
                    const [_, file_name] = file
                    user.pfpurl = localStorage.getItem(file_name)
                }
                add_user(user)
            }
        }
    }
    update_users()
    
    const update_button = document.getElementById('btn-update')
    update_button.addEventListener('click', () => update_users())
    
})()
