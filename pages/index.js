import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>ד"ר שלדון שטיין - אורטופד מומחה לרפואת כאב</title>
          <meta
            name="description"
            content='אורתופד מומחה ברפואת כאב\nסובלים מכאבים?\nזקוקים לחוות דעת משפטית?\nמעל-30 שנים הצלחה וטיפול באלפי מטופלים \nראש מחלקה אורתופדית בארה"ב בעבר'
          />
          <meta
            property="og:title"
            content='ד"ר שלדון שטיין - אורטופד מומחה לרפואת כאב'
          />
          <meta
            property="og:description"
            content='אורתופד מומחה ברפואת כאב\nסובלים מכאבים?\nזקוקים לחוות דעת משפטית?\nמעל-30 שנים הצלחה וטיפול באלפי מטופלים \nראש מחלקה אורתופדית בארה"ב בעבר'
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/7d68a6ed-ca4e-4aa9-9d31-323fe90e0694/b533e509-1b00-4dcf-842f-d0deb4b1fce1?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <Link href="/">
            <a className="home-link">
              <div className="home-logo">
                <div className="home-image">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGJhY2slMjBwYWlufGVufDB8fHx8MTcxNzQzNjYzMnww&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-image01"
                  />
                </div>
                <div className="home-text">
                  <h1 className="home-text001">
                    <span>ד&quot;ר שלדון שטיין</span>
                    <br></br>
                  </h1>
                  <span className="home-text004">אורטופד מומחה לרפואת כאב</span>
                </div>
              </div>
            </a>
          </Link>
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <a href="#inspiration" className="home-link01">
                תחומי ההתמחות
              </a>
              <a href="#about" className="home-link02">
                אודות ד&quot;ר שלדון שטיין
              </a>
              <a href="#treatments" className="home-link03">
                מגוון טיפולים
              </a>
              <a href="#deeptissue" className="home-link04">
                טיפול רקמות עמוקות
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </a>
              <a href="#contact" className="home-link05">
                צרו קשר
              </a>
            </nav>
            <div className="home-buttons">
              <a href="tel:+972542233177" className="home-cta-btn button">
                <span className="home-text005">
                  <span>054-2233-177</span>
                  <br className="Anchor"></br>
                </span>
              </a>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <Link href="/">
                  <a className="home-link06">
                    <div className="home-logo1">
                      <div className="home-image02">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGJhY2slMjBwYWlufGVufDB8fHx8MTcxNzQzNjYzMnww&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="home-image03"
                        />
                      </div>
                      <div className="home-text008">
                        <h1 className="home-text009">
                          <span>ד&quot;ר שלדון שטיין</span>
                          <br></br>
                        </h1>
                        <span className="home-text012">
                          אורטופד מומחה לרפואת כאב בהרפיה
                        </span>
                      </div>
                    </div>
                  </a>
                </Link>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <a href="#inspiration" className="home-link07">
                  תחומי ההתמחות
                </a>
                <a href="#about" className="home-link08">
                  אודות ד&quot;ר שלדון שטיין
                </a>
                <a href="#treatments" className="home-link09">
                  מגוון טיפולים
                </a>
                <a href="#deeptissue" className="home-link10">
                  טיפול רקמות עמוקות
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </a>
                <a href="#contact" className="home-link11">
                  צרו קשר
                </a>
              </nav>
              <div className="home-buttons1">
                <a href="tel:+972542233177" className="home-cta-btn1 button">
                  <span className="home-text013">
                    <span>054-2233-177</span>
                    <br className="Anchor"></br>
                  </span>
                </a>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div id="resources" className="home-hero">
          <img
            alt="image"
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/bottom-back-pain-1500w.webp"
            srcSet="/bottom-back-pain-1500w.webp 1200w, /bottom-back-pain-tablet.webp 800w, /bottom-back-pain-mobile.webp 480w"
            className="home-image04"
          />
          <div className="home-container1"></div>
          <div className="home-content-container">
            <div className="home-hero-text">
              <h1 className="home-heading">
                <span>ד&quot;ר שלדון שטיין</span>
                <br className="Section-Heading"></br>
              </h1>
              <span className="home-text018">
                <span>אורתופד כירורג מומחה ברפואת כאב</span>
                <br className="Section-Text"></br>
                <span>סובלים מכאבים?</span>
                <br className="Section-Text"></br>
                <span>זקוקים לחוות דעת משפטית?</span>
                <br className="Section-Text"></br>
              </span>
              <svg viewBox="0 0 1024 1024" className="home-icon10">
                <path d="M731.429 640v-109.714c0-10.286-8-18.286-18.286-18.286h-128v-128c0-10.286-8-18.286-18.286-18.286h-109.714c-10.286 0-18.286 8-18.286 18.286v128h-128c-10.286 0-18.286 8-18.286 18.286v109.714c0 10.286 8 18.286 18.286 18.286h128v128c0 10.286 8 18.286 18.286 18.286h109.714c10.286 0 18.286-8 18.286-18.286v-128h128c10.286 0 18.286-8 18.286-18.286zM365.714 219.429h292.571v-73.143h-292.571v73.143zM146.286 219.429v731.429h-18.286c-70.286 0-128-57.714-128-128v-475.429c0-70.286 57.714-128 128-128h18.286zM822.857 219.429v731.429h-621.714v-731.429h91.429v-91.429c0-30.286 24.571-54.857 54.857-54.857h329.143c30.286 0 54.857 24.571 54.857 54.857v91.429h91.429zM1024 347.429v475.429c0 70.286-57.714 128-128 128h-18.286v-731.429h18.286c70.286 0 128 57.714 128 128z"></path>
              </svg>
              <span className="home-text025">
                <span>מעל-36 שנים של הצלחה וטיפול באלפי מטופלים</span>
                <br></br>
                <span> ראש מחלקה אורתופדית בארה&quot;ב בעבר</span>
                <br className="Section-Text"></br>
              </span>
              <a href="tel:+972542233177" className="home-cta-btn2 button">
                <span className="home-text030">
                  <span>054-2233-177</span>
                  <br className="Anchor"></br>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div id="inspiration" className="home-features">
          <div className="home-heading-container">
            <h2 className="home-text033">
              <span>תחומי ההתמחות</span>
              <br className="Section-Heading"></br>
            </h2>
          </div>
          <div className="home-cards-container">
            <div className="home-features-card">
              <div className="home-icon-container">
                <img alt="image" src="/hand.svg" className="home-image05" />
              </div>
              <div className="home-text-container">
                <span className="home-heading01">
                  <span>טיפול חדשני באוזון</span>
                  <br></br>
                </span>
              </div>
            </div>
            <animate-on-reveal>
              <div
                data-thq-animate-on-reveal="true"
                className="home-features-card01"
              >
                <div className="home-icon-container1">
                  <img alt="image" src="/heart.svg" className="home-image06" />
                </div>
                <div className="home-text-container01">
                  <span className="home-heading02">
                    <span>טיפול בכאבים</span>
                    <br className="Card-Heading"></br>
                  </span>
                </div>
              </div>
            </animate-on-reveal>
            <animate-on-reveal>
              <div
                data-thq-animate-on-reveal="true"
                className="home-features-card02"
              >
                <div className="home-icon-container2">
                  <img
                    alt="image"
                    src="/ligtning.svg"
                    className="home-image07"
                  />
                </div>
                <div className="home-text-container02">
                  <span className="home-heading03">
                    טיפול בהקרנת כאבים לרגליים
                  </span>
                </div>
              </div>
            </animate-on-reveal>
            <animate-on-reveal>
              <div
                data-thq-animate-on-reveal="true"
                className="home-features-card03"
              >
                <div className="home-icon-container3">
                  <img
                    alt="image"
                    src="/statuscope.svg"
                    className="home-image08"
                  />
                </div>
                <div className="home-text-container03">
                  <span className="home-heading04">כירורגיה אורתופדית</span>
                </div>
              </div>
            </animate-on-reveal>
            <animate-on-reveal>
              <div
                data-thq-animate-on-reveal="true"
                className="home-features-card04"
              >
                <div className="home-icon-container4">
                  <img alt="image" src="/report.svg" className="home-image09" />
                </div>
                <div className="home-text-container04">
                  <span className="home-heading05">חוות דעת לועדה רפואית</span>
                </div>
              </div>
            </animate-on-reveal>
            <animate-on-reveal>
              <div
                data-thq-animate-on-reveal="true"
                className="home-features-card05"
              >
                <div className="home-icon-container5">
                  <img alt="image" src="/medic.svg" className="home-image10" />
                </div>
                <div className="home-text-container05">
                  <span className="home-heading06">חוות דעת לעורכי דין</span>
                </div>
              </div>
            </animate-on-reveal>
          </div>
          <div className="home-content">
            <div className="home-content01"></div>
            <animate-on-reveal>
              <a
                href="tel:+972542233177"
                data-thq-animate-on-reveal="true"
                className="home-cta-btn3 button"
              >
                <span className="home-text040">
                  <span>054-2233-177</span>
                  <br className="Anchor"></br>
                </span>
              </a>
            </animate-on-reveal>
          </div>
        </div>
        <div className="home-section-separator"></div>
        <div id="about" className="home-team8 thq-section-padding">
          <div className="home-max-width thq-section-max-width">
            <div className="home-section-title">
              <div className="home-content02">
                <h2 className="home-text043 thq-heading-2">
                  <span>אודות ד&quot;ר שלדון שטיין</span>
                  <br></br>
                </h2>
                <p className="home-text046 thq-body-large">
                  <span>
                    ד”ר שלדון שטיין הינו מומחה לכירורגיה אורתופדית, בעל מרפאה
                    פרטית ברמת גן.
                  </span>
                  <br></br>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </p>
              </div>
              <div className="home-card">
                <img
                  alt="Member Alt"
                  sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                  src="/whatsapp-image-2022-06-07-at-4.11.54-pm-1500w.webp"
                  srcSet="/whatsapp-image-2022-06-07-at-4.11.54-pm-1500w.webp 1200w, /whatsapp-image-2022-06-07-at-4.11.54-pm-tablet.webp 800w, /whatsapp-image-2022-06-07-at-4.11.54-pm-mobile.webp 480w"
                  className="home-placeholder-image thq-img-round thq-img-ratio-1-1"
                />
                <div className="home-content03">
                  <span className="home-text050 thq-body-small">
                    <span>
                      התמחה בכירורגיה אורתופדית בבית החולים אלברט איינשטיין בעיר
                      ניו יורק והיה ראש מחלקת אורתופדיה בפילדלפיה, ארה&quot;ב.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      עם עלייתו לארץ הרחיב את סוגי הטיפול שהוא מעניק וזאת במטרה
                      לעזור למטופליו.
                    </span>
                    <br></br>
                    <br></br>
                    <span>ד״ר שטיין שימש בעבר בוועדת נכות במשרד הביטחון.</span>
                    <br></br>
                    <br></br>
                    <span>
                      ד״ר שטיין כותב לעורכי דין מהמובילים במשק חוות דעת רפואיות
                      לצרכי תביעות כנגד ביטוח לאומי, מוסדות רפואיים ורשלנות
                      רפואית.
                    </span>
                  </span>
                </div>
                <div className="home-social-icons"></div>
              </div>
            </div>
            <div className="home-content04">
              <div className="home-content05"></div>
              <animate-on-reveal>
                <a
                  href="tel:+972542233177"
                  data-thq-animate-on-reveal="true"
                  className="home-cta-btn4 button"
                >
                  <span className="home-text061">
                    <span>054-2233-177</span>
                    <br className="Anchor"></br>
                  </span>
                </a>
              </animate-on-reveal>
            </div>
          </div>
        </div>
        <div className="home-section-separator1"></div>
        <div className="home-qua">
          <animate-on-reveal duration="1500ms">
            <span data-thq-animate-on-reveal="true" className="home-text064">
              &quot;בכל שנות עבודתי כרופא, הוכשרתי מקצועית בעשרות קורסים ולימודי
              המשך בתחום אורטופדיה , ואף כפוסק אורטופדיה בביטוח לאומי.&quot;
            </span>
          </animate-on-reveal>
        </div>
        <div className="home-section-separator2"></div>
        <div className="home-lang">
          <div className="home-title">
            <span className="home-text065">
              ד&quot;ר שלדון שטיין נותן שירות בשפות:
            </span>
          </div>
          <div className="home-langs">
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon12">
              <path d="M373.714 616c-1.143 4-29.143-9.143-36.571-12-7.429-3.429-41.143-22.286-49.714-28s-41.143-32.571-45.143-34.286v0c-20.571 31.429-46.857 68.571-76.571 103.429-10.286 12-41.143 50.857-60 62.857-2.857 1.714-19.429 3.429-21.714 2.286 9.143-6.857 35.429-39.429 46.857-52.571 14.286-16.571 82.286-111.429 93.714-133.143 12-21.714 48-93.714 49.714-100.571-5.714-0.571-50.857 14.857-62.857 18.857-11.429 3.429-42.857 10.857-45.143 12.571-2.286 2.286-0.571 9.143-1.714 11.429s-11.429 7.429-17.714 8.571c-5.714 1.714-18.857 2.286-26.857 0-7.429-1.714-14.286-9.143-16-12 0 0-2.286-3.429-2.857-13.143 6.857-2.286 18.286-2.857 30.857-6.286s43.429-12.571 60-18.286 48.571-17.714 58.286-20c10.286-1.714 36-18.857 49.714-23.429s23.429-10.286 24-7.429 0 15.429-0.571 18.857c-0.571 2.857-28 56.571-32 65.143-2.286 4.571-18.286 34.857-44 74.857 9.143 4 28.571 12 36.571 16 9.714 4.571 77.714 33.143 81.143 34.286s9.714 27.429 8.571 32zM256.571 338.286c1.714 9.714-1.143 13.714-2.286 16-5.714 10.857-20 18.286-28.571 21.714s-22.857 6.857-34.286 6.857c-5.143-0.571-15.429-2.286-28-14.857-6.857-7.429-12-27.429-9.714-25.143s18.857 4.571 26.286 2.857 25.143-6.857 33.143-9.143c8.571-2.857 25.714-7.429 31.429-8 5.714 0 10.286 2.286 12 9.714zM655.429 412l36 129.714-79.429-24zM22.286 869.143l396.571-132.571v-589.714l-396.571 133.143v589.143zM731.429 688l58.286 17.714-103.429-375.429-57.143-17.714-123.429 306.286 58.286 17.714 25.714-62.857 120.571 37.143zM444 138.286l327.429 105.143v-217.143zM621.714 894.286l90.286 7.429-30.857 91.429-22.857-37.714c-46.286 29.714-103.429 52.571-157.714 61.714-16.571 3.429-35.429 6.857-52 6.857h-48c-60.571 0-170.857-36-218.857-70.857-3.429-2.857-4.571-5.143-4.571-9.143 0-6.286 4.571-10.857 10.286-10.857 5.143 0 32 16.571 39.429 20 51.429 25.714 123.429 49.143 181.143 49.143 71.429 0 120-9.143 185.143-37.143 18.857-8.571 35.429-19.429 53.143-29.143zM877.714 277.714v616.571c-441.714-140.571-442.286-140.571-442.286-140.571-9.143 4-418.857 142.286-424.571 142.286-4.571 0-8.571-2.857-10.286-7.429 0-0.571-0.571-1.143-0.571-1.714v-616c0.571-1.714 1.143-4.571 2.286-5.714 3.429-4 8-5.143 11.429-6.286 1.714-0.571 36.571-12 85.143-28.571v-219.429l318.857 113.143c4-1.143 359.429-124 364.571-124 6.286 0 11.429 4.571 11.429 12v238.857z"></path>
            </svg>
            <span className="home-text066">עברית</span>
            <span className="home-text067">אנגלית</span>
            <span className="home-text068">רוסית</span>
            <span className="home-text069">צרפתית</span>
            <span className="home-text070">יידיש</span>
          </div>
          <animate-on-reveal>
            <div
              data-thq-animate-on-reveal="true"
              className="home-overlay"
            ></div>
          </animate-on-reveal>
          <img
            alt="image"
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/globe-1500w.webp"
            srcSet="/globe-1500w.webp 1200w, /globe-tablet.webp 800w, /globe-mobile.webp 480w"
            className="home-image11"
          />
        </div>
        <div id="contact2" className="home-get-in-touch">
          <h2 className="home-text071">
            <span>צרו קשר עכשיו</span>
            <br></br>
          </h2>
          <div className="home-content-container1"></div>
          <div className="home-container2">
            <div className="home-container3">
              <Script
                html={`<style>
iframe{height:320px !important;}
@media screen and (max-width: 768px){iframe{height: 700px !important}}

</style>
<script type="text/javascript" src="https://form.jotform.com/jsform/241543269234456"></script>`}
              ></Script>
            </div>
          </div>
        </div>
        <div className="home-call-now">
          <div className="home-content06"></div>
          <a href="tel:+972542233177" className="home-cta-btn5 button">
            <span className="home-text074">
              <span>054-2233-177</span>
              <br className="Anchor"></br>
            </span>
          </a>
        </div>
        <div id="treatments" className="home-expert">
          <img
            alt="image"
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/paperbg-1500w.webp"
            srcSet="/paperbg-1500w.webp 1200w, /paperbg-tablet.webp 800w, /paperbg-mobile.webp 480w"
            className="home-image12"
          />
          <div className="home-container4"></div>
          <span className="home-text077">
            <span>ד”ר שטיין משתמש ברפואה ובשיטות מתקדמות,</span>
            <br></br>
            <span>
              מטפל במגוון רחב של בעיות ומחלות רפואיות עם אחוזי הצלחה גבוהים
            </span>
          </span>
          <span className="home-text081">
            <span>לד”ר שטיין גישה חדשנית הכוללת מגוון של טיפולים</span>
            <br></br>
            <span>לריפוי סוגים שונים של כאבים הכוללים בין היתר:</span>
          </span>
          <div className="home-container5">
            <div className="home-features-card06">
              <div className="home-text-container06">
                <span className="home-heading07">
                  <span>כאבי גב</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-features-card07">
              <div className="home-text-container07">
                <span className="home-heading08">
                  <span>כאבי צוואר</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-features-card08">
              <div className="home-text-container08">
                <span className="home-heading09">
                  <span>פריצת דיסק</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-features-card09">
              <div className="home-text-container09">
                <span className="home-heading10">דלקות</span>
              </div>
            </div>
            <div className="home-features-card10">
              <div className="home-text-container10">
                <span className="home-heading11">
                  <span>בעיות בעצמות השלד</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-features-card11">
              <div className="home-text-container11">
                <span className="home-heading12">
                  <span>כאבי מפרקים</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-features-card12">
              <div className="home-text-container12">
                <span className="home-heading13">כאבי גב המקרינים לרגליים</span>
              </div>
            </div>
            <div className="home-features-card13">
              <div className="home-text-container13">
                <span className="home-heading14">
                  <span>פיברומיאלגיה</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <a href="tel:+972542233177" className="home-cta-btn6 button">
            <span className="home-text097">
              <span>054-2233-177</span>
              <br className="Anchor"></br>
            </span>
          </a>
        </div>
        <div className="home-que">
          <span className="home-text100">
            למעלה מ- 30 שנות הצלחה בטיפול וריפוי אלפי מטופלים, באמצעות שיטות
            ריפוי חדשניות, ברובן ללא הליך פולשני וניתוחי!
          </span>
        </div>
        <div id="deeptissue" className="home-deep-tissue">
          <span className="home-text101">
            <span>טיפול רקמות עמוקות באוזון</span>
            <br></br>
            <span>O3 Deep Tissue Therapy</span>
            <br></br>
          </span>
          <span className="home-text106">
            <span>הטיפול היעיל בארץ להקלת כאבים המוקרנים לרגליים מהגב</span>
            <br></br>
            <span>אחד הטיפולים היעילים בעולם לכאבים וכאבי גב</span>
            <br></br>
            <span>
              ד&quot;ר שטיין היחיד בארץ עם הטיפול באוזון באופן אורתופדי
            </span>
            <br></br>
            <span>
              אוזון הוא גז מרוכז בחמצן o3
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              חמצן הכרחי לריפוי
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <div className="home-over-lay"></div>
          <img
            alt="image"
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/canstockphoto26619017-scaled.jpg-1500w.webp"
            srcSet="/canstockphoto26619017-scaled.jpg-1500w.webp 1200w, /canstockphoto26619017-scaled.jpg-tablet.webp 800w, /canstockphoto26619017-scaled.jpg-mobile.webp 480w"
            className="home-image13"
          />
        </div>
        <div className="home-section-separator3"></div>
        <div className="home-card1">
          <div className="home-business">
            <span className="home-text116">
              ד&quot;ר שלדון שטיין, מומחה לכירורגיה אורטופדית
            </span>
            <span className="home-text117">
              לאחר ניסיון בטיפול באלפי אנשים בארה״ב, הביא ארצה שיטות חדשניות
              לטיפול בכאבי גב והתוצאות מרשימות!
            </span>
            <span className="home-text118">למידע נוסף וייעוץ, חייגו</span>
            <a href="tel:+972542233177" className="home-cta-btn7 button">
              <span className="home-text119">
                <span>054-2233-177</span>
                <br className="Anchor"></br>
              </span>
            </a>
          </div>
        </div>
        <div className="home-section-separator4"></div>
        <div className="home-container6 thq-section-padding">
          <div className="home-max-width1 thq-section-max-width">
            <div
              data-thq="slider"
              data-loop="false"
              data-autoplay="true"
              data-navigation="true"
              data-pagination="true"
              data-reverse-direction="true"
              className="home-slider swiper"
            >
              <div data-thq="slider-wrapper" className="swiper-wrapper">
                <div
                  data-thq="slider-slide"
                  className="home-slider-slide swiper-slide"
                >
                  <div className="home-content07">
                    <h1 className="home-text122">לדר. שטיין שלדון,</h1>
                    <p className="home-text123 thq-body-large">
                      <span>
                        סבלתי משך יותר מ 10 שנים מכאבי גב ותמיד האורתופדים
                        השונים שלחו אותי לפיזיותרפיה בטענה שעם הגיל (77) יש
                        ניוון ואין מה לעשות.
                      </span>
                      <br></br>
                      <span>
                        הודות לאבחון הנכון שלך היצרות בעמוד השידרה, שלחת אותי
                        לצילום CT ולבדיקות בבית חולים. ואחרי בדיקות MRI. נקבע
                        שיש היצרות ועלי לעבור ניתוח גב בבית החולים שעברתי
                        בהצלחה.
                      </span>
                      <br></br>
                      <span>אני מודה לך על טיפולך המסור.</span>
                      <br></br>
                      <span>תודה רבה</span>
                    </p>
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-slider-slide1 swiper-slide"
                >
                  <div className="home-content08">
                    <h1 className="home-text131">ד&quot;ר שטיין שלום,</h1>
                    <p className="home-text132 thq-body-large">
                      <span>
                        אני רוצה להודות לך על שהעלמת לי את כאבי הגב ואת הכאבים
                        המקרינים לרגליים.
                      </span>
                      <br></br>
                      <span>
                        אני מתעורר בבוקר ואין לי כאבים, אני יכול ישר להתיישר
                        וללכת רגיל בלי כאבים.
                      </span>
                      <br></br>
                      <span>אני ממש ממש מודה לך וממליץ לכולם.</span>
                      <br></br>
                      <span>בכבוד רב,</span>
                      <br></br>
                      <span>רוני סער</span>
                      <br></br>
                    </p>
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-slider-slide2 swiper-slide"
                >
                  <div className="home-content09">
                    <h1 className="home-text143">לדר. שטיין שלדון,</h1>
                    <p className="home-text144 thq-body-large">
                      <span>
                        בגיל 45 פתאום להיות עם פריצת דיסק מלווה בכאבים כל היום
                        היה פשוט סיוט.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>
                        חיפשתי פתרונות והודות לטיפול של ד&quot;ר שטיין אני חזרתי
                        לעשות ספורט ואין לי כאבים בכלל
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>
                        חזרתי לחייך ולחיות כפי שהייתי בעבר
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>תודה רבה</span>
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-pagination"
                className="home-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
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
        <div className="home-section-separator5"></div>
        <div id="contact" className="home-get-in-touch1">
          <h2 className="home-text152">
            <span>צרו קשר עכשיו</span>
            <br></br>
          </h2>
          <div className="home-content-container2"></div>
          <div className="home-container7">
            <div className="home-container8">
              <Script
                html={`<script type="text/javascript" src="https://form.jotform.com/jsform/241543269234456"></script>`}
              ></Script>
            </div>
          </div>
        </div>
        <div className="home-footer-container">
          <a
            href="https://011.ninja"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link12"
          >
            <div className="home-footer">
              <div className="home-social-links">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon14"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon16"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon18"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </div>
              <div className="home-copyright-container">
                <span className="Anchor home-link13">
                  <span>
                    Copyright
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>011.ninja 2024</span>
                </span>
                <svg viewBox="0 0 1024 1024" className="home-icon20">
                  <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            direction: rtl;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #f5f5f5;
          }
          .home-navbar-interactive {
            width: 100%;
            display: flex;
            z-index: 999;
            position: fixed;
            align-items: center;
            padding-top: 32px;
            padding-left: 48px;
            padding-right: 48px;
            padding-bottom: 32px;
            justify-content: space-between;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .home-link {
            display: contents;
          }
          .home-logo {
            flex: 0 0 auto;
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
          }
          .home-image {
            flex: 0 0 auto;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-image01 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            margin-left: 0px;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-text {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text001 {
            font-family: 'Karantina';
            line-height: 1;
          }
          .home-text004 {
            font-family: 'Bellefair';
            line-height: 1;
          }
          .home-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .home-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-link01 {
            font-style: normal;
            font-family: 'Open Sans';
            font-weight: 600;
            margin-right: 0px;
            text-decoration: none;
          }
          .home-link02 {
            font-style: normal;
            font-family: 'Open Sans';
            font-weight: 600;
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-link03 {
            font-style: normal;
            font-family: 'Open Sans';
            font-weight: 600;
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-link04 {
            font-style: normal;
            font-family: 'Open Sans';
            font-weight: 600;
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-link05 {
            font-style: normal;
            font-family: 'Open Sans';
            font-weight: 600;
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-cta-btn {
            color: var(--dl-color-gray-white);
            cursor: pointer;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-fiveunits);
            border-radius: var(--dl-radius-radius-radius24);
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }
          .home-text005 {
            font-family: 'Open Sans';
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon {
            width: 16px;
            height: 16px;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: absolute;
            transform: translateX(-100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 48px;
            justify-content: space-between;
          }
          .home-link06 {
            display: contents;
          }
          .home-logo1 {
            flex: 0 0 auto;
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
          }
          .home-image02 {
            flex: 0 0 auto;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-doubleunit);
            flex-direction: column;
          }
          .home-image03 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            margin-left: 0px;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-text008 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text009 {
            font-family: 'Karantina';
            line-height: 1;
          }
          .home-text012 {
            font-size: 16px;
            font-family: 'Bellefair';
            line-height: 1;
            letter-spacing: 0.2px;
          }
          .home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: 32px;
            height: 32px;
          }
          .home-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link07 {
            font-style: normal;
            font-family: 'Open Sans';
            font-weight: 600;
            margin-bottom: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .home-link08 {
            font-style: normal;
            font-family: 'Open Sans';
            font-weight: 600;
            margin-bottom: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .home-link09 {
            font-style: normal;
            font-family: 'Open Sans';
            font-weight: 600;
            margin-bottom: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .home-link10 {
            font-style: normal;
            font-family: 'Open Sans';
            font-weight: 600;
            margin-bottom: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .home-link11 {
            font-style: normal;
            font-family: 'Open Sans';
            font-weight: 600;
            margin-bottom: var(--dl-space-space-fourunits);
            text-decoration: none;
          }
          .home-buttons1 {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-cta-btn1 {
            color: var(--dl-color-gray-white);
            cursor: pointer;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-fiveunits);
            border-radius: var(--dl-radius-radius-radius24);
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }
          .home-text013 {
            font-family: 'Open Sans';
          }
          .home-icon04 {
            width: 32px;
            height: 32px;
          }
          .home-icon06 {
            width: 32px;
            height: 32px;
            margin-right: 32px;
          }
          .home-icon08 {
            width: 32px;
            height: 32px;
            margin-right: 32px;
          }
          .home-hero {
            width: 100%;
            display: flex;
            position: relative;
            margin-top: 115px;
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tenunits);
            justify-content: center;
          }
          .home-image04 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .home-container1 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(0, 3, 41, 0.8) 0%,
              rgba(0, 3, 41, 0.03) 100%
            );
          }
          .home-content-container {
            width: 100%;
            display: flex;
            z-index: 5;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tenunits);
            justify-content: center;
          }
          .home-hero-text {
            width: 65%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            font-size: 4em;
            font-style: normal;
            text-align: center;
            font-family: 'Karantina';
            font-weight: 700;
            margin-bottom: var(--dl-space-space-doubleunit);
            -webkit-text-stroke: 2px #000;
          }
          .home-text018 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 2em;
            font-style: normal;
            text-align: center;
            font-family: 'Open Sans';
            font-weight: 700;
            -webkit-text-stroke: 2px #777;
          }
          .home-icon10 {
            fill: rgba(217, 217, 217, 0);
            width: 40px;
            height: auto;
          }
          .home-text025 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            font-size: 2em;
            font-style: normal;
            text-align: center;
            font-family: 'Open Sans';
            font-weight: 700;
            margin-bottom: var(--dl-space-space-fiveunits);
            -webkit-text-stroke: 2px #777;
          }
          .home-cta-btn2 {
            color: var(--dl-color-gray-white);
            cursor: pointer;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-fiveunits);
            border-radius: var(--dl-radius-radius-radius24);
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }
          .home-text030 {
            font-size: 35px;
            font-family: 'Open Sans';
          }
          .home-features {
            width: 100%;
            display: flex;
            max-width: 90%;
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-heading-container {
            width: 45%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text033 {
            font-size: 4rem;
            font-style: normal;
            text-align: center;
            font-family: 'Karantina';
            font-weight: 700;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-cards-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-features-card {
            width: 30%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: 20px;
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-theme-neutral-light);
          }
          .home-icon-container {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-left: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
          }
          .home-image05 {
            width: 80px;
            object-fit: cover;
          }
          .home-text-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading01 {
            font-size: 30px;
            font-style: normal;
            font-family: 'Open Sans';
            font-weight: 500;
          }
          .home-features-card01 {
            width: 30%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: 20px;
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-theme-neutral-light);
          }
          .home-icon-container1 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-left: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
          }
          .home-image06 {
            width: 80px;
            object-fit: cover;
          }
          .home-text-container01 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading02 {
            font-size: 30px;
            font-style: normal;
            font-family: 'Open Sans';
            font-weight: 500;
          }
          .home-features-card02 {
            width: 30%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: 20px;
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-theme-neutral-light);
          }
          .home-icon-container2 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-left: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-round);
            padding-right: 8px;
            flex-direction: column;
            justify-content: center;
          }
          .home-image07 {
            width: 40px;
            object-fit: cover;
          }
          .home-text-container02 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading03 {
            font-size: 30px;
          }
          .home-features-card03 {
            width: 30%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: 20px;
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-theme-neutral-light);
          }
          .home-icon-container3 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-left: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
          }
          .home-image08 {
            width: 80px;
            object-fit: cover;
          }
          .home-text-container03 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading04 {
            font-size: 30px;
            font-style: normal;
            font-family: 'Open Sans';
            font-weight: 500;
          }
          .home-features-card04 {
            width: 30%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: 20px;
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-theme-neutral-light);
          }
          .home-icon-container4 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-left: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
          }
          .home-image09 {
            width: 80px;
            object-fit: cover;
          }
          .home-text-container04 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading05 {
            font-size: 30px;
            font-style: normal;
            font-family: 'Open Sans';
            font-weight: 500;
          }
          .home-features-card05 {
            width: 30%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: 20px;
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-theme-neutral-light);
          }
          .home-icon-container5 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
          }
          .home-image10 {
            width: 60px;
            object-fit: cover;
          }
          .home-text-container05 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading06 {
            font-size: 30px;
            font-style: normal;
            font-family: 'Open Sans';
            font-weight: 500;
          }
          .home-content {
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-direction: column;
          }
          .home-content01 {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-cta-btn3 {
            color: var(--dl-color-gray-white);
            cursor: pointer;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-fiveunits);
            border-radius: var(--dl-radius-radius-radius24);
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }
          .home-text040 {
            font-size: 35px;
            font-family: 'Open Sans';
          }
          .home-section-separator {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-team8 {
            background-size: cover;
            background-image: url('/aboutbg-1500w.webp');
          }
          .home-max-width {
            gap: 32px;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-section-title {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-content02 {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .home-text043 {
            font-size: 4em;
            font-style: normal;
            font-family: 'Karantina';
            font-weight: 700;
          }
          .home-text046 {
            font-size: 2em;
            font-style: normal;
            font-family: 'Open Sans';
            font-weight: 800;
          }
          .home-card {
            gap: 24px;
            width: 45%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: 20px;
            flex-direction: column;
            background-color: #f5f5f5;
          }
          .home-placeholder-image {
            width: 70%;
          }
          .home-content03 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text050 {
            overflow: auto;
            font-size: 30px;
            font-style: normal;
            text-align: center;
            font-family: 'Open Sans';
            font-weight: 300;
          }
          .home-social-icons {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .home-content04 {
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-direction: column;
          }
          .home-content05 {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-cta-btn4 {
            color: var(--dl-color-gray-white);
            cursor: pointer;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-fiveunits);
            border-radius: var(--dl-radius-radius-radius24);
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }
          .home-text061 {
            font-size: 35px;
            font-family: 'Open Sans';
          }
          .home-section-separator1 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-qua {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            border-color: #f5f5f5;
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tenunits);
            justify-content: center;
          }
          .home-text064 {
            width: 100%;
            font-size: 3.7em;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Bellefair';
            font-weight: 400;
          }
          .home-section-separator2 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-lang {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tenunits);
            justify-content: center;
          }
          .home-title {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            z-index: 10;
            align-items: flex-start;
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text065 {
            font-size: 4em;
            font-style: normal;
            font-family: 'Karantina';
            font-weight: 400;
            line-height: 1.2;
            margin-left: var(--dl-space-space-fiveunits);
          }
          .home-langs {
            flex: 0 0 auto;
            width: 65%;
            height: 100%;
            display: flex;
            z-index: 10;
            align-items: center;
            flex-direction: row;
          }
          .home-icon12 {
            fill: var(--dl-color-theme-neutral-light);
            width: 4em;
            height: 4em;
            margin-left: var(--dl-space-space-tenunits);
          }
          .home-text066 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            width: auto;
            font-size: 5em;
            font-family: 'Karantina';
            margin-left: var(--dl-space-space-tenunits);
          }
          .home-text067 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 5em;
            font-family: 'Karantina';
            margin-left: var(--dl-space-space-tenunits);
          }
          .home-text068 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 5em;
            font-family: 'Karantina';
            margin-left: var(--dl-space-space-tenunits);
          }
          .home-text069 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 5em;
            font-family: 'Karantina';
            margin-left: var(--dl-space-space-tenunits);
          }
          .home-text070 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 5em;
            font-family: 'Karantina';
            margin-left: var(--dl-space-space-tenunits);
          }
          .home-overlay {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 1;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-image: radial-gradient(
              circle at left,
              rgba(0, 41, 68, 0.7) 52%,
              rgba(245, 245, 245, 0.8) 86%
            );
          }
          .home-image11 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            z-index: 0;
            position: absolute;
            object-fit: cover;
          }
          .home-get-in-touch {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
          }
          .home-text071 {
            font-size: 3rem;
            text-align: center;
            font-family: 'Karantina';
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-content-container1 {
            width: 100%;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container2 {
            width: 100%;
            height: 320px;
          }
          .home-container3 {
            display: contents;
          }
          .home-call-now {
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .home-content06 {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-cta-btn5 {
            color: var(--dl-color-gray-white);
            cursor: pointer;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-fiveunits);
            border-radius: var(--dl-radius-radius-radius24);
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }
          .home-text074 {
            font-size: 35px;
            font-family: 'Open Sans';
          }
          .home-expert {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            border-color: #f5f5f5;
            border-width: 5px;
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-image12 {
            top: 0px;
            right: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .home-container4 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 0;
            position: absolute;
            align-items: flex-start;
            border-color: #f5f5f5;
            border-width: 5px;
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(245, 245, 245, 0) 0%,
              rgb(245, 245, 245) 51%
            );
          }
          .home-text077 {
            width: 100%;
            z-index: 20;
            font-size: 3em;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Karantina';
            font-weight: 300;
            line-height: 1;
          }
          .home-text081 {
            width: 100%;
            z-index: 20;
            font-size: 3.5em;
            align-self: center;
            margin-top: var(--dl-space-space-doubleunit);
            text-align: center;
            font-family: 'Karantina';
            line-height: 1;
            margin-bottom: var(--dl-space-space-tenunits);
          }
          .home-container5 {
            gap: 30px;
            width: 100%;
            display: grid;
            z-index: 20;
            margin-bottom: var(--dl-space-space-fourunits);
            grid-template-columns: repeat(4, 1fr);
          }
          .home-features-card06 {
            width: auto;
            cursor: pointer;
            height: 250px;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: 20px;
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: center;
            background-image: radial-gradient(
              circle at center,
              rgba(255, 255, 255, 0.32) 0%,
              rgba(255, 255, 255, 0.32) 0%,
              rgba(0, 0, 0, 0.25) 100%
            );
          }
          .home-features-card06:hover {
            color: var(--dl-color-gray-white);
            background-image: linear-gradient(
              45deg,
              rgb(189, 195, 199) 0%,
              rgba(0, 44, 87, 0.54) 39%,
              rgba(0, 44, 87, 0.53) 59%,
              rgba(0, 44, 87, 0.54) 86%
            );
          }
          .home-text-container06 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading07 {
            font-size: 30px;
            font-style: normal;
            text-align: center;
            font-family: 'Open Sans';
            font-weight: 800;
          }
          .home-features-card07 {
            width: auto;
            cursor: pointer;
            height: 250px;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: 20px;
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: center;
            background-image: radial-gradient(
              circle at center,
              rgba(255, 255, 255, 0.32) 0%,
              rgba(255, 255, 255, 0.32) 0%,
              rgba(0, 0, 0, 0.25) 100%
            );
          }
          .home-features-card07:hover {
            color: var(--dl-color-gray-white);
            background-image: linear-gradient(
              45deg,
              rgb(189, 195, 199) 0%,
              rgba(0, 44, 87, 0.54) 39%,
              rgba(0, 44, 87, 0.53) 59%,
              rgba(0, 44, 87, 0.54) 86%
            );
          }
          .home-text-container07 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading08 {
            font-size: 30px;
            font-style: normal;
            text-align: center;
            font-family: 'Open Sans';
            font-weight: 800;
          }
          .home-features-card08 {
            width: auto;
            cursor: pointer;
            height: 250px;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: 20px;
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: center;
            background-image: radial-gradient(
              circle at center,
              rgba(255, 255, 255, 0.32) 0%,
              rgba(255, 255, 255, 0.32) 0%,
              rgba(0, 0, 0, 0.25) 100%
            );
          }
          .home-features-card08:hover {
            color: var(--dl-color-gray-white);
            background-image: linear-gradient(
              45deg,
              rgb(189, 195, 199) 0%,
              rgba(0, 44, 87, 0.54) 39%,
              rgba(0, 44, 87, 0.53) 59%,
              rgba(0, 44, 87, 0.54) 86%
            );
          }
          .home-text-container08 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading09 {
            font-size: 30px;
            font-style: normal;
            text-align: center;
            font-family: 'Open Sans';
            font-weight: 800;
          }
          .home-features-card09 {
            width: auto;
            cursor: pointer;
            height: 250px;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: 20px;
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: center;
            background-image: radial-gradient(
              circle at center,
              rgba(255, 255, 255, 0.32) 0%,
              rgba(255, 255, 255, 0.32) 0%,
              rgba(0, 0, 0, 0.25) 100%
            );
          }
          .home-features-card09:hover {
            color: var(--dl-color-gray-white);
            background-image: linear-gradient(
              45deg,
              rgb(189, 195, 199) 0%,
              rgba(0, 44, 87, 0.54) 39%,
              rgba(0, 44, 87, 0.53) 59%,
              rgba(0, 44, 87, 0.54) 86%
            );
          }
          .home-text-container09 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading10 {
            font-size: 30px;
            font-style: normal;
            text-align: center;
            font-family: 'Open Sans';
            font-weight: 800;
          }
          .home-features-card10 {
            width: auto;
            cursor: pointer;
            height: 250px;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: 20px;
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: center;
            background-image: radial-gradient(
              circle at center,
              rgba(255, 255, 255, 0.32) 0%,
              rgba(255, 255, 255, 0.32) 0%,
              rgba(0, 0, 0, 0.25) 100%
            );
          }
          .home-features-card10:hover {
            color: var(--dl-color-gray-white);
            background-image: linear-gradient(
              45deg,
              rgb(189, 195, 199) 0%,
              rgba(0, 44, 87, 0.54) 39%,
              rgba(0, 44, 87, 0.53) 59%,
              rgba(0, 44, 87, 0.54) 86%
            );
          }
          .home-text-container10 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading11 {
            font-size: 30px;
            font-style: normal;
            text-align: center;
            font-family: 'Open Sans';
            font-weight: 800;
          }
          .home-features-card11 {
            width: auto;
            cursor: pointer;
            height: 250px;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: 20px;
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: center;
            background-image: radial-gradient(
              circle at center,
              rgba(255, 255, 255, 0.32) 0%,
              rgba(255, 255, 255, 0.32) 0%,
              rgba(0, 0, 0, 0.25) 100%
            );
          }
          .home-features-card11:hover {
            color: var(--dl-color-gray-white);
            background-image: linear-gradient(
              45deg,
              rgb(189, 195, 199) 0%,
              rgba(0, 44, 87, 0.54) 39%,
              rgba(0, 44, 87, 0.53) 59%,
              rgba(0, 44, 87, 0.54) 86%
            );
          }
          .home-text-container11 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading12 {
            font-size: 30px;
            font-style: normal;
            text-align: center;
            font-family: 'Open Sans';
            font-weight: 800;
          }
          .home-features-card12 {
            width: auto;
            cursor: pointer;
            height: 250px;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: 20px;
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: center;
            background-image: radial-gradient(
              circle at center,
              rgba(255, 255, 255, 0.32) 0%,
              rgba(255, 255, 255, 0.32) 0%,
              rgba(0, 0, 0, 0.25) 100%
            );
          }
          .home-features-card12:hover {
            color: var(--dl-color-gray-white);
            background-image: linear-gradient(
              45deg,
              rgb(189, 195, 199) 0%,
              rgba(0, 44, 87, 0.54) 39%,
              rgba(0, 44, 87, 0.53) 59%,
              rgba(0, 44, 87, 0.54) 86%
            );
          }
          .home-text-container12 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading13 {
            font-size: 30px;
            font-style: normal;
            text-align: center;
            font-family: 'Open Sans';
            font-weight: 800;
          }
          .home-features-card13 {
            width: auto;
            cursor: pointer;
            height: 250px;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: 20px;
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: center;
            background-image: radial-gradient(
              circle at center,
              rgba(255, 255, 255, 0.32) 0%,
              rgba(255, 255, 255, 0.32) 0%,
              rgba(0, 0, 0, 0.25) 100%
            );
          }
          .home-features-card13:hover {
            color: var(--dl-color-gray-white);
            background-image: linear-gradient(
              45deg,
              rgb(189, 195, 199) 0%,
              rgba(0, 44, 87, 0.54) 39%,
              rgba(0, 44, 87, 0.53) 59%,
              rgba(0, 44, 87, 0.54) 86%
            );
          }
          .home-text-container13 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading14 {
            font-size: 30px;
            font-style: normal;
            text-align: center;
            font-family: 'Open Sans';
            font-weight: 800;
          }
          .home-cta-btn6 {
            color: var(--dl-color-gray-white);
            cursor: pointer;
            z-index: 20;
            margin-top: var(--dl-space-space-fourunits);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-fiveunits);
            border-radius: var(--dl-radius-radius-radius24);
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }
          .home-text097 {
            font-size: 35px;
            font-family: 'Open Sans';
          }
          .home-que {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tenunits);
            justify-content: center;
          }
          .home-text100 {
            width: 100%;
            font-size: 3em;
            text-align: center;
            font-family: 'Bellefair';
          }
          .home-deep-tissue {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text101 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            width: 100%;
            z-index: 2;
            font-size: 4em;
            align-self: flex-start;
            font-style: normal;
            text-align: center;
            font-family: 'Karantina';
            font-weight: 700;
            line-height: 1.3;
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
          }
          .home-text106 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            width: 100%;
            z-index: 2;
            font-size: 2em;
            font-style: normal;
            text-align: center;
            font-family: 'Open Sans';
            font-weight: 300;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .home-over-lay {
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            display: flex;
            z-index: 1;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(189, 195, 199, 0.2) 2%,
              rgba(0, 0, 0, 0.83) 82%
            );
          }
          .home-image13 {
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            z-index: 0;
            position: absolute;
            object-fit: cover;
          }
          .home-section-separator3 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-card1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-tenunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #f5f5f5;
          }
          .home-business {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            box-shadow: 5px 5px 20px 0px #003eb3;
            align-items: center;
            border-color: var(--dl-color-primary-100);
            border-style: solid;
            border-width: 1px;
            border-radius: 20px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .home-text116 {
            width: 100%;
            font-size: 3em;
            text-align: center;
            font-family: 'Karantina';
          }
          .home-text117 {
            width: 100%;
            font-size: 3em;
            font-style: normal;
            text-align: center;
            font-family: 'Karantina';
            font-weight: 300;
          }
          .home-text118 {
            width: 100%;
            font-size: 3em;
            text-align: center;
            font-family: 'Karantina';
          }
          .home-cta-btn7 {
            color: var(--dl-color-gray-white);
            cursor: pointer;
            margin-top: var(--dl-space-space-fourunits);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-fiveunits);
            border-radius: var(--dl-radius-radius-radius24);
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }
          .home-text119 {
            font-size: 35px;
            font-family: 'Open Sans';
          }
          .home-section-separator4 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-container6 {
            direction: ltr;
            padding-top: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: #f5f5f5;
          }
          .home-max-width1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-slider {
            width: 100%;
            height: auto;
            display: inline-block;
            position: relative;
          }
          .home-slider-slide {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-content07 {
            gap: 32px;
            display: flex;
            direction: rtl;
            align-items: center;
            flex-direction: column;
          }
          .home-text122 {
            font-family: 'Karantina';
          }
          .home-text123 {
            font-size: 24px;
            font-style: normal;
            text-align: center;
            font-family: 'Open Sans';
            font-weight: 300;
          }
          .home-slider-slide1 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-content08 {
            gap: 32px;
            width: 100%;
            height: 100%;
            display: flex;
            direction: rtl;
            align-items: center;
            flex-direction: column;
          }
          .home-text131 {
            font-family: 'Karantina';
          }
          .home-text132 {
            font-size: 24px;
            font-style: normal;
            text-align: center;
            font-family: 'Open Sans';
            font-weight: 300;
          }
          .home-slider-slide2 {
            display: flex;
            background-size: 100%;
          }
          .home-content09 {
            gap: 32px;
            width: 100%;
            height: 100%;
            display: flex;
            direction: rtl;
            align-items: center;
            flex-direction: column;
          }
          .home-text143 {
            font-family: 'Karantina';
          }
          .home-text144 {
            font-size: 24px;
            font-style: normal;
            text-align: center;
            font-family: 'Open Sans';
            font-weight: 300;
          }
          .home-slider-pagination {
            display: block;
          }
          .home-section-separator5 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-get-in-touch1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
          }
          .home-text152 {
            font-size: 3rem;
            text-align: center;
            font-family: 'Karantina';
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-content-container2 {
            width: 100%;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container7 {
            width: 100%;
            height: 280px;
          }
          .home-container8 {
            display: contents;
          }
          .home-footer-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .home-link12 {
            display: contents;
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
            text-decoration: none;
          }
          .home-social-links {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-icon14 {
            width: 24px;
            height: 24px;
          }
          .home-icon16 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-icon18 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-copyright-container {
            cursor: pointer;
            display: flex;
            direction: ltr;
            text-align: left;
            align-items: center;
            flex-direction: row;
          }
          .home-icon20 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          @media (max-width: 1600px) {
            .home-link01 {
              margin-right: 0px;
            }
            .home-link07 {
              margin-right: 0px;
            }
            .home-hero {
              margin-top: 115px;
              margin-bottom: 0px;
            }
            .home-title {
              width: 25%;
              margin-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-text065 {
              font-size: 4em;
              line-height: 1.2;
            }
            .home-icon12 {
              width: 4em;
              margin-left: var(--dl-space-space-fiveunits);
            }
            .home-text066 {
              font-size: 4.3em;
            }
            .home-text067 {
              font-size: 4.3em;
            }
            .home-text068 {
              font-size: 4.3em;
              margin-left: var(--dl-space-space-fiveunits);
            }
            .home-text069 {
              font-size: 4.3em;
            }
            .home-text070 {
              font-size: 4.3em;
            }
            .home-get-in-touch {
              padding-top: var(--dl-space-space-doubleunit);
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .home-container2 {
              width: 100%;
            }
            .home-features-card06 {
              background-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.19) 0%,
                rgba(255, 255, 255, 0.92) 100%
              );
            }
            .home-features-card07 {
              background-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.19) 0%,
                rgba(255, 255, 255, 0.92) 100%
              );
            }
            .home-features-card08 {
              background-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.19) 0%,
                rgba(255, 255, 255, 0.92) 100%
              );
            }
            .home-features-card09 {
              background-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.19) 0%,
                rgba(255, 255, 255, 0.92) 100%
              );
            }
            .home-features-card10 {
              background-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.19) 0%,
                rgba(255, 255, 255, 0.92) 100%
              );
            }
            .home-features-card11 {
              background-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.19) 0%,
                rgba(255, 255, 255, 0.92) 100%
              );
            }
            .home-features-card12 {
              background-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.19) 0%,
                rgba(255, 255, 255, 0.92) 100%
              );
            }
            .home-features-card13 {
              background-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.19) 0%,
                rgba(255, 255, 255, 0.92) 100%
              );
            }
            .home-container7 {
              width: 100%;
            }
          }
          @media (max-width: 1200px) {
            .home-navbar-interactive {
              z-index: 100;
              background-color: var(--dl-color-gray-white);
            }
            .home-text {
              width: auto;
            }
            .home-text001 {
              font-size: 2em;
            }
            .home-text004 {
              font-size: 16px;
            }
            .home-link01 {
              margin-right: 0px;
            }
            .home-link02 {
              margin-right: var(--dl-space-space-doubleunit);
            }
            .home-link03 {
              margin-right: var(--dl-space-space-doubleunit);
            }
            .home-link04 {
              margin-right: var(--dl-space-space-doubleunit);
            }
            .home-link05 {
              margin-right: var(--dl-space-space-doubleunit);
            }
            .home-cta-btn {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-text005 {
              width: auto;
            }
            .home-text008 {
              width: auto;
            }
            .home-text009 {
              font-size: 1.5em;
            }
            .home-text012 {
              font-size: 14px;
            }
            .home-link07 {
              margin-right: 0px;
            }
            .home-link08 {
              margin-right: var(--dl-space-space-doubleunit);
            }
            .home-link09 {
              margin-right: var(--dl-space-space-doubleunit);
            }
            .home-link10 {
              margin-right: var(--dl-space-space-doubleunit);
            }
            .home-link11 {
              margin-right: var(--dl-space-space-doubleunit);
            }
            .home-cta-btn1 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-text013 {
              width: auto;
            }
            .home-icon04 {
              width: 32px;
              height: 32px;
              margin-right: 0px;
            }
            .home-icon06 {
              width: 32px;
              height: 32px;
              margin-right: 16px;
            }
            .home-icon08 {
              width: 32px;
              height: 32px;
              margin-right: 16px;
            }
            .home-hero {
              margin-top: 115px;
              margin-bottom: 0px;
            }
            .home-container1 {
              width: 100%;
            }
            .home-cards-container {
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home-heading01 {
              font-size: 24px;
            }
            .home-heading02 {
              font-size: 24px;
            }
            .home-heading03 {
              font-size: 24px;
            }
            .home-heading04 {
              font-size: 24px;
            }
            .home-heading05 {
              font-size: 24px;
            }
            .home-heading06 {
              font-size: 24px;
            }
            .home-card {
              width: 55%;
              border-color: var(--dl-color-gray-900);
            }
            .home-qua {
              width: 100%;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-text064 {
              font-size: 3em;
              align-self: center;
              font-family: Bellefair;
            }
            .home-lang {
              flex-direction: column;
            }
            .home-title {
              width: 100%;
            }
            .home-text065 {
              fill: var(--dl-color-theme-neutral-light);
              color: var(--dl-color-theme-neutral-light);
              width: 100%;
              font-size: 4em;
              font-style: normal;
              text-align: center;
              font-family: Karantina;
              font-weight: 400;
            }
            .home-langs {
              width: 100%;
              justify-content: center;
            }
            .home-overlay {
              background-image: radial-gradient(
                circle at left,
                rgba(0, 41, 68, 0.7) 79%,
                rgba(255, 255, 255, 0.8) 100%
              );
            }
            .home-text071 {
              margin-bottom: 0px;
            }
            .home-call-now {
              margin-top: var(--dl-space-space-fourunits);
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home-expert {
              height: auto;
              align-items: center;
              justify-content: center;
            }
            .home-text077 {
              font-size: 2em;
            }
            .home-text081 {
              font-size: 3em;
              margin-bottom: var(--dl-space-space-tenunits);
            }
            .home-container5 {
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home-features-card06 {
              margin-bottom: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .home-heading07 {
              font-size: 24px;
              font-style: normal;
              font-family: Open Sans;
              font-weight: 700;
            }
            .home-features-card07 {
              margin-bottom: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .home-heading08 {
              font-size: 24px;
              font-style: normal;
              font-family: Open Sans;
              font-weight: 700;
            }
            .home-features-card08 {
              margin-bottom: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .home-heading09 {
              font-size: 24px;
              font-style: normal;
              font-family: Open Sans;
              font-weight: 700;
            }
            .home-features-card09 {
              margin-bottom: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .home-heading10 {
              font-size: 24px;
              font-style: normal;
              font-family: Open Sans;
              font-weight: 700;
            }
            .home-features-card10 {
              justify-content: center;
            }
            .home-heading11 {
              font-size: 24px;
              font-style: normal;
              text-align: center;
              font-family: Open Sans;
              font-weight: 700;
            }
            .home-features-card11 {
              justify-content: center;
            }
            .home-heading12 {
              font-size: 24px;
              font-style: normal;
              font-family: Open Sans;
              font-weight: 700;
            }
            .home-features-card12 {
              justify-content: center;
            }
            .home-heading13 {
              font-size: 24px;
              align-self: center;
              font-style: normal;
              font-family: Open Sans;
              font-weight: 700;
            }
            .home-features-card13 {
              justify-content: center;
            }
            .home-heading14 {
              font-size: 24px;
              font-style: normal;
              font-family: Open Sans;
              font-weight: 700;
            }
            .home-text101 {
              fill: var(--dl-color-theme-neutral-light);
              color: var(--dl-color-theme-neutral-light);
              width: 100%;
              margin-top: var(--dl-space-space-doubleunit);
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .home-text106 {
              fill: var(--dl-color-theme-neutral-light);
              color: var(--dl-color-theme-neutral-light);
              padding: var(--dl-space-space-fourunits);
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .home-over-lay {
              right: 0px;
              width: 100%;
              bottom: 0px;
              height: 100%;
              z-index: 1;
              position: absolute;
              background-image: radial-gradient(
                circle at center,
                rgba(189, 195, 199, 0.2) 0%,
                rgb(0, 0, 0) 100%
              );
            }
            .home-text152 {
              margin-bottom: 0px;
            }
          }
          @media (max-width: 991px) {
            .home-logo {
              align-items: center;
            }
            .home-text {
              width: auto;
            }
            .home-text001 {
              font-size: 2em;
            }
            .home-text004 {
              font-size: 16px;
            }
            .home-desktop-menu {
              display: none;
            }
            .home-link01 {
              margin-right: var(--dl-space-space-unit);
            }
            .home-link02 {
              margin-right: var(--dl-space-space-unit);
            }
            .home-link03 {
              margin-right: var(--dl-space-space-unit);
            }
            .home-link04 {
              margin-right: var(--dl-space-space-unit);
            }
            .home-link05 {
              margin-right: var(--dl-space-space-unit);
            }
            .home-burger-menu {
              display: flex;
            }
            .home-icon {
              width: 32px;
              height: 32px;
            }
            .home-logo1 {
              align-items: center;
            }
            .home-text008 {
              width: auto;
            }
            .home-text009 {
              font-size: 2em;
            }
            .home-text012 {
              font-size: 16px;
            }
            .home-link07 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .home-link08 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .home-link09 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .home-link10 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .home-link11 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .home-hero {
              margin-top: 115px;
              margin-bottom: 0px;
              flex-direction: column-reverse;
            }
            .home-content-container {
              max-width: 100%;
              flex-direction: column-reverse;
            }
            .home-hero-text {
              width: 80%;
            }
            .home-heading01 {
              font-size: 20px;
            }
            .home-heading02 {
              font-size: 20px;
            }
            .home-heading03 {
              font-size: 20px;
            }
            .home-heading04 {
              font-size: 20px;
            }
            .home-heading05 {
              font-size: 20px;
            }
            .home-heading06 {
              font-size: 20px;
            }
            .home-text040 {
              font-size: 24px;
            }
            .home-text061 {
              font-size: 24px;
            }
            .home-get-in-touch {
              max-width: 100%;
            }
            .home-container2 {
              height: 280px;
            }
            .home-text074 {
              font-size: 24px;
            }
            .home-features-card06 {
              width: auto;
            }
            .home-heading07 {
              font-size: 20px;
            }
            .home-features-card07 {
              width: auto;
            }
            .home-heading08 {
              font-size: 20px;
            }
            .home-features-card08 {
              width: auto;
            }
            .home-heading09 {
              font-size: 20px;
            }
            .home-features-card09 {
              width: auto;
            }
            .home-heading10 {
              font-size: 20px;
            }
            .home-features-card10 {
              width: auto;
            }
            .home-heading11 {
              font-size: 20px;
            }
            .home-features-card11 {
              width: auto;
            }
            .home-heading12 {
              font-size: 20px;
            }
            .home-features-card12 {
              width: auto;
            }
            .home-heading13 {
              font-size: 20px;
            }
            .home-features-card13 {
              width: auto;
            }
            .home-heading14 {
              font-size: 20px;
            }
            .home-text097 {
              font-size: 24px;
            }
            .home-text100 {
              font-size: 2em;
            }
            .home-text119 {
              font-size: 24px;
            }
            .home-content07 {
              flex: 1;
              width: 100%;
              max-width: 800px;
            }
            .home-content08 {
              flex: 1;
              width: 100%;
              max-width: 800px;
            }
            .home-content09 {
              flex: 1;
              width: 100%;
              max-width: 800px;
            }
            .home-get-in-touch1 {
              max-width: 100%;
            }
            .home-container7 {
              height: 280px;
            }
            .home-footer {
              max-width: 100%;
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-text001 {
              font-size: 2em;
            }
            .home-text004 {
              font-size: 16px;
            }
            .home-burger-menu {
              align-items: center;
              justify-content: center;
            }
            .home-hero {
              margin-top: 115px;
              margin-bottom: 0px;
            }
            .home-text018 {
              font-size: 2.5em;
            }
            .home-text025 {
              font-size: 2.5em;
            }
            .home-heading-container {
              width: 100%;
            }
            .home-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .home-features-card {
              width: 100%;
              margin-bottom: var(--dl-space-space-tripleunit);
              justify-content: flex-start;
            }
            .home-icon-container {
              width: 25%;
              align-items: center;
            }
            .home-text-container {
              width: 75%;
              align-items: center;
            }
            .home-heading01 {
              font-size: 2em;
            }
            .home-features-card01 {
              width: 100%;
              margin-bottom: var(--dl-space-space-tripleunit);
              justify-content: flex-start;
            }
            .home-icon-container1 {
              width: 25%;
              align-items: center;
            }
            .home-text-container01 {
              width: 75%;
              align-items: center;
            }
            .home-heading02 {
              font-size: 2em;
            }
            .home-features-card02 {
              width: 100%;
              margin-bottom: var(--dl-space-space-tripleunit);
              justify-content: flex-start;
            }
            .home-icon-container2 {
              width: 25%;
              align-items: center;
            }
            .home-text-container02 {
              width: 75%;
              align-items: center;
            }
            .home-heading03 {
              font-size: 2em;
            }
            .home-features-card03 {
              width: 100%;
              margin-bottom: var(--dl-space-space-tripleunit);
              justify-content: flex-start;
            }
            .home-icon-container3 {
              width: 25%;
              align-items: center;
            }
            .home-text-container03 {
              width: 75%;
              align-items: center;
            }
            .home-heading04 {
              font-size: 2em;
            }
            .home-features-card04 {
              width: 100%;
              margin-bottom: var(--dl-space-space-tripleunit);
              justify-content: flex-start;
            }
            .home-icon-container4 {
              width: 25%;
              align-items: center;
            }
            .home-text-container04 {
              width: 75%;
              align-items: center;
            }
            .home-heading05 {
              font-size: 2em;
            }
            .home-features-card05 {
              width: 100%;
              margin-bottom: var(--dl-space-space-tripleunit);
              justify-content: flex-start;
            }
            .home-icon-container5 {
              width: 25%;
              align-items: center;
            }
            .home-text-container05 {
              width: 75%;
              align-items: center;
            }
            .home-heading06 {
              font-size: 2em;
            }
            .home-team8 {
              padding: 48px;
            }
            .home-max-width {
              padding: 48px;
            }
            .home-card {
              width: 100%;
            }
            .home-text050 {
              font-size: 25px;
            }
            .home-text065 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .home-langs {
              display: grid;
              flex-direction: row;
              grid-template-columns: repeat(2, 1fr);
            }
            .home-icon12 {
              display: none;
              margin-left: 0px;
            }
            .home-text066 {
              margin: 0px;
              text-align: center;
            }
            .home-text067 {
              margin: 0px;
              text-align: center;
            }
            .home-text068 {
              margin: 0px;
              text-align: center;
            }
            .home-text069 {
              margin: 0px;
              text-align: center;
            }
            .home-text070 {
              margin: 0px;
              text-align: center;
            }
            .home-get-in-touch {
              max-width: 100%;
            }
            .home-content-container1 {
              width: 100%;
              flex-direction: column;
            }
            .home-call-now {
              max-width: 100%;
            }
            .home-container5 {
              grid-template-columns: repeat(2, 1fr);
            }
            .home-features-card06 {
              width: auto;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-heading07 {
              font-size: 2em;
              font-style: normal;
              font-weight: 800;
            }
            .home-features-card07 {
              width: auto;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-heading08 {
              font-size: 2em;
              font-style: normal;
              font-weight: 800;
            }
            .home-features-card08 {
              width: auto;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-heading09 {
              font-size: 2em;
              font-style: normal;
              font-weight: 800;
            }
            .home-features-card09 {
              width: auto;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-heading10 {
              font-size: 2em;
              font-style: normal;
              font-weight: 800;
            }
            .home-features-card10 {
              width: auto;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-heading11 {
              font-size: 2em;
              font-style: normal;
              font-weight: 800;
            }
            .home-features-card11 {
              width: auto;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-heading12 {
              font-size: 2em;
              font-style: normal;
              font-weight: 800;
            }
            .home-features-card12 {
              width: auto;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-heading13 {
              font-size: 2em;
              font-style: normal;
              font-weight: 800;
            }
            .home-features-card13 {
              width: auto;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-heading14 {
              font-size: 2em;
              font-style: normal;
              font-weight: 800;
            }
            .home-text100 {
              font-size: 2.5em;
            }
            .home-text106 {
              padding: var(--dl-space-space-fourunits);
              text-align: center;
            }
            .home-slider-slide {
              padding: 48px;
            }
            .home-slider-slide1 {
              padding: 48px;
            }
            .home-content-container2 {
              width: 100%;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .home-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .home-cta-btn {
              font-size: 16px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-cta-btn1 {
              font-size: 16px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-hero {
              margin-top: var(--dl-space-space-tenunits);
              padding-top: var(--dl-space-space-fourunits);
              margin-bottom: 0px;
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-content-container {
              height: 100%;
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-hero-text {
              width: 100%;
            }
            .home-heading {
              font-size: 4em;
              margin-bottom: 0px;
            }
            .home-text018 {
              font-size: 1.5em;
            }
            .home-icon10 {
              fill: rgba(217, 217, 217, 0);
            }
            .home-text025 {
              font-size: 1.5em;
            }
            .home-cta-btn2 {
              font-size: 16px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-features {
              max-width: 100%;
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-features-card {
              width: 100%;
            }
            .home-heading01 {
              font-size: 1.5em;
            }
            .home-features-card01 {
              width: 100%;
            }
            .home-heading02 {
              font-size: 1.5em;
            }
            .home-features-card02 {
              width: 100%;
            }
            .home-heading03 {
              font-size: 1.5em;
            }
            .home-features-card03 {
              width: 100%;
            }
            .home-heading04 {
              font-size: 1.5em;
            }
            .home-features-card04 {
              width: 100%;
            }
            .home-heading05 {
              font-size: 1.5em;
            }
            .home-features-card05 {
              width: 100%;
            }
            .home-heading06 {
              font-size: 1.5em;
            }
            .home-content {
              gap: 0;
            }
            .home-cta-btn3 {
              font-size: 16px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-text040 {
              font-size: 34px;
            }
            .home-team8 {
              padding-top: var(--dl-space-space-tripleunit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-tripleunit);
            }
            .home-max-width {
              padding: 0px;
            }
            .home-text043 {
              text-align: center;
            }
            .home-text046 {
              font-size: 1.8em;
              text-align: center;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .home-text050 {
              font-size: 1.3em;
            }
            .home-content04 {
              gap: 0;
            }
            .home-cta-btn4 {
              font-size: 16px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-text061 {
              font-size: 34px;
            }
            .home-text064 {
              font-size: 2em;
            }
            .home-text065 {
              font-size: 3em;
              margin-left: 0px;
            }
            .home-get-in-touch {
              max-width: 100%;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-content-container1 {
              padding-left: 0px;
            }
            .home-container2 {
              height: 680px;
            }
            .home-call-now {
              gap: 0;
              max-width: 100%;
              margin-top: 0px;
              padding-top: var(--dl-space-space-doubleunit);
              margin-bottom: 0px;
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .home-cta-btn5 {
              font-size: 16px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-text074 {
              font-size: 34px;
            }
            .home-container5 {
              gap: 0;
              grid-template-columns: repeat(1, 1fr);
            }
            .home-features-card06 {
              width: auto;
              height: 200px;
            }
            .home-heading07 {
              font-size: 1.8em;
              font-style: normal;
              font-family: Open Sans;
              font-weight: 800;
            }
            .home-features-card07 {
              width: auto;
              height: 200px;
            }
            .home-heading08 {
              font-size: 1.8em;
              font-style: normal;
              font-family: Open Sans;
              font-weight: 800;
            }
            .home-features-card08 {
              width: auto;
              height: 200px;
            }
            .home-heading09 {
              font-size: 1.8em;
              font-style: normal;
              font-family: Open Sans;
              font-weight: 800;
            }
            .home-features-card09 {
              width: auto;
              height: 200px;
            }
            .home-heading10 {
              font-size: 1.8em;
              font-style: normal;
              font-family: Open Sans;
              font-weight: 800;
            }
            .home-features-card10 {
              width: auto;
              height: 200px;
            }
            .home-heading11 {
              font-size: 1.8em;
              font-style: normal;
              font-family: Open Sans;
              font-weight: 800;
            }
            .home-features-card11 {
              width: auto;
              height: 200px;
            }
            .home-heading12 {
              font-size: 1.8em;
              font-style: normal;
              font-family: Open Sans;
              font-weight: 800;
            }
            .home-features-card12 {
              width: auto;
              height: 200px;
            }
            .home-heading13 {
              font-size: 1.8em;
              font-style: normal;
              font-family: Open Sans;
              font-weight: 800;
            }
            .home-features-card13 {
              width: auto;
              height: 200px;
            }
            .home-heading14 {
              font-size: 1.8em;
              font-style: normal;
              font-family: Open Sans;
              font-weight: 800;
            }
            .home-cta-btn6 {
              font-size: 16px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-text100 {
              font-size: 2em;
            }
            .home-text106 {
              font-size: 1.3em;
            }
            .home-card1 {
              padding-top: var(--dl-space-space-fiveunits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-text117 {
              font-size: 2.5em;
            }
            .home-cta-btn7 {
              font-size: 16px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-container6 {
              padding-top: var(--dl-space-space-fiveunits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-get-in-touch1 {
              margin-top: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-content-container2 {
              padding-left: 0px;
            }
            .home-container7 {
              height: 700px;
            }
            .home-link13 {
              width: auto;
            }
            .home-icon20 {
              margin-left: var(--dl-space-space-doubleunit);
              margin-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
