const toggleBoton = document.querySelector('.lindoBoton');
const contenedorDeArticulos = document.querySelector('.articulos');

toggleBoton.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');
});

const dataDeArticulos = articulos
  .map((articulos) => {
    const { title, date, length, snippet } = articulos;
    const formatoDeFecha = moment(date).format('MMMM Do, YYYY');
    return `<article class="post">
              <h2>${title}</h2>
              <div class="post-info">
                <span>${formatoDeFecha}</span>
                <span>${length} min read</span>
              </div>

              <p>
                ${snippet}
              </p>
            </article>`;
  })
  .join('');

contenedorDeArticulos.innerHTML = dataDeArticulos;