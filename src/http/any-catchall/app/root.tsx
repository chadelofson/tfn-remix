import type { LinksFunction, LoaderFunction } from '@remix-run/react';
import { Meta, Links, Scripts, useRouteData } from '@remix-run/react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import tailwind from './styles/tailwind.css';
import styles from './styles/app.css';

export let links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: tailwind },
    { rel: 'stylesheet', href: styles },
  ];
};

export let loader: LoaderFunction = () => {
  return { date: new Date() };
};

export default function App() {
  let data = useRouteData();

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />

        <Footer />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <title>Oops!</title>
      </head>
      <body>
        <div>
          <h1>App Error</h1>
          <pre>{error.message}</pre>
          <p>
            Replace this UI with what you want users to see when your app throws
            uncaught errors. The file is at <code>app/App.tsx</code>.
          </p>
        </div>

        <Scripts />
      </body>
    </html>
  );
}
