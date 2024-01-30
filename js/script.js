const projectsDisplay = document.querySelector('.portfolio')

fetch('js/data.json').then(function (response) {
    return response.json() 
}).then(function (data) {
    //console.log(data)
    data.projects.forEach(function (project) {
        console.log(project)
        projectsDisplay.innerHTML += `<div class="container">
            <div>
                <p class="numbers">${project.id}</p>
            </div>

            <div class="project-img">
                <img src="${project.img}" alt="">
            </div>

            <div class="project-text">
            <h3 class="box">&nbsp;${project.name}</h3>
            <p>${project.desc}</p>
            
            <div class="project-links">
                <a class="web-links" href="${project.github}" target="_blank" ><i class="fa-brands fa-github fa-2xl"></i>Github</a>
                <a class="web-links" href="${project.liveLink}" target="_blank" ><i class="fa-solid fa-earth-americas fa-2xl"></i>Live Website</a>
            </div>
        </div>
        </div>`
    })
})