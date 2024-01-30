// -------------- JSON Project File Fetch --------------------------

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
                <img src="${project.img}" alt="project image">
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

//---------- Contact Form Submit Handler --------------------------

document.querySelector('#enquiry-form').addEventListener('submit', submitHandler)

function submitHandler(event) {

    const nameInput = document.querySelector('#name').value
    const emailInput = document.querySelector('#email').value
    const phoneInput = document.querySelector('#phone').value
    const termsInput = document.querySelector('#checkbox')

    if (termsInput.checked === false ||
        nameInput.length === 0 || 
        emailInput.length === 0 ||
        phoneInput.length === 0 )
        {
        event.preventDefault()
        console.log('submission blocked')
        document.querySelector('#nameError').classList.add('show')
        document.querySelector('#emailError').classList.add('show')
        document.querySelector('#phoneError').classList.add('show')
        document.querySelector('#termsError').classList.add('show')
    } else {
        console.log('submission made')
    }

}
