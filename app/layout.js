
import "./globals.css";



export const metadata = {
  title: "Authentication with Next js",
  description: "Implementing authentication with next js ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
