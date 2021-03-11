document.addEventListener('DOMContentLoaded', () => {

    // выбор товара
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
        const characteristicsItemDescriptionMemory = document.querySelector('.characteristics__item-description-memory');

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
                    characteristicsItemDescriptionMemory.textContent = data[i].memoryRom;


                }
            })
        })

    }

    // характеристики 
    const accordion = () => {
        const characteristicsListElem = document.querySelector('.characteristics__list');
        const characteristicsItemElems = document.querySelectorAll('.characteristics__item');

        // открываем характетистику
        const open = (button, dropDown) => {
            closeAllDrops();
            dropDown.style.height = `${dropDown.scrollHeight}px`;
            button.classList.add('active');
            dropDown.classList.add('active');
        }

        // закрываем характеристики 
        const close = (button, dropDown) => {
            button.classList.remove('active');
            dropDown.classList.remove('active');
            dropDown.style.height = '';
        }

        // закрываем предыдущие открытиые пункты характеристик
        const closeAllDrops = () => {
            characteristicsItemElems.forEach((elem) => {
                if(elem.children[0].classList.contains('active') && elem.children[1].classList.contains('active')) {
                    close(elem.children[0], elem.children[1]);
                }
            })
        }

        // событие клика и запуск функций открытия и закрытия
        characteristicsListElem.addEventListener('click', (event) => {
            const target = event.target;
            if(target.classList.contains('characteristics__title')) {
                const parent = target.closest('.characteristics__item');
                const description = parent.querySelector('.characteristics__description');
                description.classList.contains('active') ? close(target, description) : open(target, description);
            }
        });


    };

    const modal = () => {
        const cardDetailsButtonBuy = document.querySelector('.card-details__button_buy');
        const cardDetailsButtonDelivery = document.querySelector('.card-details__button_delivery');
        const modal = document.querySelector('.modal');
        const modalSubtitle = document.querySelector('.modal__subtitle');

        cardDetailsButtonBuy.addEventListener('click', () => {
            modal.classList.add('open');
            modalSubtitle.innerHTML = `Оплата`;
        })
        cardDetailsButtonDelivery.addEventListener('click', () => {
            modal.classList.add('open');
            modalSubtitle.innerHTML = `Доставка и оплата`;
        })
        modal.addEventListener('click', (event) => {
            const target = event.target;
            if(target.classList.contains('modal__close') || target.classList.contains('modal')) {
                modal.classList.remove('open');
            }
        })
    }
       



    tabs();
    accordion();
    modal();

});