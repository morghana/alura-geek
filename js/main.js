async function fetchProducts() {
    try {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      handleFetchedProducts(data);
    } catch (error) {
      console.error("Erro:", error.message);
    }
  }
  
  function handleFetchedProducts(products) {
    const cardContainer = document.getElementById("cardContainer");
  
    if (products.length < 1) {
      cardContainer.innerHTML = `
   <div  class="found">
    <h1>
    Você não tem nenhum produto
    <h1>
   </div>
    `;
      return;
    }
  
    products.forEach((product) => {
      const newDiv = document.createElement("div");
  
      newDiv.innerHTML = `
          <div class="card">
            <div><img src="${product.image}" alt="${product.title}" /></div>
            <p class="card-title">${product.title}</p>
            <div class="price">
              <p>$ ${product.price.toFixed(2)}</p>
              <span class="clear"  
              }"><i class="bi bi-trash3-fill" id="${
                product.id
              }"  onclick="handleClick(event)"></i></span>
            </div>
          </div>
        `;
  
      cardContainer.appendChild(newDiv);
    });
  }
  
  fetchProducts();