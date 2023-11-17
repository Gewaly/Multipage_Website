const search = document.querySelector(".search");
const dis_search = document.querySelector(".dis-search");
const carts = document.querySelector(".carts");
const dis_carts = document.querySelector(".dis-carts");

function Fun_search() {
  if (dis_search.style.display === "block") {
    dis_search.style.display = "none";
  } 
  else {
    dis_search.style.display = "block";
    dis_carts.style.display = "none";

  }
}
function Fun_carts() {
  if (dis_carts.style.display === "block") {
    dis_carts.style.display = "none";
  } 
  else {
    dis_carts.style.display = "block";
    dis_search.style.display = "none";

  }
}
