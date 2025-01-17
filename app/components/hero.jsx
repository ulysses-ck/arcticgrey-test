import {Link} from '@remix-run/react';

export function Hero () {
    return (
        <div className="w-full h-screen bg-black relative">
            <img src="https://picsum.photos/300/200" alt="Hero" className="w-full h-full object-cover" />

            <div className="absolute bottom-12 left-10 p-10 flex flex-col gap-4">
                <h1 className="text-white text-5xl font-bold">Great things never come from comfort zones</h1>
                <Link to="/collections/all" className="text-black bg-white px-4 py-2 rounded-lg w-fit">Shop Now</Link>
            </div>
        </div>
    )
}