let xhr = new XMLHttpRequest();

let btn = document.querySelector('#btn');
btn.addEventListener('click', main);

let inputEnter = document.querySelector('.inputUser'); //Evento para Capturar o Enter! e executar quando digitar o usuario.
inputEnter.addEventListener('keypress', (e)=> {
        if (e.keyCode ===13) {
            main();
        }
});

function main() {
    let user = document.querySelector('.inputUser').value;
    let card = document.querySelector('main');
    let url = `https://api.github.com/users/${user}/repos`;

    xhr.open('GET', url)
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let dataJSONText = xhr.responseText
            let dataJSONObj = JSON.parse(dataJSONText);

            const avatarUrl = dataJSONObj[0].owner.avatar_url
            const nameUser = dataJSONObj[0].owner.login
            card.innerHTML += `<div class="avatar"><img src="${avatarUrl}">
            <h1>${nameUser}</h1></div>            
            `

            for (let i = 0; i < dataJSONObj.length; i++) {
                const imgCard = dataJSONObj[i].language
                const cloneRepo = dataJSONObj[i].clone_url

                const linkRepo = dataJSONObj[i].html_url;
                const name = dataJSONObj[i].name;
                card.innerHTML +=
                    `              
                    <div class="box">        
                    <div class="imgBx">
                        <img src="./assets/img/${imgCard}.png" alt="imagem de fundo dos cards">
                    </div>
                    <div class="content">
                    <h2>${name}</h2>
                    
                    <a target="_blank" href="${linkRepo}">ir para o repositório</a>
                    <button class="btn-card" onclick="clone('git clone ${cloneRepo}')">Clonar o repositório</button>
                    
                    </div>
                    </div>
                    `
            }
        }
    }
    xhr.send();

    clear();
}

function clear() {
    const repos = document.querySelector('main')
    repos.innerHTML = ""
}

function clone(url) {
    const input = document.createElement("input");
    input.value = url;
    input.id = "input";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
}