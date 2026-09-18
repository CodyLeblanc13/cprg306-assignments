import "./globals.css";

export const metadata = {
  title: "cprg306-assignments",
  description: "Assignments for Web Dev 2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>{/* /*Children will represent every page*/}
    </html>
  );
}
