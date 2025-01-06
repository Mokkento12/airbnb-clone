import Categories from "../Categories/Categoreis";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import UserMenu from "../UserMenu/UserMenu";
import "./style.scss";

function Header() {
	return (
		<div className="header-wrapper">
			<header className="header">
				<div className="container">
					<div className="header__row">
						<div className="header__logo">
							<Logo />
						</div>
						<div className="header__search">
							<SearchBar />
						</div>
						<div className="header__user">
							<UserMenu />
						</div>
					</div>
				</div>
			</header>

			<Categories />
		</div>
	);
}

export default Header;
