import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useTranslation } from 'next-i18next'
const Intro = () => {
  const { t } = useTranslation()
  return (
    <Dialog defaultOpen={true}>
      <DialogContent className="sm:max-w-[700px] bg-gradient text-white p-16 border-0">
        <DialogHeader>
          <DialogTitle className="text-white text-3xl tracking-wide">{t('introTitle')}</DialogTitle>
          <DialogDescription className="text-slate-50" dangerouslySetInnerHTML={{ __html: t("intro") }} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Intro;
