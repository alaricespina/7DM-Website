function changingPics() {
    document.getElementById("Background").src = "1.jpg";
}
var pics = [];
var no = 5;
var i = 1;
while (i<no+1){
    var stri = i.toString();
    var ext = ".jpg"
    var name = stri.concat(ext)
    pics.push(name)
    i++
}
