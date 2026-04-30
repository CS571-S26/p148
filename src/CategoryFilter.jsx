import { Button } from '@/components/ui/button';

export default function CategoryFilter({ categories, activeCategory, onChange }) {
    return (
        <div className="mb-8 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
                <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    onClick={() => onChange(category)}
                >
                    {category}
                </Button>
            ))}
        </div>
    );
}
