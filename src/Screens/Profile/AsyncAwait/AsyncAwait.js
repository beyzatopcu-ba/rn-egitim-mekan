export const asyncFunction = async () => {
    console.log('>>>>>>>>>> ASYNC AWAIT İŞLEMLERİ')
    let productList;

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            // ürün listesi için api isteği gönderiyoruz diyelim ki
            setTimeout(() => {
                productList = [
                    {
                        id: 1,
                        name: 'masa',
                    },
                    {
                        id: 2,
                        name: 'bilgisayar',
                    },
                ];
    
                resolve();
            }, 2000);
        });
    }

    console.log('getUsers çağırılmadan önce', productList);

    /*
    // ALT 1
    getUsers()
        .then((success) => {
            console.log('success');
            // Product List'in dolu olduğuna emin olduğum 1. yer:
            console.log(productList);
        })
        .catch((error) => {
            console.log('error');
        });
    */


    // ALT 2
    await getProducts();
    // Burası await edilen / beklenen fonksiyon tamamlandıktan sonra ancak çalışır.
    console.log('Await sonrası', productList);
    
}


export const exampleTwo = async () => {
    const getProductList = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let productList = [
                    {
                        id: 1,
                        name: 'masa',
                    },
                    {
                        id: 2,
                        name: 'bilgisayar',
                    },
                ];

                // resolve(productList);
                reject('olmadı')
            }, 3000);
        });
    }

    getProductList()
        .then((productList) => {
            //alert('then / catch' + productList.length);
        })
        .catch((error) => {

        })

    try {
        const productList = await getProductList();
        alert(productList.length);
    } catch (error) {
        alert('product list elde edilemedi')
    }
    
}