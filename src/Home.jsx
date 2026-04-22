import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const features = [
    {
        title: "Expert Trainers",
        description: "Work with certified professionals who tailor programs to your specific goals.",
    },
    {
        title: "Flexible Schedules",
        description: "Classes available morning, afternoon, and evening to fit your life.",
    },
    {
        title: "Proven Results",
        description: "Members see measurable improvements in strength and endurance within weeks.",
    },
];

export default function Home() {
    const navigate = useNavigate();

    return (
        <main className="px-6 py-10 space-y-16">
            <section className="text-center max-w-2xl mx-auto space-y-4">
                <h1 className="text-5xl font-bold">Train Smarter with Fitness Monger</h1>
                <p className="text-lg text-muted-foreground">
                    Expert trainers, flexible schedules, and membership plans built around you.
                </p>
                <Button size="lg" onClick={() => navigate('/plans')}>View Plans</Button>
            </section>

            <section className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-semibold text-center mb-8">Why Fitness Monger?</h2>
                <div className="grid gap-6 sm:grid-cols-3">
                    {features.map((f) => (
                        <Card key={f.title} className="rounded-2xl shadow-md">
                            <CardHeader>
                                <CardTitle>{f.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{f.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </main>
    );
}
