import { Link } from "@remix-run/react";
import { SvgArrow } from "./svg-arrow";
import { SvgSmallStar } from "./svg-small-star";
import { FeaturedCollectionFragment } from "storefrontapi.generated";
import "./supplements.css";

export function Supplements({ collection }: { collection: FeaturedCollectionFragment }) {
    return (
        <div className="flex flex-col gap-12 py-20 px-10 w-full justify-center items-center bg-gray-200">
            <div className="flex flex-col gap-6 justify-center items-center">
                <div className="flex gap-4">
                    <button type="button" className="flex gap-2 items-center w-10 h-10 justify-center border rounded-sm border-gray-800/10 rotate-180">
                        <SvgArrow />
                    </button>
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <h2 className="text-base">🌟 Trending</h2>
                        <h1 className="text-4xl font-bold w-full text-gray-800">Supplements</h1>
                    </div>

                    <button type="button" className="flex gap-2 items-center w-10 h-10 justify-center border rounded-sm border-gray-800/10">
                        <SvgArrow />
                    </button>
                </div>
                <Link to="/collections/all" className="text-base underline">
                    View All
                </Link>
            </div>
            <div className="flex gap-5 w-full flex-wrap">
                <MapProducts products={collection.products.nodes} />
            </div>
        </div>
    );
}

function ProductCard({ product }: { product: FeaturedCollectionFragment['products']['nodes'][number] }) {
    return (
        <div className="w-[365px] h-[505px] rounded-lg bg-white relative group">
            <img className="absolute top-[33px] left-[33px] w-[300px] h-[300px] object-cover" src={product.images.nodes[0].url ?? ''} alt={product.images.nodes[0].altText ?? ''} />
            <div className="flex flex-col gap-2 p-5 absolute bottom-0 left-0 w-full group-hover:opacity-0 transition-opacity duration-300">
                <div className="flex gap-2">
                    <MapTags tags={product.tags} />
                </div>
                <h3 className="text-base font-bold">{product.title}</h3>
                <p className="text-base">{product.description}</p>
                <div className="flex gap-2 items-center justify-between">
                    <div className="flex">
                        <SvgSmallStar />
                        <SvgSmallStar />
                        <SvgSmallStar />
                        <SvgSmallStar />
                        <SvgSmallStar />
                    </div>
                    <button type="button" className="text-base bg-gray-800 text-white px-4 py-2 rounded-sm">Add • ${product.priceRange.minVariantPrice.amount}</button>
                </div>
            </div>
            <BuyFormHover product={product} />
        </div>
    );
}

function BuyFormHover({ product }: { product: FeaturedCollectionFragment['products']['nodes'][number] }) {
    return (
        <div className="absolute bottom-0 left-0 w-full px-5 py-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
            <form className="flex flex-col gap-2">
                <div className="flex gap-2">
                    <input type="radio" name={product.id} id={`${product.id}-otp`} className="hidden peer/otp input-radio" />
                    <label htmlFor={`${product.id}-otp`} className="text-base bg-gray-200 text-black px-4 py-2 rounded-sm peer-checked/otp:border-black border border-[#EEEEEE] flex items-start gap-2 cursor-pointer">
                        <div className="rounded-full w-4 h-4 border border-gray-800 flex relative">
                            <div className="opacity-0 rounded-full w-2 h-2 bg-gray-800 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-1">
                            <p className="text-xs">One Time Purchase</p>
                            <p className="text-xs font-medium">${product.priceRange.minVariantPrice.amount}</p>
                        </div>
                    </label>
                    <input type="radio" name={product.id} id={`${product.id}-ss`} className="hidden peer/ss input-radio" />
                    <label htmlFor={`${product.id}-ss`} className="text-base bg-gray-200 text-black px-4 py-2 rounded-sm peer-checked/ss:border-black border border-[#EEEEEE] flex items-start gap-2 cursor-pointer">
                        <div className="rounded-full w-4 h-4 border border-gray-800 flex relative">
                            <div className="opacity-0 rounded-full w-2 h-2 bg-gray-800 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-1">
                            <p className="text-xs">Suscribe & Save</p>
                            <p className="text-xs font-medium">$39.99 <span className="text-orange-800">Save 10%</span></p>
                        </div>
                    </label>
                </div>
                <button type="submit" className="text-white text-base bg-gray-800 rounded-sm w-full text-center py-3.5 cursor-pointer">Add to Cart - ${product.priceRange.minVariantPrice.amount}</button>
            </form>
            <Link to={`/products/${product.handle}`} className="text-black text-xs underline text-center w-full block">View Full Details</Link>
        </div>
    );
}

function MapProducts({ products }: { products: FeaturedCollectionFragment['products']['nodes'] }) {
    return products.map((product) => <ProductCard key={product.id} product={product} />)
}

function MapTags({ tags }: { tags: FeaturedCollectionFragment['products']['nodes'][number]['tags'] }) {
    return tags.map((tag) => <div className="rounded-sm bg-gray-200 flex justify-center items-center p-2.5 gap-1" key={tag}>
        <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
        <p className="text-xs">{tag}</p>
    </div>)
}
