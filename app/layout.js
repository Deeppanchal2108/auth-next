
import "./globals.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "Authentication with Next js",
  description: "Implementing authentication with next js ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        
        <ToastContainer position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          pauseOnFocusLoss />
        <main>{children}</main>
        
      </body>
    </html>
  );
}
