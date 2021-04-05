export default () => {
    console.log('Set Timeout İşlemleri');
    // Bir kodun belirli bir süre sonra çalışmasını sağlar
    // İki parametre alır: Bir fonksiyon ve ms cinsinden süre
    /*
    setTimeout(
        () => {
            console.log('5 saniye sonra çalıştım')
        },
        5000);
    
    // setTimeout'un içindeki koddan önce çalışır
    console.log('timeout\'un altındaki kod');
    */

    console.log('3 saniye sonra çalışacak timeout\'u hazırladım.');
    let timeout = setTimeout(() => {
        console.log('Ben 3 saniye sonra çalışacağım.')
    }, 3000);
    console.log('3 saniyelik timeout\'u yok ediyorum.');
    clearTimeout(timeout);

    console.log('Set Interval İşlemleri');
    // Bir kodun belirli aralıklarla sürekli çalışmasını sağlar.
    // İki parametre alır: Bir fonksiyon ve ms cinsinden süre
    /*
    setInterval(() => {
        console.log('aralıklarla çalışıyorum')
    }, 2000);
    */
};