import React from 'react';

const HomeShowcase = () => {
    return (
        <section className="py-6 bg-accent/10">
            <div className="container mx-auto">
				<div className="text-center my-10">
                <h2 className="mb-05 text-5xl font-extrabold">
                    ShowCase
                </h2>
                <h4 className="subtitle text-xl">
                    My Work Showcase
                </h4>
                </div>
                </div>
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
            <img src="https://images.unsplash.com/photo-1617111736580-6f833f3e7fa0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1  aspect-square" />
            <img alt="" className="w-full h-full rounded shadow-sm min-h-48  aspect-square" src="https://images.unsplash.com/photo-1513708847802-f2fa846a7eaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" />
            <img alt="" className="w-full h-full rounded shadow-sm min-h-48  aspect-square" src="https://images.unsplash.com/photo-1552323356-322f06b49db4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80/" />
            <img alt="" className="w-full h-full rounded shadow-sm min-h-48  aspect-square" src="https://images.unsplash.com/photo-1660789480250-3624cdd1fbde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" />
            <img alt="" className="w-full h-full rounded shadow-sm min-h-48  aspect-square" src="https://images.unsplash.com/photo-1634162591838-7b7f3b1389e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" />
        </div>
    </section>
    );
};

export default HomeShowcase;