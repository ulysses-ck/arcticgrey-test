import { SvgArrow } from "./svg-arrow";
import { Link } from "@remix-run/react";

export function TitlePagination({ title, subtitle, link }: { title: string; subtitle: string; link: string }) {
    return (
        <div className="flex flex-col gap-6 justify-center items-center">
            <div className="flex gap-4">
                <button type="button" className="flex gap-2 items-center w-10 h-10 justify-center border rounded-sm border-gray-800/10 rotate-180">
                    <SvgArrow />
                </button>
                <div className="flex flex-col gap-2 justify-center items-center">
                    <h2 className="text-base">{subtitle}</h2>
                    <h1 className="text-4xl font-bold w-full text-gray-800">{title}</h1>
                </div>

                <button type="button" className="flex gap-2 items-center w-10 h-10 justify-center border rounded-sm border-gray-800/10">
                    <SvgArrow />
                </button>
            </div>
            <Link to={link} className="text-base underline">
                View All
            </Link>
        </div>
    );
}
