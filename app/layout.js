import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Care24 - We are one of the best",
  description: "We are one of the best Home & Community Provider",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
         <Script
          id="openwidget-chatbot"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.__ow = window.__ow || {};
              window.__ow.organizationId = "496d72bc-b3b8-4878-8106-69a9caa20cce";
              window.__ow.template_id = "def82b97-77ce-4c67-9548-0e7a0e320c55";
              window.__ow.integration_name = "manual_settings";
              window.__ow.product_name = "chatbot";
              (function (n, t, c) {
                function i(n) {
                  return e._h ? e._h.apply(null, n) : e._q.push(n);
                }
                var e = {
                  _q: [],
                  _h: null,
                  _v: "2.0",
                  on: function () { i(["on", c.call(arguments)]) },
                  once: function () { i(["once", c.call(arguments)]) },
                  off: function () { i(["off", c.call(arguments)]) },
                  get: function () {
                    if (!e._h) throw new Error("[OpenWidget] You can't use getters before load.");
                    return i(["get", c.call(arguments)]);
                  },
                  call: function () { i(["call", c.call(arguments)]) },
                  init: function () {
                    var n = t.createElement("script");
                    n.async = true;
                    n.type = "text/javascript";
                    n.src = "https://cdn.openwidget.com/openwidget.js";
                    t.head.appendChild(n);
                  }
                };
                !n.__ow.asyncInit && e.init();
                n.OpenWidget = n.OpenWidget || e;
              })(window, document, [].slice);
            `,
          }}
        />

        {/* NoScript fallback */}
        <noscript>
          You need to{" "}
          <a
            href="https://www.chatbot.com/help/chat-widget/enable-javascript-in-your-browser/"
            rel="noopener nofollow"
          >
            enable JavaScript
          </a>{" "}
          to use the AI chatbot.
        </noscript>
      </body>
    </html>
  );
}
