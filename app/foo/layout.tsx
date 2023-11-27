import { setTimeout } from 'timers/promises';
import { cookies } from 'next/headers';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  cookies();
  console.log('start nested');
  await setTimeout(1000);
  console.log('finish nested');
  return (
    <div>
      <h2>nested</h2>
      <div>{children}</div>
    </div>
  );
}
