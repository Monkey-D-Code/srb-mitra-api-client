const BaseAjaxLocalUrl = "http://127.0.0.1:8000/";
const AllProductsUrl = "product/all/";
const AllCatagoriesUrl = "product/groups/all/";
const AllBrandsUrl = "product/brands/all/";

const BootstrapCard = ((imgUrl , cardTitle , cardText , item_id , BtnText)=>{

    const BootstrapCardHtml = `

        
        <div class="card" style="width: 100%;">
            <img class="card-img-top" src="${imgUrl}" alt="${cardTitle}" width="100%">
            <div class="card-body">
                <h3 class="card-title">${cardTitle}</h3>
                <p class="card-text">${cardText}</p>
                <button id="${item_id}" class="btn btn-success"><strong>Buy</strong> ${BtnText}</button>
            </div>
        </div><hr>`


    return BootstrapCardHtml;
});

const BootstrapList = ((list_item)=>{

    const item = `<li class="list-group-item">${list_item}</li>`
    return item;
});

const ListGroup = ((list)=>{

    const list_html = `<ul class="list-group">${list}</div>`;
    return list_html;

});




let AllProductsJSON;
let AllCatagoriesJSON;
let AllBrandsJSON;