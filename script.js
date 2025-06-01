 function adicionarTarefa() {
      let mensagem = "Tarefa adicionada com sucesso!";

      let imputTarefa = document.getElementById("imputTarefa")
      let tarefa = imputTarefa.value
      document.getElementById("mensagem").textContent = mensagem;

      let listaTarefas = document.getElementById("listaTarefas")
      let novaTarefa = document.createElement("li")

      novaTarefa.textContent = tarefa

      listaTarefas.appendChild(novaTarefa)

      imputTarefa = ""
}