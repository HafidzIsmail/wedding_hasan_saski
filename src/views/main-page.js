import React, { useEffect, useState } from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './main-page.css'

const MainPage = (props) => {
  const [audio, setAudio] = useState()
  const [open, setOpen] = useState(false)
  const [days, setDays] = useState(12)
  const [hours, setHours] = useState(12)
  const [minutes, setMinutes] = useState(12)
  const [seconds, setSeconds] = useState(12)

  useEffect(() => {
    setAudio(new Audio("WeddingSound.mp3"))
  }, [])

  const onOpenInvitation = () => {
    setOpen(true)
    if(audio) {
      audio.play()
      audio.loop = true
      countdownTimer()  
    }
  }

  const countdownTimer = () => {
    const countDownDate = new Date('02/04/2024').getTime();

    // Convert to milisecond
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    // Calculate every second
    const interval = setInterval(() => {
      // Get current Date
      const now = new Date().getTime()
      const distance = countDownDate - now
      
      setDays(formatNumber(Math.floor(distance / day)))
      setHours(formatNumber(Math.floor((distance % day) / hour)))
      setMinutes(formatNumber(Math.floor((distance % hour) / minute)))
      setSeconds(formatNumber(Math.floor((distance % minute) / second)))

      if (distance < 0){
        document.getElementById('headline').innerText = 'HAPPY WEDDING HASAN & SASKI!'
        document.getElementById('countdown').style.display = 'none'

        clearInterval(interval)
      }

    }, 1000);  
  }

  const formatNumber = number => {
    if (number < 10){
      return '0' + number
    }
    return number
  }

  const copyRekening = async () => {
    var textCopied = document.querySelector('#rekening').value
    await navigator.clipboard.writeText(textCopied)
    document.execCommand("copy");
    alert("Rekening berhasil disalin: " + textCopied);
  }

  const copyAddress = async () => {
    var alamatCopied = document.querySelector('#alamat').value
    await navigator.clipboard.writeText(alamatCopied)
    document.execCommand("copy");
    alert("Alamat berhasil disalin: " + alamatCopied);
  }

  return (
    <main className="main-page-container">
      <Helmet>
        <title>Hasan & Saski Wedding Invitation</title>
        <meta
          name="description"
          content={"A website invitation for you from Hasan &amp; Saski!"}
        />
        <meta
          property="og:title"
          content={"Hasan &amp; Saski Wedding Invitation"}
        />
        <meta
          property="og:description"
          content={"You are Invited! Our wedding ceremonial will be held in 4 February 2024. Take a look this wedding invitation for more info!"}
        />
        <meta
          property="og:image"
          content={"https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/12bc0205-6668-4b08-95c0-782e5f1c39ff/f5bedace-bd02-47a2-9403-ba2b61a2a3e5?org_if_sml=1&amp;q=80&amp;force_format=original"}
        />

      </Helmet>
      {!open ? (

      <section id="Invited" className="main-page-youre-invited">
        <div className="main-page-padding">
          <div className="main-page-content">
            <h1 className="main-page-text">You Are Invited!</h1>
            <button type="button" className="main-page-button button" onClick={() => onOpenInvitation()}>
              OPEN
            </button>
          </div>
        </div>
      </section>
      ) : (
        <>
          <section id="header" className="main-page-head">
            <div className="main-page-head-container">
              <div className="main-page-head-content">
                <div className="main-page-container03">
                  <h2 className="main-page-text01">The Wedding of</h2>
                  <h1 className="main-page-text02">
                    <span>Hasan</span>
                    <br></br>
                    <span>&amp;</span>
                    <br></br>
                    <span>Saski</span>
                  </h1>
                </div>
                <div className="main-page-container04">
                  <p className="main-page-text08">
                    “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
                    pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
                    cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
                    antaramu rasa kasih dan sayang.”
                  </p>
                  <span className="main-page-text09">
                    QS Ar - Rum 21
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="main-page-the-groom">
            <div className="main-page-the-groom-padding">
              <div className="main-page-the-groom-content">
                <div className="main-page-container05">
                  <h2 className="main-page-text10">The Groom</h2>
                  <h1 className="main-page-text11">
                    <span>Hasan</span>
                    <br></br>
                    <span>Ahmad</span>
                    <br></br>
                    <span>Riva&apos;i</span>
                    <br></br>
                  </h1>
                  <span className="main-page-text18">Putra Dari:</span>
                  <span className="main-page-text19">
                    <span>Ade Rusman &amp; </span>
                    <span>Euis Popon Purnamasari</span>
                  </span>
                </div>
                <a
                  href="https://www.instagram.com/hasanahmaad/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="main-page-text22"
                >
                  @HASANAHMAAD
                </a>
              </div>
            </div>
          </section>
          <section className="main-page-the-bride">
            <div className="main-page-the-bride-padding">
              <div className="main-page-the-bride-content">
                <div className="main-page-container06">
                  <h2 className="main-page-text23">The Bride</h2>
                  <h1 className="main-page-text24">
                    <span>Saski</span>
                    <br></br>
                    <span>Meisyarani</span>
                    <br></br>
                  </h1>
                  <h3 className="main-page-text29">Putri Dari:</h3>
                  <p className="main-page-text30">
                    <span>Agus Suhana &amp; </span>
                    <span>Sri Mudjiati</span>
                  </p>
                </div>
                <a
                  href="https://www.instagram.com/saskimeisyar/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="main-page-link"
                >
                  @saskimeisyar
                </a>
              </div>
            </div>
          </section>
          <section className="main-page-acara">
            <div className="main-page-event-padding">
              <div className="main-page-event-content">
                <div className="main-page-container07">
                  <h2 className="main-page-text33">The Event</h2>
                  <h1 className="main-page-text34">Minggu, 4 Februari 2024</h1>
                  <div className="main-page-acara1">
                    <div className="main-page-akad">
                      <h3 className="main-page-text35">Akad Nikah</h3>
                      <p className="main-page-text36">07.00 - 09.00 WIB</p>
                    </div>
                    <div className="main-page-akad1">
                      <h3 className="main-page-text37">Resepsi</h3>
                      <p className="main-page-text38">10.00 WIB - Selesai</p>
                    </div>
                  </div>
                </div>
                <div className="main-page-container08">
                  <div className="main-page-alamat">
                    <h3 className="main-page-text39">Lazeta Cafe</h3>
                    <p className="main-page-text40">
                      <span>
                        Jl. Margacinta No.91, Cijaura, Kec. Buahbatu, Kota Bandung,
                        Jawa Barat 40287
                      </span>
                      <br></br>
                    </p>
                  </div>
                  <div className="main-page-acara2">
                    <a
                      href="https://maps.app.goo.gl/oVwLKMRyU7UaYi62A"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="main-page-link1"
                    >
                      MAPS
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="main-page-love-story">
            <div className="main-page-love-story-padding">
              <div className="main-page-love-story-content">
                <h2 className="main-page-text43">Our Gallery</h2>
                <div className="main-page-container09"></div>
                <div
                  data-thq="slider"
                  data-navigation="true"
                  data-pagination="true"
                  className="main-page-slider swiper"
                >
                  <div data-thq="slider-wrapper" className="swiper-wrapper">
                    <div
                      data-thq="slider-slide"
                      className="main-page-slider-slide swiper-slide"
                    ></div>
                    <div
                      data-thq="slider-slide"
                      className="main-page-slider-slide1 swiper-slide"
                    ></div>
                    <div
                      data-thq="slider-slide"
                      className="main-page-slider-slide2 swiper-slide"
                    ></div>
                  </div>
                  <div
                    data-thq="slider-pagination"
                    className="main-page-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
                  >
                    <div
                      data-thq="slider-pagination-bullet"
                      className="swiper-pagination-bullet swiper-pagination-bullet-active"
                    ></div>
                    <div
                      data-thq="slider-pagination-bullet"
                      className="swiper-pagination-bullet"
                    ></div>
                    <div
                      data-thq="slider-pagination-bullet"
                      className="swiper-pagination-bullet"
                    ></div>
                  </div>
                  <div
                    data-thq="slider-button-prev"
                    className="swiper-button-prev"
                  ></div>
                  <div
                    data-thq="slider-button-next"
                    className="swiper-button-next"
                  ></div>
                </div>
              </div>
            </div>
          </section>
          <section className="main-page-gift">
            <div className="main-page-gift-padding">
              <div className="main-page-gift-content">
                <h2 className="main-page-text44">Wedding Gift</h2>
                <p className="main-page-text45">
                  Tanpa mengurangi rasa hormat, bagi keluarga, sahabat, dan rekan
                  yang ingin memberikan tanda kasih untuk kami, dapat melalui :
                </p>
                <div className="main-page-rekening-select">
                  <select id="rekening" className="main-page-select textarea">
                    <option value="6395393204" selected>
                      BCA 6395393204 - HASAN AHMAD RIVA&apos;I
                    </option>
                  </select>
                  <button
                    id="salin"
                    type="button"
                    className="main-page-button1 button"
                    onClick={() => copyRekening()}
                  >
                    Salin
                  </button>
                </div>
                <p className="main-page-text46">Dan alamat kami :</p>
                <div className="main-page-alamat-select">
                  <select id="alamat" className="main-page-select1 textarea">
                    <option
                      value="Jl. Ibrahim Adjie Gg. Lumbung 2 No. 16 RT/RW 002/002 Kelurahan Cijaura Kecamatan Buahbatu"
                      selected
                    >
                      RUMAH HASAN - BUAHBATU
                    </option>
                    <option value="JL CIPTAKARYA 1 NO.33 KEL MEKARJAYA KEC RANCASARI KOTA BANDUNG 40292">
                      RUMAH SASKI - RANCASARI
                    </option>
                  </select>
                  <button
                    id="salinalamat"
                    type="button"
                    className="main-page-button2 button"
                    onClick={() => copyAddress()}
                  >
                    Salin
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="main-page-countdown">
            <div className="main-page-countdown-padding">
              <div className="main-page-countdown-content">
                <div className="main-page-countdown-title">
                  <h2 className="main-page-text47">Days Till the</h2>
                  <h2 className="main-page-text48">Dream&apos;s Come True</h2>
                </div>
                <div className="main-page-countdown-times">
                  <div className="main-page-days">
                    <div className="main-page-days1">
                      <span id="days" className="main-page-text49">
                        {days}
                      </span>
                    </div>
                    <span className="main-page-text50">Days</span>
                  </div>
                  <div className="main-page-hours">
                    <div className="main-page-hours1">
                      <span id="hours" className="main-page-text51">
                        {hours}
                      </span>
                    </div>
                    <span className="main-page-text52">Hours</span>
                  </div>
                  <div className="main-page-minutes">
                    <div className="main-page-minutes1">
                      <span id="minutes" className="main-page-text53">
                        {minutes}
                      </span>
                    </div>
                    <span className="main-page-text54">MINUTES</span>
                  </div>
                  <div className="main-page-second">
                    <div className="main-page-second1">
                      <span id="seconds" className="main-page-text55">
                        {seconds}
                      </span>
                    </div>
                    <span className="main-page-text56">SECONDS</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      <span className="main-page-watermark">H &amp; S</span>
    </main>
  )
}

export default MainPage
