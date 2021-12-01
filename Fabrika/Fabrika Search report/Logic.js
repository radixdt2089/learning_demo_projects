// console.log('hello ');

async function getdata() {
    const data = await fetch('./categories.json');
    const da =  await data.json()
    const items = da.items;
    console.log(items); // total categories

    const parent_1 = items.filter((i) => i.position == 9)
    console.log(parent_1);


    const parent_2 = items.filter((i) => i.parent_id == 2)
    console.log(parent_2); // navbar items main
    return da;
}

const categories = getdata()

// console.log(categories);

//console.log(categories);
// console.log(data);