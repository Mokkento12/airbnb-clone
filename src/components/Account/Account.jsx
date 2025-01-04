import navIcon from "../Account/nav.svg";

import "./style.scss";

const Account = () => {
	return (
		<button className="account">
			<div className="account_nav-icon">
				<img src={navIcon} alt="Nav-icon" />
			</div>
			<div className="account_avatar">
				<img
					src="../../../public/img/icons/user-avatar.svg"
					alt="User-avatar"
				/>
			</div>
		</button>
	);
};

export default Account;
