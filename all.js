console.log("hello it works")

const productList = document.querySelector('.productList');

let data = [];

function getAPI(){
axios.get('http://localhost:3000/products')
.then(function(response){
    console.log(response.data);
    data = response.data;
    renderData(data);
}).catch(function(err){
    console.log(err);
})
}

getAPI();


function renderData(data){
   let str ="";
   data.forEach(el =>{
    const {id, product, imgUrl, price, channel } = el;
    str += ` <li id="${id}">
    <img src="${imgUrl}" alt="">
    <div class="content">
        <h3>${product}</h3>
        <h4>${channel}</h4>
        <p>${price}</p>
    </div>
</li>`;
   })
   productList.innerHTML = str;
}


