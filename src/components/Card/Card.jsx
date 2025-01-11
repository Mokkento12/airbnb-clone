import PropTypes from "prop-types";
import starIcon from "./star.svg";
import styles from "./style.module.scss";

const Card = ({ data = {} }) => {
	const {
		title = "No title",
		desc = "No description",
		rating = 0,
		price_per_night = 0,
		dates_available = "No dates available",
		img = "",
		img2x = "",
	} = data;

	return (
		<article className={styles.card}>
			<img
				src={img}
				srcSet={`${img2x} 2x`}
				alt={title}
				className={styles.img}
			/>
			<div className={styles.descWrapper}>
				<div className={styles.titleWrapper}>
					<h3 className={styles.title}>{title}</h3>
					<div className={styles.rating}>
						<img src={starIcon} alt="star icon" />
						{rating}
					</div>
				</div>
				<p className={styles.desc}>{desc}</p>
				<p className={styles.date}>{dates_available}</p>
				<p className={styles.price}>
					<strong>${price_per_night}</strong>
					night
				</p>
			</div>
		</article>
	);
};

Card.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string,
		desc: PropTypes.string,
		rating: PropTypes.number,
		price_per_night: PropTypes.number,
		dates_available: PropTypes.string,
		img: PropTypes.string,
		img2x: PropTypes.string,
	}),
};

export default Card;
