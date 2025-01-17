import { useState } from "react";

export function InfiniteMarquee() {
    const words = ['Great', 'things', 'never', 'come', 'from', 'comfort', 'zones'];
    const initialWords = words.concat(words, words, words, words);
    const [text, setText] = useState(initialWords);
    return (
        <div className="relative w-screen max-w-full overflow-hidden h-14">
            <div className="absolute whitespace-nowrap will-change-transform animate-marquee flex flex-row gap-4 justify-between bg-black text-white items-center h-full">
                {text.map((word, index) => (
                    <span className="uppercase text-4xl font-bold" key={index}>{word}</span>
                ))}
            </div>
        </div>
    )
}