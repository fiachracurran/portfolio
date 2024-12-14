window.onload = function() {
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbar-main'
    });
    
    fetchNasa();
    handleContactForm();
}

async function fetchNasa() {  // 
    const url = "https://api.nasa.gov/planetary/apod?api_key=VWUtd74fXVnfLYDGfmI4VQv2gDBH2z2ORnUMdqTs";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
  
      const data = await response.json();
      console.log(data);
      const target = document.getElementById('nasa-apod');
      target.src = data.url;
    } catch (error) {
      console.error(error.message);
    }
}

function handleContactForm() {  //
    const contactForm = document.getElementById('contact-form');
    const thankYouMessage = document.getElementById('thank-you-message');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();  // prevents form clear (default behaviour) so that Thank You message can be displayed

        thankYouMessage.classList.add('show');
        contactForm.classList.add('d-none');  // d-none is Bootstrap class for display:none
        
        contactForm.reset();  // resets the form

        // restores visibility of contactForm after 3 seconds
        setTimeout(function() {
            thankYouMessage.classList.remove('show');
            contactForm.classList.remove('d-none');
        }, 3000);
    });
}
