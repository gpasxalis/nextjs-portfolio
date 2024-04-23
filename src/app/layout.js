import "remixicon/fonts/remixicon.css";
import "./globals.css";

import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Dalution Project | Innovative | Web Solutions",
  description:
    "Το Dalution Project δημιουργήθηκε για να καλύψει όλες τις διαδικτυακές ανάγκες. Όπως για παράδειγμα κατασκευή ιστοσελίδων, κατασκευή e-shop, SEO και Digital Marketing.",
  icons: {
    icon: "/favicon.ico",
  },
  authors: [{ name: 'Dalution Project' }],
  keywords: ["Κατασκευή Ιστοσελίδων", "Κατασκευή e-shop", "SEO", "Dalution"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
