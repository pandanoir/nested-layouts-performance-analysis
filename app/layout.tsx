import type { Metadata } from 'next';
import { setTimeout } from 'timers/promises';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  cookies();
  console.log('start main');
  await setTimeout(1000);
  console.log('finish main');
  return (
    <html lang="en">
      <body>
        <h1>main</h1>
        <div>{children}</div>
      </body>
    </html>
  );
}
