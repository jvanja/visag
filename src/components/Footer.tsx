import { useTranslation } from 'next-i18next'

export const Footer = () => {

  const { t } = useTranslation('footer')

  return (
    <footer>
      <p>
        {t('about')} footer
      </p>
    </footer>
  )
}
