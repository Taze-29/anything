import "./globals.css";

export const metadata = {
  title: "HOPZAG | Website Design and Development Agency",
  description: "HOPZAG is a Creative Digital Agency based in England, specializing in Web Design, Development, and Strategies to grow your online presence.",
};


import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>        
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body 
        className="antialiased bg-[#f2f2f2]"
        style={{
          fontFamily: "Montreal",
        }}
      >
        <Nav />
        <div className="md:pt-28">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
