import CategoryItem from "../CategoryItem/CategoryItem";
import FilterBtn from "../FilterBtn/FilterBtn";
import categoriesData from "./../../data/categories.json";
import "./style.scss";

const Categories = () => {
	console.log(categoriesData);

	return (
		<div className="categories">
			<div className="container">
				<div className="categories__row">
					<div className="categories__list">
						{categoriesData.map((cat) => (
							<CategoryItem
								key={cat.id}
								title={cat.title}
								img={cat.img}
							/>
						))}
					</div>
					<div className="categories__filter">
						<FilterBtn />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Categories;
