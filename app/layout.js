import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className="antialiased bg-[#f2f2f2]"
        style={{
          fontFamily: "Montreal",
        }}
      >
        <Nav />
        <div className="pt-28">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
