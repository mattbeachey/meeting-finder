/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function addToFavorites(id) {
  openLoginForms(id);
  window.scrollTo(0, 0);
  topBarEl.classList.toggle("bar1clicked");
  midBarEl.classList.toggle("bar2clicked");
  botBarEl.classList.toggle("bar3clicked");
  console.log(id);
}
