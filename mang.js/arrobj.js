var man = [
    {
        id: 1,
        name: "The Cosmo (Đen) Quần short khaki",
        code: "TC01345",
        price: "250.000",
        image: "https://routine.vn/media/amasty/webp/catalog/product/cache/d0cf4470db45e8932c69fc124d711a7e/q/u/quan-short-nam-4-10s24psh029-black-_1__1_jpg.webp",
    },
    {
        id: 2,
        name: "Quần babi",
        code: "TC013442",
        price: "550.000",
        image: "https://routine.vn/media/amasty/webp/catalog/product/cache/d0cf4470db45e8932c69fc124d711a7e/q/u/quan-short-nam-4-10s24psh029-black-_1__1_jpg.webp",
    },
    {
        id: 3,
        name: "Quan tây nam ",
        code: "TC0134342",
        price: "130.000",
        image: "https://routine.vn/media/amasty/webp/catalog/product/cache/d0cf4470db45e8932c69fc124d711a7e/q/u/quan-short-nam-4-10s24psh029-black-_1__1_jpg.webp",
    },
    {
        id: 4,
        name: "Quần jean",
        code: "TC013324",
        price: "250.000",
        image: "https://routine.vn/media/amasty/webp/catalog/product/cache/d0cf4470db45e8932c69fc124d711a7e/q/u/quan-short-nam-4-10s24psh029-black-_1__1_jpg.webp",
    },
];

var woment = [
    {
        id: 1,
        name: "Váy nữ sinh",
        code: "TC0334545",
        price: "120.000",
        image: "https://down-vn.img.susercontent.com/file/1696316d79f933c12cc6015182a36e10",
    },
    {
        id:2,
        name: "Quần jean nữ",
        code: "TC013672",
        price: "520.000",
        image: "https://down-vn.img.susercontent.com/file/1696316d79f933c12cc6015182a36e10",
    },
    {
        id:3,
        name: "Đầm âu nữ  ",
        code: "TC01343580",
        price: "230.000",
        image: "https://down-vn.img.susercontent.com/file/1696316d79f933c12cc6015182a36e10",
        },
    {
        id:4,
        name: "Quần jean dài ống rộng",
        code: "TC013324",
        price: "250.000",
        image: "https://down-vn.img.susercontent.com/file/1696316d79f933c12cc6015182a36e10",
    },
];

function listProducts() {
    for (let i = 0; i <= man.length - 1; i++) {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img src="' + man[i].image + '" class="card-img-top" style="height: 400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">' + man[i].name + '</h5>';
        demo += '<p class="card-text">' + man[i].price + '</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML += demo;
    }

    for (let i = 0; i <= woment.length - 1; i++) {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img src="' + woment[i].image + '" class="card-img-top" style="height: 400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">' + woment[i].name + '</h5>';
        demo += '<p class="card-text">' + woment[i].price + '</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("woment").innerHTML += demo;
    }
}