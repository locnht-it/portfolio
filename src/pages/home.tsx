import { useRef } from "react";
import { useTranslation } from "react-i18next";
import bg from "assets/section.svg";
import { Col, Container, Row } from "react-bootstrap";
import HeroLeft from "@/components/sections/hero/hero.left";
import HeroRight from "@/components/sections/hero/hero.right";
import ResizeButton from "@/components/sections/resize.button";
import { MdFileDownload } from "react-icons/md";
import { AiFillFire } from "react-icons/ai";
import "components/sections/hero/hero.scss";
import Introduction from "@/components/sections/introduction/introduction";
import Divider from "@/components/sections/divider";
import Experience from "@/components/sections/experience/experience";
import Skill from "@/components/sections/skill/skill";

const HomePage = () => {
  const { t } = useTranslation();

  const expRef = useRef<HTMLElement>(null);
  const scrollToExperienceSection = () => {
    expRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, `_blank`, `noopener, noreferrer`);
    if (newWindow) newWindow.opener = null;
  };

  const handleDownloadCV = () => {
    openInNewTab(
      "https://drive.google.com/drive/folders/1LllcyXo8RIteUQX0U3eD8w-WCXWsTku3?usp=sharing"
    );
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          width: "100%",
          height: 500,
          position: "absolute",
          top: 0,
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      ></div>
      <section className="mt-md-7 mt-2">
        <Container style={{ position: "relative" }}>
          <Row>
            <Col className="d-none d-md-block" md={6}>
              <HeroLeft
                scrollToExperienceSection={scrollToExperienceSection}
                handleDownloadCV={handleDownloadCV}
              />
            </Col>
            <Col md={6}>
              <HeroRight />
            </Col>
            <Col
              xs={12}
              className="d-md-none d-flex mt-4 justify-content-center"
            >
              <ResizeButton
                onClick={scrollToExperienceSection}
                btnText={t("heroSection.exp")}
                btnIcons={<AiFillFire style={{ color: "orange" }} />}
                btnStyle={{
                  background: "unset",
                  border: "1px solid var(--border-hero-right)",
                  color: "var(--text-while-1)",
                }}
              />
              <ResizeButton
                btnText={t("heroSection.cv")}
                btnIcons={<MdFileDownload />}
                onClick={handleDownloadCV}
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Introduction />
        </Container>
      </section>
      <Divider />
      <section ref={expRef}>
        <Container>
          <Experience />
        </Container>
      </section>
      <Divider />
      <section>
        <Container>
          <Skill />
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
