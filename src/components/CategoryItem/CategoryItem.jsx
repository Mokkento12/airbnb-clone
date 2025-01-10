import PropTypes from "prop-types";
import styles from "./style.module.scss";

const CategoryItem = ({ title, img }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.img}>
				<img src={img} alt={title || "Category"} />
			</div>
			<div className={styles.title}>{title}</div>
		</div>
	);
};

CategoryItem.propTypes = {
	title: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
};

export default CategoryItem;
