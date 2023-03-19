import React from 'react'
import LogoOylaması from '../../Assets/Images/EventPictures/EventPic.jpg'
import PythonEvent from '../../Assets/Images/EventPictures/PythonEvent.jpg'
import Youthmappers from '../../Assets/Images/EventPictures/youthmapkobit.jpg'
import Event from './Event'

function Events() {
  return (
    <div className="container">
      <div>
        <h1 className="text-center display-1">
          ETKİNLİKLER
          <hr />
        </h1>
      </div>

      {/*
        name = etkinlik adı
        date = tarih
        about = etkinlik hakkında detaylı bilgi
        url = kullanılacak resim !! önce resmi local olarak import etmeyi unutma !!
        id = !! her etkinlik için spesifik bir id atanmalı id sadece sayı olamaz !!
      */}

      <div className="row gx-5 justify-content-center">
        <Event
          name="Yeni logomuzu oyladık!"
          date="Tarih: 6 Şubat 2022 "
          about="Yeni yönetimimizin toplululuğu devralmasıyla logomuzu daha minimalist ve modern görünen, Yağmur Yılmaz tarafından özenle tasarlanan yeni logomuzla değiştirdik!
                                            Yeni logomuz 23 oy, ikinci sıradaki logomuz 20 oy, üçüncü ve yarışı sonunculukla bitiren logomuz ise 16 oy aldı. Seçime katılan herkese teşekkürler!"
          url={LogoOylaması}
          id="Etkinlik1"
        />
        <Event
          name="Python Eğitimi"
          date="Tarih: 15-16, 22-23, 29 Mart 2022"
          about="Genç Mühendisler Topluluğu ile ortak düzenlediğimiz Python Eğitimimiz, eğitmenimiz Mahmut Veyis Güney ile
                                            birlikte 15-16, 22-23 ve 29 Mart
                                            günleri 17.30-19.30 saatleri arası Yıldız Amfi M8 dersliğinde! HKMO’ ya eğitimimize verdiği desteklerden ötürü çok teşekkür ediyoruz..."
          url={PythonEvent}
          id="Etkinlik2"
        />
        <Event
          name="YouthMappers’ a dahil olduk!"
          date="Tarih: 25 Şubat 2022"
          about="Konumsal Bilgi Topluluğu olarak uluslararası YouthMappers organizasyonuna hem ülkemizde üye olan ikinci kuruluş, hem de Hacettepe Üniversitesindeki temsilcileri olduk!
                                            Beraber çalışmayı iple çekiyoruz!"
          url={Youthmappers}
          id="Etkinlik3"
        />
      </div>
    </div>
  )
}

export default Events
