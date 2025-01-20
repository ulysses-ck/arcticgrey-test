import { FeaturedCollectionFragment } from "storefrontapi.generated"
import { TitlePagination } from "./title-pagination"
import type { RecommendedProductFragment, RecommendedProductsQuery } from "storefrontapi.generated"
import { Await } from '@remix-run/react';
import { Suspense } from 'react';

export function Testimonials({ products }: { products: Promise<RecommendedProductsQuery | null>; }) {
    return (
        <div className="bg-gray-200 py-20 flex flex-col items-center justify-center gap-10">
            <TitlePagination title="Real People, Real Results" subtitle="Trusted & Proven by Science" link="/collections/all" />
            <div className="flex gap-[10px]">
                <Suspense fallback={<div>Loading...</div>}>
                    <Await resolve={products}>
                        {(response) => response
                            ?
                            <MapVideos products={response.products.nodes} />
                            : null}
                    </Await>
                </Suspense>
            </div>
        </div>
    )
}

function VideoCard({ videoSrc, product }: { videoSrc: string, product: RecommendedProductFragment }) {

    return (
        <div className="w-[300px] h-[518px] rounded-lg flex flex-col gap-4">
            <video src={videoSrc} className="w-[300px] h-[420px] object-cover" />
            {/* product card */}
            <ProductCard product={product} />
        </div>
    )
}

function ProductCard({ product }: { product: RecommendedProductFragment }) {
    return (
        <div className="flex rounded-lg bg-white justify-between items-center pl-[5px] pr-4">
            <div className="w-[70px] h-[70px]">
                <img src={product.images.nodes[0].url ?? ''} alt={product.images.nodes[0].altText ?? ''} className="w-full h-full object-cover" />
            </div>
            <div>
                <h3 className="text-base font-bold">{product.title}</h3>
                <p className="text-base">{product.priceRange.minVariantPrice.amount}</p>
            </div>
            <button type="button" className="rounded-full w-8 h-8 bg-gray-800 flex justify-center items-center text-white">
                +
            </button>
        </div>
    )
}

function MapVideos({ products }: { products: RecommendedProductFragment[] }) {
    return products.map((product) => <VideoCard videoSrc={"https://cdn.shopify.com/videos/c/o/v/8859c41592c54a2785697fcc07cf5ed7.mp4"} product={product} />)
}
