console.log(DATA);
for (let i = 0; i < DATA.length; i++) {
    let optn = document.createElement('option');
    optn.innerText = DATA[i].name;
    document.getElementById('name').appendChild(optn);
    let comp = document.createElement('option');
    comp.innerText = DATA[i].company;
    document.getElementById('company').appendChild(comp);
    let lbl = document.createElement('label');
    document.getElementById('review').appendChild(lbl);
    lbl.innerText = DATA[i].review;
    let rad = document.createElement('input');
    rad.type = 'radio';
    rad.name = 'monolog';
    if (i == 0) { rad.checked = true; }
    lbl.prepend(rad);
}
for (i = 0; i < PROF.length; i++) {
    optn = document.createElement('option');
    optn.innerText = PROF[i].position;
    document.getElementById('position').appendChild(optn);
}
//массив ссылок к фотографиям

function WhatSay() {
    document.getElementById('reviews').remove();
    let div = document.createElement('div');
    div.id = 'reviews';
    document.getElementById('reforma').appendChild(div);

    let clientName = document.getElementById("name");
    let nameCode = clientName.options[clientName.selectedIndex].value;
    let nameInfo = null;
    let photosInfo = null;

    for (let i = 0; i < DATA.length; i++) {
        if (DATA[i].name === nameCode) {
            nameInfo = DATA[i].name;
            photosInfo = DATA[i].photos;
            console.log(nameInfo + ' ' + photosInfo);
            break;
        }
    }

    let clientCompany = document.getElementById("company");
    let companyCode = clientCompany.options[clientCompany.selectedIndex].value;
    let companyInfo = null;
    let logosInfo = null;

    for (let i = 0; i < DATA.length; i++) {
        if (DATA[i].company === companyCode) {
            companyInfo = DATA[i].company;
            logosInfo = DATA[i].logos;
            break;
        }
    }

    let clientPosition = document.getElementById("position");
    let positionCode = clientPosition.options[clientPosition.selectedIndex].value;
    let positionInfo = null;

    for (let i = 0; i < PROF.length; i++) {
        if (PROF[i].position === positionCode) {
            positionInfo = PROF[i].position;
            break;
        }
    }

    let clientReview = document.getElementsByName("monolog");
    //let reviewCode = clientReview.checked.value;
    let reviewInfo = null;

    for (let i = 0; i < DATA.length; i++) {
        if (clientReview[i].type == "radio" && clientReview[i].checked) {
            reviewInfo = DATA[i].review; break;
        }
    }

    //создаёт пустой блок-карточку с отзывом клиента
    let div0 = document.createElement('div');
    div0.setAttribute('class', "blocks-item");
    document.getElementById('reviews').appendChild(div0);
    let div00 = document.createElement('div');
    div0.appendChild(div00);
    //голубая полоса с именем клиента
    div = document.createElement('div');
    div.setAttribute('class', "sub1-blocks-item");
    div.textContent = nameInfo;
    div00.appendChild(div);
    //создаёт пустое содержимое карточки
    let div1 = document.createElement('div');
    div1.setAttribute('class', "sub2-blocks-item");
    div00.appendChild(div1);
    //фото клиента
    let div2 = document.createElement('div');
    div2.setAttribute('class', "div-clients");
    div1.appendChild(div2);
    let img1 = document.createElement('img');
    img1.setAttribute('src', photosInfo);
    img1.setAttribute('alt', nameInfo);
    img1.setAttribute('class', "clients");
    div2.appendChild(img1);
    //голубая надпись под фото
    let div3 = document.createElement('div');
    div3.setAttribute('class', "blue-on-white");
    div1.appendChild(div3);
    let div4 = document.createElement('div');
    div4.setAttribute('class', "organization");
    div4.textContent = companyInfo;
    div3.appendChild(div4);
    let div5 = document.createElement('div');
    div5.setAttribute('class', "profession");
    div5.textContent = positionInfo;
    div3.appendChild(div5);
    //отзыв клиента (здесь ещё надо доработать вставку нужного текста!!!)
    let div6 = document.createElement('div');
    div6.setAttribute('class', "review");
    div6.textContent = reviewInfo;
    div1.appendChild(div6);
    //логотип компании
    let div7 = document.createElement('div');
    div7.setAttribute('class', "div-logos");
    div0.appendChild(div7);
    let img2 = document.createElement('img');
    img2.setAttribute('src', logosInfo);
    img2.setAttribute('alt', companyInfo);
    img2.setAttribute('class', "logos");
    div7.appendChild(img2);
}


//ClientsSay();
//alert('Есть карточки!');

//alert('...Появились фотографии!');

/*function changeDiv() {
        //alert('Сейчас блок HEADER поменяет цвет на синий, граница будет зелёной, а текст оранжевый')
        let divItem = document.getElementById("head");
        divItem.setAttribute(
            "style",
            "background-color: #0047a3; border: 1px solid #3abb01; color: #ff7c00;"
        );
    }
setTimeout(img(i), 5000);
setTimeout(changeDiv(), 5000);*/



