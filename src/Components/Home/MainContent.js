import React from 'react'

function MainContent() {
  return (
    <div className="container mt-5">
      <div className="row d-inline-block">
        <div className="col d-block">
          <div>
            <ul className="list-group mb-3 mt-3">
              <li className="list-group-item list-group-item-primary bg-default">
                <p className="fw-bold fs-5 text-center">
                  Konumsal bilgi nedir?
                </p>
                <p className="fst-italic text-center">
                  Yeryüzündeki bir noktaya ait tüm verilerin harita ile
                  ilişkilendirilebilmesi için gereken bilgilerdir.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col">
          <div>
            <ul className="list-group mb-4">
              <li className="list-group-item list-group-item-primary bg-default">
                <p className="fw-bold fs-5 text-center">
                  Konumsal Bilgi Topluluğu ne zaman ve ne amaçla kurulmuştur?
                </p>
                <p className="fst-italic text-justify">
                  Geomatik Mühendisliği öğrencileri tarafından 2018 yılında
                  sosyal ve mesleki gelişmeler sağlanması, bir dayanışma ve
                  yardımlaşma ortamı kurulması amacıyla birleşmiş ve KONUMSAL
                  BİLGİ TOPLULUĞU’ nu kurmuşlardır.
                </p>

                <p>
                  Konum bilgisine duyulan ihtiyacın artması ile Geomatik
                  Mühendisliği’ ne ilgi ve ihtiyaç da artmıştır. Geomatik
                  Mühendisliği Nisan 2012’ de okulumuzda, Hacettepe
                  Üniversitesinde açılmıştır. O zamandan bu yana mezunlarını
                  vermekte olup, mezunlarımız pek çok başarıya da imza atmıştır.
                  Topluluğumuz ise 2018-2019 güz döneminde kurulmuştur.
                </p>
                <p>
                  Topluluk olarak hedefimiz kendine inanan, yaptığı işe güvenen,
                  nitelikli olmak için çabalayan insanlarla birlikte yetişmek;
                  öğrenmek ve gelişmektir. Bu hedefimize ulaşmak için emin
                  adımlarla ilerlemekteyiz.
                </p>
                <p>
                  Kendine güvenen, başarılı ve bilinçli insanları bünyesinde
                  barındıran topluluğumuz için hedefimiz ve ona ulaşma
                  serüvenimiz neden bu kadar önemli?
                </p>
                <p>
                  Kendimizi hem kişisel hem de mesleki açıdan geliştirmeliyiz ki
                  verimli sonuçlar alabilelim. Topluluğumuz da bu amaca hizmet
                  etmek için var olmuştur. Hedefimize ulaşma serüvenimizde
                  çizeceğimiz yollar, bu yollarda karşılaşacağımız engeller ve
                  bu engelleri nasıl aşacağımız konuları hepimizi birbirine
                  bağlamaktadır. Aramızda kurulan bu bağ bizim için çok
                  kıymetlidir.
                </p>
                <p>
                  Bizce, insanların kendilerini yalnızca akademik olarak
                  geliştirmesi “nitelik” kavramına gölge düşürmektedir çünkü
                  akademik başarı nitelikli bir insan olma yolunun yarısını
                  oluşturmaktadır. Öyleyse diğer yarısı nedir? Nitelikli olma
                  yolunda ilerlerken akademik başarının yanında yer alması
                  gereken diğer özellikler de sosyal beceri ve saha
                  tecrübesidir.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="contanier-fluid text-justify"></div>
      <div className="container text-justify">
        <div className="row">
          <div className="col order-2">
            <ul className="list-group w-70">
              <li className="list-group-item list-group-item-info">
                <strong> Topluluğumuzun Yaptığı Çalışmalar </strong>
              </li>
            </ul>
            <ul className="list-group list-group-flush w-60">
              <li className="list-group-item">
                Alanımızla alakalı gelişmeleri paneller düzenleyerek
                öğrencilerimize tanıtıyoruz.
              </li>
              <li className="list-group-item">
                Sosyal etkinlikler düzenleyerek üyeler arası iletişimin güçlü
                kalmasını sağlıyoruz ve bu sayede grup çalışmalarına zemin
                hazırlıyoruz.
              </li>
              <li className="list-group-item">
                Fakülte ve üniversitemizdeki diğer öğrencilerle de etkinlikler
                gerçekleştiriyor, disiplinler arası etkileşimin artmasını
                sağlıyoruz.
              </li>
            </ul>
          </div>
          <div className="col order-1">
            <ul className="list-group w-70">
              <li className="list-group-item list-group-item-info">
                <strong>Topluluğumuzu Oluşturan Departmanlar</strong>
              </li>
            </ul>
            <ul className="list-group list-group-flush w-60">
              <li className="list-group-item">AR-GE ve Tasarım Birimi</li>
              <li className="list-group-item">
                Sosyal Medya ve Tanıtım Birimi
              </li>
              <li className="list-group-item">Ağ ve Organizasyon Birimi</li>
              <li className="list-group-item">Etkinlik Düzenleme Birimi</li>
              <li className="list-group-item">Uluslararası İlişkiler Birimi</li>
            </ul>
          </div>
          <div className="col order-3">
            <ul className="list-group w-70">
              <li className="list-group-item list-group-item-info">
                <strong>Topluluğumuzla Alakalı Alanlar</strong>
              </li>
            </ul>
            <ul className="list-group list-group-flush w-60">
              <li className="list-group-item">Yazılım</li>
              <li className="list-group-item">Veri işleme ve Veri analizi</li>
              <li className="list-group-item">Uzaktan algılama</li>
              <li className="list-group-item">Haritalandırma</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent
