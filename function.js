$(document).ready(function() {
  if ($("#teste").val() == "S") {
    $("#testeTexto").html("<span class='pisca'>TESTE</span>");
  }

  $('.alterar').click(function() {
    var tr = $(this).closest('tr');
    var tipo = tr.find('td:eq(0)').text();
    var modelo = tr.find('td:eq(1)').text();
    var marca = tr.find('td:eq(2)').text();
    var cor = tr.find('td:eq(3)').text();
    var renavam = tr.find('td:eq(4)').text();
    var placa = tr.find('td:eq(5)').text();

    $('#myModal .modal-body #tipo').val(tipo);
    $('#myModal .modal-body #modelo').val(modelo);
    $('#myModal .modal-body #marca').val(marca);
    $('#myModal .modal-body #cor').val(cor);
    $('#myModal .modal-body #renavam').val(renavam);
    $('#myModal .modal-body #placa').val(placa);

    $('#myModal').modal('show');
  });

  $('#salvar').click(function() {
    var tipo = $('#myModal .modal-body #tipo').
    val();
    var modelo = $('#myModal .modal-body #modelo').
    val();
    var marca = $('#myModal .modal-body #marca').
    val();
    var cor = $('#myModal .modal-body #cor').
    val();
    var renavam = $('#myModal .modal-body #renavam').
    val();
    var placa = $('#myModal .modal-body #placa').
    val();

    if (tipo != '' && modelo != '' && marca != '' && cor != '' && renavam != '' && placa != '') {
      $('#myModal').modal('hide');
      alert('Dados alterados com sucesso!');
    } else {
      alert('Preencha todos os campos!');
    }
  });

  $('.excluir').click(function() {
    var tr = $(this).closest('tr');
    if (confirm("Deseja excluir esta linha?")) {
      tr.remove();
    }
  });

  $('td:nth-child(2)').click(function() {
    var tr = $(this).closest('tr');
    var marca = tr.find('td:eq(2)').text();
    alert("Marca: " + marca);
  });
});