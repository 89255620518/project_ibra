/*
const dataCartItems = `
    [
        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_1.png",
            "price": "$52",
            "color": "blue",
            "vector": "./image/Vector.png",
            "quantity": "0"
        },

        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_2.png",
            "price": "$52",
            "color": "black",
            "vector": "./image/Vector.png",
            "quantity": "0"
        },

        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_3.png",
            "price": "$52",
            "color": "white",
            "vector": "./image/Vector.png",
            "quantity": "0"
        },

        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_4.png",
            "price": "$52",
            "color": "orang",
            "vector": "./image/Vector.png",
            "quantity": "0"
        },

        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_5.png",
            "price": "$52",
            "color": "blue",
            "vector": "./image/Vector.png",
            "quantity": "0"
        },

        {
            "name": "ELLERY X M'O CAPSULE",
            "url": "./image/card_6.png",
            "price": "$52",
            "color": "gray",
            "vector": "./image/Vector.png",
            "quantity": "0"
        }
    ] 
`;

const dataCartsElem = JSON.parse(dataCartItems);

const storageElems = document.querySelector('.storage');


dataCartsElem.forEach(cart => {
    const storageCart = document.createElement('div');
    storageCart.classList.add('storage__card');

    const storageCartImg = document.createElement('img');
    storageCartImg.classList.add('storage__card_img');
    storageCartImg.src = cart.url;

    const storageCartInfo = document.createElement('div');
    storageCartInfo.classList.add('storage__card_info');

    const storageCartInfoName = document.createElement('h1');
    storageCartInfoName.classList.add('storage__card_info_name');
    storageCartInfoName.textContent = cart.name;

    const storageCartInfoText = document.createElement('div');
    storageCartInfoText.classList.add('storage__card_info_text');

    const storageCartInfoTextPrice = document.createElement('p');
    storageCartInfoTextPrice.classList.add('storage__card_info_text_p');
    storageCartInfoTextPrice.textContent = 'Price: ';

    const storageCartInfoTextPriceSpan = document.createElement('p');
    storageCartInfoTextPriceSpan.classList.add('storage__card_info_text_p_span');
    storageCartInfoTextPriceSpan.textContent = cart.price;

    const storageCartInfoTextColor = document.createElement('p');
    storageCartInfoTextColor.classList.add('storage__card_info_text_p');
    storageCartInfoTextColor.textContent = `Color: ${cart.color}`;

    const storageCartInfoTextSize = document.createElement('p');
    storageCartInfoTextSize.classList.add('storage__card_info_text_p');
    storageCartInfoTextSize.textContent = `Size: XL`;

    const storageCartInfoTextCount = document.createElement('p');
    storageCartInfoTextCount.classList.add('storage__card_info_text_p');
    storageCartInfoTextCount.textContent = `Quantity`;

    const storageCartInfoTextCountInput = document.createElement('input');
    storageCartInfoTextCountInput.classList.add('storage__card_info_text_p_input');
    storageCartInfoTextCountInput.type = 'number';
    storageCartInfoTextCountInput.textContent = cart.quantity;
    








    storageElems.appendChild(storageCart);
    storageCart.appendChild(storageCartImg);
    storageCart.appendChild(storageCartInfo);
    storageCartInfo.appendChild(storageCartInfoName);
    storageCartInfo.appendChild(storageCartInfoText);
    storageCartInfoText.appendChild(storageCartInfoTextPrice);
    storageCartInfoTextPrice.appendChild(storageCartInfoTextPriceSpan);
    storageCartInfoText.appendChild(storageCartInfoTextColor);
    storageCartInfoText.appendChild(storageCartInfoTextSize);
    storageCartInfoText.appendChild(storageCartInfoTextCount);
});
*/



