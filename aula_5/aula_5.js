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
        <button class="btn btn-primary" onclick="editarProduto(${produto.id})">
          Editar
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

function modalNovoProduto() {
  limparFormulario();
  abrirModal();
}

async function editarProduto(id) {
  const url = `${API_URL}/${id}`;

  try {
    const resposta = await fetch(url);
    const produto = await resposta.json();
    popularFormulario(produto);
    abrirModal();
  } catch (error) {
    alert("Não foi possível editar este produto");
  }
}
function salvarProduto() {
  const id = Number(document.querySelector("#id").value) || 0;
  const nome = document.querySelector("#nome").value;
  const preco = document.querySelector("#preco").value;
  const quantidade = document.querySelector("#quantidade").value;
  //Não permitir campos vazios

  if (nome == "" || preco == "" || quantidade == "") {
    alert("Todos os campos são obrigatórios");
    return;
  }

  //Não permitir valores não númericos para preco

  if (!Number(preco) || !Number(quantidade)) {
    alert("Campo preco e quantidade devem ser númericos.");
    return;
  }

  if (id) {
    atualizarProduto(id);
    return;
  }

  criarProduto();
}

function criarObjetoProduto() {
  return {
    nome: document.querySelector("#nome").value,
    preco: document.querySelector("#preco").value,
    quantidade: document.querySelector("#quantidade").value,
  };
}

async function criarProduto() {
  const produto = criarObjetoProduto();

  try {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    });
    limparFormulario();
    fecharModal();
    buscarProdutos();
  } catch (error) {
    alert("Não foi possível adicionar o produto");
  }
}
async function atualizarProduto(id) {
  const produto = criarObjetoProduto();
  const url = `${API_URL}/${id}`;

  try {
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    });
    limparFormulario();
    fecharModal();
    buscarProdutos();
  } catch (error) {
    alert("Não foi possível editar o produto");
  }
}

function popularFormulario(produto) {
  document.querySelector("#id").value = produto.id;
  document.querySelector("#nome").value = produto.nome;
  document.querySelector("#preco").value = produto.preco;
  document.querySelector("#quantidade").value = produto.quantidade;
}

function limparFormulario() {
  document.querySelector("#id").value = "";
  document.querySelector("#nome").value = "";
  document.querySelector("#preco").value = "";
  document.querySelector("#quantidade").value = "";
}

function abrirModal() {
  const modalHtml = document.querySelector("#modalProduto");
  const modal = bootstrap.Modal.getOrCreateInstance(modalHtml);
  modal.show();
}

function fecharModal() {
  const modalHtml = document.querySelector("#modalProduto");
  const modal = bootstrap.Modal.getOrCreateInstance(modalHtml);
  modal.hide();
}

buscarProdutos();
