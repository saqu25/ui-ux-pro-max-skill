import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bulgarian Education Hub | International University Guide",
  description: "Your gateway to quality education in Bulgaria. Explore leading universities offering medicine, nursing, veterinary, culinary arts, management, and technical programs.",
  keywords: "Bulgaria universities, medicine, nursing, veterinary, culinary arts, management, technical education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <header className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-sm z-50 border-b border-gray-200 dark:border-gray-800">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-primary-600">🇧🇬</div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Bulgarian Education Hub</h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">International Consultancy</p>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <a href="#universities" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 font-medium">
                Universities
              </a>
              <a href="#programs" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 font-medium">
                Programs
              </a>
              <a href="#contact" className="btn-primary text-sm">
                Get Started
              </a>
            </div>
          </nav>
        </header>
        <main className="flex-grow pt-20">
          {children}
        </main>
        <footer className="bg-gray-900 dark:bg-black text-white py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Bulgarian Education Hub</h3>
                <p className="text-gray-400 text-sm">Your trusted partner for quality education in Bulgaria.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#universities" className="hover:text-white transition">Universities</a></li>
                  <li><a href="#programs" className="hover:text-white transition">Programs</a></li>
                  <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Categories</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Medicine & Nursing</li>
                  <li>Veterinary Science</li>
                  <li>Culinary Arts</li>
                  <li>Technical Programs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <p className="text-sm text-gray-400">
                  📧 info@bulgeduhub.com<br/>
                  📞 +359 2 XXX XXXX<br/>
                  📍 Sofia, Bulgaria
                </p>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2024 Bulgarian Education Hub. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
