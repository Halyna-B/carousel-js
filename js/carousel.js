function renderTestimonials(testimonials) {
    const testimonialsContainer = document.querySelector('.testimonials-carousel');
     for(const testimonial of testimonials)
     testimonialsContainer.innerHTML +=
     ` <article>
     <img src="img/${testimonial.image}" alt="${testimonial.title}">
     <h3>${testimonial.title}</h3>
     <p>${testimonial.description}</p>
     <p class="date">${testimonial.date}</p>
      </article>`
}

function fetchTestimonials() {
    fetch('testimonials.json')
      .then(response => response.json())
      .then(testimonials => renderTestimonials(testimonials))
}

// fetchTestimonials();

let currIndex = 0;

function showCarousel() {
 testimonialContainer = fetchTestimonials([currIndex]);
}

showCarousel();