import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap'
})

function Layout({ children }) {
  return (
    <React.Fragment>
      <section>
        <Header />
      </section>

      <div className={`${playfair.variable} container px-5 pt-20 mx-auto max-w-7xl`}>
        {children}
        <section>
          <Footer />
        </section>
      </div>
    </React.Fragment>
  );
}

export default Layout;
