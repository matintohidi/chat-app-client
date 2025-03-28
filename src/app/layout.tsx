import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers";
import ToasterProvider from "@/providers/toaster";

export const metadata: Metadata = {
  title: "Chat Life",
  description:
    "Chat Life for freedom communicate to world with people and especially for persian people",
  icons: "",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={false}
      suppressContentEditableWarning={false}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className="font-Inter">
        <Providers>
          <ToasterProvider />

          {children}
        </Providers>
      </body>
    </html>
  );
}
