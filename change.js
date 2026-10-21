// Находим кнопку по id
const change = document.getElementById('change')

// Когда по кнопке кликнули — запускаем функцию change_all
change.addEventListener('click', change_all)

function change_all() {
    // getElementsByTagName('div')[3] — четвёртый блок div на странице (фамилия)
    if (document.getElementsByTagName('div')[3].innerHTML===' Аглиуллина') {
        // сейчас кириллица — меняем на латиницу
        document.getElementsByTagName('div')[3].innerHTML=' Agliullina'
        document.getElementsByTagName('div')[4].innerHTML='Amina'
        document.getElementsByTagName('div')[7].innerHTML='Fanilevna'
    }
    else {
        if (document.getElementsByTagName('div')[3].innerHTML===' Agliullina') {
            // сейчас латиница — возвращаем кириллицу
            document.getElementsByTagName('div')[3].innerHTML=' Аглиуллина'
            document.getElementsByTagName('div')[4].innerHTML='Амина'
            document.getElementsByTagName('div')[7].innerHTML='Фанилевна'
        }
    }
}
