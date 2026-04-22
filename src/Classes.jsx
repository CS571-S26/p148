import { useState } from 'react';
import ClassCard from './ClassCard';
import { Button } from '@/components/ui/button';

const classes = [
    { id: 1, name: "Morning Burn",            trainer: "Justin", day: "Monday",    time: "6:00 AM",  duration: "45 min", category: "HIIT" },
    { id: 2, name: "Power Hour",              trainer: "Aaron",  day: "Tuesday",   time: "5:30 PM",  duration: "60 min", category: "Bodybuilding" },
    { id: 3, name: "CrossFit Fundamentals",   trainer: "Alstin", day: "Wednesday", time: "7:00 AM",  duration: "60 min", category: "CrossFit" },
    { id: 4, name: "Afternoon Shred",         trainer: "Justin", day: "Wednesday", time: "12:00 PM", duration: "45 min", category: "HIIT" },
    { id: 5, name: "Strength & Conditioning", trainer: "Aaron",  day: "Thursday",  time: "6:00 PM",  duration: "60 min", category: "Bodybuilding" },
    { id: 6, name: "CrossFit Advanced",       trainer: "Alstin", day: "Friday",    time: "8:00 AM",  duration: "75 min", category: "CrossFit" },
    { id: 7, name: "Weekend Warrior",         trainer: "Justin", day: "Saturday",  time: "9:00 AM",  duration: "60 min", category: "HIIT" },
    { id: 8, name: "Heavy Lifts",             trainer: "Aaron",  day: "Saturday",  time: "11:00 AM", duration: "60 min", category: "Bodybuilding" },
];

const categories = ["All", "HIIT", "Bodybuilding", "CrossFit"];

export default function Classes() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filtered = activeCategory === "All"
        ? classes
        : classes.filter((c) => c.category === activeCategory);

    return (
        <main className="px-6 py-10">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-2">Class Schedule</h1>
                <p className="text-center text-muted-foreground mb-8">
                    Find a class that fits your routine.
                </p>

                <div className="flex gap-3 justify-center mb-8">
                    {categories.map((cat) => (
                        <Button
                            key={cat}
                            variant={activeCategory === cat ? "default" : "outline"}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </Button>
                    ))}
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {filtered.map((cls) => (
                        <ClassCard key={cls.id} {...cls} />
                    ))}
                </div>
            </div>
        </main>
    );
}
