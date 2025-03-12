import { SOCIAL_MEDIA_DATA } from "@/helpers/data";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";
import SocialMedia from "components/sections/social.media";
import ResizeButton from "../resize.button";
import { AiFillFire } from "react-icons/ai";
import { MdFileDownload } from "react-icons/md";
import "./hero.scss";

interface IProps {
  scrollToExperienceSection: () => void;
  handleDownloadCV: () => void;
}

const HeroLeft = (props: IProps) => {
  const { t } = useTranslation();

  return (
    <div className="hero-left">
      <h3>
        Hi There!
        <span className="wave" role="img" aria-labelledby="wave">
          👋🏻
        </span>
      </h3>
      <h3 style={{ paddingTop: 10, paddingBottom: 5 }}>
        I'm &nbsp;
        <strong className="brand-red">{t("appHeader.brand")}</strong>
      </h3>
      <Typewriter
        options={{
          strings: ["Software Engineer", "Freelancer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          wrapperClassName: "brand-green",
        }}
      />
      <div className="mt-md-6 mt-3 mb-md-5 mb-2">
        <SocialMedia
          github={SOCIAL_MEDIA_DATA.GITHUB_URL}
          email={SOCIAL_MEDIA_DATA.EMAIL_ADDRESS}
          linkedin={SOCIAL_MEDIA_DATA.LINKEDIN_URL}
          facebook={SOCIAL_MEDIA_DATA.FACEBOOK_URL}
        />
      </div>
      <div className="d-md-flex d-none gap-4">
        <ResizeButton
          onClick={props.scrollToExperienceSection}
          btnText={t("heroSection.exp")}
          btnIcons={<AiFillFire style={{ color: "orange" }} />}
          btnStyle={{
            background: "unset",
            border: "1px solid var(--border-hero-right)",
            color: "var(--text-white-1)",
          }}
        />
        <ResizeButton
          btnText={t("heroSection.cv")}
          btnIcons={<MdFileDownload />}
          onClick={props.handleDownloadCV}
        />
      </div>
    </div>
  );
};

export default HeroLeft;
