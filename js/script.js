// -------------- INDEX Project Section - JSON Project File Fetch --------------------------

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
                <a class="web-links" href="${project.github}" target="_blank" ><i class="fa-brands fa-github fa-2xl"></i>Github</a>
                <a class="web-links" href="${project.liveLink}" target="_blank" ><i class="fa-solid fa-up-right-from-square fa-xl"></i>Live Website</a>
                <button class="projectTags" type="button" disabled>${project.tag1}</button>
                <button class="projectTags" type="button" disabled>${project.tag2}</button>
                <button class="projectTags" type="button" disabled>${project.tag3}</button>
            </div>

            <div class="project-img-div">
                <p class="project-details" >${project.desc}</p>
                <img class="project-image" src="${project.img}" alt="example project image">
                <video width="320" height="240">
                    <source src="${project.video}" type="video/mp4">
                    Your browser does not support the video tag.
                </video> 
            </div>`

    })
})
    // function clickHandler(e) {
    //     //console.log('clicked')
    //     e.preventDefault()
    //     document.querySelector('.module').classList.toggle('visible')
    // }

    // //document.querySelector('.project-button').addEventListener('click', clickHandler)
    
    // document.querySelectorAll('.project-button').forEach(button => {
    //     button.addEventListener('click', clickHandler)
    // })


//-------- scroll eventListener -------

document.addEventListener("DOMContentLoaded", function() {
    const spinImage = document.querySelector("#circle-alert");
  
    window.addEventListener("scroll", function() {
      const rotationValue = window.scrollY;
  
      spinImage.style.transform = `translate(-50%, -50%) rotate(${rotationValue}deg)`;
    });
  });




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
