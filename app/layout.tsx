import "./globals.css";

export const metadata = {
  title: "Store Oversized",
  description: "Crocs & Birkenstock resell store.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#f5f5f7] text-slate-900">
        {children}
      </body>
    </html>
  );
}
