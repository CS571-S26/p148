import { Button } from "./components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
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
    <main className="page-section">
      <div>
        <div className="page-header">
          <h1>Our Trainers</h1>
          <p className="page-lede">
            Meet specialists who keep your workouts focused, safe, and measurable.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer) => (
            <Card key={trainer.id} 
            className={`fitness-card rounded-3xl ${
            expanded === trainer.id ? "featured-card border-2" : ""}`}
            >
              <CardHeader>
                <span className="pill">{trainer.specialty}</span>
                <CardTitle>{trainer.name}</CardTitle>
                <CardDescription>Coach, age {trainer.age}</CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col gap-3">
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

