import Randomcolours from "./colours";

 
function Squares(x,y,width,hight){
    // ดึงกราบแคนวาสที่สร้างจาก index.html
    let canvas = document.getElementById('canvas');
    // สร้างสี่เหลี่ยมเก็บไว้ในตัวแปร context
    let context = canvas.getContext('2d');
    // สร้างแถวสามแถวจากตัวแปร j
    var token = '';
    for (let j=0; j<3; j++){
        // สร้างแถวสามคอลัมภ์จากตัวแปร i
        for (let i=0; i<3; i++){
            // เติมสีรูปสี่เหลี่ยมจาการสุ่มสี
            context.fillStyle = "#"+Randomcolours(6);
            context.fillRect(x+i*(width+40), y+j*(hight+40), width, hight);
            token += j*10+i+context.fillStyle;
            document.getElementById("token").innerHTML = token;
            }
        }
        return (context,console.log(token));
}

function Showsqueres() {  

    return (
        Squares(10,30,130,130)


    );
}

export default Showsqueres; 
