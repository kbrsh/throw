
var init = function() {
    document.getElementById("throw").innerHTML = atob(window.location.href.split("/#")[1]) || "This is your Throw. \nIt is a simple note, that supports basic markdown syntax.\nThe best part? It is all stored in the URL."
}



function markdown(text) {
    //return text.replace(/\[(.*?)\]\((.*?)\)/ig, '<a href=\'$2\'>$1</a>');
    // for now
    return text;
}

