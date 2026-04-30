import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

export default function PlanCard({ name, price, description, features, highlighted }) {
    const navigate = useNavigate();

    return (
        <Card className={`fitness-card flex flex-col rounded-3xl ${highlighted ? "featured-card border-2" : ""}`}>
            <CardHeader>
                {highlighted && <span className="pill">Most Popular</span>}
                <CardTitle>{name}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-4">
                <p className="plan-price">
                    ${price}
                    <span>/mo</span>
                </p>
                <ul className="check-list">
                    {features.map((f) => (
                        <li key={f} className="text-sm text-muted-foreground">{f}</li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter>
                <Button
                    className="w-full"
                    variant={highlighted ? "default" : "outline"}
                    onClick={() => navigate('/checkout', { state: { plan: name, price } })}
                >
                    Choose {name}
                </Button>
            </CardFooter>
        </Card>
    );
}
