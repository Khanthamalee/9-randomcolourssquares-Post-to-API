import Squares from "./squares";

export default function UpdateData()  {
    //import function Squares เข้ามาใช้งาน
    <Squares />
    //แปลงข้อมูลในหน้า html เป็น string ใน script
    var text = document.getElementById("token").innerHTML
    //test ดู พอได้แล้วน้ำตาจะไหล 
    console.log("text : "+text);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "csrftoken=uujcUV0EulmiHAV5StPuVpJToIecO7YXe4WNrxm3dobnFfdwQ4md4iu4TkrhOtzz");
    
    var raw = JSON.stringify({
        //เอาลงมาแทนค่าเพื่อให้นำค่าสีที่สุ่มได้ไปเพิ่ม token ใน api
      "token": text
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://malee-api.herokuapp.com/api/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    return 
}