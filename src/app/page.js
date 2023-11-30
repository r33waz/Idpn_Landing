import Footer from "./components/footer";
import Header from "./components/header";
import SectionOne from "./components/sectionone";
import SectionTwo from "./components/sectiontwo";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <SectionOne />
        <SectionTwo />
        <Footer />
      </div>
    </>
  );
}
