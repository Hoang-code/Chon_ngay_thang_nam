function doingay(){
    let thang = Number(document.getElementById("thang").value);
   
    if (thang == 1 
        || thang == 3
        || thang == 5
        || thang == 7
        || thang == 8
        || thang == 10
        || thang == 12 )
        {
        document.getElementById("hienthingay").innerHTML = "Tháng" + " " + thang + " " + "có số ngày là 31 ngày";
     } else if (thang == 2){
        document.getElementById("hienthingay").innerHTML = "Tháng" + " " + thang + " " + "có số ngày là 30 ngày";
     } else if (thang == 4 
        || thang == 6
        || thang == 9
        || thang == 11
         ){
       
     document.getElementById("hienthingay").innerHTML = "Tháng" + " " + thang + " " + "có số ngày là 28 ngày hoặc 29 ngày";}
     document.getElementById("hienthingay").innerHTML = "Tháng" + " " + thang + " " + "không tồn tại";
       
    }