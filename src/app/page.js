import Footer from "./components/footer";
import Header from "./components/header";
import SectionOne from "./components/sectionone";
import SectionTwo from "./components/sectiontwo";

export function generateMetadata({ params }) {
  return {
    title: "Home",
  };
}
export default function Home() {
  
  return (
    <>
      <div className="container mx-auto">
        <SectionOne />
        <SectionTwo />
      </div>
    </>
  );
}
