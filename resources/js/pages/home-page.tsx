import 'swiper/css';
import BannersBlock from '@/components/blocks/banners-block';
import AppLayout from '@/components/layouts/app-layout';
import React from 'react';

function HomePage(): JSX.Element {
  return (
    <AppLayout>
      <main>
        <BannersBlock />
      </main>
    </AppLayout>
  );
}

export default HomePage;
