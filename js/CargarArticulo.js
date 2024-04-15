function AgregarArticulo(){
    var Grupo=document.querySelector("#Area");
    var area=Grupo.options[Grupo.selectedIndex].text;
    switch (area) 
    {
        case "Generales":
            var tabla=document.querySelector("#General");
            
            var html='';
            
            var elementos=document.getElementsByClassName("I_General");

            var num=elementos.length+1;
            
            var titulo= document.querySelector("#Titulo").value;
            var contenido=document.querySelector("#Descripcion").value;

            html='<td class="I_General"><h4>'+ titulo +'</h4><h5 align="center">'+ area +'</h5><p>'+ contenido +'</p></td>';

            tabla.insertRow(-1).innerHTML=html;

            var seccion=document.querySelector("#C_General");
            seccion.textContent="Cantidad de Articulos: " + num;

            break;
        case "Deportes":
            var tabla=document.querySelector("#Deporte");
            
            var html='';
            
            var elementos=document.getElementsByClassName("I_Deportes");

            var num=elementos.length+1;
            
            var titulo= document.querySelector("#Titulo").value;
            var contenido=document.querySelector("#Descripcion").value;

            html='<td class="I_Deportes"><h4>'+ titulo +'</h4><h5 align="center">'+ area +'</h5><p>'+ contenido +'</p></td>';

            tabla.insertRow(-1).innerHTML=html;

            var seccion=document.querySelector("#C_Deporte");
            seccion.textContent="Cantidad de Articulos: " + num;

            break;
        case "Negocios":
            var tabla=document.querySelector("#Negocio");
            
            var html='';
            
            var elementos=document.getElementsByClassName("I_Negocios");

            var num=elementos.length+1;
            
            var titulo= document.querySelector("#Titulo").value;
            var contenido=document.querySelector("#Descripcion").value;

            html='<td class="I_Negocios"><h4>'+ titulo +'</h4><h5 align="center">'+ area +'</h5><p>'+ contenido +'</p></td>';

            tabla.insertRow(-1).innerHTML=html;

            var seccion=document.querySelector("#C_Negocio");
            seccion.textContent="Cantidad de Articulos: " + num;

            break;
    }
    document.querySelector("#Titulo").value="";
    document.querySelector("#Descripcion").value="";

    var tnum=0;
    var elementos=document.getElementsByClassName("I_General");

    tnum+=elementos.length;

    elementos=document.getElementsByClassName("I_Deportes");

    tnum+=elementos.length;

    elementos=document.getElementsByClassName("I_Negocios");

    tnum+=elementos.length;

    var tseccion=document.querySelector("#C_Total");
    tseccion.textContent="Cantidad de Articulos: " + tnum;
}