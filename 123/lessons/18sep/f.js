ingredients = [
    {
        weight: "1 кг",
        price: 100,
        name: 'Морковь',
        selected: true
    },
    {
        weight: "1 кг",
        price: 150,
        name: 'Свекла',
        selected: true
    },
    {
        weight: "1 кг",
        price: 200,
        name: 'Чеснок',
        selected: true
    },
    {
        weight: "1 кг",
        price: 90,
        name: 'Картошка',
        selected: false
    },
    {
        weight: "1 кг",
        price: 100,
        name: 'Укроп',
        selected: false
    }]

console.log(selected = ingredients.reduce((total, ingredients) => {
    if (ingredients.selected == true) {
        return total + ingredients.price;
    }
    else {
        return total;
    }
}, 0))


