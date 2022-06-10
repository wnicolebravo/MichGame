

let michisEnArray = [];
const contenedor = document.getElementById("contenedor")

//Traigo la lista de palabras del JSON

fetch("./michis.json")
    .then((res) => res.json())
    .then((michis) => {
        contenedor.innerHTML = ""
        michis.forEach((michi) => {
            michisEnArray.push(michi)
            
            contenedor.innerHTML += ` 
                <div id="mich${michi.id}">
                    <img src="${michi.imagen}" id="mich${michi.id}">
                    <a href="${michi.pagina}"
                        <button id="choosebutton1" >${michi.mensaje}</button>
                        <audio src="sonidos/mich${michi.id}.mp3" id="meow${michi.id}"></audio>
                    </a>
               
            `
        });
        const meow1 = document.getElementById("mich1");
        const meow2 = document.getElementById("mich2");
        const meow3 = document.getElementById("mich3");
        
        meow1.addEventListener("click", message1);
        meow2.addEventListener("click", message2);
        meow3.addEventListener("click", message3);
    });

    console.log(michisEnArray); //verificacion de que funciona fetch y que los datos sean un array de objetos



//Guardamos las propiedades de los michs en el localstorage 

let poderes = {
  Chicho: ["Cuidado! Es extremadamente cariñoso, puede aplastarte si lo mimas mucho"],
  Nino: ["Si no le das pollito, se enojará y explotará"],
  GUCHOANSIUDIUS: ["Gatito con mucha ansiedad, no recomendamos su uso"],
}

localStorage.setItem("Poderes de los Michs", JSON.stringify(poderes));


//Evento de click en la imagen y mensaje personalizado de cada mich



function message1() {
  document.getElementById("meow1").play()
  Swal.fire({
      title: `Hola! Soy ${michisEnArray[0].nombre} y ${michisEnArray[0].mensaje}`,
      background: "#008000",
      color: "white"
  });
}

function message2() {
  document.getElementById("meow2").play()
  console.log(michisEnArray)
  Swal.fire({
      title: ` ${michisEnArray[1].nombre}. ${michisEnArray[1].mensaje}`,
      background: "#008000",
      color: "white"
  });

}

function message3() {
  document.getElementById("meow3").play()
  Swal.fire({
      title: `SOY ${michisEnArray[2].nombre} Y ${michisEnArray[2].mensaje}`,
      background: "#008000",
      color: "white"
  });


}




