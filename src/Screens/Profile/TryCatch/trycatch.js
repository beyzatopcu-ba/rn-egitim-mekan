export default () => {
    console.log('Try-Catch çalışmaları');

    /*
    console.log('düzgün çalışıyorum')
    console.log('ben de düzgün çalışıyorum')
    console.log(beyza.name)
    console.log('hiç çalışamayacağım')
    */
    
    try {
        // Denenecek kodlar
        // Düzgün çalışan satır
        console.log('düzgün çalışıyorum')
        // Düzgün çalışan satır
        console.log('ben de düzgün çalışıyorum')
        // Hatalı satır
        console.log(beyza.name)
        // Başka bir satır kod - hiç çalışmıyor
        console.log('hiç çalışamayacağım')
        return true;
    } catch (error) {
        // Hata durumunda çalışacak kodlar
        console.log('Hata yakaladım')
        alert('Bir şeyler ters gitti');
        return false;
    } finally {
      // her ne durumda olursa olsun burası çalışır.  
        console.log('ben her zaman çalışacağım')
        return null;
    }
    
};