let xhr = new XMLHttpRequest();

// $("#btn_get_repos").click(function () {
//     const user = $('#user').val()
//     $.get({
//       user: user,
//       url: `https://api.github.com/users/${user}/repos`,

function teste() {
    let users = document.querySelector('.inputUser');


}
    let button = document.querySelector('button');
    let users = document.querySelector('.inputUser');
    console.log(users)

    button.addEventListener('click', function () {
        alert('funcionando')
    })

    let card = document.querySelector('main');
    console.log(card);

    let url = `https://api.github.com/users/${users}/repos`;
    console.log('url')

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

            <div class="busca-portfolio">
            <input type="text" class="inputUser">
            <button onclick="teste()">Buscar Projetos</button>
            <img src="https://avatars.githubusercontent.com/u/60155617?s=460&u=e82fcd65a5728cdd0c58126d6cc1e198d05a8114&v=4">
            </div>
        
            <div class="header-content">
            <p>Descrição do Repositório: ver since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d</p>
                <!--<strong>Projetos</strong>-->
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




// let xhr = new XMLHttpRequest()

// let bloco = document.querySelector('header');

// var repositorioJson = localStorage.getItem("repositorio")

// if(repositorioJson == null){
//     repositorioJson = []
// }

// var repositorio = JSON.parse(repositorioJson)

// let url = "https://api.github.com/repos/treguas/" + repositorio[0].nome;

// xhr.open('GET', url)


// xhr.onreadystatechange = function () {

//     if (this.readyState == 4 && this.status == 200) {
//         let dadosJSONText = xhr.responseText
//         let dadosJSONObj = JSON.parse(dadosJSONText)
            
//         bloco.innerHTML += 
        
//             `<h1 class="mdl-card__title>Username:`+dadosJSONObj.owner.login+`</h1>
//             <p class="mdl-card__supporting-text">Id do Repositório: `+dadosJSONObj.id+`</p>
//             <p class="mdl-card__media"><img src="images/otavio.jpg"></img></p>
//             <a class="mdl-card__supporting-text" href="`+dadosJSONObj.following_url+`">Link para seguidores</a>
//             <p class="mdl-card__supporting-text">Descrição do Repositório: `+dadosJSONObj.description+`</p>
//             <a class="mdl-card__supporting-text" href="`+dadosJSONObj.collaborators_url+`">Link para Colaboradores</a>
//             <a class="mdl-card__supporting-text" href="`+dadosJSONObj.branches_url+`">Link para Branchs</a>
//             <a class="mdl-card__supporting-text" href="`+dadosJSONObj.commits_url+`">Link para Branchs</a>
//             <p class="mdl-card__supporting-text">Linguagem Predominante: `+dadosJSONObj.language+`</p>
//             <iframe class="mdl-card__supporting-text scroll" style="height:220px"src="images/`+dadosJSONObj.language+`.txt"></iframe>
//             <img src="images/`+dadosJSONObj.language +`.png"></img>`
             
        
        
        
        
//            /*  "<div id=\"divisao\" align=\"center\"><p>" + "Username: " + dadosJSONObj.owner.login + "</p><br>" +
//             "<p>" + "Id do Repositório: " + dadosJSONObj.id + "</p><br>" +
//             "<p><img id=\"imagem\" align=\"center\" src=\"images/otavio.jpg\"></img></p><br>" +
//             "<p id=\"seguidores\"><a href=\"('" + dadosJSONObj.following_url + "')\">Link Para Folllowers" + "</a></p>" +
//             "<p>" + "Descrição do Repositório: " + dadosJSONObj.description + "</p><br></div>" +
//             "<div id=\"link\" align=\"center\"><p><a href=\"('" + dadosJSONObj.collaborators_url + "')\">Link Para Colaboradores" + "</a></p>" +
//             "<p><a href=\"('" + dadosJSONObj.branches_url + "')\">Link Para Branches" + "</a></p>" +
//             "<p><a href=\"('" + dadosJSONObj.commits_url + "')\">Link Para Commits" + "</a></p></div>" +
//             "<div id=\"linguagem\" align=\"center\"><p id=\"titulo\">" + "Linguagem Predominante: " + dadosJSONObj.language + "<p><br>" +
//             "<iframe  class=\"texta\" scrolling=\"no\" src='images/" + dadosJSONObj.language + ".txt'></iframe>" + "<img id=\"lingimg\"width=\"30%\" src='images/" + dadosJSONObj.language + ".png'></img></div><br>" */
//     }
// }
// xhr.send();


//BUSCAR DADOS AUTOMATICAMENTE

// $("#btn_get_repos").click(function () {
//     const user = $('#user').val()
//     $.get({
//       user: user,
//       url: `https://api.github.com/users/${user}/repos`,
//       dataType: "json",
//     })
//       .done(function (result) {
//         clearRepos()
//         for (let i in result) {
//           const divRepos = $('#repo_list')
  
//           const name = `<p>${result[i].name}</p>`
//           const links = `<a href='${result[i].html_url}' target='_blank'>Ir para o repositório</a>`
//           const lang = `<img src='images/${result[i].language}.svg' id='lang' width='100'>`
//           const infos = `<button onclick='envia(${JSON.stringify(result[i])})' id='btn-details'>Detalhes</button>`
  
//           const repo =
//             `<div id="repo">
//               <div>${name}${links}${infos}</div>
//               <div>${lang}</div>
//             </div>`
  
//           divRepos.append(repo)
//         }
  
//         getFollowers(this.user)
  
//         $('#user-infos').append(`<img src='${result[0].owner.avatar_url}'>`)
//           .append(`<p id='user-name'>${result[0].owner.login}</p>`)
//           .append(`<p id='repo_count'>${"Número total de repositórios: " + result.length}</p>`)
//       })
  
//       .fail(function (result, textStatus, msg) {
//         clearRepos()
//         $('#repo_list').append(msg)
//       })
//   })
  
//   function envia(result) {
//     localStorage.result = JSON.stringify(result)
//     window.open('repo-infos.html')
//   }
  
//   function clearRepos() {
//     $('#repo_list').html('')
//     $("#repo_count").html('')
//     $('#user-infos').html('')
//   }
  
//   function getFollowers(user) {
//     $.get({
//       url: `https://api.github.com/users/${user}/followers`,
//       dataType: "json",
//     })
//       .done(function (resultFollowers) {
//         const followers = `<p>${resultFollowers.length} Seguidores</p>`
//         $('#user-infos').append(followers)
//       })
//   }