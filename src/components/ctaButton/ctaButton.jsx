import { Link } from "react-router-dom";
import "./ctaButton.scss";

function CtaButton({ text, link, icon, variant = "primary", onClick, external = false }) {
  const buttonClass = `ctaButton ${variant}`;

  if (external) {
    return (
      <a href={link} className={buttonClass} target="_blank" rel="noopener noreferrer">
        {icon && <i className={icon}></i>}
        <span>{text}</span>
      </a>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={buttonClass}>
        {icon && <i className={icon}></i>}
        <span>{text}</span>
      </button>
    );
  }

  return (
    <Link to={link} className={buttonClass}>
      {icon && <i className={icon}></i>}
      <span>{text}</span>
    </Link>
  );
}

export default CtaButton;
