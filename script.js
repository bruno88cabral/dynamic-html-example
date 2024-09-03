let tasks = [];

// Adiciona um evento que fica ouvindo o submit do form
// Ou seja assim que o form for enviado vai executar o código do callback
document
  .getElementById("todoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o recarregamento da página por causa do submit do form

    // Obtendo os valores inseridos no formulário
    const descricao = document.getElementById("descricao").value;
    const status = document.getElementById("status").value;

    // adicionando os valores na lista de tarefas para printar no console
    tasks.push({
      descricao,
      status,
    });

    // Criando a nova linha da tabela
    const table = document
      .getElementById("todoTable")
      .getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();

    // Adicionando as células na nova linha
    const descricaoCell = newRow.insertCell(0);
    const statusCell = newRow.insertCell(1);

    // Inserindo os valores nas células
    descricaoCell.textContent = descricao;
    statusCell.textContent = status;

    // Limpando o formulário após adicionar a tarefa
    document.getElementById("todoForm").reset();

    console.log({ tasks });
  });
