import './globals.css'

export const metadata = {
  title: 'Arudra Yoga',
  description: 'Personalized Yoga for Mind, Body & Wellness — Arudra Yoga',
  openGraph: {
    title: 'Arudra Yoga',
    description: 'Personalized Yoga for Mind, Body & Wellness',
    images: ['/og-image.svg']
  }
}

export default function RootLayout({ children }){
  const siteUrl = process.env.SITE_URL || '__SITE_URL__';
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <meta name="theme-color" content="#4b0f16" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href={siteUrl} />
        <link rel="preload" as="image" href="/optimized/hero.webp" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org",
          "@type":"LocalBusiness",
          "name":"Arudra Yoga",
          "url": siteUrl,
          "telephone":"+919042393043",
          "address":{
            "@type":"PostalAddress",
            "streetAddress":"VS Golden City, Plot 111, 3rd Cross Street, Kuruppapatti",
            "addressLocality":"Hosur",
            "addressRegion":"TN",
            "postalCode":"\u2014",
            "addressCountry":"IN"
          },
          "openingHoursSpecification": [{
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
            "opens": "06:00",
            "closes": "20:00"
          }]
        })}} />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
        <a className="fixed bottom-24 right-4 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg z-50" href="https://wa.me/919042393043">WhatsApp</a>
        <a className="fixed bottom-6 right-4 bg-[#4b0f16] text-white px-4 py-3 rounded-full shadow-lg z-50" href="tel:+919042393043">Call</a>
      </body>
    </html>
  )
}
