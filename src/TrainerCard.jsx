import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function TrainerCard({ trainer, isExpanded, onToggle }) {
    return (
        <Card className={`fitness-card rounded-3xl ${isExpanded ? "featured-card border-2" : ""}`}>
            <CardHeader>
                <span className="pill">{trainer.specialty}</span>
                <CardTitle>{trainer.name}</CardTitle>
                <CardDescription>Coach, age {trainer.age}</CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-3">
                {isExpanded && (
                    <p className="text-sm text-muted-foreground">
                        {trainer.description}
                    </p>
                )}

                <Button
                    variant="default"
                    className="w-full"
                    onClick={onToggle}
                >
                    {isExpanded ? "Show Less" : "View More"}
                </Button>
            </CardContent>
        </Card>
    );
}
