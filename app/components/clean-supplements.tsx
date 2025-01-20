import { SvgLike } from "./svg-like";
import { SvgClipboard } from "./svg-clipboard";
import { SvgChat } from "./svg-chat";
import { SvgLeaves } from "./svg-leaves";

export function CleanSupplements() {
    return (
        <div className="px-10 py-20 flex flex-col items-start gap-[50px]">
            <div className="flex flex-col items-start gap-2">
                <h4 className="text-base text-gray-800">🧐 Why Health & Fitness</h4>
                <p className="max-w-[419px] text-4xl font-bold text-wrap text-gray-800">Clean Supplements - Made For You</p>
            </div>
            <div className="flex gap-8">
                <MapBenefits />
            </div>
        </div>
    )
}

function MapBenefits() {
    const benefits = [
        {
            title: "We Make It Easy",
            description: "Personalized Solutions & Guidance Mean You Get Just What You Need Nothing More",
            Icon: SvgLike
        },
        {
            title: "Clean & Effective",
            description: "Proven Ingredients, not Artificial, Crafted By Experts For Optimal Effectiveness",
            Icon: SvgLeaves
        },
        {
            title: "Your Free Dietitian",
            description: "Every Gainful Subscriber Gets Free, 1:1 Access Their Own Registered Dietitian.",
            Icon: SvgChat
        },
        {
            title: "Made For You",
            description: "Performance is Personal. Personalized & Customizable Products For Your Needs, Body & Goals",
            Icon: SvgClipboard
        },
    ]

    return benefits.map((benefit) => (
        <div key={benefit.title} className="flex flex-col items-start gap-6">
            <div className="w-[50px] h-[50px] flex items-center justify-center bg-gray-800 rounded-full">
                <benefit.Icon />
            </div>
            <div className="flex flex-col items-start gap-4">
                <h4 className="text-[18px] font-bold text-gray-800">{benefit.title}</h4>
                <p className="text-base text-gray-800/80">{benefit.description}</p>
            </div>
        </div>
    ))

}