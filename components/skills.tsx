const skillsCategories = [
  {
    category: "Design",
    skills: ["UI/UX Design", "Interaction Design", "Figma", "Prototyping"],
  },
  {
    category: "Development",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Vercel", "AWS", "Supabase"],
  },
]

export default function Skills() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsCategories.map((item, index) => (
            <div key={index} className="p-6 rounded-lg border border-border hover:border-accent transition-colors">
              <h3 className="text-xl font-bold mb-4 text-accent">{item.category}</h3>
              <ul className="space-y-3">
                {item.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-muted-foreground flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
