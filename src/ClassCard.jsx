import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function ClassCard({ name, trainer, day, time, duration, category }) {
    return (
        <Card className="fitness-card rounded-3xl">
            <CardHeader>
                <span className="pill">{category}</span>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{day} at {time}</CardDescription>
            </CardHeader>
            <CardContent className="detail-list text-sm">
                <p className="detail-row">
                    <span className="detail-label">Trainer</span>
                    <span>{trainer}</span>
                </p>
                <p className="detail-row">
                    <span className="detail-label">Duration</span>
                    <span>{duration}</span>
                </p>
            </CardContent>
        </Card>
    );
}
