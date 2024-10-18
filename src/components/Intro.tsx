import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
const Intro = () => {
  return (
    <Dialog defaultOpen={true}>
      <DialogContent className="sm:max-w-[650px] bg-gradient text-white p-16 border-0">
        <DialogHeader>
          <DialogTitle className="text-white text-3xl tracking-wide">Visag - Vizuelni stimulator govora</DialogTitle>
          <DialogDescription className="text-slate-50">
            Dobro došli u Visag, vizuelni stimulator govora kojim možete
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Intro;
