import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface IProps {
  github: string;
  email: string;
  linkedin: string;
  facebook: string;
}

const SocialMedia = (props: IProps) => {
  const { github, email, linkedin, facebook } = props;

  return (
    <div className="my-4 d-flex items-center gap-3">
      <a
        href={github}
        target="_blank"
        className="highlight"
        title="Github locnht.it"
      >
        <FaGithub size={30} />
      </a>
      <a
        href={`mailto:${email}`}
        className="highlight"
        title={`Send email to ${email}`}
      >
        <MdEmail size={30} />
      </a>
      <a
        href={linkedin}
        target="_blank"
        className="highlight"
        title="LinkedIn Loc Ngo-Huynh-Tan"
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href={facebook}
        target="_blank"
        className="highlight"
        title="Facebook Ngo Loc"
      >
        <FaFacebook size={30} />
      </a>
    </div>
  );
};

export default SocialMedia;
