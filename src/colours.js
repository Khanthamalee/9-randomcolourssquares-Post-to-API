
//https://lnwquiz.com/post/1083/เขียนโค้ดสุ่มตัวเลขและตัวอักษรไม่ซ้ำด้วยภาษา-JavaScript?fbclid=IwAR21aBjcUH8jLsPVbB2l6YxGd1ToxUu89pDfrDx-vHwzppDIHwgHUNtsPRk
function Randomcolours(length) {
    let characters ='ABCDEF0123456789';
    let result = '';
    //นับจำนวนตัวอักษร
    let charactersLength = characters.length;
    //วนลูปตามจำนวนตัวอักษร
    for ( let i = 0; i < length; i++ ) {
        //เอาตัวอักษรตามตำแหน่งที่ random มาได้เก็บไว้ในตัวแปร result
        result += characters.charAt(Math.floor(Math.random() *charactersLength));
    }

    return result;
}
export default Randomcolours;
    

// จุดเริ่มต้นแกน x.y




//https://khanthamalee.github.io/9-random-colours-squares/
