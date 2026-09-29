import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Turnip Admin',
  description: 'Content management for Turnip Kids',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
