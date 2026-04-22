import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

export default function PlanCard({ name, price, description, features, highlighted }) {
    const navigate = useNavigate();

    return (
        <Card className={`rounded-2xl shadow-md flex flex-col ${highlighted ? "border-2 border-black" : ""}`}>
            <CardHeader>
                {highlighted && (
                    <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                        Most Popular
                    </span>
                )}
                <CardTitle>{name}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
                <p className="text-3xl font-bold">
                    ${price}
                    <span className="text-base font-normal text-muted-foreground">/mo</span>
                </p>
                <ul className="space-y-1">
                    {features.map((f) => (
                        <li key={f} className="text-sm text-muted-foreground">• {f}</li>
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
