let bagItem;
 
onLoad();
function onLoad(){
     bagItemStr = localStorage.getItem('bagItem');
     bagItem = bagItemStr ? JSON.parse(bagItemStr) : [];
     displayItemOrderedOnHomePage();
     displayBagIcon();

}
function addToBag(itemId){
     bagItem.push(itemId);
     localStorage.setItem('bagItem', JSON.stringify(bagItem));
     displayBagIcon();


}
function displayBagIcon(){
     let bagItemCountElement = document.querySelector('.bag-item-count');
     if(bagItem.length > 0){
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItem.length;
     } else{
          bagItemCountElement.style.visibility = 'hidden';
     }
}

function displayItemOrderedOnHomePage(){

let itemContainerElenent = document.querySelector('.items-container');

if(!itemContainerElenent){
     return;
}
let innerHtml = ' ';
items.forEach(item => {
     innerHtml +=  `  

     
     <div class="item-container">
          <img class="item-img" src="${item.image}" alt="item image" />
          <div class="rating">${item.rating.stars} ⭐| ${item.rating.count}k</div>
          <div class="company-name">${item.company}</div>
          <div class="item-name">${item.item_name}</div>
          <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage} OFF)</span>
          </div>
          <button class="btn-add-bag" onclick="addToBag(${item.id});">Add to Bag</button>
     </div>

`});


itemContainerElenent.innerHTML = innerHtml;
}