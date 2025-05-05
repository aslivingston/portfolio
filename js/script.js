// -------------- INDEX Project Section - JSON Project File Fetch --------------------------

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.2
    });

    // Observe all existing .entry-animation elements
    document.querySelectorAll('.entry-animation').forEach(el => {
        observer.observe(el);
    });

    // Fetch and add projects dynamically
    fetch('js/data.json')
        .then(response => response.json())
        .then(data => {
            data.projects.forEach(project => {
                const wrapper = document.createElement('div');
                wrapper.classList.add('entry-animation');

                wrapper.innerHTML = `
                    <p class="numbers">${project.id} - ${project.name}</p>

                    <div class="project-links">
                        ${project.github ? `<a class="web-links" href="${project.github}" target="_blank"><i class="fa-brands fa-github fa-2xl"></i>Github</a>` : ''}
                        ${project.liveLink ? `<a class="web-links" href="${project.liveLink}" target="_blank"><i class="fa-solid fa-up-right-from-square fa-xl"></i>Live Website</a>` : ''}
                        ${project.tag1 ? `<button class="projectTags" type="button" disabled>${project.tag1}</button>` : ''}
                        ${project.tag2 ? `<button class="projectTags" type="button" disabled>${project.tag2}</button>` : ''}
                        ${project.tag3 ? `<button class="projectTags" type="button" disabled>${project.tag3}</button>` : ''}
                        ${project.team ? `<button class="teamTag" type="button" disabled>${project.team}</button>` : ''}
                    </div>

                    <div class="project-img-div">
                        <p class="project-details">${project.desc}</p>
                        <img class="project-image" src="${project.img}" alt="example project image">
                    </div>`;

                projectsDisplay.appendChild(wrapper);
                observer.observe(wrapper); // Observe dynamic entry
            });
        });
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

