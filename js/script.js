// -------------- Project Section - JSON Project File Fetch --------------------------

const projectsDisplay = document.querySelector('.portfolio')

fetch('js/data.json').then(function (response) {
    return response.json() 
}).then(function (data) {
    //console.log(data)
    data.projects.forEach(function (project) {
        // console.log(project)
        projectsDisplay.innerHTML += `
            <div>
                <p class="numbers">${project.id} - ${project.name}</p>
            </div>

            <div class="project-links">
                <a class="project-button" href="">View Case Study</a>
                <a class="web-links" href="${project.github}" target="_blank" ><i class="fa-brands fa-github fa-2xl"></i>Github</a>
                <a class="web-links" href="${project.liveLink}" target="_blank" ><i class="fa-solid fa-up-right-from-square fa-xl"></i>Live Website</a>
            </div>

                <div class="project-img-div">
                    <img class="project-image" src="${project.img}" alt="example project image">
                </div>`


    })

    function clickHandler(e) {
        //console.log('clicked')
        e.preventDefault()
        document.querySelector('.module').classList.toggle('visible')
    }

    //document.querySelector('.project-button').addEventListener('click', clickHandler)
    
    document.querySelectorAll('.project-button').forEach(button => {
        button.addEventListener('click', clickHandler)
    })
})


//---------------- Pop Up - JSON File Fetch --------------

// const projectsName = document.querySelector('.pop-up-title')

// fetch('js/data.json').then(function (response) {
//     return response.json() 
// }).then(function (data) {
//     console.log(data)
//     data.projects.forEach(function (project) {
//         console.log(project)
//         projectsName.innerHTML += `
//         <div class="pop-up-left">
//             <span class="pop-up-title">${project.name}</span>    
//         </div>
//             `
//     })

// })

function closeHandler(e) {
    //console.log('clicked')
    e.preventDefault()
    document.querySelector('.module').classList.toggle('visible')
}

document.querySelector('.cancel').addEventListener('click', closeHandler)



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
