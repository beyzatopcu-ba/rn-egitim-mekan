export default () => {

    console.log('>>>>>>>>> Promise işlemleri')

    // Promise = söz
    // Düzgün bir şekilde çalışabilecek ama çalışmayabilecek kodlar için


    /*
    let aPromise = new Promise((resolve, reject) => {
        
        try {
            console.log('Sözümü tutmaya çalışıyorum.')
            resolve(true);
        } catch (error) {
            console.log('Sözümü tutamadım.')
            reject(error);
        }
        
       resolve(true);
    });

    console.log('aPromise ->', aPromise);

    aPromise
        .then(successValue => {
            console.log('then -> ' + successValue);
        })
        .catch(error => {
            console.log('catch -> ' + error)
        })
        .finally(() => {
            console.log('finally');
        })
*/

        // İşin tamamlanıp tamamlanmayacağı kesin değil, belirsiz.
        // Uzun süre alabilir.
        const sum = (number1, number2) => {
            return new Promise((resolve, reject) => {
                if (number1 < 0 || number2 < 0) {
                    console.log('Toplayamam, reddediyorum');
                    reject('0 dan küçük olduğu için toplayamam');
                }
                let addition = number1 + number2;
                resolve('Topladım. Toplam: ' + addition);
            });
        };

        sum(3,5)
        .then((successValue) => {
            console.log('Başarılı')
            console.log(successValue);
        })
        .catch((error) => {
            console.log('Başarısız')
            console.log(error);
        })

        sum(-5,7)
        .then((successValue) => {
            console.log('Başarılı')
            console.log(successValue);
        })
        .catch((error) => {
            console.log('Başarısız')
            console.log(error);
        })


        /*
        getUsers()
        .then((response) => {
            let users = response.users;
            // kullanıcıları ekrana yansıtacak işlemler
        })
        .catch((error) => {
            // kullanıcıya hatayla ilgili bilgi ver.
        });
        */


};
