const dataProductsItems = `
    [
        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_1.png",
            "infoText": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$52",
            "dataKey": "1",            
            "dataCount": "1",
            "onclick": "Closed(1)"
        },

        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_2.png",
            "infoText": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$52",
            "dataKey": "2",            
            "dataCount": "2",
            "onclick": "Closed(2)"
        },

        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_3.png",
            "infoText": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$52",
            "dataKey": "3",            
            "dataCount": "3",
            "onclick": "Closed(3)"
        },

        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_4.png",
            "infoText": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$52",
            "dataCount": "4",            
            "dataKey": "4",
            "onclick": "Closed(4)"
        },

        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_5.png",
            "infoText": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$52",
            "dataKey": "5",            
            "dataCount": "5",
            "onclick": "Closed(5)"
        },

        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_6.png",
            "infoText": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$52",
            "dataKey": "6",            
            "dataCount": "6",
            "onclick": "Closed(6)"
        }
    ]
`;

const dataCartItems = `
    [
        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_1.png",
            "price": "$52",
            "color": "blue",
            "vector": "./image/Vector.png",
            "quantity": "0",
            "dataKey": "1",
            "onclick": "Remove(1)"
        },

        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_2.png",
            "price": "$52",
            "color": "black",
            "vector": "./image/Vector.png",
            "quantity": "0",
            "dataKey": "2",
            "onclick": "Remove(2)"
        },

        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_3.png",
            "price": "$52",
            "color": "white",
            "vector": "./image/Vector.png",
            "quantity": "0",
            "dataKey": "3",
            "onclick": "Remove(3)"
        },

        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_4.png",
            "price": "$52",
            "color": "orang",
            "vector": "./image/Vector.png",
            "quantity": "0",
            "dataKey": "4",
            "onclick": "Remove(4)"
        },

        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_5.png",
            "price": "$52",
            "color": "blue",
            "vector": "./image/Vector.png",
            "quantity": "0",
            "dataKey": "5",
            "onclick": "Remove(5)"
        },

        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_6.png",
            "price": "$52",
            "color": "gray",
            "vector": "./image/Vector.png",
            "quantity": "0",
            "dataKey": "6",
            "onclick": "Remove(6)"
        }
    ] 
`;

const dataCommentItem = `

    [
        {
            "dataKey": "1",
            "onClick": "Closed(1)"
        },


        {
            "dataKey": "2",
            "onClick": "Closed(2)"
        },

        {
            "dataKey": "3",
            "onClick": "Closed(3)"
        },

        {
            "dataKey": "4",
            "onClick": "Closed(4)"
        },

        {
            "dataKey": "5",
            "onClick": "Closed(5)"
        },

        {
            "dataKey": "6",
            "onClick": "Closed(6)"
        }
    ]
`

const dataCartsElem = JSON.parse(dataCartItems);

const storageElems = document.querySelector('.storage');

const dataItemCards = JSON.parse(dataProductsItems);
// const cartItemElem = JSON.parse(dataCartItems)
const dataCommentEl = JSON.parse(dataCommentItem);

const containerEl = document.querySelector('.container');

const productItemCards = document.querySelector('.product-items__cards');
const itemButtonElem = document.querySelector('.product-items__button');
let count = 0;
const cartlist = document.querySelector('.cart');

const commentContainerOverlay = document.querySelector('.comment-container__overlay');
const commentProducts = document.querySelectorAll('.comment-product');
const inputCommProduct = document.querySelector('.comment-product__form_input');
const listCommProduct = document.querySelector('.comment-product__list');
let localLists1 = JSON.parse(localStorage.getItem('Продукт1')) || [];
let localLists2 = JSON.parse(localStorage.getItem('Продукт2')) || [];
let localLists3 = JSON.parse(localStorage.getItem('Продукт3')) || [];
let localLists4 = JSON.parse(localStorage.getItem('Продукт4')) || [];
let localLists5 = JSON.parse(localStorage.getItem('Продукт5')) || [];
let localLists6 = JSON.parse(localStorage.getItem('Продукт6')) || [];
const itemlist1 = document.querySelector('[data-list="1"]');
const itemlist2 = document.querySelector('[data-list="2"]');
const itemlist3 = document.querySelector('[data-list="3"]');
const itemlist4 = document.querySelector('[data-list="4"]');
const itemlist5 = document.querySelector('[data-list="5"]');
const itemlist6 = document.querySelector('[data-list="6"]');

