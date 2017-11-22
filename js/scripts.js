var throwEl = document.getElementById("throw");

throwEl.innerHTML = window.location.hash.length === 0 ? "This is your Throw. \nIt is a simple  throwaway note that is stored in the URL." : decodeURI(atob(window.location.hash.substring(1)));
window.location.hash = encodeURI(btoa(throwEl.innerHTML));

throwEl.addEventListener("keyup", function() {
   window.location.hash = encodeURI(btoa(throwEl.innerHTML));
});
