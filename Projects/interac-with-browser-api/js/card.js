const addProduct = () => {
    const productField = document.getElementById('product-name');
    const quenttyField = document.getElementById('product-quentty');
    const product = productField.value;
    const quentty = quenttyField.value;
    productField.value = '';
    quenttyField.value = '';

    console.log(product, quentty);
    displayProduct(product, quentty);
}

const displayProduct = (product, quentty) =>{
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quentty}`;
    ul.appendChild(li);
}

