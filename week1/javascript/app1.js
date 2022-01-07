let productData = []

document.getElementById('addProduct').addEventListener('click', (e) => {
  const timeStamp = Math.floor(Date.now());
  if (document.getElementById('title').value.trim() !== '') {
    productData.push({
      id: timeStamp,
      title: document.getElementById('title').value.trim(),
      origin_price: parseInt(document.getElementById('origin_price').value) || 0,
      price: parseInt(document.getElementById('price').value) || 0,
      is_enabled: false,
    })
    let str = '';
    productData.forEach((item) => {
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
    document.getElementById('productList').innerHTML = str;
    document.getElementById('productCount').textContent = productData.length;

    document.getElementById('title').value = '';
    document.getElementById('origin_price').value = '';
    document.getElementById('price').value = '';
  }
});

document.getElementById('clearAll').addEventListener('click', (e) => {
  e.preventDefault();
  productData = [];

  let str = '';
  productData.forEach((item) => {
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
  document.getElementById('productList').innerHTML = str;
  document.getElementById('productCount').textContent = productData.length;
});

document.getElementById('productList').addEventListener('click', (e) => {
  const action = e.target.dataset.action;
  const id = e.target.dataset.id;
  if (action === 'remove') {
    let newIndex = 0;
    productData.forEach((item, key) => {
      if (id == item.id) {
        newIndex = key;
      }
    })
    productData.splice(newIndex, 1);

  } else if (action === 'status') {
    productData.forEach((item) => {
      if (id == item.id) {
        item.is_enabled = !item.is_enabled;
      }
    })
  }
  let str = '';
  productData.forEach((item) => {
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
          <label class="form-check-label" for="${item.id}" data-action="status">${item.is_enabled? '啟用' : '未啟用'}</label>
        </div>
      </td>
      <td width="120">
        <button type="button" class="btn btn-sm btn-outline-danger move" data-action="remove" data-id="${item.id}"> 刪除 </button>
      </td>
    </tr>`;
  })
  document.getElementById('productList').innerHTML = str;
  document.getElementById('productCount').textContent = productData.length;
});

let str = '';
productData.forEach((item) => {
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
document.getElementById('productList').innerHTML = str;
document.getElementById('productCount').textContent = productData.length;