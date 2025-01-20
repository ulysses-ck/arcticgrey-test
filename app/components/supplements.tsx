import { Link } from "@remix-run/react";
import { SvgArrow } from "./svg-arrow";
import { SvgSmallStar } from "./svg-small-star";
import { FeaturedCollectionFragment } from "storefrontapi.generated";

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
        <div className="w-[365px] h-[505px] rounded-lg bg-white relative">
            <img className="absolute top-[33px] left-[33px] w-[300px] h-[300px] object-cover" src={product.images.nodes[0].url ?? ''} alt={product.images.nodes[0].altText ?? ''} />
            <div className="flex flex-col gap-2 p-5 absolute bottom-0 left-0 w-full">
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
