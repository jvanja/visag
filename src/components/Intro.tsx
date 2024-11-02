import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTranslation } from "next-i18next";
const Intro = () => {
  const { t } = useTranslation();
  const onOpenHandler = (open: boolean) => {
    if (open === false && window) {
      // set sessionStorage to saw the intro
      window.sessionStorage.setItem("visag:intro", "true");
    }
  };
  const defaultOpen = (typeof window !== "undefined") ? !(window.sessionStorage.getItem("visag:intro")) : true;

  return (
    <Dialog defaultOpen={defaultOpen} onOpenChange={onOpenHandler}>
      <DialogContent className="sm:max-w-[700px] bg-gradient text-white p-16 border-0">
        <DialogHeader>
          <DialogTitle className="text-white text-3xl tracking-wide">
            {t("introTitle")}
          </DialogTitle>
          <DialogDescription
            className="text-slate-50"
            dangerouslySetInnerHTML={{ __html: t("intro") }}
          />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Intro;
