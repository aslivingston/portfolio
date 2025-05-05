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
                ${project.github ? `<a class="web-links" href="${project.github}" target="_blank"><i class="fa-brands fa-github fa-2xl"></i>Github</a>` : ''}
                ${project.liveLink ? `<a class="web-links" href="${project.liveLink}" target="_blank"><i class="fa-solid fa-up-right-from-square fa-xl"></i>Live Website</a>` : ''}
                ${project.tag1 ? `<button class="projectTags" type="button" disabled>${project.tag1}</button>` : ''}
                ${project.tag2 ? `<button class="projectTags" type="button" disabled>${project.tag2}</button>` : ''}
                ${project.tag3 ? `<button class="projectTags" type="button" disabled>${project.tag3}</button>` : ''}
                ${project.team ? `<button class="teamTag" type="button" disabled>${project.team}</button>` : ''}
            </div>

            <div class="project-img-div">
                <p class="project-details" >${project.desc}</p>
                <img class="project-image" src="${project.img}" alt="example project image" loading="lazy">
            </div>`

    })
})

document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".entry-animation");
  
    function checkAnimations() {
      animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const triggerPoint = window.innerHeight * 0.9;
  
        if (rect.top < triggerPoint) {
          el.classList.add("active");
        }
      });
    }
  
    window.addEventListener("scroll", checkAnimations);
    window.addEventListener("resize", checkAnimations); // optional
    checkAnimations(); // initial check in case elements are already in view
  });
  
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

