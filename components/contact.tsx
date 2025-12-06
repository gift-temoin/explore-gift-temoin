"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form data:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleWhatsApp = () => {
    // Use digits-only international format for wa.me (no spaces or +)
    const phoneNumber = "250723376863" // requested number: 250 723 376 863
    const message = encodeURIComponent("Hi Gift, I'd like to discuss a project with you!")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Let's Connect</h3>
            <p className="text-muted-foreground">
              I'm always interested in new opportunities and exciting projects. Whether you need a full-stack developer or want to discuss a potential collaboration, I'd love to hear from you.
            </p>

            {/* Email Card */}
            <div className="bg-background/50 border border-border rounded-lg p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Email</h4>
                <p className="text-lg font-semibold mt-1">gifttemoin@gmail.com</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-background/50 border border-border rounded-lg p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.464 12.536c-.325-.234-.744-.234-1.069 0l-1.919 1.381c-.276.199-.636.166-.883-.08l-2.749-2.749c-.247-.247-.279-.608-.08-.883l1.381-1.919c.234-.325.234-.744 0-1.069L8.464 3.536c-.325-.234-.744-.234-1.069 0l-1.919 1.381c-.276.199-.636.166-.883-.08C2.532 7.025 1 10.146 1 13.5 1 18.747 5.253 23 10.5 23c3.354 0 6.475-1.532 8.463-2.593.247-.247.279-.608.08-.883l-1.381-1.919c-.234-.325-.234-.744 0-1.069l1.919-1.381c.325-.234.325-.744 0-1.069l-1.736-1.95z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Phone</h4>
                <p className="text-lg font-semibold mt-1">+250 723 376 863</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-background/50 border border-border rounded-lg p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Location</h4>
                <p className="text-lg font-semibold mt-1">Rwanda, Kigali</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <div className="bg-background/50 border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors placeholder-muted-foreground"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors placeholder-muted-foreground"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors resize-none placeholder-muted-foreground"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-linear-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.99 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.01442992 C3.34915502,0.9 2.40734225,0.9 1.77946707,1.38989899 C0.994623095,2.02744541 0.837654326,3.11681306 1.15159189,3.90230491 L3.03521743,10.3433021 C3.03521743,10.5003995 3.19218622,10.6574969 3.50612381,10.6574969 L16.6915026,11.4429838 C16.6915026,11.4429838 17.1624089,11.4429838 17.1624089,10.9716917 L17.1624089,12.0806873 C17.1624089,12.5519793 16.6915026,12.4744748 16.6915026,12.4744748 Z" />
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
