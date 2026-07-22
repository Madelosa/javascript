const API_URL = "https://6a5fe634b1933e9d25fcc879.mockapi.io/produtos";

async function buscarProdutos() {
  try {
    const resposta = await fetch(API_URL);
    const produtos = await resposta.json();

    popularTabela(produtos);
  } catch (error) {
    console.error(error);
  }
}

function popularTabela(produtos) {
  let html = "";
  for (const produto of produtos) {
    html += `
      <tr>
      <td>${produto.id}</td>
      <td>${produto.nome}</td>
      <td>${produto.preco}</td>
      <td>${produto.quantidade}</td>
      <td>${calcularTotal(produto.preco, produto.quantidade)}</td>
      <td>
        <button class="btn btn-danger" onclick="apagarProduto(${produto.id})">
          Remover
        </button>
        <button class="btn btn-primary">
          Atualizar
        </button>
      </td> 
      </tr>
    `;
  }

  const tbody = document.querySelector(`#table_produtos tbody`);
  tbody.innerHTML = html;
}

function calcularTotal(preco, quantidade) {
  const resultado = Number(preco) * Number(quantidade);
  return resultado.toFixed(2);
}

async function apagarProduto(id) {
  if (!confirm("Realmente deseja apagar este produto?")) {
    return;
  }

  const url = `${API_URL}/${id}`;
  try {
    await fetch(url, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(error);
    alert("Não foi possivel apagar este produto");
  } finally {
    buscarProdutos();
  }
}

async function criarProduto() {}

async function atualizarProduto(id) {}

buscarProdutos();
