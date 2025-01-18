/* assets */
import herb from "~/assets/herb.png";
import menJournal from "~/assets/men-journal.png";
import rollingStone from "~/assets/rolling-stone.png";
import { SvgBrandBbc } from "./svg-brand-bbc";
import { SvgBrandLaweekly } from "./svg-brand-laweekly";
import { SvgBrandNyt } from "./svg-brand-nyt";

/* components */
import { SvgStarFive } from "./svg-star-five";

export function Reviews() {
    return (
        <div className="bg-gray-200 px-10 py-6 flex justify-between">
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
            <MapBrands />
        </div>
    );
}

function MapBrands() {
    const brands = [
        {
            name: "Herb",
            image: <ImageBrand image={herb} />,
        },
        {
            name: "Men Journal",
            image: <ImageBrand image={menJournal} />,
        },
        {
            name: "Rolling Stone",
            image: <ImageBrand image={rollingStone} />,
        },
        {
            name: "BBC",
            image: <SvgBrandBbc />,
        },
        {
            name: "LA Weekly",
            image: <SvgBrandLaweekly />,
        },
        {
            name: "NYT",
            image: <SvgBrandNyt />,
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
        <div className="bg-white rounded-lg flex items-center justify-center h-full">
            {children}
        </div>
    );
}

function ImageBrand({ image }: { image: string }) {
    return (
        <img src={image} alt="brand" className="w-full h-full object-cover" />
    );
}
