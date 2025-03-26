import "./globals.css";

export const metadata = {
  title: "Joost Helfers | system³",
  description: "Personal Website of Joost Helfers. Creative Technology & Digital Twins.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/system3_logo_transparent_black.png" type="image/png" />
        <script src="https://tinylytics.app/embed/7ZMWAxo3SGfyS79F-9JM.js" defer></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}