const menuLoad = () => {
    const container = document.querySelector('.container');
    container.innerHTML = '';

    const title = document.createElement('h1');
    title.textContent = 'Our Delicious Menu'
    title.classList.add('title');
    container.appendChild(title);

    const burgerTitle = document.createElement('p');
    burgerTitle.textContent = 'The Burger of the Gods';
    burgerTitle.classList.add('intro');
    container.appendChild(burgerTitle);

    const burgerImg = new Image();
    burgerImg.src = "img/burger.jpg";
    burgerImg.classList.add('images');
    container.appendChild(burgerImg);

    const lasagneTitle = document.createElement('p');
    lasagneTitle.textContent = 'Lasagne from Mamma';
    lasagneTitle.classList.add('intro');
    container.appendChild(lasagneTitle);

    const lasagneImg = new Image();
    lasagneImg.src = "img/lasagne.jpg";
    lasagneImg.classList.add('images');
    container.appendChild(lasagneImg);

    const sushiTitle = document.createElement('p');
    sushiTitle.textContent = 'Sushi from the Mysterious Depths';
    sushiTitle.classList.add('intro');
    container.appendChild(sushiTitle);

    const sushiImg = new Image();
    sushiImg.src = "img/sushi.jpg";
    sushiImg.classList.add('images');
    container.appendChild(sushiImg);
}

export { menuLoad };