import FilterBtn from "../FilterBtn/FilterBtn";
import "./style.scss";

const Categories = () => {
	return (
		<div className="categories">
			<div className="container">
				<div className="categories__row">
					<div className="categories__list"></div>
					<div className="categories__filter">
						<FilterBtn />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Categories;
