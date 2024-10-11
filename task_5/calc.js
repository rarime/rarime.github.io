document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('product');
    const quantityInput = document.getElementById('quantity');
    const calculateButton = document.getElementById('calculate');
    const resultSpan = document.getElementById('result');
  
    calculateButton.addEventListener('click', () => {
      const selectedProduct = productSelect.value;
      const quantity = parseInt(quantityInput.value);
  
      if (isNaN(quantity) || quantity < 1) {
        resultSpan.textContent = 'Введите корректное количество!';
        return;
      }
  
      const totalPrice = selectedProduct * quantity;
      resultSpan.textContent = totalPrice + '₽';
    });
  });
  
  
