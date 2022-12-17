import React from "react";

const Blog = () => {
	return (
		<>
			<div className="py-20 mx-auto bg-accent/50">
				<div className="container mx-auto">
					<div className="text-center my-10">
						<h2 className="mb-05 text-5xl font-extrabold my-10">Blog</h2>
						<h4 className="subtitle text-xl">Checkout Our Blog</h4>
					</div>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 md:gap-0 lg:grid-rows-2">
						<div
							className="relative flex items-end justify-start w-full text-left bg-center bg-cover  cursor-pointer h-96 md:col-span-2 xl:row-span-2 xl:h-full group"
							style={{
								backgroundImage: "url(https://i.ibb.co/928Fv3L/wedding.jpg)",
							}}
						>
							<div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent"></div>
							<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
								<a
									rel="noopener noreferrer"
									href="#"
									className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline bg-secondary text-secondary-content"
								>
									Wedding Make Up
								</a>
								<div className="flex flex-col justify-start text-center dark:text-gray-100">
									<span className="text-3xl font-semibold leading-none tracking-wide">
										31
									</span>
									<span className="leading-none uppercase">Nov</span>
								</div>
							</div>
							<h2 className="z-10 p-5 bg-slate-900 m-5">
								<a
									rel="noopener noreferrer"
									href="#"
									className="font-medium text-md group-hover:underline lg:text-2xl lg:font-semibold text-white "
								>
									Hence, as a bride, HD Makeup can be a great choice
								</a>
							</h2>
						</div>
						<div
							className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group"
							style={{
								backgroundImage:
									"url(https://i.ibb.co/GFmjzF8/celebrity.jpg;)",
							}}
						>
							<div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparen"></div>
							<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
								<a
									rel="noopener noreferrer"
									href="#"
									className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline bg-secondary text-secondary-content"
								>
									Celebrity Look Makeup
								</a>
								<div className="flex flex-col justify-start text-center dark:text-gray-100">
									<span className="text-3xl font-semibold leading-none tracking-wide">
										04
									</span>
									<span className="leading-none uppercase">Aug</span>
								</div>
							</div>
							<h2 className="z-10 p-2 bg-slate-900 m-5">
								<a
									rel="noopener noreferrer"
									href="#"
									className="font-medium text-md group-hover:underline text-white leading-10"
								>
									{" "}
									Nulla consectetur ex amet aute. 
								</a>
							</h2>
						</div>
						<div
							className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500"
							style={{
								backgroundImage:
									"url(https://i.ibb.co/BBp35mf/eventsp.jpg)",
							}}
						>
							<div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
							<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
								<a
									rel="noopener noreferrer"
									href="#"
									className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline bg-secondary text-secondary-content"
								>
									Event Spacial Makeup
								</a>
								<div className="flex flex-col justify-start text-center dark:text-gray-100">
									<span className="text-3xl font-semibold leading-none tracking-wide">
										01
									</span>
									<span className="leading-none uppercase">Aug</span>
								</div>
							</div>
							<h2 className="z-10 p-2 bg-slate-900 m-5">
								<a
									rel="noopener noreferrer"
									href="#"
									className="font-medium text-md group-hover:underline text-white leading-10"
								>
									Reprehenderit tempor cupidatat
								</a>
							</h2>
						</div>
						<div
							className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500"
							style={{
								backgroundImage:
									"url(https://i.ibb.co/n3wRVq5/tv.jpg)",
							}}
						>
							<div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
							<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
								<a
									rel="noopener noreferrer"
									href="#"
									className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline bg-secondary text-secondary-content"
								>
									Tv/Film Makeup
								</a>
								<div className="flex flex-col justify-start text-center dark:text-gray-100">
									<span className="text-3xl font-semibold leading-none tracking-wide">
										28
									</span>
									<span className="leading-none uppercase">Jul</span>
								</div>
							</div>
							<h2 className="z-10 p-2 bg-slate-900 m-5">
								<a
									rel="noopener noreferrer"
									href="#"
									className="font-medium text-md group-hover:underline text-white bg-slate-900 p-4 leading-10"
								>
									Officiis mollitia dignissimos
								</a>
							</h2>
						</div>
						<div
							className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500"
							style={{
								backgroundImage:
									"url(https://i.ibb.co/tPB3K21/makeupses.jpg)",
							}}
						>
							<div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
							<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
								<a
									rel="noopener noreferrer"
									href="#"
									className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline bg-secondary text-secondary-content"
								>
									Sports
								</a>
								<div className="flex flex-col justify-start text-center dark:text-gray-100">
									<span className="text-3xl font-semibold leading-none tracking-wide">
										19
									</span>
									<span className="leading-none uppercase">Jul</span>
								</div>
							</div>
							<h2 className="z-10 p-2 bg-slate-900 m-5">
								<a
									rel="noopener noreferrer"
									href="#"
									className="font-medium text-md group-hover:underline text-white bg-slate-900 p-4 leading-10"
								>
									Doloribus sit illo necessitatibus
								</a>
							</h2>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Blog;
