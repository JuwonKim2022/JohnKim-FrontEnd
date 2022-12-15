for(let i = 0; i<3; i++){
  document.querySelectorAll('.card-body h5')[i].innerHTML = products[i].title;
  document.querySelectorAll('.card-price')[i].innerHTML = products[i].price;
}
