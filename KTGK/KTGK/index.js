var food = [
    {
        id: 1,
        name: "Tôm",
        code: "TC01345",
        price: "250.000",
        image: "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1562815515627-WUI5RN2UL8UZPT1WLROY/chup-anh-mon-an-nha-hang-chuyen-nghiep-4.jpg",
    },
    {
        id: 2,
        name: "Cua",
        code: "TC013442",
        price: "550.000",
        image: "https://kimlocphat.vn/upload/mon-an-ngon-02-23-09-2017-11-57-20.jpg",
    },
    {
        id: 3,
        name: "Thịt nướng",
        code: "TC0134342",
        price: "130.000",
        image: "https://tourdanangcity.vn/wp-content/uploads/2020/09/Sky-View-Restaurant-nha-hang-da-nang-1.jpg",
    },
    {
        id: 4,
        name: "beef steak",
        code: "TC013324",
        price: "250.000",
        image: "https://tourdanangcity.vn/wp-content/uploads/2020/09/the-grill-nha-hang-da-nang-1.jpg",
    },
];

function listProducts() {
    for (let i = 0; i <= food.length - 1; i++) {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img src="' + food[i].image + '" class="card-img-top" style="height: 400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">' + food[i].name + '</h5>';
        demo += '<p class="card-text">' + food[i].price + '</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML += demo;
    }
    }

    function listProducts() {
        for (let i = 0; i < food.length; i++) {
            var demo = '<div class="col-3">';
            demo += '<div class="card" style="width: 18rem;">';
            demo += '<img src="' + food[i].image + '" class="card-img-top" style="height: 400px;">';
            demo += '<div class="card-body">';
            demo += '<h5 class="card-title">' + food[i].name + '</h5>';
            demo += '<p class="card-text">' + food[i].price + '</p>';
            demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
            demo += '<a href="#" class="btn btn-secondary" onclick="viewDetail(' + food[i].id + ')">Xem chi tiết</a>'; // Thêm nút xem chi tiết và gọi hàm viewDetail
            demo += '</div>';
            demo += '</div>';
            demo += '</div>';
            document.getElementById("men").innerHTML += demo;
        }
    }
    function viewDetail(id) {
        var product = food.find(item => item.id === id);
        if (product) {
            alert("ID: " + product.id + "\nName: " + product.name + "\nCode: " + product.code + "\nPrice: " + product.price);
        } else {
            alert("Sản phẩm không tồn tại!");
        }
    }
    function order() {
        alert("Đặt hàng thành công!");
    }
    function searchProducts() {
        var searchInput = document.getElementById('searchInput').value.toLowerCase();
        var filteredProducts = food.filter(function(product) {
            return product.name.toLowerCase().includes(searchInput) || product.code.toLowerCase().includes(searchInput);
        });
        displayProducts(filteredProducts);
    }
    function displayProducts(products) {
        var productList = document.getElementById("men");
        productList.innerHTML = "";
    
        products.forEach(function(product) {
            var demo = '<div class="col-3">';
            demo += '<div class="card" style="width: 18rem;">';
            demo += '<img src="' + product.image + '" class="card-img-top" style="height: 400px;">';
            demo += '<div class="card-body">';
            demo += '<h5 class="card-title">' + product.name + '</h5>';
            demo += '<p class="card-text">' + product.price + '</p>';
            demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
            demo += '<a href="#" class="btn btn-secondary" onclick="viewDetail(' + product.id + ')">Xem chi tiết</a>';
            demo += '</div>';
            demo += '</div>';
            demo += '</div>';
            productList.innerHTML += demo;
        });
    }
    