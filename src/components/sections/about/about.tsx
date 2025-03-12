import AnimationLottie from "@/components/share/animation-lottie";
import { Col, Row } from "react-bootstrap";
import codingJSON from "assets/lottie/coding.json";
import { DEVELOPMENT_LOTTIE } from "@/assets/lottie/string/development";
import GlowCard from "@/components/share/glow-card";
import Divider from "components/sections/divider";
import { FaGraduationCap } from "react-icons/fa";
import SocialMedia from "../social.media";
import { SOCIAL_MEDIA_DATA } from "@/helpers/data";
import { CONTACT_LOTTIE } from "@/assets/lottie/string/contact";
import { useTranslation } from "react-i18next";

const About = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <Row>
        {i18n.resolvedLanguage === "en" ? (
          <Col md={6} xs={12}>
            <h3 className="text-center mb-md-5 mb-2">
              Know who <span className="brand-red">I am</span>
            </h3>
            <div>
              <p>
                Hi everyone, I am Loc Ngo-Huynh-Tan from Ho Chi Minh City,
                Vietnam.
              </p>
              <p>I am currently employed as a freelance dev.</p>
              <p>
                I am completing Bachelor's degree in Software Engineer at FPT
                University.
              </p>
              <div>
                <p>
                  Apart from coding, some other activities that I love to do
                </p>
                <ul>
                  <li>Playing esports</li>
                  <li>Reading books</li>
                  <li>Immersing myself in good melodies</li>
                </ul>
              </div>
              <div>
                <p className="text-center brand-red">
                  "Our hands make everything
                </p>
                <p className="text-center brand-red">
                  With human strength, stones can turn into rice"
                </p>
                <p className="text-center brand-red">-- Hoang Trung Thong</p>
              </div>
            </div>
          </Col>
        ) : (
          <Col md={6} xs={12}>
            <h3 className="text-center mb-md-5 mb-2">
              Đôi lời về <span className="brand-red">bản thân</span>
            </h3>
            <div>
              <p>
                Chào các bạn, tôi là Ngô Huỳnh Tấn Lộc đến từ thành phố Hồ Chí
                Minh, Việt Nam.
              </p>
              <p>Hiện tại, tôi đang là một dev tự do.</p>
              <p>
                Tôi đang hoàn thành chương trình Cử nhân Kỹ sư phần mềm tại
                trường đại học FPT.
              </p>
              <div>
                <p>
                  Ngoài thời gian lập trình, tôi còn yêu thích các hoạt động
                  khác như
                </p>
                <ul>
                  <li>Chơi thể thao điện tử</li>
                  <li>Đọc sách</li>
                  <li>Đắm chìm vào trong các giai điệu đẹp</li>
                </ul>
              </div>
              <div>
                <p className="text-center brand-red">
                  "Bàn tay ta làm nên tất cả
                </p>
                <p className="text-center brand-red">
                  Có sức người sỏi đá cũng thành cơm"
                </p>
                <p className="text-center brand-red">-- Hoàng Trung Thông</p>
              </div>
            </div>
          </Col>
        )}

        <Col
          md={6}
          xs={12}
          className="d-flex align-items-center justify-content-center"
        >
          <AnimationLottie width="80%" animationPath={codingJSON} />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col
          md={6}
          xs={12}
          className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
        >
          <AnimationLottie
            width="50%"
            //animation with rp => convert from json to string
            // https://github.com/airbnb/lottie-web/issues/2070
            animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
          />
        </Col>
        <Col md={6} xs={12} className="mt-md-5 mt-3">
          <div className="d-flex flex-column align-items-center gap-3">
            <h4 className="text-center brand-red">
              {i18n.resolvedLanguage === "en"
                ? "Education"
                : "Trình độ học vấn"}
            </h4>
            <div>
              <GlowCard identifier={`education`}>
                <div className="p-3 relative">
                  <div className="experience-container">
                    <div className="duration-text">
                      <p>2021-2025</p>
                    </div>
                    <div className="details">
                      <div className="icon">
                        <FaGraduationCap size={36} />
                      </div>
                      <div className="info">
                        <p className="title">
                          {i18n.resolvedLanguage === "en"
                            ? "Software Engineer"
                            : "Kỹ thuật phần mềm"}
                        </p>
                        <p className="company">
                          {" "}
                          {i18n.resolvedLanguage === "en"
                            ? "FPT University"
                            : "Trường đại học FPT"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col md={6} xs={12} className="mt-md-5 mt-3">
          <h3 className="mb-md-5 mb-2">
            {i18n.resolvedLanguage === "en" ? "FIND ME ON" : "TÌM TÔI TRÊN"}
          </h3>
          <SocialMedia
            github={SOCIAL_MEDIA_DATA.GITHUB_URL}
            email={SOCIAL_MEDIA_DATA.EMAIL_ADDRESS}
            linkedin={SOCIAL_MEDIA_DATA.LINKEDIN_URL}
            facebook={SOCIAL_MEDIA_DATA.FACEBOOK_URL}
          />
        </Col>
        <Col
          md={6}
          xs={12}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <AnimationLottie
            width="50%"
            animationPath={JSON.parse(CONTACT_LOTTIE)}
          />
          <h4 className="text-center">
            {i18n.resolvedLanguage === "en" ? "Contact me" : "Liên hệ với tôi"}
          </h4>
        </Col>
      </Row>
      <div className="mb-5"></div>
    </>
  );
};

export default About;
