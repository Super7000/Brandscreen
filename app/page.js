import Achivements from "./components/Achivements";
import Banner from "./components/Banner";
import Difference from "./components/Difference";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import HowItWorks from "./components/HowItWorks";
import Menubar from "./components/Menubar";
import RecommendationPopup from "./components/RecommendationPopup";
import Tools from "./components/Tools";

export default function Home() {
    return (
        <>
            <div className="bg"></div>
            <Menubar />
            <Banner
                className={"container"}
                heading="“This app is changing the game on getting social proof and making it so effortless.”"
                list={["Import testimonials from over 30 platforms", "Collect text & video testimonials on autopilot", "Showcase proof on your site, emails, & socials"]}
                subHeading="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                btnText="Start For Free Today" />
            <RecommendationPopup />
            <Difference
                leftImgSrc={"/images/card-thumbnails/2.webp"}
                leftTitle={"You Without Social Proof"}
                leftList={[
                    "Struggling to build trust",
                    "Sales trickle in",
                    "More effort to prove yourself",
                    "Blending in with other creators",
                    "Second-guessing yourself"]}
                rightImgSrc={"/images/card-thumbnails/3.webp"}
                rightTitle={"You With Social Proof"}
                rightList={[
                    "Customers trust you instantly",
                    "Products are selling like hotcakes",
                    "Your audience advocates for you",
                    "Stand out from competitors",
                    "Confidence in your content"
                ]} />
            <HowItWorks />
            <Tools />
            <Features />
            <Achivements />
            <Gallery />
            <Banner
                className={"container-fluid bg-primary py-5 pt-5 mb-0 px-5"}
                heading="“This app is changing the game on getting social proof and making it so effortless.”"
                list={["Import testimonials from over 30 platforms", "Collect text & video testimonials on autopilot", "Showcase proof on your site, emails, & socials"]}
                subHeading="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                btnText="Start For Free Today" />
            <Footer />
        </>
    );
}
