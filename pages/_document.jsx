import { Head, Html, Main, NextScript } from "next/document";
import Script from 'next/script';

export default function Document() {
    return (
        <Html>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
                <link rel='shortcut icon' href='/favicon.svg' type='image/x-icon' />
                <link
                    rel='stylesheet'
                    href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap'
                />
                <link
                    rel='stylesheet'
                    href='https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp&display=swap'
                />
                <Script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js' strategy='beforeInteractive' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}