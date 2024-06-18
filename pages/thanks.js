import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

const Thanks = (props) => {
  return (
    <>
      <div className="thanks-container">
        <Head>
          <title>Thanks - ד"ר שלדון שטיין - אורטופד מומחה לרפואת כאב</title>
          <meta
            name="description"
            content='אורתופד מומחה ברפואת כאב\nסובלים מכאבים?\nזקוקים לחוות דעת משפטית?\nמעל-30 שנים הצלחה וטיפול באלפי מטופלים \nראש מחלקה אורתופדית בארה"ב בעבר'
          />
          <meta
            property="og:title"
            content='Thanks - ד"ר שלדון שטיין - אורטופד מומחה לרפואת כאב'
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
        <div className="thanks-container1">
          <div className="thanks-container2">
            <Script
              html={`<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PLNTMT38"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`}
            ></Script>
          </div>
        </div>
        <div className="thanks-container3">
          <svg viewBox="0 0 1024 1024" className="thanks-icon">
            <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
          </svg>
          <h1 className="thanks-text">תודה לך על פנייתך</h1>
          <span className="thanks-text1">ינתן לך מענה בהקדם המיידי!</span>
          <Link href="/">
            <a className="thanks-link button">בחזרה לדף הבית</a>
          </Link>
        </div>
        <div className="thanks-container4">
          <div className="thanks-container5">
            <Script
              html={`<script type="text/javascript">   
    function Redirect() 
    {  
        window.location="http://www.dr-stein.co.il"; 
    } 
    document.write("חוזר לדף הבית בעוד 5 שניות"); 
    setTimeout('Redirect()', 5000); 
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .thanks-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .thanks-container1 {
            height: 0px;
          }
          .thanks-container2 {
            display: contents;
          }
          .thanks-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: var(--dl-space-space-tenunits);
            direction: rtl;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: linear-gradient(
                90deg,
                rgba(189, 195, 199, 0) 0%,
                rgb(245, 245, 245) 51%
              ),
              radial-gradient(
                circle at left,
                rgba(189, 195, 199, 0) 14%,
                rgb(245, 245, 245) 30%
              ),
              url('https://images.unsplash.com/photo-1530519729491-aea5b51d1ee1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHNvZnQlMjBwYXR0ZXJufGVufDB8fHx8MTcxODcyNTI2MXww&ixlib=rb-4.0.3&w=1500');
          }
          .thanks-icon {
            fill: var(--dl-color-success-300);
            width: 30%;
            height: 30%;
          }
          .thanks-text {
            font-size: 96px;
            text-align: center;
            font-family: 'Karantina';
          }
          .thanks-text1 {
            text-align: center;
          }
          .thanks-link {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            cursor: pointer;
            margin: var(--dl-space-space-doubleunit);
            font-family: 'Bellefair';
            border-color: #dadada;
            border-width: 0px;
            text-decoration: none;
          }
          .thanks-container4 {
            top: 0px;
            right: 0px;
            width: 100%;
            height: auto;
            margin: auto;
            position: absolute;
          }
          .thanks-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Thanks
