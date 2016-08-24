document.getElementById("throw").addEventListener("keyup", function() {
   this.innerHTML = markdown(this.innerHTML);
   
});

function markdown(text) {
    //return text.replace(/\[(.*?)\]\((.*?)\)/ig, '<a href=\'$2\'>$1</a>');
    // for now
    return text;
}