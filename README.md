<h1 align="center">Konumsal Bilgi Topluluğu Web Sayfası</h1>

<p>Bu github reposu, Hacettepe Üniversitesi  Konumsal Bilgi Topluluğu’ nun internet sayfasını barındırmaktadır. Sayfanın ilerleyen dönemlerde tekrar kullanılması durumunda, daha kolay anlaşılması ve yönetilmesi amacıyla teknik detaylar içermektedir. Ek olarak proje hakkında genel bilgi ve ilerleyen dönemlerde yapılması planlanan güncelleştirmeleri de barındırmaktadır. </p>
</br>
</br>




<h2>KULLANILAN TEKNOLOJİLER</h2>
<ul>
    <li> React JS </li>
    <li> Bootstrap 5 </li>
</ul>
</br>
</br>



<h2>DOSYA YAPISI HAKKINDA</h2>
Her sayfa temel olarak 3 componenttan oluşacak şekilde tasarlandı. Bunlar: Navbar Footer ve sayfanın içerik kısmı. "react-router-dom" gereği Navbar, ayrı bir component olarak saklanmasına rağmen App.js içerisinde renderlanıyor.
Componentlardan oluşan sayfalar Pages dosyası içinde saklanıp, App.js içerisinde direkt olarak o sayfalar üzerinden render alınmakta. Örnek olarak, EventPage.js dosyası Events.js dosyasını ve Footer.js dosyasını döndürüyor. EventPage.js dosyasının App.js içerisinde çağırılması yeterli oluyor.
</br>
</br>
</br>

<h2>YAPILMASI PLANLANAN GÜNCELLEŞTİRMELER</h2>
<ul>
    <li>Logo güncelleştirmesi</li>
    <li>Yazım yanlışlarının düzenlenmesi</li>
    <li>Hero componentının güncelleştirmesi</li>
    <li>Açıldığı zaman twitter ve facebook hesaplarının linklenmesi</li>
    <li>Codebase temizlenmesi</li>
    <li>Members component/flip.back isimlerin olduğu textlerin görsel iyileştirmeleri</li>
    <li>Buton bugının giderilmesi</li>
</ul>
