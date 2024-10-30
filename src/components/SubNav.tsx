import { useTranslation } from 'next-i18next'
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

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
    e.preventDefault();
    showLetterDescription()
}
  return (
    <div className="p-4 -mx-4 bg-gray-600 text-slate-300 flex justify-between borde">
      <div className="text-center text-primary bg-gray-800 px-10 p-1 border border-dashed border-primary border-gray-300">
        {t('sound')} <span className="font-bold">&quot;{t('letter_' + selectedLetter.toUpperCase())}&quot;</span>
      </div>
      <div className="flex gap-6">
        <div className="flex items-center space-x-2">
          <Switch id="slow-mode" onCheckedChange={changePlaybackSpeed} />
          <Label htmlFor="slow-mode">{t("slow")}</Label>
        </div>
        <button type="button" className="text-center bg-gray-800 px-10 p-1 rounded-sm border border-gray-600" onClick={(e) => handleEntailmentRequest(e)}>
          {t('aboutSound')} {t('letter_' + selectedLetter.toUpperCase())}
        </button>
      </div>
    </div>
  );
}
