// for(let i = 0; i<3; i++){
//   document.querySelectorAll('.tab-button')[i].addEventListener('click',function(){
//     탭열기(i);
//   });
// }

//이벤트 리스너를 하나만 쓰기
// document.querySelectorAll('.list')[0].addEventListener('click',function(e){
//   for(let i=0; i<3; i++){
//     if(e.target == document.querySelectorAll('.tab-button')[i]){
//       탭열기(i);
//     }
//   }
// });
document.querySelectorAll('.list')[0].addEventListener('click',function(e){
  탭열기(e.target.dataset.id);
});

// 3-1. array
let car = ['소나타', 50000, 'white'];
car[0] = '아반떼';
console.log(car);
console.log(car[0]);
console.log(car[1]);
console.log(car[2]);
// 3-1. object
let car2 = {name:'소나타', price:70000, color:'silver'};
car2.price = 60000;
console.log(car2);
console.log(car2.name);
console.log(car2['name']);

document.querySelectorAll('.car-title')[0].innerHTML = `상품명 : ${car2.name}`;
document.querySelectorAll('.car-price')[0].innerHTML = `판매가 : ₩${car2.price}`;

let car3 = {name:'리노', price:[50000, 3000, 4000]};
console.log(car3);
document.querySelectorAll('.car-price')[1].innerHTML = `할인가 : ₩${car3.price[0]}`;

function 탭열기(i){
  for(let j = 0; j<3; j++){
    document.querySelectorAll('.tab-button')[j].classList.remove('orange');
    document.querySelectorAll('.tab-content')[j].classList.remove('show');
  }
  document.querySelectorAll('.tab-button')[i].classList.add('orange');
  document.querySelectorAll('.tab-content')[i].classList.add('show');
}

// 3-4강 셀렉트
document.querySelectorAll('.form-select')[0].addEventListener('input', function(e){
  // let value = document.querySelectorAll('.form-select')[0].value;
  // let value = this.value;
  let value = e.currentTarget.value;
  let hat = [55, 60, 65, 70, 75];
  let pant = [28, 30, 32, 34];
  let shirt = [95, 100, 105];
  if(value == '모자'){
    document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
    document.querySelectorAll('.form-select')[1].innerHTML = '';
    hat.forEach(function(a){
      document.querySelectorAll('.form-select')[1].insertAdjacentHTML('beforeend', '<option>'+a+'</option>');
    })
  }else if(value == '셔츠'){
    document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
    document.querySelectorAll('.form-select')[1].innerHTML = '';
    shirt.forEach(function(a){
      document.querySelectorAll('.form-select')[1].insertAdjacentHTML('beforeend', '<option>'+a+'</option>');
    })
  }else if(value == '바지'){
    document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
    document.querySelectorAll('.form-select')[1].innerHTML = '';
    pant.forEach(function(a){
      document.querySelectorAll('.form-select')[1].insertAdjacentHTML('beforeend', '<option>'+a+'</option>');
    })

    // for(let i=0; i<pant.length; i++){
    // }

    // let pants = `<option>95</option>
    //   <option>100</option>`;
    // document.querySelectorAll('.form-select')[2].innerHTML = pants;
  }
});

// 3-5 JA로 HTML 넣기
// 방법1)성능 빠름
let a = document.createElement('p');
a.innerHTML = '안녕1';
document.querySelector('#test1').appendChild(a);
// 방법2)
let b = '<p>안녕2</p>';
document.querySelector('#test2').insertAdjacentHTML('beforeend', b);
// 방법3)제이쿼리
let c = '<p>안녕3</p>';
$('#test3').append(c);

let obj = {name:'kim', age:20}
for(let key in obj){
  console.log(obj[key]);
}