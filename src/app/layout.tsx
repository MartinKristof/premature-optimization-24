import type { Metadata } from 'next';
import './globals.css';
import styles from './Home.module.css';
import { ReactNode } from 'react';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'React Premature Optimization',
  description: 'Generated by create next app',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="en">
    <body>
      <div className={styles.container}>
        <header>
          <ul className="flex">
            <li className="mr-6">
              <Link className="text-blue-500 hover:text-blue-800" href="/">
                Basic
              </Link>
            </li>
            <li className="mr-6">
              <Link className="text-blue-500 hover:text-blue-800" href="/memoized">
                Memoized
              </Link>
            </li>
            <li className="mr-6">
              <Link className="text-blue-500 hover:text-blue-800" href="/results">
                Search Results
              </Link>
            </li>
          </ul>
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer} />
      </div>
    </body>
  </html>
);
export default RootLayout;