let counter1 = localStorage.getItem('counter1') ? parseInt(localStorage.getItem('counter1')) : 0;
let counter2 = localStorage.getItem('counter2') ? parseInt(localStorage.getItem('counter2')) : 0;
let counter3 = localStorage.getItem('counter3') ? parseInt(localStorage.getItem('counter3')) : 0;
let counter4 = localStorage.getItem('counter4') ? parseInt(localStorage.getItem('counter4')) : 0;
let counter5 = localStorage.getItem('counter5') ? parseInt(localStorage.getItem('counter5')) : 0;
let counter6 = localStorage.getItem('counter6') ? parseInt(localStorage.getItem('counter6')) : 0;






itemButtonElem.addEventListener('click', function () {
    dataItemCards.forEach(element => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('product-items__cards_card');
        itemCard.setAttribute('data-key', element.dataKey);

        const itemCardImg = document.createElement('img');
        itemCardImg.classList.add('product-items__cards_card_img');
        itemCardImg.src = element.url;

        const itemCardText = document.createElement('div');
        itemCardText.classList.add('product-items__cards_card_text');

        const itemCardTextName = document.createElement('h1');
        itemCardTextName.classList.add('product-items__cards_card_text_h1');
        itemCardTextName.textContent = element.name;

        const itemCardTextInfo = document.createElement('h1');
        itemCardTextInfo.classList.add('product-items__cards_card_text_p');
        itemCardTextInfo.textContent = element.infoText;

        const itemCardTextPriceComment = document.createElement('div');
        itemCardTextPriceComment.classList.add('product-items__cards_card_text_PriceComment');

        const itemCardTextPrice = document.createElement('h2');
        itemCardTextPrice.classList.add('product-items__cards_card_text_price');
        itemCardTextPrice.textContent = element.price;

        const itemCardTextComment = document.createElement('div');
        itemCardTextComment.classList.add('product-items__cards_card_text_Comment');

        const itemCardTextPriceGif = document.createElement('img');
        itemCardTextPriceGif.classList.add('product-items__cards_card_text_price_gif')
        itemCardTextPriceGif.src = './image/icons8-cообщение-облачко.gif'
        itemCardTextPriceGif.setAttribute('data-path', element.dataKey);

        const itemCardTextPriceCount = document.createElement('div');
        itemCardTextPriceCount.classList.add('product-items__cards_card_text_price_count');
        itemCardTextPriceCount.setAttribute('data-count', element.dataCount);



        productItemCards.appendChild(itemCard);
        itemCard.appendChild(itemCardImg);
        itemCard.appendChild(itemCardText);
        itemCardText.appendChild(itemCardTextName);
        itemCardText.appendChild(itemCardTextInfo);
        itemCardText.appendChild(itemCardTextPriceComment);
        itemCardTextPriceComment.appendChild(itemCardTextPrice);
        itemCardTextPriceComment.appendChild(itemCardTextComment);
        itemCardTextComment.appendChild(itemCardTextPriceCount);
        itemCardTextComment.appendChild(itemCardTextPriceGif);
    });


    itemButtonElem.remove();

    const itemCards = document.querySelectorAll('.product-items__cards_card');

    const addBtnElem = document.createElement('button');
    addBtnElem.classList.add('product-items__cards_card_button');
    addBtnElem.textContent = 'Add to Cart';



    itemCards.forEach(card => {
        card.appendChild(addBtnElem);
        card.addEventListener('mouseover', function (e) {
            addBtnElem.style.opacity = '1';
            card.appendChild(addBtnElem);
        });

        card.addEventListener('mouseleave', function (e) {
            addBtnElem.style.opacity = 'none';
            addBtnElem.remove();
        });
    });

    const draftElem = document.querySelector('.draft');
    dataCartsElem.forEach(carts => {
        const storageCart = document.createElement('div');
        storageCart.classList.add('storage__card');
        storageCart.setAttribute('data-key', carts.dataKey);


        const storageCartImg = document.createElement('img');
        storageCartImg.classList.add('storage__card_img');
        storageCartImg.src = carts.url;

        const storageCartInfo = document.createElement('div');
        storageCartInfo.classList.add('storage__card_info');

        const storageCartInfoName = document.createElement('h1');
        storageCartInfoName.classList.add('storage__card_info_name');
        storageCartInfoName.textContent = carts.name;

        const storageCartInfoText = document.createElement('div');
        storageCartInfoText.classList.add('storage__card_info_text');

        const storageCartInfoTextPrice = document.createElement('p');
        storageCartInfoTextPrice.classList.add('storage__card_info_text_p');
        storageCartInfoTextPrice.textContent = 'Price: ';

        const storageCartInfoTextPriceSpan = document.createElement('p');
        storageCartInfoTextPriceSpan.classList.add('storage__card_info_text_p_span');
        storageCartInfoTextPriceSpan.textContent = carts.price;

        const storageCartInfoTextColor = document.createElement('p');
        storageCartInfoTextColor.classList.add('storage__card_info_text_p');
        storageCartInfoTextColor.textContent = `Color: ${carts.color}`;

        const storageCartInfoTextSize = document.createElement('p');
        storageCartInfoTextSize.classList.add('storage__card_info_text_p');
        storageCartInfoTextSize.textContent = `Size: XL`;

        const storageCartInfoTextCount = document.createElement('p');
        storageCartInfoTextCount.classList.add('storage__card_info_text_p');
        storageCartInfoTextCount.textContent = `Quantity: `;

        const storageCartInfoTextCountInput = document.createElement('input');
        storageCartInfoTextCountInput.classList.add('storage__card_info_text_p_input');
        storageCartInfoTextCountInput.type = 'number';

        const storageCartClose = document.createElement('img');
        storageCartClose.classList.add('storage__card_close');
        storageCartClose.src = carts.vector;
        storageCartClose.setAttribute('onclick', carts.onclick);





        draftElem.appendChild(storageCart);
        storageCart.appendChild(storageCartImg);
        storageCart.appendChild(storageCartInfo);
        storageCart.appendChild(storageCartClose);
        storageCartInfo.appendChild(storageCartInfoName);
        storageCartInfo.appendChild(storageCartInfoText);
        storageCartInfoText.appendChild(storageCartInfoTextPrice);
        storageCartInfoTextPrice.appendChild(storageCartInfoTextPriceSpan);
        storageCartInfoText.appendChild(storageCartInfoTextColor);
        storageCartInfoText.appendChild(storageCartInfoTextSize);
        storageCartInfoText.appendChild(storageCartInfoTextCount);
        storageCartInfoTextCount.appendChild(storageCartInfoTextCountInput);
    });

    let cartsElem = document.querySelectorAll('.product-items__cards_card');

    cartsElem.forEach(cart => {
        cart.addEventListener('click', function (e) {
            if (e.target.classList.contains('product-items__cards_card_button')) {
                const listStorage = document.querySelectorAll('.storage__card');

                listStorage.forEach(elem => {
                    var itemNew = elem.cloneNode(true);
                    var itemData = cart.getAttribute('data-key');
                    let checkinset = false;
                    const closesElem = document.querySelectorAll('.storage .storage__card_close');
                    closesElem.forEach(closes => {
                        closes.style.display = 'flex';
                    });

                    elem.style.animation = 'slide 1.0s ease forwards';

                    if (elem.getAttribute('data-key') === itemData) {
                        const dataStorageCart = document.querySelectorAll('.storage .storage__card');

                        dataStorageCart.forEach(carta => {
                            if (carta.getAttribute('data-key') === itemNew.getAttribute('data-key')) {
                                checkinset = true
                                elem.classList.add('danger');
                                setTimeout(function () {
                                    elem.classList.remove('danger');
                                }, 1000);
                            }
                        });

                        if (checkinset == false) {
                            document.querySelector('.storage').appendChild(itemNew);
                            count++;
                            console.log(count);
                        }
                    }
                });

                cartlist.style.display = 'flex';
            }

            const gifBut = document.querySelectorAll('.product-items__cards_card_text_price_gif');


            gifBut.forEach(gif => {

                gif.addEventListener('click', function (e) {
                    let path = e.currentTarget.getAttribute('data-path');

                    commentProducts.forEach(product => {
                        product.classList.remove('comment-product_visible')
                    });

                    document.querySelector(`[data-target = "${path}"]`).classList.add('comment-product_visible');

                    commentContainerOverlay.classList.add('comment-container__overlay_visible');
                    const addComm = document.querySelector(`[data-but = "${path}"]`);
                    const inputComm = document.querySelector(`[data-input = "${path}"]`);
                    const listComm = document.querySelector(`[data-list = "${path}"]`);
                    addComm.classList.add('submitBut');
                    inputComm.classList.add('input');
                    listComm.classList.add('list');
                });

                const closedBut = document.querySelectorAll('#closed');

                closedBut.forEach(closed => {
                    closed.addEventListener('click', function (e) {
                        commentContainerOverlay.classList.remove('comment-container__overlay_visible');

                        addCommEls.forEach(comm => {
                            comm.classList.remove('submitBut')
                        });

                        commentProducts.forEach(product => {
                            product.classList.remove('comment-product_visible')
                        });

                    });
                });
            });

            const addCommEls = document.querySelectorAll('.submitBut');

            addCommEls.forEach(addComm => {
                addComm.addEventListener('click', function (e) {
                    var addData = e.currentTarget.getAttribute('data-but');
                    let counter1 = localStorage.getItem('counter1') ? parseInt(localStorage.getItem('counter1')) : 0;
                    let counter2 = localStorage.getItem('counter2') ? parseInt(localStorage.getItem('counter2')) : 0;
                    let counter3 = localStorage.getItem('counter3') ? parseInt(localStorage.getItem('counter3')) : 0;
                    let counter4 = localStorage.getItem('counter4') ? parseInt(localStorage.getItem('counter4')) : 0;
                    let counter5 = localStorage.getItem('counter5') ? parseInt(localStorage.getItem('counter5')) : 0;
                    let counter6 = localStorage.getItem('counter6') ? parseInt(localStorage.getItem('counter6')) : 0;
                    const count1 = document.querySelector('[data-count="1"]');
                    count1.textContent = counter1;

                    const count2 = document.querySelector('[data-count="2"]');
                    count2.textContent = counter2;

                    const count3 = document.querySelector('[data-count="3"]');
                    count3.textContent = counter3;

                    const count4 = document.querySelector('[data-count="4"]');
                    count4.textContent = counter4;

                    const count5 = document.querySelector('[data-count="5"]');
                    count5.textContent = counter5;

                    const count6 = document.querySelector('[data-count="6"]');
                    count6.textContent = counter6;

                    switch (addData) {
                        case "1":
                            const inputCom1 = document.querySelector('[data-input="1"]');

                            const newCom1 = inputCom1.value.trim();
                            let stringCount1 = 'counter1';

                            if (newCom1 !== '') {
                                localLists1.push(newCom1);
                                inputCom1.value = '';
                                localStorage.setItem('Продукт1', JSON.stringify(localLists1));
                                addLocalStorage(itemlist1, localLists1);
                                return updateCounter(counter1, stringCount1, count1);
                            }
                            break;

                        case "2":
                            const inputCom2 = document.querySelector('[data-input="2"]');

                            const newCom2 = inputCom2.value.trim();
                            let stringCount2 = 'counter2';

                            if (newCom2 !== '') {
                                localLists2.push(newCom2);
                                inputCom2.value = '';
                                localStorage.setItem('Продукт2', JSON.stringify(localLists2));
                                addLocalStorage(itemlist2, localLists2);
                                return updateCounter(counter2, stringCount2, count2);
                            }
                            break;

                        case "3":
                            const inputCom3 = document.querySelector('[data-input="3"]');

                            const newCom3 = inputCom3.value.trim();
                            let stringCount3 = 'counter3';

                            if (newCom3 !== '') {
                                localLists3.push(newCom3);
                                inputCom3.value = '';
                                localStorage.setItem('Продукт3', JSON.stringify(localLists3));
                                addLocalStorage(itemlist3, localLists3);
                                return updateCounter(counter3, stringCount3, count3);
                            }
                            break;

                        case "4":
                            const inputCom4 = document.querySelector('[data-input="4"]');

                            const newCom4 = inputCom4.value.trim();
                            let stringCount4 = 'counter4';

                            if (newCom4 !== '') {
                                localLists4.push(newCom4);
                                inputCom4.value = '';
                                localStorage.setItem('Продукт4', JSON.stringify(localLists4));
                                addLocalStorage(itemlist4, localLists4);
                                return updateCounter(counter4, stringCount4, count4);
                            }
                            break;

                        case "5":
                            const inputCom5 = document.querySelector('[data-input="5"]');

                            const newCom5 = inputCom5.value.trim();
                            let stringCount5 = 'counter5';

                            if (newCom5 !== '') {
                                localLists5.push(newCom5);
                                inputCom5.value = '';
                                localStorage.setItem('Продукт5', JSON.stringify(localLists5));
                                addLocalStorage(itemlist5, localLists5);
                                return updateCounter(counter5, stringCount5, count5);
                            }
                            break;

                        case "6":
                            const inputCom6 = document.querySelector('[data-input="6"]');

                            const newCom6 = inputCom6.value.trim();
                            let stringCount6 = 'counter6';

                            if (newCom6 !== '') {
                                localLists6.push(newCom6);
                                inputCom6.value = '';
                                localStorage.setItem('Продукт6', JSON.stringify(localLists6));
                                addLocalStorage(itemlist6, localLists6);
                                return updateCounter(counter6, stringCount6, count6);
                            }
                            break;

                        default:
                            alert('Error')
                            break;
                    }
                });
            });
        });
    });
});

