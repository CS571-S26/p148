import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function ClassCard({ name, trainer, day, time, duration, category }) {
    return (
        <Card className="rounded-2xl shadow-md">
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{category}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-1 text-sm text-muted-foreground">
                <p><strong className="text-foreground">Trainer:</strong> {trainer}</p>
                <p><strong className="text-foreground">Day:</strong> {day}</p>
                <p><strong className="text-foreground">Time:</strong> {time}</p>
                <p><strong className="text-foreground">Duration:</strong> {duration}</p>
            </CardContent>
        </Card>
    );
}
