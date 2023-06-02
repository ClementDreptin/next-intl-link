import { useTranslations } from 'next-intl';
import NextIntlLink from '@/next-intl/link';
import { Link as MuiLink } from '@/mui/material';

export default function Index() {
  const t = useTranslations('Index');

  return (
    <>
      <h1>{t('title')}</h1>
      <MuiLink
        component={NextIntlLink}
        href='/'
        locale='fr'
      >
        Switch to French
      </MuiLink>
    </>
  );
}
