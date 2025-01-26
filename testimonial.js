let textVal = "Reliable banking solutions for your financial operations Reliable banking solutions for your financial operations Reliable banking solutions for your financial";
  const testimonials = [
    { name: "Marvin McKinney", img: "images/marvin.png", text: textVal },
    { name: "Jacob Jones", img: "images/jacob.webp", text: textVal },
    { name: "Theresa Webb", img: "images/theresa.jpg", text: textVal },
    { name: "Ronald Richards", img: "images/ronald.jpg", text: textVal },
    { name: "Cody Fisher", img: "images/cody.jpg", text: textVal }
  ];

  const slider = document.getElementById('testimonial-slider');
  function createTestimonialCards() {
    testimonials.forEach((testimonial) => {
      const card = document.createElement('div');
      card.className = `testimonial-card animated`;
      card.innerHTML = `
        <img src="${testimonial.img}" alt="${testimonial.name}" class="avatar">
        <p>${testimonial.name}</p>
        <p>${testimonial.text}</p>
      `;
      slider.appendChild(card);
    });
  }

  createTestimonialCards();
  createTestimonialCards();

  const testimonialSlider = document.querySelector('.testimonial-slider');
  function pauseAnimationsAndAddBorder() {
    const cards = document.querySelectorAll('.testimonial-card');
    testimonialSlider.style.animationPlayState = 'paused';
    cards.forEach(card => {
      card.style.animationPlayState = 'paused';
    });

  }

  function resumeAnimationsAndRemoveBorder() {
    const cards = document.querySelectorAll('.testimonial-card');
    testimonialSlider.style.animationPlayState = 'running';
    cards.forEach(card => {
      card.style.animationPlayState = 'running';
    });
  }

  testimonialSlider.addEventListener('mouseover', pauseAnimationsAndAddBorder);
  testimonialSlider.addEventListener('mouseout', resumeAnimationsAndRemoveBorder);