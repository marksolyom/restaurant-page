const homeLoad = () => {
    const container = document.querySelector('.container');
    container.innerHTML = '';

    const title = document.createElement('h1');
    title.textContent = 'Welcome to Our Restaurant!'
    title.classList.add('title');
    container.appendChild(title);

    const kidImg = new Image();
    kidImg.src = "img/front.jpg";
    kidImg.classList.add('images');
    container.appendChild(kidImg);

    const intro = document.createElement('p');
    intro.textContent = 'We are pleased to see you visiting our website! If you are hungry, you have come to the perfect place. Our meals are the best in town!';
    intro.classList.add('intro');
    container.appendChild(intro);

    const openingHours = document.createElement('h2');
    openingHours.textContent = 'Opening Hours';
    openingHours.classList.add('open');
    container.appendChild(openingHours);
    const monday = document.createElement('p');
    monday.textContent = 'Monday: 11:00 - 23:00';
    monday.classList.add('open');
    container.appendChild(monday);
    const tuesday = document.createElement('p');
    tuesday.textContent = 'Tuesday: 11:00 - 23:00';
    tuesday.classList.add('open');
    container.appendChild(tuesday);
    const wednesday = document.createElement('p');
    wednesday.textContent = 'Wednesday: 11:00 - 23:00';
    wednesday.classList.add('open');
    container.appendChild(wednesday);
    const thursday = document.createElement('p');
    thursday.textContent = 'Thursday: 11:00 - 23:00';
    thursday.classList.add('open');
    container.appendChild(thursday);
    const friday = document.createElement('p');
    friday.textContent = 'Friday: 10:00 - 02:00';
    friday.classList.add('open');
    container.appendChild(friday);
    const saturday = document.createElement('p');
    saturday.textContent = 'Saturday: 12:00 - 02:00';
    saturday.classList.add('open');
    container.appendChild(saturday);
    const sunday = document.createElement('p');
    sunday.textContent = 'Sunday: 12:00 - 23:00';
    sunday.classList.add('open');
    container.appendChild(sunday);
}

export { homeLoad };