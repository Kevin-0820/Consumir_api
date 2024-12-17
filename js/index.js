let actual_pokemon_id=1;
let server_base_url="https://pokeapi.co/api/v2/pokemon/";
let nomber_pokemon = document.getElementById("nombre");
let imagen_pokemon = document.getElementById("img_pokemon");
let numero_pokemon = document.getElementById("numero");
let peso_pokemon = document.getElementById("peso");
let boton_anterior = document.getElementById("btn_anterior");

function siguiente_pokemon(){
    console.log("llamo siguiente");
}

function anterior_pokemon(){
    console.log("anterior");
}

function  cargar_datos(nombre,url_imagen, numero,peso){
    nomber_pokemon.textContent=nombre;
    imagen_pokemon.src = url_imagen;
    numero_pokemon.textContent = "numero: "+ numero;
    peso_pokemon.textContent = "peso: "+ peso;
}

function obtener_pokemon(){
    console.log("obtener");
    var url = server_base_url+ actual_pokemon_id;
    fetch(url)
        .then((Response)=>{
            return Response.json()
        })
        .then((data)=>{
            cargar_datos(
                data.name,
                data.spretes.front_default,
                data.id,
                data.weight
            )
        })
       
window.onload= function(){
    obtener_pokemon();
    
}