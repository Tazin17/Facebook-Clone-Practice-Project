
"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation"; // Import usePathname
import Header from './components/Header';

// Google Fonts (Optional if you're using local fonts)
const googleGeistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const googleGeistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Local Fonts
const localGeistSans = localFont({
  src: "./fonts/Geistvf/geist-variablefont_wght-webfont.woff2",
  variable: "--font-geist-sans",
});

const localGeistMono = localFont({
  src: "./fonts/Geistmonovf/geistmono-variablefont_wght-webfont.woff2",
  variable: "--font-geist-mono",
});

// Root Layout
export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get current path
  const hideHeaderRoutes = ["/user-login"]; // Define routes where Header should be hidden

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${localGeistSans.variable} ${localGeistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {/* Conditionally render Header */}
          {!hideHeaderRoutes.includes(pathname) && <Header />}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
