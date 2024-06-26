import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Page - ד"ר שלדון שטיין - אורטופד מומחה לרפואת כאב</title>
          <meta
            name="description"
            content='אורתופד מומחה ברפואת כאב\nסובלים מכאבים?\nזקוקים לחוות דעת משפטית?\nמעל-30 שנים הצלחה וטיפול באלפי מטופלים \nראש מחלקה אורתופדית בארה"ב בעבר'
          />
          <meta
            property="og:title"
            content='Page - ד"ר שלדון שטיין - אורטופד מומחה לרפואת כאב'
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
        <div className="page-container1 thq-section-padding">
          <div className="page-max-width">
            <h1 className="page-text thq-heading-1">404</h1>
            <h2 className="page-text1 thq-heading-2">הדף לא נמצא</h2>
            <Link href="/">
              <a className="page-link thq-button-filled">
                <span className="thq-body-small">בחזרה לדף הבית</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="page-container2">
          <div className="page-container3">
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
          .page-container {
            width: 100%;
            height: 100vh;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page-container1 {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page-max-width {
            gap: 24px;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page-text {
            font-size: 200px;
            font-style: normal;
            text-align: center;
            font-family: 'Karantina';
            font-weight: 700;
          }
          .page-text1 {
            text-align: center;
            font-family: 'Bellefair';
            text-transform: uppercase;
          }
          .page-link {
            width: auto;
            height: 100%;
            padding: var(--dl-space-space-unit);
            border-radius: 0px;
            text-decoration: none;
            background-color: var(--dl-color-primary-100);
          }
          .page-container2 {
            top: 0px;
            right: 0px;
            width: 100%;
            height: auto;
            margin: auto;
            position: absolute;
          }
          .page-container3 {
            display: contents;
          }
          @media (max-width: 767px) {
            .page-max-width {
              align-items: center;
              padding-left: 48px;
              padding-right: 48px;
            }
          }
          @media (max-width: 479px) {
            .page-max-width {
              padding-left: 24px;
              padding-right: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Page
