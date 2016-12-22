function calcular()
{
    var aSmile = document.getElementById("aSmile").value;
    var bSmile = document.getElementById("bSmile").value;
    
    var isaSmile = false;
    var isbSmile = false;
    
    var salida = document.getElementById("salida");
    
    if(aSmile == bSmile)
        {
            isaSmile = true;
        }
    if(aSmile != bSmile)
        {
            isbSmile = false;
        }
    if(isaSmile)
        {
            salida.innerHTML ="Si";
        }else{
               if(isbSmile)
                   {
                       salida.innerHTML = "No";
                   }else{
                       salida.innerHTML ="No"
                   }
                }
}