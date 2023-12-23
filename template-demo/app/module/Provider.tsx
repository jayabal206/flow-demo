// app/providers.tsx

import { NextUIProvider } from '@nextui-org/react';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import EN from '@app/module/translation/en/global.json';
import AR from '@app/module/translation/ar/global.json';
import TN from '@app/module/translation/tn/global.json';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, PaletteMode } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      global: EN,
    },
    ar: {
      global: AR,
    },
    tn: {
      global: TN,
    },
  },
});

export function ProviderAll({ children }: { children: React.ReactNode }) {
  const mode = useSelector((state: any) => state.theme.mode);
  const dir = useSelector((state: any) => state.lang.dir);

  const theme = createTheme({
    palette: {
      mode: mode,
      // primary: {
      //   main: '#FF5733',
      //   // light: will be calculated from palette.primary.main,
      //   // dark: will be calculated from palette.primary.main,
      //   // contrastText: will be calculated to contrast with palette.primary.main
      // },
      // secondary: {
      //   main: '#E0C2FF',
      //   light: '#F5EBFF',
      //   // dark: will be calculated from palette.secondary.main,
      //   contrastText: '#47008F',
      // },
    },
  });

  return (
    <I18nextProvider i18n={i18next}>
      <NextUIProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div dir={dir} className={mode}>
            {children}
          </div>
        </ThemeProvider>
      </NextUIProvider>
    </I18nextProvider>
  );
}
