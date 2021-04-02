// Font eklemek için, fontları ekleyip bu dosyayı oluşturduktan sonra
// Terminalde proje yolundayken, 'react-native link' komutunu çalıştırıyoruz.
// Font eklendikten sonra uygulama ilk defa git'ten çekildiğinde
// bu komutu tekrar çalıştırmak gerekebilir.
module.exports = {
    // Dosya yolunun fontları içeren klasörü vermesi gerek
    // En sonra / koymayı unutmayın
    assets: ['./src/Assets/Fonts/'],
};
