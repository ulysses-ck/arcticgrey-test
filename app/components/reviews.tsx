/* assets */
import herb from "~/assets/herb.png";
import menJournal from "~/assets/men-journal.png";
import rollingStone from "~/assets/rolling-stone.png";
import { SvgBrandBbc } from "./svg-brand-bbc";
import { SvgBrandLaweekly } from "./svg-brand-laweekly";
import { SvgBrandNyt } from "./svg-brand-nyt";

import "./review.css";

/* components */
import { SvgStarFive } from "./svg-star-five";

export function Reviews() {
    return (
        <div className="bg-gray-200 px-10 py-6 flex justify-between items-center">
            <div className="flex flex-col gap-3">
                <span className="text-sm font-bold border border-black text-gray-800 w-fit h-fit p-3 rounded-lg">
                    #1 Doctor Recommended
                </span>
                <div className="flex items-center gap-2">
                    <SvgStarFive />
                    <SvgStarFive />
                    <SvgStarFive />
                    <SvgStarFive />
                    <SvgStarFive />
                    <span className="text-sm font-bold text-gray-800">12,000+ 5-star reviews</span>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <MapBrands />
            </div>
        </div>
    );
}

function MapBrands() {
    const brands = [
        {
            name: "Herb",
            image: <ImageBrand image={herb} width={40} />,
        },
        {
            name: "Men Journal",
            image: <ImageBrand image={menJournal} width={52} />,
        },
        {
            name: "Rolling Stone",
            image: <ImageBrand image={rollingStone} width={90} />,
        },
        {
            name: "BBC",
            image: <div className="svg-container"><SvgBrandBbc /></div>,
        },
        {
            name: "LA Weekly",
            image: <div className="svg-container"><SvgBrandLaweekly /></div>,
        },
        {
            name: "NYT",
            image: <div className="svg-container"><SvgBrandNyt /></div>,
        },
    ];
    return brands.map((brand) => (
        <WrapperBrand key={brand.name}>
            {brand.image}
        </WrapperBrand>
    ));
}


function WrapperBrand({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-red-200 rounded-lg flex items-center justify-center w-32 h-10">
            {children}
        </div>
    );
}

function ImageBrand({ image, width }: { image: string, width?: number }) {
    return (
        <img src={image} alt="brand" className="w-full h-auto object-contain" style={{ width: `${width}px` ?? "100%" }} />
    );
}
