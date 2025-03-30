import type { Metadata } from "next";
import { Inter, Poppins, Asap } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";
import ToasterProvider from "@/providers/toaster";

export const metadata: Metadata = {
  title: "Chat Life",
  description:
    "Chat Life for freedom communicate to world with people and especially for persian people",
  icons: {
    icon: "/images/Logo.png",
  },
  applicationName: "Chat Life",
  // formatDetection: {
  //   telephone: false,
  // },
  // openGraph: {
  //   type: "website",
  //   siteName: "",
  //   title: {
  //     default: "",
  //     template: "",
  //   },
  //   description: "",
  // },
  // twitter: {
  //   card: "summary",
  //   title: {
  //     default: "",
  //     template: "",
  //   },
  //   description: "",
  // },
};

const inter = Inter({
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  display: "swap",
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const asap = Asap({
  display: "swap",
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-asap",
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${asap.variable}`}
      suppressHydrationWarning={false}
      suppressContentEditableWarning={false}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className="font-regular">
        <Providers>
          <ToasterProvider />

          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
