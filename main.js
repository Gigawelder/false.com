function show_products(products_main) {
    const product_list = document.querySelector(".product-list");
    for (const key in products_main) {
        if (products_main.hasOwnProperty(key)) {
            const product = products_main[key];
            const product_div = document.createElement('div');
            product_div.classList.add('product');
            product_div.setAttribute('data-name', `${product.name}`);
            product_div.setAttribute('data-img', `${product.url}`);
            product_div.setAttribute('data-info', `стоимость: ${product.price} руб`);
            product_div.innerHTML = `
                <img src="${product.url}">
                <h3>${product.name}</h3>
                <p>${product.price} руб. </p>
            `;
            product_list.appendChild(product_div);

            // Добавление обработчика события после добавления элемента в DOM
            product_div.onclick = function() {
                const name = product_div.getAttribute('data-name');
                const info = product_div.getAttribute('data-info');
                const img = product_div.getAttribute('data-img');
                modal_name.textContent = name;
                modal_info.textContent = info;
                modal_img.src = img;
                modal.style.display = 'block';
            };
        }
    }
}

const modal = document.getElementById('modal');
const close_button = document.getElementById('close');
const modal_name = document.getElementById('modal-name');
const modal_info = document.getElementById('modal-info');
const modal_img = document.getElementById('modal-img');

close_button.onclick = function() {
    modal.style.display = 'none';
};
