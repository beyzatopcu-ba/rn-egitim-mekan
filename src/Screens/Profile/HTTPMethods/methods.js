import AxiosBase from '../../../API/AxiosConfig';

// HTTP GET Methodu
/*
API'den bir data istiyoruz. GET: Getirmek, almak ...
Örnek:
*/
AxiosBase.get('url');

// HTTP POST Methodu
/*
Bir değişikliğe sebep olacak istekler POST ile gönderiliyor
Bu isteğe, değişikliğin ne olacağını içeren bir data iliştiriyoruz (body'ye ekliyoruz). (örneğin: user)
POST: postalamak
Örnek: Yeni bir not ekleme
*/

AxiosBase.post('notes', {
    id: 1,
    title: 'Not başlığı',
    content: 'Not içeriği',
    date: '01.01.2021',
})

// HTTP PUT Methodu
/*
Var olan bir datada güncelleme yapmak için kullanılıyor
Bu isteğe genelde, var olan datanın hangisi belirtecek id gibi bir bilgi,
bir de neresinin güncelleneceğini belirten bir bilgi iliştirilir (body'ye ekliyoruz).
PUT: Koymak
Örnek: Id'si 1 olan notun title'ını güncelleme
*/
AxiosBase.put('notes/1', {
    id: 1,
    title: 'Not başlığı güncel',
    content: 'Not içeriği',
    date: '01.01.2021',
})


// HTTP DELETE Methodu
/*
Var olan bir veya daha fazla datayı silmek için kullanılıyor
Bu isteğe genelde, silinecek datanın id gibi bir bilgisi iliştirilir.
DELETE: Silmek
Örnek: Id'si 1 olan notu silelim
*/
AxiosBase.delete('notes/1');
