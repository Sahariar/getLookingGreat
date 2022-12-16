import React from 'react';

const Testimonials = () => {
    return (
        <section className="my-8">
	<div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
		<h1 className="text-4xl font-semibold leading-none text-center">What our customers are saying about me</h1>
	</div>
	<div className="container mx-auto grid  grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 md:px-10 md:pb-10 xl:grid-cols-4">
		<div className="card flex flex-col bg-gray-100 p-6 lg:mx-0 rounded-xl shadow-xl">
			<div className="relative">
				<p className="text-lg">I loved my wedding day makeup and to top it off, it lasted me the whole occasion.</p>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg bg-primary"></span>
			<p>Kelly Richard</p>
		</div>
		<div className="card flex flex-col bg-gray-100 p-6 lg:mx-0 rounded-xl shadow-xl">
			<div className="relative">
				<p className="text-lg">I loved my wedding day makeup and to top it off, it lasted me the whole occasion.</p>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg bg-primary"></span>
			<p>Kelly Richard</p>
		</div>
		<div className="card flex flex-col bg-gray-100 p-6 lg:mx-0 rounded-xl shadow-xl">
			<div className="relative">
				<p className="text-lg">I loved my wedding day makeup and to top it off, it lasted me the whole occasion.</p>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg bg-primary"></span>
			<p>Kelly Richard</p>
		</div>
		<div className="card flex flex-col bg-gray-100 p-6 lg:mx-0 rounded-xl shadow-xl">
			<div className="relative">
				<p className="text-lg">I loved my wedding day makeup and to top it off, it lasted me the whole occasion.</p>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg bg-primary"></span>
			<p>Kelly Richard</p>
		</div>
		
	</div>
</section>
    );
};

export default Testimonials;