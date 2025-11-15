"use client"

export default function ContactForm() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    alert(`Thanks, we received your message!\n\n${JSON.stringify(payload, null, 2)}`)
    e.currentTarget.reset()
  }

  return (
    <form className="card p-6 space-y-4" onSubmit={onSubmit}>
      <div>
        <label className="block text-sm mb-1">Name</label>
        <input name="name" required className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40" />
      </div>
      <div>
        <label className="block text-sm mb-1">Email</label>
        <input type="email" name="email" required className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40" />
      </div>
      <div>
        <label className="block text-sm mb-1">Subject</label>
        <input name="subject" className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40" />
      </div>
      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea name="message" rows={5} required className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40" />
      </div>
      <button className="btn-primary">Send Message</button>
    </form>
  )
}
