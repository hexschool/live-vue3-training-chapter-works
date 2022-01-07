const productInput = document.getElementById('title');
const productOriginPrice = document.getElementById('origin_price');
const productPrice = document.getElementById('price');
const addBtn = document.getElementById('addProduct');
const productList = document.getElementById('productList');
const clearAllBtn = document.getElementById('clearAll');
const countProduct = document.getElementById('productCount');

let productData = []

function addProduct() {
  if (productInput.value !== '') {
    productData.push({
      id: Math.floor(Date.now()),
      title: productInput.value.trim(),
      origin_price: parseInt(productOriginPrice.value) || 0,
      price: parseInt(productPrice.value) || 0,
      is_enabled: false,
    })

    renderPage(productData);
    productInput.value = '';
    productOriginPrice.value = '';
    productPrice.value = '';
  }
}

addBtn.addEventListener('click', addProduct);

function removeProduct(id) {
  let newIndex = 0;
  productData.forEach((item, key) => {
    if (id == item.id) {
      newIndex = key;
    }
  })
  productData.splice(newIndex, 1);
  renderPage(productData);
}

function statusProduct(id) {
  productData.forEach((item) => {
    if (id == item.id) {
      item.is_enabled = !item.is_enabled;
    }
  })
  renderPage(productData);
}

function clearAllTask(e) {
  e.preventDefault();
  productData = [];
  renderPage(productData);
}

clearAllBtn.addEventListener('click', clearAllTask);

function doSomething(e) {
  const action = e.target.dataset.action;
  const id = e.target.dataset.id;
  if (action === 'remove') {
    removeProduct(id)
  } else if (action === 'status') {
    statusProduct(id)
  }
}

productList.addEventListener('click', doSomething);

function renderPage(data) {
  let str = '';
  data.forEach((item) => {
    str += `
    <tr>
      <td>${item.title}</td>
      <td width="120">
        ${item.origin_price}
      </td>
      <td width="120">
        ${item.price}
      </td>
      <td width="100">
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" id="${item.id}" ${item.is_enabled? 'checked': ''} data-action="status" data-id="${item.id}">
          <label class="form-check-label" for="${item.id}">${item.is_enabled? '啟用' : '未啟用'}</label>
        </div>
      </td>
      <td width="120">
        <button type="button" class="btn btn-sm btn-outline-danger move" data-action="remove" data-id="${item.id}"> 刪除 </button>
      </td>
    </tr>`;
  })
  productList.innerHTML = str;
  countProduct.textContent = data.length;
}

renderPage(productData);
