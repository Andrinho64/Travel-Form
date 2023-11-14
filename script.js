document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('main-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Função para salvar os valores no localStorage
    function saveToLocalStorage(element) {
      const valueToSave = element.type === 'checkbox' ? element.checked : element.value;
      localStorage.setItem(element.id, valueToSave);
    }

    // Itera sobre os campos do formulário e salva os valores no localStorage
    form.querySelectorAll('input, textarea').forEach(saveToLocalStorage);

    alert('Formulário enviado com sucesso!');
  });

  // Função para carregar os valores dos campos do localStorage
  function loadFromLocalStorage(element) {
    element.value = localStorage.getItem(element.id) || (element.type === 'checkbox' ? false : '');
    if (element.type === 'checkbox') {
      element.checked = localStorage.getItem(element.id) === 'true';
    }
  }

  // Itera sobre os campos do formulário e carrega os valores do localStorage
  form.querySelectorAll('input, textarea').forEach(loadFromLocalStorage);
});
