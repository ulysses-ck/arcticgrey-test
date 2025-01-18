import { SvgStar } from "./svg-star";

export function InfiniteMarquee() {

    return (
        <div className="relative w-screen max-w-full overflow-hidden h-14 bg-black">
            <div className="absolute whitespace-nowrap will-change-transform flex flex-row gap-4 justify-between text-white items-center h-full animate-marquee w-max pl-4">
                <Words />
            </div>
        </div>
    )
}

function Words() {
    const words = ['High Quality Ingredients', 'Independently Certified', 'Expert Driven', 'Shipped Internationally'];
    const initialWords = [...words, ...words, ...words, ...words];

    return initialWords.map((word, index) => {
        if (index % 2 === 0) {
            return <SvgStar key={index} />
        } else if (index === initialWords.length - 1) {
            return (
                <>
                    <span className="uppercase text-sm font-bold" key={index}>{word}</span>
                    <SvgStar key={index + 1} />
                </>
            )
        }
        return <span className="uppercase text-sm font-bold" key={index}>{word}</span>
    })
}
