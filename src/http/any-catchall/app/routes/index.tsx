import type {
  MetaFunction,
  LinksFunction,
  LoaderFunction,
} from '@remix-run/react';
import { useRouteData } from '@remix-run/react';
import Hero from '../components/Hero';

import tailwind from '../styles/tailwind.css';
import styles from '../styles/app.css';
import NewsSection from '../components/NewsSection';
import TogetherSection from '../components/TogetherSection';
import CultureSection from '../components/CultureSection';
import VisionSection from '../components/VisionSection';
import BusinessSection from '../components/BusinessSection';
import SlideShowSection from '../components/SlideShowSection';

export let meta: MetaFunction = () => {
  return {
    title: "Ts'kw'aylaxw First Nation",
    description: 'Welcome to TFN Website!',
  };
};

export let links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: tailwind },
    { rel: 'stylesheet', href: styles },
  ];
};

export let loader: LoaderFunction = () => {
  return { message: 'this is awesome 😎' };
};

export default function Index() {
  let data = useRouteData();

  return (
    <>
      {/* <h2>Home Page</h2> */}
      <Hero />
      <NewsSection />
      <TogetherSection />
      <CultureSection />
      <VisionSection />
      <BusinessSection />
      <SlideShowSection />
    </>
  );
}
