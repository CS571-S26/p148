import PlanCard from './PlanCard';

const plans = [
    {
        name: "Basic",
        price: 29,
        description: "Everything you need to get started.",
        features: [
            "Access to gym floor",
            "2 group classes/week",
            "Locker room access",
        ],
        highlighted: false,
    },
    {
        name: "Pro",
        price: 59,
        description: "The most popular choice for serious members.",
        features: [
            "Unlimited group classes",
            "1 personal training session/month",
            "Nutrition guidance",
            "Locker room access",
        ],
        highlighted: true,
    },
    {
        name: "Elite",
        price: 99,
        description: "Maximum support for maximum results.",
        features: [
            "Everything in Pro",
            "4 personal training sessions/month",
            "Priority class booking",
            "Recovery lounge access",
        ],
        highlighted: false,
    },
];

export default function Plans() {
    return (
        <main className="px-6 py-10">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-2">Membership Plans</h1>
                <p className="text-center text-muted-foreground mb-10">
                    Choose the plan that fits your goals.
                </p>
                <div className="grid gap-6 sm:grid-cols-3">
                    {plans.map((plan) => (
                        <PlanCard key={plan.name} {...plan} />
                    ))}
                </div>
            </div>
        </main>
    );
}
