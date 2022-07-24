const contactLoad = () => {
    const container = document.querySelector('.container');
    container.innerHTML = '';

    const title = document.createElement('h1');
    title.textContent = 'Wish to Contact Us?'
    title.classList.add('title');
    container.appendChild(title);

    const chefContact = document.createElement('p');
    chefContact.textContent = 'Sam Fisher';
    chefContact.classList.add('intro');
    container.appendChild(chefContact);

    const chefImg = new Image();
    chefImg.src = "img/chef.jpg";
    chefImg.classList.add('images');
    container.appendChild(chefImg);

    const managerContact = document.createElement('p');
    managerContact.textContent = 'Rick Dollar';
    managerContact.classList.add('intro');
    container.appendChild(managerContact);

    const managerImg = new Image();
    managerImg.src = "img/manager.jpg";
    managerImg.classList.add('images');
    container.appendChild(managerImg);

    const waiterContact = document.createElement('p');
    waiterContact.textContent = 'José Armando';
    waiterContact.classList.add('intro');
    container.appendChild(waiterContact);

    const waiterImg = new Image();
    waiterImg.src = "img/waiter.jpg";
    waiterImg.classList.add('images');
    container.appendChild(waiterImg);
}

export { contactLoad };