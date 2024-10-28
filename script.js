let cursor = document.getElementById("cursor");
    document.addEventListener('mousemove', function (e) {
        let x = e.clientX;
        let y = e.clientY;
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
});

for(var i=0;i<5;i++) {
    console.log(i);
}