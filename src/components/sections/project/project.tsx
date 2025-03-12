import { Col, Row } from "react-bootstrap";
import { PROJECTS } from "helpers/data";
import ProjectCard from "./project.card";
import { useTranslation } from "react-i18next";

type TLanguage = "vi" | "en";

const Project = () => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.resolvedLanguage as TLanguage;

  return (
    <>
      <Row>
        <Col xs={12}>
          <h3 className="text-center">
            {i18n.resolvedLanguage === "en" ? (
              <>
                My Recent <span className="brand-red">Works</span>
              </>
            ) : (
              <>
                Các <span className="brand-red">dự án</span> gần đây
              </>
            )}
          </h3>
          <h6 className="text-center mb-md-5 mb-2">
            {i18n.resolvedLanguage === "en" ? (
              <>Here are a few projects I've worked on recently.</>
            ) : (
              <>Dưới đây là một vài dự án tôi làm gần đây.</>
            )}
          </h6>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {PROJECTS?.map((item) => {
          return (
            <Col md={4} className="project-card" key={item.id}>
              <ProjectCard
                imgPath={item.imgPath}
                title={item.title[currentLanguage]}
                description={item.description[currentLanguage]}
                githubLink={item.githubLink}
                demoLink={item.demoLink}
              />
            </Col>
          );
        })}
      </Row>
      <div className="mb-5"></div>
    </>
  );
};

export default Project;
