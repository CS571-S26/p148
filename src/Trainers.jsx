import { Button } from "./components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useState } from "react"

const trainers = [
    {
        id : 1,
        name : "Justin",
        age : 26,
        specialty : "HIIT",
        description : 
        "Justin leads high-intensity workouts designed to burn fat and improve cardiovascular endurance."
    },
    {
        id : 2,
        name : "Aaron",
        age : 35,
        specialty : "Bodybuilding",
        description : 
        "Aaron specializes in building muscle and strength using progressive overload and structured lifting programs."

    },
    {
        id : 3,
        name : "Alstin",
        age : 40,
        specialty : "CrossFit",
        description :
        "Alstin is a CrossFit specialist who focuses on high-intensity functional training, helping members improve strength, endurance, and overall conditioning."
    }
]

export default function Trainers() {   
    const [expanded, setExpanded]=useState(null)
    const toggleCard=(id) => {
        setExpanded(expanded === id ? null : id)
    }

    return (
    <main className="min-h-screen px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          Our Trainers
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer) => (
            <Card key={trainer.id} 
            className={`rounded-2xl shadow-md transition-all ${
            expanded === trainer.id ? "border-2 border-black" : ""}`}
            >
              <CardHeader>
                <CardTitle>{trainer.name}</CardTitle>
                <CardDescription>{trainer.specialty}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-3">
                <p><strong>Age:</strong> {trainer.age}</p>

                {expanded === trainer.id && (
                  <p className="text-sm text-muted-foreground">
                    {trainer.description}
                  </p>
                )}

                <Button
                  variant="default"
                  className="w-full"
                  onClick={() => toggleCard(trainer.id)}
                >
                  {expanded === trainer.id ? "Show Less" : "View More"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )



}

