import type { Metadata } from "next";
import "./globals.css";
// import VisualEditsMessengerWrapper from "@/components/VisualEditsMessengerWrapper"; // Removed to fix 500 error
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://rishabhrajsingh.com"),
  title: {
    default: "Rishabh Raj Singh - Cybersecurity Researcher & Builder",
    template: "%s | Rishabh Raj Singh",
  },
  description: "2nd-year CSE student building VAPT tools, competing in CTFs, and researching blockchain deanonymisation.",
  keywords: ["Cybersecurity", "Blockchain", "VAPT", "CTF", "Full Stack Developer", "Next.js"],
  authors: [{ name: "Rishabh Raj Singh", url: "https://rishabhrajsingh.com" }],
  creator: "Rishabh Raj Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rishabhrajsingh.com",
    title: "Rishabh Raj Singh - Cybersecurity Researcher",
    description: "Breaking systems, building better ones. Exploring VAPT, Blockchain, and Security Automations.",
    siteName: "Rishabh Raj Singh Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Rishabh Raj Singh - Cybersecurity Researcher & Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishabh Raj Singh - Cybersecurity Researcher",
    description: "2nd-year CSE student building VAPT tools and researching blockchain security.",
    images: ["/opengraph-image.png"],
    creator: "@Rizzabh_X",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-icon.png",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        {/* <VisualEditsMessengerWrapper /> Removed to fix 500 error */}
      </body>
    </html>
  );
}
