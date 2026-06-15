export default function Contact(){
  return (
    <main className="container mx-auto p-6">
      <a href="#main-content" className="skip-link sr-only focus:not-sr-only">Skip to content</a>
      <section id="main-content" className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold">Contact</h1>
        <p className="text-gray-600 mt-2">Message us for bookings or enquiries. Or WhatsApp at <a className="text-[#25D366]" href="https://wa.me/919042393043">+91 90423 93043</a>.</p>

        <form className="mt-6 grid gap-4" action="https://formspree.io/f/your-form-id" method="POST">
          <label className="block">
            <span className="text-sm">Name</span>
            <input name="name" required className="mt-1 block w-full rounded border px-3 py-2"/>
          </label>
          <label className="block">
            <span className="text-sm">Email</span>
            <input name="email" type="email" required className="mt-1 block w-full rounded border px-3 py-2"/>
          </label>
          <label className="block">
            <span className="text-sm">Message</span>
            <textarea name="message" rows="5" required className="mt-1 block w-full rounded border px-3 py-2"></textarea>
          </label>
          <div className="flex gap-2">
            <button type="submit" className="bg-[#4b0f16] text-white px-4 py-2 rounded">Send</button>
            <a className="px-4 py-2 border rounded" href="mailto:info@your-website.example">Or email</a>
          </div>
        </form>
      </section>
    </main>
  )
}
