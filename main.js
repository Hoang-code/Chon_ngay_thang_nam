function doingay(){
    let thang = Number(document.getElementById("thang").value)
    let nam = Number(document.getElementById("nam").value);
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
        if (nam % 4 ==0){
            if(nam % 100 == 0){
                if (nam % 400 == 0){
                    document.getElementById("hienthingay").innerText = "tháng 2 có 29 ngày"
                } else
                document.getElementById("hienthingay").innerText = "tháng 2 có 28 ngày"
            } else
            document.getElementById("hienthingay").innerText = "tháng 2 có 29 ngày"
        } else 
        document.getElementById("hienthingay").innerText = "tháng 2 có 28 ngày"
    }
      
      else if (thang == 4 
        || thang == 6
        || thang == 9
        || thang == 11
         ){
       
     document.getElementById("hienthingay").innerHTML = "Tháng" + " " + thang + " " + "có số ngày là 30 ngày"}
     else{

    document.getElementById("hienthingay").innerHTML = "Tháng" + " " + thang + " " + "không tồn tại"}
       
    }
function doingaysiwtch(){
    let thang = Number(document.getElementById("thang").value);
    let nam = Number(document.getElementById("nam").value);
    switch (thang){
        case 2:         
                if (nam % 4 ==0){
                    if(nam % 100 == 0){
                        if (nam % 400 == 0){
                            document.getElementById("hienthingay").innerText = "tháng 2 có 29 ngày"
                        } else
                        document.getElementById("hienthingay").innerText = "tháng 2 có 28 ngày"
                    } else
                    document.getElementById("hienthingay").innerText = "tháng 2 có 29 ngày"
                } else
                document.getElementById("hienthingay").innerText = "tháng 2 có 28 ngày"
         
       // document.getElementById("hienthingay").innerHTML = "Tháng" + " " + thang + " " + "có số ngày là 28 ngày hoặc 29 ngày";
        break
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("hienthingay").innerHTML = "Tháng" + " " + thang + " " + "có số ngày là 31 ngày";
        break
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("hienthingay").innerHTML = "Tháng" + " " + thang + " " + "có số ngày là 30 ngày"
        default:
            document.getElementById("hienthingay").innerHTML = "Tháng" + " " + thang + " " + "không tồn tại"
    }
}