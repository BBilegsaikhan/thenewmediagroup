import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/static/css/reset.css" />
        <link rel="stylesheet" href="/static/css/default.css" />
        <link rel="stylesheet" href="/static/css/form.css" />
        {/* <link rel="stylesheet" href="/static/css/typography.css" /> */}
        {/* <link rel="stylesheet" href="/static/css/screen.css" /> */}
        {/* <link rel="stylesheet" href="/static/css/solutions.css" /> */}
        <link rel="stylesheet" href="/static/css/portfolio.css" />
        <link rel="stylesheet" href="/static/css/tablegrid.css" />
        <link rel="stylesheet" href="/static/css/screen.css" />
        <link rel="stylesheet" href="/static/css/userdefined.css" />
        <link rel="stylesheet" href="/static/css/homeslider.css" />
        <link rel="stylesheet" href="/static/css/responsive.css" />
        <link rel="stylesheet" href="/static/css/font-awesome-ie7.min.css" />
        <link rel="stylesheet" href="/static/css/font-awesome.min.css" />
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css"
          integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
          crossOrigin="anonymous"
        /> */}
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        {/* <Script src="/static/js/jquery.validate.min.js" /> */}
        {/* <Script src="/static/js/owl.carousel.min.js" /> */}
        {/* <Script src="/static/js/scripts.js" /> */}
        {/* <Script src="/static/js/cufon/cufon-arial.js" /> */}
        <Script src="/static/js/cufon/cufon-yui.js" />
        <Script src="/static/js/cufon/cufon-moolbor.js" />
        <Script src="/static/js/sorting.js,js/custom.js" />
      </body>
    </html>
  );
}
