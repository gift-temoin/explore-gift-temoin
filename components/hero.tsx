"use client"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-5xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-accent/30 to-accent/10 rounded-2xl blur-xl"></div>
              <img
                src="/gift-profile.png"
                alt="Gift Temoin - Developer"
                className="relative w-full max-w-sm rounded-2xl shadow-2xl border border-accent/20"
              />
              <div className="absolute bottom-4 right-4 bg-accent/90 text-background px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
                Coding Room
              </div>
            </div>
          </div>

          <div className="text-left md:text-left">
            <div className="mb-6 text-sm font-medium text-accent uppercase tracking-widest">Welcome</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-accent">Gift Temoin</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              A passionate full-stack developer from Rwanda exploring the intersection of design and technology. I craft
              meaningful digital experiences that blend thoughtful design with robust engineering.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 bg-accent text-background font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 border border-accent text-accent font-medium rounded-lg hover:bg-accent/10 transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
