var input = document.getElementById('searchform');
input.oninput = function() {
    window.txtsearch = input.value;
    getPlayers();
};
