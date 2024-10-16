import { useTranslation } from "react-i18next";
const LetterDescription = ({
  letter,
  showLetterDescription,
}: {
  letter: string;
  showLetterDescription: boolean;
}) => {
  const { t } = useTranslation();
  // console.log("letter", letter);

  return (
    <div
      className={`${!showLetterDescription ? "invisible" : ""} absolute inset-0 overflow-hidden bg-black/[.8] text-white -mx-4`}
    >
      <div className="max-w-6xl mx-auto p-4 h-full">
        <div className="max-h-full overflow-auto bg-gray-800 p-8">
          {/* <h2 className="mb-2 text-lg font-bold">Glas {letter}</h2> */}
          <div
            className="text-slate-400 text-base"
            dangerouslySetInnerHTML={{ __html: t("letter", { ns: letter }) }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LetterDescription;
