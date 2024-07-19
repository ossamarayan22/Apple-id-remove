const product = [
    {
        id: 0,
        image: 'gg-1.png',
        title: 'iphone 14 plus',
        price: 800,
    },
    {
        id: 1,
        image: 'gg-1.png',
        title: 'iphone 14 plus',
        price: 800,
    },
    {
        id: 2,
        image: 'gg-1.png',
        title: 'iphone 14 plus',
        price: 800,
    },
    {
        id: 3,
        image: 'gg-1.png',
        title: 'iphone 14 plus',
        price: 800,
    },
    {
        id: 4,
        image: 'gg-1.png',
        title: 'iphone 14 plus',
        price: 800,
    },
    {
        id: 5,
        image: 'gg-1.png',
        title: 'iphone 14 plus',
        price: 800,
    },
];

const categories = [...new Set(product.map((item) => { return item }))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
});

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { image, title, price } = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>${price}.00 MAD</h2>
                <button id="sent">Unlock Now</button>
                </div>
            </div>`
        )
    }).join('')
};
displayItem(categories);