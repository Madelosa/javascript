//const alunos = [
 //   "Gustavo",
 //   "Nilson",
 //   "Ezequiel",
 //   "Brunna",
//];

//alert(alunos[2]);

//for (const aluno of alunos) {
 //   console.log(aluno);
//} 

const carros = [
{
    placa: "AAA033",
    cor: "Branco",
    marca: "VW",
    modelo: "Fusca",
    tetoSolar: false,
    chassi: "AA12345678",
},

 {
    placa: "AAA022",
    cor: "Azul",
    marca: "Chevrolet",
    modelo: "Chevette",
    tetoSolar: false,
    chassi: "AA12345352",
},


{
    placa: "AAA022",
    cor: "Azul",
    marca: "Chevrolet",
    modelo: "Chevette",
    tetoSolar: false,
    chassi: "AA12345352",
},
];

//alert('O carro é $(carro.marca) $(carro.modelo) - $(carro.placa)');

// console.log(carros[0]);
// console.log(carros[1]);

//for (const abc of carros) {
//    console.log(abc.modelo);
//}

function popularTabela() {
    const tbody = document.querySelector("#tabela_carros tbody");

    let html = "";
    for (const carro of carros) {
        html += `
            <tr>
                <td>${carro.marca}</td>
                <td>${carro.modelo}</td>
                <td>${carro.cor}</td>
                <td>${carro.placa}</td>
                <td>${carro.chassi}</td>
                <td>${carro.tetoSolar ? "Sim" : "Não"}</td>
            </tr>
            `;
    }
    tbody.innerHTML = html;
}

popularTabela();