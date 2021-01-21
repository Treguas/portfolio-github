let xhr = new XMLHttpRequest();

    let card = document.querySelector('main');
    console.log(card);

    let url = "https://api.github.com/users/treguas/repos";

    xhr.open('GET', url)

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let dataJSONText = xhr.responseText
            let dataJSONObj = JSON.parse(dataJSONText);

            // dataJSONObj.[avatar_url]
            card.innerHTML+= `
            <header class="page-header">
            <div class="top-bar-container">
                <a href="index.html"> 
                    <img src="./assets/img/back.svg" alt="Voltar">
                </a>
                <img src="./assets/img/projects.svg" alt="Projetos">
            </div>
        
            <div class="header-content">
                <strong>Projetos</strong>
            </div>
            </header>`

            for (let i = 0; i < dataJSONObj.length; i++) {
                card.innerHTML +=
                `
                
                <div class="box">        
                <div class="imgBx">
                    <img src="https://images.unsplash.com/photo-1611083055738-75c667309090?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60.jpg" alt="">
                </div>
                <div class="content">
                <h2>${dataJSONObj[i].name}</h2>
                </div>
                </div>                
                
                `
            }
        }
    }
    xhr.send();