addLocalStorage(itemlist1, localLists1);
localStorage.setItem('Продукт1', JSON.stringify(localLists1));
addLocalStorage(itemlist2, localLists2);
localStorage.setItem('Продукт2', JSON.stringify(localLists2));
addLocalStorage(itemlist3, localLists3);
localStorage.setItem('Продукт3', JSON.stringify(localLists3));
addLocalStorage(itemlist4, localLists4);
localStorage.setItem('Продукт4', JSON.stringify(localLists4));
addLocalStorage(itemlist5, localLists5);
localStorage.setItem('Продукт5', JSON.stringify(localLists5));
addLocalStorage(itemlist6, localLists6);
localStorage.setItem('Продукт6', JSON.stringify(localLists6));

function Remove($key) {
    let listCars = document.querySelectorAll('.storage .storage__card');
    listCars.forEach(elem => {
        if (elem.getAttribute('data-key') == $key) {
            elem.remove();
            count--;
        }

        if (count === 0) {
            cartlist.style.display = 'none';
        }
    });
}

function addLocalStorage(itemList, localList) {
    itemList.innerHTML = '';
    localList.forEach(local => {
        const listItem = document.createElement('li');
        listItem.textContent = local;
        itemList.appendChild(listItem);
    });
}

const updateCounter = (counter, string, count) => {
    counter++;
    count.textContent = counter;
    localStorage.setItem(string, counter.toString());
};









