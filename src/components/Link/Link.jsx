import "./style.scss";

const Link = ({ text, style, icon }) => {
	return (
		<a
			href="#"
			className={`link ${style === "light" ? "link--light" : ""}`}
		>
			{icon && <img src={icon} alt="icon" />}
			{text}
		</a>
	);
};

export default Link;
