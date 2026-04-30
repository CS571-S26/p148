import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function FeatureCard({ index, title, description }) {
    return (
        <Card className="fitness-card rounded-3xl">
            <CardHeader>
                <span className="feature-number">{String(index + 1).padStart(2, "0")}</span>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{description}</CardDescription>
            </CardContent>
        </Card>
    );
}
