import filterIcon from "./filter.svg";
import "./style.scss";

const FilterBtn = () => {
	return (
		<button className="filter-btn">
			<img src={filterIcon} alt="filter icon" />
			Filters
		</button>
	);
};

export default FilterBtn;
