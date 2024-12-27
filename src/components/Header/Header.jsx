import Logo from "../Logo/Logo";
import "./style.scss";

function Header() {
	return (
		<header className="header">
			<div className="container">
				<div className="header__row">
					<div className="header__logo">
						<Logo />
					</div>
					<div className="header__search">SEARCH</div>
					<div className="header__logo">USER MENU</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
