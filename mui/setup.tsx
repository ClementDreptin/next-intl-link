'use client';

import { CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { useState } from 'react';

const EmotionCacheProvider = ({ children }: { children: React.ReactNode }) => {
  const [cache] = useState(() => {
    const cache = createCache({ key: 'css' });
    cache.compat = true;
    return cache;
  });

  useServerInsertedHTML(() => {
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: Object.values(cache.inserted).join(' '),
        }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
};

const MuiSetup = ({ children }: { children: React.ReactNode }) => {
  return (
    <EmotionCacheProvider>
      <CssBaseline />
      {children}
    </EmotionCacheProvider>
  );
};

export default MuiSetup;
