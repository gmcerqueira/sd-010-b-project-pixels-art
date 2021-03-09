window.onload = function () {
  const elementHeader = document.createElement('header');
  document.body.appendChild(elementHeader);

  const elementTitulo = document.createElement('h1');
  elementTitulo.id = 'title';
  elementTitulo.innerText = 'Paleta de Cores';
  elementHeader.appendChild(elementTitulo);

  console.log(document.body);
};
