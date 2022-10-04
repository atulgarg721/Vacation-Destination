(function (){

    "use strict";

    
    //This is one method to get input 
    /* const dest = document.querySelector('#nameDest').value;
    const location = document.querySelector('#location').value;
    const destImg = document.querySelector('#photo').value;
    const destDesc = document.querySelector('#Description').value;
        */
    
    const destForm = document.querySelector('#wishList');
    destForm.addEventListener('submit', formHandle);

    function formHandle(event) {
        event.preventDefault();
        //and This is another method to  get input values but it only works in event handler not outside
        const dest = event.target.elements['nameDest'].value;
        const location = event.target.elements['location'].value;
        const destImg = event.target.elements['photo'].value;
        const destDesc = event.target.elements['Description'].value;

        for( let i = 0; i < destForm.length ; i ++){
            destForm.elements[i].value = "";
        }
        const destinationCard = createCard(dest, location, destImg, destDesc);

        const wishContainer = document.querySelector('#dest-container');

        if(wishContainer.children.length === 0){
            document.querySelector('#title').innerHTML = 'My WishList';
        }
        wishContainer.appendChild(destinationCard);

    }
    // Function to create card for Destination
    function createCard(name, location, photoURL, desc){
        const card = document.createElement('div');
        card.className = 'card';
        const image = document.createElement('img');
        image.setAttribute('alt', name);
        if(photoURL.length === 0){
            image.setAttribute('src','images/signpost.jpg');
        } else {
            image.setAttribute('src', photoURL);
        } 
        card.appendChild(image);
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        const dname = document.createElement('h3');
        dname.innerText = name;
        cardBody.appendChild(dname); 
        const dLocation = document.createElement('h4');
        dLocation.innerText = location;
        cardBody.appendChild(dLocation); 
        if(desc.length !== 0){
            const dDesc = document.createElement('p');
            dDesc.className = 'card-text';
            dDesc.innerText = desc; 
            cardBody.appendChild(dDesc); 

        }
        var cardDelbtn = document.createElement('button');
        cardDelbtn.innerText = 'remove';
        cardDelbtn.addEventListener('click', removeDes);
        cardBody.appendChild(cardDelbtn);

        card.appendChild(cardBody);
        return card;

    }

    function removeDes(event) {
        const card = event.target.parentElement.parentElement;
        card.remove();
    }
     
})();