async function handleClick(e) {
    const productId = e.target.id;
    console.log(`Excluindo produto com ID: ${productId}`);
  
    try {
      const response = await fetch(
        `http://localhost:3000/products/${productId}`,
        {
          method: "DELETE",
        }
      );
  
      if (!response.ok) {
        throw new Error(`Erro: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log("Produto excluído:", data);
    } catch (error) {
      console.error("Erro ao excluir produto:", error.message);
    }
  }