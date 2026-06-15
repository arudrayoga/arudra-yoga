export default function Home(){
  return (
    <main className="container mx-auto p-6">
      <header className="text-center py-16 bg-cover bg-center" style={{backgroundImage:'url(/optimized/hero.webp)'}}>
        <h1 className="text-3xl md:text-5xl text-white font-bold">Personalized Yoga for Mind, Body & Wellness</h1>
        <p className="text-white/90 mt-3">Happy Inside, Glow Outside — tailored programs for every body</p>
        <a className="inline-block mt-6 bg-[#4b0f16] text-white px-6 py-2 rounded-full" href="https://wa.me/919042393043">Book Free Trial</a>
      </header>

      <section className="grid md:grid-cols-2 gap-6 my-12">
        <img className="rounded-lg transform transition duration-700 hover:scale-105" src="/optimized/about.webp" alt="About Susmitha" />
        <div>
          <h2 className="text-2xl font-semibold">About Susmitha</h2>
          <p className="mt-3 text-gray-700">Certified Yoga Instructor (YIC, YCB-Ayush, SVYASA) specializing in Yoga Therapy, meditation, wellness and bhajan sessions.</p>
          <p className="mt-2 text-sm text-gray-500">Private and group sessions · Online classes · Corporate wellness</p>
        </div>
      </section>

      <section className="my-8 motion-safe:animate-fadeIn">
        <h2 className="text-xl font-semibold mb-4">Programs</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {['Women\'s Yoga','Kids Yoga','Yoga Therapy','Corporate Yoga','Senior Yoga','Online Yoga'].map((p)=> (
            <div key={p} className="bg-[#f6eede] p-4 rounded">{p}</div>
          ))}
        </div>
      </section>

      <section className="my-8 motion-safe:animate-fadeIn delay-150">
        <h2 className="text-xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[ 'pose','kids1','kids2','kids3','studio','award'].map((k)=> (
            <img key={k} src={`/optimized/${k}.webp`} alt={k} className="w-full h-40 object-cover rounded cursor-pointer transform transition hover:scale-105"/>
          ))}
        </div>
      </section>

      <section className="my-8 text-center">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="mt-2">+91 90423 93043</p>
        <p className="mt-1 text-sm text-gray-500">VS Golden City, Plot 111, 3rd Cross Street, Kuruppapatti, Hosur</p>
      </section>
    </main>
  )
}
