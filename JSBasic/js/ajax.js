products.forEach((a,i) => {
  let 템플릿 = 
  `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${products[i].title}</h5>
    <p>가격 : ${products[i].price}</p>
    <button class="buy">구매</button>
  </div>`;
document.querySelector('.row').insertAdjacentHTML('beforeend', 템플릿);
});

let count = 0;
document.querySelector('#more').addEventListener('click', function(e){
  count++;
  console.log(count);
  if(count == 1){
    정보가져오기(1);
  }else if(count == 2){
    정보가져오기(2);
    document.querySelector('#more').classList.add('hide');
  }
});

function 정보가져오기(j) {
  $.get('https://codingapple1.github.io/js/more'+j+'.json')
      .done((data) => {
        console.log(data);

        data.forEach((a,i) => {
          let 템플릿 = 
          `<div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${data[i].title}</h5>
            <p>가격 : ${data[i].price}</p>
            <button class="buy">구매</button>
          </div>`;
        document.querySelector('.row').insertAdjacentHTML('beforeend', 템플릿);
        });
      });
};

// 3-10. array 정렬
document.querySelector('#numArr').addEventListener('click',function() {
  products.sort(function(a,b){
    return a.price - b.price
  });
  console.log(products);

  document.querySelector('.row').innerHTML = '';

  products.forEach((a,i) => {
    let 템플릿 = 
    `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${products[i].title}</h5>
      <p>가격 : ${products[i].price}</p>
      <button class="buy">구매</button>
    </div>`;
  document.querySelector('.row').insertAdjacentHTML('beforeend', 템플릿);
  });
})

document.querySelector('#textArr').addEventListener('click',function() {
  products.sort(function(a,b){
    if(a.title < b.title){
      return 1;
    }else if(a.title = b.title){
      return 0;
    }else if(a.title > b.title){
      return -1;
    } 
  });
  console.log(products);

  document.querySelector('.row').innerHTML = '';

  products.forEach((a,i) => {
    let 템플릿 = 
    `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${products[i].title}</h5>
      <p>가격 : ${products[i].price}</p>
      <button class="buy">구매</button>
    </div>`;
  document.querySelector('.row').insertAdjacentHTML('beforeend', 템플릿);
  });
})

document.querySelector('#underSix').addEventListener('click',function() {
  let usProducts = products.filter(function(a){
    return a.price <= 60000
  })
  console.log(usProducts);

  document.querySelector('.row').innerHTML = '';

  usProducts.forEach((a,i) => {
    let 템플릿 = 
    `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${usProducts[i].title}</h5>
      <p>가격 : ${usProducts[i].price}</p>
      <button class="buy">구매</button>
    </div>`;
  document.querySelector('.row').insertAdjacentHTML('beforeend', 템플릿);
  });
})

// 3-14. 장바구니
// document.querySelector('.buy').addEventListener('click',function(e){
//   let title = e.target.previousElementSibling.previousElementSibling;
// });

$('.buy').click(function(e){
  let title = $(e.target).siblings('h5').text();
  if(localStorage.getItem('cart') != null){
    let 꺼낸거 = JSON.parse(localStorage.getItem('cart'));
    꺼낸거.push(title);
    localStorage.setItem('cart', JSON.stringify(꺼낸거));
  } else{
    localStorage.setItem('cart', JSON.stringify([title]));
  }
});