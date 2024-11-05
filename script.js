
const dataProductsItems = `
    [
        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_1.png",
            "infoText": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$52",
            "dataKey": "1"

        },

        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_2.png",
            "infoText": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$52",
            "dataKey": "2"
        },

        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_3.png",
            "infoText": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$52",
            "dataKey": "3"
        },

        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_4.png",
            "infoText": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$52",
            "dataKey": "4"
        },

        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_5.png",
            "infoText": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$52",
            "dataKey": "5"
        },

        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_6.png",
            "infoText": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "price": "$52",
            "dataKey": "6"
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

const dataCartsElem = JSON.parse(dataCartItems);

const storageElems = document.querySelector('.storage');

const dataItemCards = JSON.parse(dataProductsItems);
// const cartItemElem = JSON.parse(dataCartItems);

const productItemCards = document.querySelector('.product-items__cards');
const itemButtonElem = document.querySelector('.product-items__button');
let count = 0;
const cartlist = document.querySelector('.cart');

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
    
        const itemCardTextPrice = document.createElement('h2');
        itemCardTextPrice.classList.add('product-items__cards_card_text_price');
        itemCardTextPrice.textContent = element.price;


    
        productItemCards.appendChild(itemCard);
        itemCard.appendChild(itemCardImg);
        itemCard.appendChild(itemCardText);
        itemCardText.appendChild(itemCardTextName);
        itemCardText.appendChild(itemCardTextInfo);
        itemCardText.appendChild(itemCardTextPrice);
    });

    itemButtonElem.remove();

    const itemCards = document.querySelectorAll('.product-items__cards_card');

    const addBtnElem = document.createElement('button');
    addBtnElem.classList.add('product-items__cards_card_button');
    addBtnElem.textContent = 'Add to Cart';
  
    itemCards.forEach(card => {
        card.addEventListener('mouseover', function (e) {
            // addBtnElem.style.opacity = '1';
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
        storageCartClose.setAttribute('onclick', carts.onclick)
                
            
            
            
            
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
        });
    });  
});


function Remove($key) {
    let listCars = document.querySelectorAll('.storage .storage__card');
    listCars.forEach(elem => {
        if (elem.getAttribute('data-key') == $key) {
            elem.remove();
            count--;
            console.log(count);
        }
        
        if (count === 0) {
            cartlist.style.display = 'none';
        }
    });
}






















