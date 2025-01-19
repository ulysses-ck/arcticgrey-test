import { SvgArrowCircle } from "./svg-arrow-circle";

export function Goals() {
    return (
        <div className="flex flex-col">
            <h2>COMFORTABLY UNCOMFORTABLE</h2>
            <h1>Start with your goals</h1>
            <p>We cannot become what we want to be by remaining what we are.</p>
            <div className="flex gap-5">
                <MapGoals />
            </div>
        </div>
    );
}

function GoalCard({ goal }: { goal: { title: string; description: string, imageSrc: string } }) {
    return (
        <div className="flex flex-col">
            <GoalCardImage imageSrc={goal.imageSrc} />
            <div className="flex items-start">
                <div>
                    <h3>{goal.title}</h3>
                    <p>{goal.description}</p>
                </div>
                <SvgArrowCircle />
            </div>
        </div>
    );
}

function GoalCardImage({ imageSrc }: { imageSrc: string }) {
    return (
        <div className="flex items-start">
            <img src={imageSrc} alt="Goal" />
        </div>
    );
}

function MapGoals() {
    const goals = [
        {
            title: "Sleep",
            description: "Optimize your sleep patterns",
            imageSrc: "https://cdn.shopify.com/s/files/1/0590/5793/0327/files/997c2aa242084a92c3cfd8674927555e.jpg?v=1737246823"
        },
        {
            title: "Cognitive Function",
            description: "Enhance your brain's performance and connectivity",
            imageSrc: "https://cdn.shopify.com/s/files/1/0590/5793/0327/files/1adce8ff03d61d72ebd773237c7c9dd6.jpg?v=1737246823"
        },
        {
            title: "Foundational Health",
            description: "Promoting healthy, natural deep sleep day to day",
            imageSrc: "https://cdn.shopify.com/s/files/1/0590/5793/0327/files/7e6d5afa14d53ff0b6d598e9793856ab.png?v=1737246821"
        },
        {
            title: "Athletic Performance",
            description: "Increase your healthy tissue, muscle, and energy",
            imageSrc: "https://cdn.shopify.com/s/files/1/0590/5793/0327/files/643a37948ecd36462f2e21db2ee9ea09.jpg?v=1737246823"
        },
        {
            title: "Hormone Support",
            description: "Boost your mood, libido, and vitality",
            imageSrc: "https://cdn.shopify.com/s/files/1/0590/5793/0327/files/7977a300e076716720c993cfe604a189.jpg?v=1737246823"
        },
    ]
    return goals.map((goal) => (
        <GoalCard goal={goal} />
    ));
}