import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

const AboutPage = () => {
  // const { t } = useTranslation()
  return (
    <main className="bg-gray-800 text-white">
      <div className="px-4 pt-20 pb-28 max-w-4xl m-auto">
        <h1>
          Dobrodošli na zvaničnu stranicu aplikacije <strong>VISAG</strong> -{" "}
          <em>Vizuelni Stimulator Glasova!</em>
        </h1>

        <p>
          Sluh i vid su neraskidivo povezani u razvoju govora kod deteta.
          Vizuelne percepcije čine preko 80% svih informacija koje primamo putem
          čula. Za osobe sa oštećenim sluhom, vid postaje ključni alat u
          komunikaciji. Prepoznajući ovu važnost, kreirali smo{" "}
          <strong>VISAG</strong> — inovativnu aplikaciju koja pomaže gluvim i
          nagluvim osobama u artikulaciji glasova.
        </p>

        <h2>Šta je VISAG?</h2>

        <p>
          <strong>VISAG</strong> je program koji pruža animacije glasova srpskog
          jezika, fokusirajući se na pokrete govornih organa tokom izgovora.
          Neki konsonanti su predstavljeni u logatomima radi lakše artikulacije.
          Svaki glas je vizuelno prikazan prilikom izgovora, omogućavajući deci
          sa različitim oštećenjima sluha i govora da nauče pravilnu
          artikulaciju svakog glasa.
        </p>

        <h2>Kako VISAG pomaže?</h2>

        <ul>
          <li>
            <strong>Vizuelna podrška:</strong> Pomaže u kompenzaciji sluha
            vidom, omogućavajući deci da vide kako se glasovi formiraju.
          </li>
          <li>
            <strong>Fokus na detalje:</strong> Obratite pažnju na mimiku,
            pokrete usana i položaj govornih organa.
          </li>
          <li>
            <strong>Prilagođen pristup:</strong> Idealno za individualni rad i
            prilagođavanje potrebama svakog deteta.
          </li>
        </ul>

        <h2>Preporuke za korišćenje:</h2>

        <p>
          Pre početka rada sa <strong>VISAG</strong>-om, preporučujemo:
        </p>

        <ul>
          <li>
            <strong>Priprema govornih organa:</strong> Izvođenje vežbi disanja i
            motorike govornih organa.
          </li>
          <li>
            <strong>Kombinovanje sa drugim alatima:</strong> Upotreba u
            kombinaciji sa slušnim aparatom, SAFU uređajima, ritmičkim
            stimulacijama i drugim metodama za razvoj slušne percepcije.
          </li>
        </ul>

        <p>Detaljno o ovim vežbama možete pročitati na <Link href="/exercizes">ovoj stranici</Link>.</p>

        <p>
          <strong>Istražite VISAG i otkrijte novi svet komunikacije.</strong>{" "}
          Zajedno možemo pomoći deci sa oštećenjem sluha da razviju svoje
          govorne veštine i steknu samopouzdanje u komunikaciji.
        </p>
      </div>
    </main>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: { ...(await serverSideTranslations(locale)) },
  };
};

export default AboutPage;
