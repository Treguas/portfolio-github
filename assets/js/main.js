
let xhr = new XMLHttpRequest();

let btn = document.querySelector('#btn');
btn.addEventListener('click', main);

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
                const clone = dataJSONObj[i].clone_url

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
                    <a target="_blank" href="${linkRepo}">Clonar o repositório</a>
                    
                    </div>
                    </div>          
                    `
            }

            

        }
    }
    xhr.send();
}

function clear() {
    const repos = document.querySelector('main')
    repos.innerHTML = ""
}