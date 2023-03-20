import React from 'react'
import '../Assets/Styles/Members.css'
import Baran from '../Assets/Images/MemberPictures/Baran.jpg'
import Sude from '../Assets/Images/MemberPictures/Sudis.jpg'
import Ataberk from '../Assets/Images/MemberPictures/Ataberk.jpg'
import Hasanberk from '../Assets/Images/MemberPictures/Hasan.jpg'
import Şeyma from '../Assets/Images/MemberPictures/Şeyma.jpg'
import BerkHoca from '../Assets/Images/MemberPictures/BerkHoca.jpg'
import Hatice from '../Assets/Images/MemberPictures/Hatice.jpg'
import Haluk from '../Assets/Images/MemberPictures/Haluk.jpg'
import Egemen from '../Assets/Images/MemberPictures/Egemen.jpg'
import Batuhan from '../Assets/Images/MemberPictures/Batuhan.jpg'
import İrem from '../Assets/Images/MemberPictures/İrem.jpg'
import Çağrıhan from '../Assets/Images/MemberPictures/Çağrıhan.jpg'

function Members() {
  return (
    <div className="container">
      <div className="text-opacity-75 text-center">
        <h1 className="text-center display-2">
          YÖNETİM KURULU
          <hr />
        </h1>
      </div>
      <div className="row justify-content-center mb-5 mt-5">
        <div className="col d-flex justify-content-center">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={Baran}
                  alt="Avatar"
                  style={{ width: '300px', height: '300px' }}
                ></img>
              </div>
              <div className="flip-card-back">
                <table style={{ height: '100%', width: '100%' }}>
                  <tbody>
                    <tr>
                      <td className="align-middle">
                        <h1>Kazım Baran YILMAZ</h1>
                        <br></br>
                        <h4 className="fw-light fst-italic">
                          Topluluk Başkanı
                        </h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-around mb-5 gy-5">
        <div className="col d-flex justify-content-center">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={Sude}
                  alt="Avatar"
                  style={{ width: '300px', height: '300px' }}
                ></img>
              </div>
              <div className="flip-card-back">
                <table style={{ height: '100%', width: '100%' }}>
                  <tbody>
                    <tr>
                      <td className="align-middle">
                        <h1>Sude YILDIRIM</h1>
                        <br></br>
                        <h4 className="fw-light fst-italic">
                          Topluluk Başkan Yardımcısı
                        </h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={Ataberk}
                  alt="Avatar"
                  style={{ width: '300px', height: '300px' }}
                ></img>
              </div>
              <div className="flip-card-back">
                <table style={{ height: '100%', width: '100%' }}>
                  <tbody>
                    <tr>
                      <td className="align-middle">
                        <h1>Ataberk AYANLAR</h1>
                        <br></br>
                        <h4 className="fw-light fst-italic">
                          Topluluk Genel Sekreteri
                        </h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-around gy-5 mb-5">
        <div className="col d-flex justify-content-center">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={Hasanberk}
                  alt="Avatar"
                  style={{ width: '300px', height: '300px' }}
                ></img>
              </div>
              <div className="flip-card-back">
                <table style={{ height: '100%', width: '100%' }}>
                  <tbody>
                    <tr>
                      <td className="align-middle">
                        <h1>Hasan Berk KARABAY</h1>
                        <br></br>
                        <h4 className="fw-light fst-italic">
                          AR-GE ve Tasarım Birimi
                        </h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={Şeyma}
                  alt="Avatar"
                  style={{ width: '300px', height: '300px' }}
                ></img>
              </div>
              <div className="flip-card-back">
                <table style={{ height: '100%', width: '100%' }}>
                  <tbody>
                    <tr>
                      <td className="align-middle">
                        <h1>Şeyma Nur TANER</h1>
                        <br></br>
                        <h4 className="fw-light fst-italic">
                          Sosyal Medya ve Tanıtım Birimi
                        </h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-around gy-5 mb-5">
        <div className="col d-flex justify-content-center">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={Haluk}
                  alt="Avatar"
                  style={{ width: '300px', height: '300px' }}
                ></img>
              </div>
              <div className="flip-card-back">
                <table style={{ height: '100%', width: '100%' }}>
                  <tbody>
                    <tr>
                      <td className="align-middle">
                        <h1>Haluk HİNDİSTAN</h1>
                        <br></br>
                        <h4 className="fw-light fst-italic">
                          Ağ ve Organizasyon Birimi
                        </h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={Çağrıhan}
                  alt="Avatar"
                  style={{ width: '300px', height: '300px' }}
                ></img>
              </div>
              <div className="flip-card-back">
                <table style={{ height: '100%', width: '100%' }}>
                  <tbody>
                    <tr>
                      <td className="align-middle">
                        <h1>Çağrıhan AYDOĞAN</h1>
                        <br></br>
                        <h4 className="fw-light fst-italic">
                          Etkinlik Düzenleme Birimi
                        </h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={Batuhan}
                  alt="Avatar"
                  style={{ width: '300px', height: '300px' }}
                ></img>
              </div>
              <div className="flip-card-back">
                <table style={{ height: '100%', width: '100%' }}>
                  <tbody>
                    <tr>
                      <td className="align-middle">
                        <h1>Batuhan ERÇIKTI</h1>
                        <br></br>
                        <h4 className="fw-light fst-italic">
                          Uluslararası İlişkiler Birimi
                        </h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-opacity-75 text-center">
        <h1 className="text-center display-3">
          DENETLEME KURULU
          <hr />
        </h1>
      </div>
      <div className="row justify-content-around gy-5 mb-5">
        <div className="col d-flex justify-content-center">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={Hatice}
                  alt="Avatar"
                  style={{ width: '300px', height: '300px' }}
                ></img>
              </div>
              <div className="flip-card-back">
                <table style={{ height: '100%', width: '100%' }}>
                  <tbody>
                    <tr>
                      <td className="align-middle">
                        <h1>Hatice Nursena RESULOĞLU</h1>
                        <br></br>
                        <h4 className="fw-light fst-italic">
                          Denetleme Kurulu
                        </h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={Egemen}
                  alt="Avatar"
                  style={{ width: '300px', height: '300px' }}
                ></img>
              </div>
              <div className="flip-card-back">
                <table style={{ height: '100%', width: '100%' }}>
                  <tbody>
                    <tr>
                      <td className="align-middle">
                        <h1>Egemen ERKEN</h1>
                        <br></br>
                        <h4 className="fw-light fst-italic">
                          Denetleme Kurulu
                        </h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={İrem}
                  alt="Avatar"
                  style={{ width: '300px', height: '300px' }}
                ></img>
              </div>
              <div className="flip-card-back">
                <table style={{ height: '100%', width: '100%' }}>
                  <tbody>
                    <tr>
                      <td className="align-middle">
                        <h1>İrem BAKIR</h1>
                        <br></br>
                        <h4 className="fw-light fst-italic">
                          Denetleme Kurulu
                        </h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-center display-3">
          TOPLULUK DANIŞMANI
          <hr />
        </h1>
        <div className="col d-flex justify-content-center">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={BerkHoca}
                  alt="Avatar"
                  style={{ width: '300px', height: '300px' }}
                ></img>
              </div>
              <div className="flip-card-back">
                <table style={{ height: '100%', width: '100%' }}>
                  <tbody>
                    <tr>
                      <td className="align-middle">
                        <h1>Berk ANBAROĞLU</h1>
                        <br></br>
                        <h4 className="fw-light fst-italic">Dr. Öğr. Üyesi</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Members
