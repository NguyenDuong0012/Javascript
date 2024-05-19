

// Hàm gọi API để lấy dữ liệu sản phẩm
function getProducts(callback) {
    fetch('https://660d3de56ddfa2943b33b390.mockapi.io/api/BT/product')
        .then(response => response.json())
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
}

// Callback function để xử lý kết quả trả về từ API
function handleProducts(error, data) {
    if (error) {
        console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
    } else {
        const productTableBody = document.getElementById('productTableBody');
        data.forEach(product => {
            const row = `<tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.code}</td>
                <td>${product.price}VND</td>
                <td><img src="${product.image}" alt="${product.name}" width="100" height="100" /></td>
            </tr>`;
            productTableBody.innerHTML += row;
        });
    }
}

// Gọi hàm getProducts với callback handleProducts
getProducts(handleProducts);


(function() {
	var $body = document.body
	, $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];

	if ( typeof $menu_trigger !== 'undefined' ) {
		$menu_trigger.addEventListener('click', function() {
			$body.className = ( $body.className == 'menu-active' )? '' : 'menu-active';
		});
	}

}).call(this);


