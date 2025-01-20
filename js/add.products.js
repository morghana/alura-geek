document.getElementById("add").addEventListener("click", () => {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
  
    if (input2.value === "" || isNaN(input2.value)) {
      alert("preencha o campo preço corretamente");
      return;
    }
    addProduct(input1.value, input2.value, input3.value);
  });
  
  document.getElementById("clear").addEventListener("click", () => {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
  });
  
  async function addProduct(title, price, img) {
    const newProduct = {
      title: title,
      price: Number(price),
      image: img,
    };
  
    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
  
      if (!response.ok) {
        throw new Error(`Erro: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log("Produto adicionado:", data);
    } catch (error) {
      console.error("Erro ao adicionar produto:", error.message);
    }
  }
