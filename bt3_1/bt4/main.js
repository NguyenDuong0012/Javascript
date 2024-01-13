function dientich(a,b){
    return a * b;
  }
  function chuvi(a,b){
      return (a + b) * 2;
  }
  
  var a = parseInt(prompt("Nhập số a"))
  var b  = parseInt(prompt("Nhập số b"))
  var chuvi = chuvi(a,b)
  var  dientich = dientich(a,b);
  
  document.write("Diện tích hình chữ nhật là: "+dientich)
  document.write("Chu vi hình chữ nhật là: "+chuvi)