import { useTranslation } from "react-i18next";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import "./subnav.css";

export default function SubNav({
  selectedLetter,
  changePlaybackSpeed,
  showLetterDescription,
}: {
  selectedLetter: string;
  changePlaybackSpeed: (change: boolean) => void;
  showLetterDescription: () => void;
}) {
  const { t } = useTranslation();
  
function handleEntailmentRequest(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    //do something...
    e.preventDefault();
    showLetterDescription()
    
}
  return (
    <div className="p-4 -mx-4 bg-gray-600 text-slate-300 flex justify-between borde">
      <div className="text-center text-primary bg-gray-800 px-10 p-1 border border-dashed border-primary border-gray-300">
        {t('Sound')} <span className="font-bold">"{selectedLetter}"</span>
      </div>
      <div className="flex gap-6">
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" onCheckedChange={changePlaybackSpeed} />
          <Label htmlFor="airplane-mode">{t("Slow")}</Label>
        </div>
        <button type="button" className="text-center bg-gray-800 px-10 p-1 rounded-sm border border-gray-600" onClick={(e) => handleEntailmentRequest(e)}>
          ?
        </button>
      </div>
    </div>
  );
}
