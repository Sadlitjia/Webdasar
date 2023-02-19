// fungsi ngetik
const txtElement =['Kota Kecil yang imut dari Provinsi Sulawesi Utara'];
let count = 0;
let txtIndex =0;
let currentTxt='';
let words = '';

(function ngetik(){

    if(count == txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ngetik').textContent = words;
        
    if(words.length == currentTxt.length){
        count++;
        txtIndex =0;
    }
    setTimeout(ngetik, 200);

})();



// Fungsi Jam
function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = "PH";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;

    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;

    setTimeout(showTime,1000);
}
showTime();