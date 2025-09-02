function adicionarTarefa() {
    const input = document.getElementById("tarefaInput");
    const lista = document.getElementById("listaTarefas");

    const texto = input.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa antes de adicionar!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = texto;

    lista.appendChild(li);

    // limpa o campo após adicionar
    input.value = "";
    input.focus();
}
