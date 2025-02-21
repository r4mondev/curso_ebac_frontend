$(document).ready(function () {
    // Evento de submit do formulário
    $('#form-tarefa').on('submit', function (e) {
      e.preventDefault(); // Evita o recarregamento da página
  
      // Captura o valor do input
      const novaTarefa = $('#input-tarefa').val();
  
      // Verifica se o campo não está vazio
      if (novaTarefa.trim() !== '') {
        // Cria um novo <li> e adiciona à lista
        $('#lista-tarefas').append(`<li>${novaTarefa}</li>`);
  
        // Limpa o campo de input
        $('#input-tarefa').val('');
      }
    });
  
    // Evento de clique nos itens da lista
    $('#lista-tarefas').on('click', 'li', function () {
      // Adiciona ou remove a classe "completed" para riscar o texto
      $(this).toggleClass('completed');
    });
  });