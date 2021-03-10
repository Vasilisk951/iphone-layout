

document.addEventListener('DOMContentLoaded', () => {

    const tabs = () => {
        /* const cardDetailChangeElems = document.querySelectorAll('.card-detail__change');
        const cardDetailsTitleElems = document.querySelectorAll('.card-details__title');
        const cardImageElems = document.querySelectorAll('.card__image');

        const hideAll = () => {
            for(let i = 0; i < cardDetailChangeElems.length; i++) {
                cardDetailChangeElems[i].classList.remove('active');
                cardDetailsTitleElems[i].classList.remove('active');
                cardImageElems[i].classList.remove('active');
            }
        };

        for(let i = 0; i < cardDetailChangeElems.length; i++) {
            cardDetailChangeElems[i].addEventListener('click', () => {
                hideAll();
                cardDetailChangeElems[i].classList.add('active');
                cardDetailsTitleElems[i].classList.add('active');
                cardImageElems[i].classList.add('active');
            })
        }
    }; */


        const cardDetailChangeElems = document.querySelectorAll('.card-detail__change');
        const cardDetailsTitleElem = document.querySelector('.card-details__title');
        const cardImageItem = document.querySelector('.card__image_item');
        const cardDetailsPriceElem = document.querySelector('.card-details__price');
        const descriptionMemory = document.querySelector('.description__memory');

        const data = [
            {
                name: 'Смартфон Apple iPhone 12 Pro 128GB Graphite',
                img: 'img/iPhone-graphite.png',
                price: '95990',
                memoryRom: 128,
            },
            {
                name: 'Смартфон Apple iPhone 12 Pro 256GB Silver',
                img: 'img/iPhone-silver.png',
                price: '120990',
                memoryRom: 256,
            },
            {
                name: 'Смартфон Apple iPhone 12 Pro 128GB Pacific Blue',
                img: 'img/iPhone-blue.png',
                price: '99990',
                memoryRom: 128,
            }
        ];

        const deactive = () => {
            cardDetailChangeElems.forEach(btn => btn.classList.remove('active'));
        }

        cardDetailChangeElems.forEach((btn, i) => {

            btn.addEventListener('click', () => {

                if(!btn.classList.contains('active')) {

                    deactive();
                    btn.classList.add('active');
                    cardDetailsTitleElem.textContent = data[i].name;
                    cardImageItem.src = data[i].img;
                    cardImageItem.alt = data[i].name;
                    cardDetailsPriceElem.textContent = data[i].price + '₽';
                    descriptionMemory.textContent = `Встроенная память (ROM) ${data[i].memoryRom} ГБ`;

                }
            })
        })





    }
    tabs();
});