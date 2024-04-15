async function CargarArticulos(){
    /// Carga Inicial
    var archivo = await fetch("Datos/Generales.json");
    var datajson=await archivo.json();   

    var tabla=document.querySelector("#General");
    var html='';
    var num=0;
    var tnum=0;
    for(var i in datajson)
    {
        num+=1;
        html='<td class="I_General"><h4>'+ datajson[i].Titulo +'</h4><h5 align="center">'+ datajson[i].Categoria +'</h5><p>'+ datajson[i].Contenido +'</p><img class="img-fluid" src="'+ datajson[i].Imagen +'">';
        if (datajson[i].Video!==undefined){
            html+='<video class="mt-3" width="320" height="240" controls=""><source src="'+ datajson[i].Video +'">Tu navegador no soporta el elemento de video.</video><h5>Carabineros atrapan a: "flayte predicador"</h5>';
        }
        if(datajson[i].Audio!==undefined){
            html+='<audio class="mt-3" controls=""><source src="'+ datajson[i].Audio +'">Tu navegador no soporta el elemento de audio.</audio>';
        }
        html+='</td>'
        tabla.insertRow(-1).innerHTML=html;
    }
    var seccion=document.querySelector("#inicio");
    var numero=document.createElement("div");
    numero.textContent="Cantidad de Articulos: " + num;
    numero.classList="Cant";
    numero.setAttribute("id", "C_General");
    tnum+=num;
    seccion.appendChild(numero);
    
    // Carga Deportes
    
    archivo = await fetch("Datos/Deportes.json");
    datajson=await archivo.json();   

    tabla=document.querySelector("#Deporte");
    html='';
    num=0;
    for(var i in datajson)
    {
        num+=1;
        html='<td class="I_Deportes"><h4>'+ datajson[i].Titulo +'</h4><h5 align="center">'+ datajson[i].Categoria +'</h5><p>'+ datajson[i].Contenido +'</p><img class="img-fluid" src="'+ datajson[i].Imagen +'">';
        html+='</td>'
        tabla.insertRow(-1).innerHTML=html;
    }
    seccion=document.querySelector("#deportes");
    numero=document.createElement("p");
    numero.textContent="Cantidad de Articulos: " + num;
    numero.classList="Cant"
    numero.setAttribute("id", "C_Deporte");
    tnum+=num;

    seccion.appendChild(numero);

    archivo = await fetch("Datos/Negocios.json");
    datajson=await archivo.json();   

    tabla=document.querySelector("#Negocio");
    html='';
    num=0;
    for(var i in datajson)
    {
        num+=1;
        html='<td class="I_Negocios"><h4>'+ datajson[i].Titulo +'</h4><h5 align="center">'+ datajson[i].Categoria +'</h5><p>'+ datajson[i].Contenido +'</p><img class="img-fluid" src="'+ datajson[i].Imagen +'">';
        html+='</td>'
        tabla.insertRow(-1).innerHTML=html;
    }
    seccion=document.querySelector("#negocios");
    numero=document.createElement("p");
    numero.textContent="Cantidad de Articulos: " + num;
    numero.classList="Cant";
    numero.setAttribute("id", "C_Negocio");   
    tnum+=num;
    
    seccion.appendChild(numero);
    
    seccion=document.querySelector("#Pie");
    numero=document.createElement("h5");
    numero.textContent="Cantidad de Articulos: " + tnum;
    numero.setAttribute("id", "C_Total");   

    seccion.appendChild(numero);

}