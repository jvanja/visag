/* eslint-disable @typescript-eslint/no-unused-vars */
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { useState } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import Sidebar from "@/components/Sidebar";
import SubNav from "@/components/SubNav";
import LetterDescription from "@/components/LetterDescription";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const letters = [
    { letter: "А", name: "a" },
    { letter: "Б", name: "b" },
    { letter: "В", name: "v" },
    { letter: "Г", name: "g" },
    { letter: "Д", name: "d" },
    { letter: "Ђ", name: "dj" },
    { letter: "Е", name: "e" },
    { letter: "Ж", name: "zz" },
    { letter: "З", name: "z" },
    { letter: "И", name: "i" },
    { letter: "Ј", name: "j" },
    { letter: "К", name: "k" },
    { letter: "Л", name: "l" },
    { letter: "Љ", name: "lj" },
    { letter: "М", name: "m" },
    { letter: "Н", name: "n" },
    { letter: "Њ", name: "nj" },
    { letter: "О", name: "o" },
    { letter: "П", name: "p" },
    { letter: "Р", name: "r" },
    { letter: "С", name: "s" },
    { letter: "Т", name: "t" },
    { letter: "Ћ", name: "cj" },
    { letter: "У", name: "u" },
    { letter: "Ф", name: "f" },
    { letter: "Х", name: "h" },
    { letter: "Ц", name: "c" },
    { letter: "Ч", name: "ch" },
    { letter: "Џ", name: "dz" },
    { letter: "Ш", name: "sh" },
  ];

  const [selectedLetter, setSelectedLetter] = useState("a");
  const [slowPlayback, setSlowPlayback] = useState(false);
  const [showLetterDescription, setShowLetterDescription] = useState(true);

  const selectedLetterIndex = letters.findIndex(
    (letter) => letter.name === selectedLetter,
  );
  const onChangePlaybackSpeed = (isSlow: boolean) => {
    setSlowPlayback(isSlow);
  };
  const onShowLetterDescription = () => {
    setShowLetterDescription(!showLetterDescription);
  };

  return (
    <div className="flex">
      <Sidebar onSelectLetter={setSelectedLetter} letters={letters} />
      <div className="flex flex-col flex-1 bg-black px-4">
        <SubNav
          selectedLetter={letters[selectedLetterIndex].name}
          changePlaybackSpeed={onChangePlaybackSpeed}
          showLetterDescription={onShowLetterDescription}
        />
        <div className="relative h-full grid grid-cols-4 gap-4">
          <VideoPlayer
            videoSrc={`/videos/${selectedLetter}.mp4`}
            slowPlayback={slowPlayback}
            showLetterDescription={showLetterDescription}
          />
          <LetterDescription
            letter={selectedLetter}
            showLetterDescription={showLetterDescription}
          />
        </div>
      </div>
    </div>
  );
};


export const getStaticProps = async ({ locale }: { locale: string }) => {

  return {
    props: { ...(await serverSideTranslations(locale))
  },
}};

export default Home;
