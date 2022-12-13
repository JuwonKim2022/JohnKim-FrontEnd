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


function 탭열기(i){
  for(let j = 0; j<3; j++){
    document.querySelectorAll('.tab-button')[j].classList.remove('orange');
    document.querySelectorAll('.tab-content')[j].classList.remove('show');
  }
  document.querySelectorAll('.tab-button')[i].classList.add('orange');
  document.querySelectorAll('.tab-content')[i].classList.add('show');
}