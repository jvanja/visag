import { useTranslation } from "next-i18next";
const LetterDescription = ({
  letter,
  showLetterDescription,
}: {
  letter: string;
  showLetterDescription: boolean;
}) => {
  const { t } = useTranslation("sounds");

  return (
    <>
      <div
        className={`${showLetterDescription ? "invisible" : ""} block lg:hidden bg-black/[.9] absolute inset-0 overflow-hidden text-white -mx-4`}
      >
        <div className="max-w-6xl mx-auto h-full">
          <div className="max-h-full overflow-auto p-8">
            {/* <h2 className="mb-2 text-lg font-bold">Glas {letter}</h2> */}
            <div
              className="text-slate-400 text-base"
              dangerouslySetInnerHTML={{ __html: t(letter.toUpperCase()) }}
            ></div>
          </div>
        </div>
      </div>
      <div
        className={`${showLetterDescription ? "hidden lg:block overflow-hidden text-white -mx-4 col-span-1" : "hidden"}`}
      >
        <div className="max-w-6xl mx-auto h-full">
          <div className="max-h-full overflow-auto p-8">
            {/* <h2 className="mb-2 text-lg font-bold">Glas {letter}</h2> */}
            <div
              className="text-slate-400 text-base"
              dangerouslySetInnerHTML={{ __html: t(letter.toUpperCase()) }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LetterDescription;
