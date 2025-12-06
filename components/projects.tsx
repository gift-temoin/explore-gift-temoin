"use client"

const projects = [
  {
    title: "School Report Management System",
    description:
      "A comprehensive platform for managing student report cards, grades, and academic performance tracking. Includes teacher dashboard, admin controls, and automated calculations.",
    tags: ["Full-Stack", "Education", "Database", "Admin Panel"],
    image: "/school-report-card-management-system-dashboard.jpg",
  },
  {
    title: "Timeline",
    description: "Building a seamless path to better cellular health",
    tags: ["Design", "Development", "UX/UI", "Mobile"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=400&fit=crop",
  },
  {
    title: "Siesta Campers",
    description: "Elevating Portugal's premier van rental company",
    tags: ["Design", "Web", "Branding", "E-commerce"],
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&h=400&fit=crop",
  },
  {
    title: "Dr. (!) Julia Woehr",
    description: "Distilling architectural impact to its spatial essence",
    tags: ["Design", "Development", "Portfolio", "Branding"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=400&fit=crop",
  },
  {
    title: "Fahrplan.guru",
    description: "Bringing clarity to complex transit information",
    tags: ["Design", "Web", "UX/UI", "Mobile"],
    image: "https://images.unsplash.com/photo-1460925895917-adf4e565db40?w=500&h=400&fit=crop",
  },
  {
    title: "SaaS Landing Page Builder",
    description:
      "Drag-and-drop platform for creating professional landing pages without coding. Includes templates, analytics, and conversion optimization tools.",
    tags: ["SaaS", "Web", "No-Code", "Monetization"],
    image: "/landing-page-builder-saas-platform.jpg",
  },
  {
    title: "Digital Course Platform",
    description:
      "Create, manage, and sell online courses with built-in payment processing, student management, and course analytics.",
    tags: ["E-Learning", "Payment", "Full-Stack", "Monetization"],
    image: "/online-course-platform-learning-management-system.jpg",
  },
  {
    title: "Freelance Job Marketplace",
    description:
      "Connect freelancers with clients looking for services. Features project bidding, escrow payments, and reputation system.",
    tags: ["Marketplace", "Payment", "Community", "Monetization"],
    image: "/freelance-marketplace-job-platform.jpg",
  },
  {
    title: "AI Content Generator Tool",
    description:
      "Subscription-based tool for generating blog posts, social media content, and marketing copy powered by AI.",
    tags: ["AI", "SaaS", "Subscription", "Monetization"],
    image: "/ai-content-generation-writing-tool.jpg",
  },
]

export default function Projects() {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Work</h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer overflow-hidden rounded-lg">
              <div className="relative overflow-hidden mb-4 h-64 rounded-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs font-medium px-3 py-1 bg-accent/10 text-accent rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
