// JavaScript
window.addEventListener("load", () => {
  fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(produtos => {
      const container = document.getElementById("produtosContainer");

      for (let i = 0; i < 10; i++) {
        const produto = produtos[i];

        const card = `
              <div class="card" style="width: 18rem;">
                <img src="${produto.image}" class="card-img-top" alt="${produto.title}">
                <div class="card-body">
                  <h5 class="card-title">${produto.title}</h5>
                  <p class="card-text">Categoria: ${produto.category}</p>
                  <p class="card-text"><strong>R$ ${produto.price.toFixed(2)}</strong></p>
                  <a href="#" class="btn btn-primary">Ver Produto</a>
                </div>
              </div>
            `;
        
        container.innerHTML += card;
      }
    })
    .catch(erro => {
      console.error("Erro ao buscar os produtos:", erro);
    });
});
