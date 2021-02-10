const modalRamen = document.querySelectorAll('.ramen-modal')
const modalOther = 


let menuData = {};
$.ajax({
    url: './menuData.json',
	dataType: 'json',
	async: false,
	success: function(json) {
        menuData = json;
	}
});

function ramenModal() {
    let toppingHTML = ``;
    for (let j = 0; j < menuData.toppings.length; j++) {
        toppingHTML += `
        <div class="topping-item">
            <span>${menuData.toppings[j].name}</span>
            <div class="topping-item-add">
                <span class="plus">+&nbsp</span>
                <span class="count">0</span>
                <span class="minus">&nbsp-&nbsp&nbsp</span>
                <span>$${menuData.toppings[j].price.toFixed(2)}</span>
            </div>
        </div>
        `
    }
    
    for (let i = 0; i < modal.length; i++) {
        modalRamen[i].innerHTML = `
            <div class="modal-img img${i+1}">
            </div >
            <div class="modal-customize">
                <div class="topping">
                    ${toppingHTML}
                </div>
            </div>
        `
    }
}

ramenModal()
