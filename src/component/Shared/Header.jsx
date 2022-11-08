import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Logo from "../Logo/Logo";

const Header = () => {
	const { user, logOut } = useContext(AuthContext);
	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((error) => {
				console.error(error);
			});
	};
	return (
		<header className="header-area z-50 relative">
			<div className="container mx-auto navbar">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost xl:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<NavLink to={"/home"}> Home</NavLink>
							</li>
							{user?.email ? (
								<>
									<li tabIndex={0}>
										<NavLink to={"/services"}>
											Services
											<svg
												className="fill-current"
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												viewBox="0 0 24 24"
											>
												<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
											</svg>
										</NavLink>
										<ul className="p-2 bg-base-100">
											<li>
												<NavLink to={"/services/add"}>Add Service</NavLink>
											</li>
										</ul>
									</li>
									<li tabIndex={0}>
										<NavLink to={"/reviews"}>
											{" "}
											Reviews{" "}
											<svg
												className="fill-current"
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												viewBox="0 0 24 24"
											>
												<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
											</svg>
										</NavLink>
										<ul className="p-2 bg-base-100">
											<li>
												<NavLink to={"/reviews/add"}>Add Review</NavLink>
											</li>
										</ul>
									</li>
								</>
							) : (
								<>
									<li>
										<NavLink to={"/services"}>Services</NavLink>
									</li>
									<li>
										<NavLink to={"/reviews"}>Reviews</NavLink>
									</li>
								</>
							)}

							<li>
								<NavLink to={"/blog"}> Blog</NavLink>
							</li>
						</ul>
					</div>
					<div className="flex justify-center items-center ">
						<Link to={"/"}>
							<div className="flex justify-center items-center mr-12">
								<div className="logo">
									<Logo></Logo>
								</div>
								<div className="name-title text-xl">
								<h1 className="font-extrabold text-primary hidden lg:flex">
								Get Looking Great
        </h1>
								</div>
							</div>
						</Link>

						<ul className="menu menu-horizontal hidden xl:flex p-0">
							<li>
								<NavLink to={"/home"}> Home</NavLink>
							</li>
							{user?.email ? (
								<>
									<li tabIndex={0}>
										<NavLink to={"/services"}>
											Services
											<svg
												className="fill-current"
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												viewBox="0 0 24 24"
											>
												<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
											</svg>
										</NavLink>
										<ul className="p-2 bg-base-100">
											<li>
												<NavLink to={"/services/add"}>Add Service</NavLink>
											</li>
										</ul>
									</li>
									<li tabIndex={0}>
										<NavLink to={"/reviews"}>
											{" "}
											Reviews{" "}
											<svg
												className="fill-current"
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												viewBox="0 0 24 24"
											>
												<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
											</svg>
										</NavLink>
										<ul className="p-2 bg-base-100">
											<li>
												<NavLink to={"/reviews/add"}>Add Review</NavLink>
											</li>
										</ul>
									</li>
								</>
							) : (
								<>
									<li>
										<NavLink to={"/services"}>Services</NavLink>
									</li>
									<li>
										<NavLink to={"/reviews"}>Reviews</NavLink>
									</li>
								</>
							)}

							<li>
								<NavLink to={"/blog"}> Blog</NavLink>
							</li>
						</ul>
					</div>
				</div>
				<div className="navbar-end">
					{user?.email ? (
						<div className="flex items-center">
							<div className="user-info-area text-xl font-bold">
								<h4>Welcome, {user?.displayName}</h4>
							</div>
							<div className="dropdown dropdown-end">
								<label
									tabIndex={0}
									className="btn btn-ghost btn-circle avatar"
								>
									<div className="w-10 rounded-full">
										<img
											src={
												user?.photoURL
													? user?.photoURL
													: "https://placeimg.com/80/80/people"
											}
										/>
									</div>
								</label>
								<ul
									tabIndex={0}
									className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
								>
									<li>
										<a className="justify-between">
											Profile
											<span className="badge">New</span>
										</a>
									</li>
									<li>
										<a>Settings</a>
									</li>
									<li onClick={handleLogOut}>
										<Link>Logout</Link>
									</li>
								</ul>
							</div>
						</div>
					) : (
						<div className="flex">
							<div className="auth-area gap-4 flex">
								<Link to={"/login"}>
									<span className="btn btn-secondary"> Login</span>{" "}
								</Link>
							</div>
						</div>
					)}
				</div>
			</div>

		</header>
	);
};

export default Header;
