import { useNavigate } from 'react-router-dom';
import FeatureCard from './FeatureCard';
import { Button } from '@/components/ui/button';

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
        <main>
            <section className="page-section">
                <div className="hero-panel">
                    <div className="hero-panel__content">
                        <h1>Train Smarter with Fitness Monger</h1>
                        <p className="page-lede">
                            Expert trainers, flexible schedules, and membership plans built around you.
                        </p>
                        <div className="hero-actions">
                            <Button size="lg" className="hero-button-primary" onClick={() => navigate('/plans')}>View Plans</Button>
                            <Button size="lg" className="hero-button-secondary" variant="outline" onClick={() => navigate('/classes')}>Browse Classes</Button>
                        </div>
                    </div>
                    <div className="hero-panel__visual" aria-label="Membership path">
                        <div className="hero-steps">
                            <p className="hero-steps__label">Start here</p>
                            <ol>
                                <li>
                                    <span>1</span>
                                    Compare plans without hidden details.
                                </li>
                                <li>
                                    <span>2</span>
                                    Pick a class time that fits your week.
                                </li>
                                <li>
                                    <span>3</span>
                                    Meet coaches before you commit.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section pt-0">
                <div className="page-header">
                    <h2>Built for consistent progress</h2>
                    <p className="page-lede">
                        Clear programs, reliable coaching, and enough schedule flexibility to keep you moving.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-3">
                    {features.map((f, index) => (
                        <FeatureCard
                            key={f.title}
                            index={index}
                            title={f.title}
                            description={f.description}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
