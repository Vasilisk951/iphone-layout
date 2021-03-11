document.addEventListener('DOMContentLoaded', () => {

    const json = () => {
        fetch('cross-sell-dbase/dbase.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const crossSellList = document.querySelector('.cross-sell__list')
                const createCrossSellItem = (good) => {
                    const liItem = document.createElement('li');
                    liItem.innerHTML = `
                    <article class="cross-sell__item">
                        <img class="cross-sell__image" src=${good.photo} alt="${good.name}">
                        <h3 class="cross-sell__title">${good.name}</h3>
                        <p class="cross-sell__price">${good.price}₽</p>
                        <button class="button_buy cross-sell__button">Купить</button>
                    </article>
                `;
                return liItem;
                }
                data.forEach(item => crossSellList.append(createCrossSellItem(item)));

                const crossSellTitle = document.querySelectorAll('.cross-sell__title');
                const buttonBuy = document.querySelectorAll('.button_buy');
                const modal = document.querySelector('.modal');
                const modalTitle = document.querySelector('.modal__title');


                buttonBuy.forEach((item, index) => {
                    item.addEventListener('click', () => {
                        modal.classList.add('open');
                        modalTitle.innerHTML =  crossSellTitle[index - 1].innerHTML;
                        
                    })
                })
               
            });

    }

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

                if (!btn.classList.contains('active')) {

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
                if (elem.children[0].classList.contains('active') && elem.children[1].classList.contains('active')) {
                    close(elem.children[0], elem.children[1]);
                }
            })
        }

        // событие клика и запуск функций открытия и закрытия
        characteristicsListElem.addEventListener('click', (event) => {
            const target = event.target;
            if (target.classList.contains('characteristics__title')) {
                const parent = target.closest('.characteristics__item');
                const description = parent.querySelector('.characteristics__description');
                description.classList.contains('active') ? close(target, description) : open(target, description);
            }
        });


    };

    // работа модального окна
    const modal = () => {
        const cardDetailsButtonBuy = document.querySelector('.card-details__button_buy');
        const cardDetailsButtonDelivery = document.querySelector('.card-details__button_delivery');
        const modal = document.querySelector('.modal');
        const modalSubtitle = document.querySelector('.modal__subtitle');
        const cardDetailsTitle = document.querySelector('.card-details__title');
        const modalTitle = document.querySelector('.modal__title');

        const openModal = () => {
            document.addEventListener('keydown', escModal);
            modal.classList.add('open');
            modalTitle.innerHTML = cardDetailsTitle.innerHTML;
        };

        const closeModal = () => {
            modal.classList.remove('open');
            document.removeEventListener('keydown', escModal)
        };

        const escModal = event => {
            if (event.code === 'Escape') {
                closeModal();
            }
        };

        cardDetailsButtonBuy.addEventListener('click', () => {
            openModal();
            modalSubtitle.innerHTML = `Оплата`;
        })
        cardDetailsButtonDelivery.addEventListener('click', () => {
            openModal();
            modalSubtitle.innerHTML = `Доставка и оплата`;
        })
        modal.addEventListener('click', (event) => {
            const target = event.target;
            if (target.classList.contains('modal__close') || target.classList.contains('modal')) {
                closeModal();
            }
        })

    }


    json();
    tabs();
    accordion();
    modal();

});