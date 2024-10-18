import Header from "@/components/Header";
import Footer from '@/components/Footer'
import Intro from '@/components/Intro'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <Intro />
    </>
  );
}
