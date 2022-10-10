
class user {
    constructor(name, surname, birthday) {
        this.name = name
        this.surname = surname
        this.birthday = birthday
    }
}

function invioDati() {
    let newUser = new user(
        document.getElementById('nome').value,
        document.getElementById('cognome').value,
        document.getElementById('birthday').value
    )
    document.getElementById('elenco').innerHTML += `<tr><td class="text-center">${newUser.name}</td><td class="text-center">${newUser.surname}</td><td class="text-center">${newUser.birthday}</td></tr>`
    
    if ((document.getElementById('nome').value == "Lidia") && (document.getElementById('cognome').value == "Kovac")) {
        document.getElementById('epicode').innerHTML = `<p class="text-center my-4 text-danger display-5">LA NOSTRA SUUUPERRRRR TEACHING ASSISTANT!</p>`
    } else {
        document.getElementById('epicode').innerHTML = ''
    }
        
    document.getElementById('nome').value = ''
    document.getElementById('cognome').value = ''
    document.getElementById('birthday').value = ''
}