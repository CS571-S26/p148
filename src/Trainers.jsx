import PageHeader from "./PageHeader"
import TrainerCard from "./TrainerCard"
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
        <PageHeader
          title="Our Trainers"
          lede="Meet specialists who keep your workouts focused, safe, and measurable."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer) => (
            <TrainerCard
              key={trainer.id}
              trainer={trainer}
              isExpanded={expanded === trainer.id}
              onToggle={() => toggleCard(trainer.id)}
            />
          ))}
        </div>
      </div>
    </main>
  )



}

