// update trigger
export default function Home() {
  
    <main className="bg-[#f8f6f3] text-[#1f2937]">

      export default function Home() {
  return (
    <main className="bg-[#f8f6f3] text-[#1f2937]">

      {/* HERO */}
      <section className="relative w-full h-[520px] flex items-center justify-center text-center">

        <img
          src="/hero-couple.png"
          alt="Couple reconnecting emotionally"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-white/80"></div>

        <div className="relative max-w-3xl px-6">

          <h1 className="text-5xl font-semibold leading-tight">
            Couples Clarity Session
          </h1>

          <p className="mt-4 text-xl">
            With Mahee | Marriage & Intimacy Coach
          </p>

          <p className="mt-6 text-lg">
            Feeling distant, misunderstood, or stuck in the same arguments?
            You don't need to wait until things get worse.
          </p>

          <a
            href="https://calendly.com/mahee_clarity-session"
            className="mt-8 inline-block px-10 py-4 bg-[#4f7f67] text-white rounded-full text-lg shadow-lg"
          >
            Book Your Couples Clarity Session
          </a>

        </div>
      </section>

    </main>
  );
}
      {/* PROBLEMS */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-lg space-y-4">
          <p>You live in the same house but feel emotionally distant.</p>
          <p>Small conversations turn into arguments.</p>
          <p>One partner shuts down while the other feels unheard.</p>
          <p>Physical intimacy feels rare or awkward.</p>
          <p>You don't want separation — but something feels disconnected.</p>
        </div>
      </section>

      {/* ABOUT */}
<section className="bg-[#f1ebe2] py-24 px-6">
  <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    <img
  src="/mahee.jpg"
  alt="Mahee - Marriage & Intimacy Coach"
  className="rounded-2xl shadow-xl w-full max-w-md object-cover"
/>

    <div>
      <h2 className="text-4xl font-semibold">
        Hi, I'm Mahee
      </h2>

      <p className="mt-6 text-lg leading-relaxed">
        I'm a Marriage & Intimacy Coach helping couples rebuild emotional
        safety, conscious communication, and physical connection.
      </p>

      <p className="mt-4 text-lg leading-relaxed">
        My approach is calm, practical, and deeply respectful — helping both
        partners feel heard while creating a path forward together.
      </p>
    </div>

  </div>
</section>

      {/* SESSION DETAILS */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-4xl font-semibold">
            What Happens In This Session
          </h2>

          <ul className="mt-10 space-y-4 text-lg">
            <li>✓ Identify repeating conflict patterns</li>
            <li>✓ Understand emotional triggers</li>
            <li>✓ Learn a safe communication structure</li>
            <li>✓ Address intimacy blocks respectfully</li>
            <li>✓ Create a reconnection plan</li>
          </ul>

        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-[#f1ebe2] py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-10">

          <h2 className="text-4xl font-semibold">
            What Couples Say
          </h2>

          <div>
            <p className="text-lg italic">
              “Mahee helped us understand each other without blaming each other.
              We left the session feeling connected again.”
            </p>

            <p className="mt-2 font-medium">
              — Couple from Bangalore
            </p>
          </div>

          <div>
            <p className="text-lg italic">
              “This session changed the way we communicate. It was calm,
              respectful, and incredibly insightful.”
            </p>

            <p className="mt-2 font-medium">
              — Anonymous Couple
            </p>
          </div>

        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-4xl font-semibold">
            90-Minute Couples Clarity Session
          </h2>

          <p className="mt-6 text-2xl font-semibold">
            Investment: ₹1,999
          </p>

          <a
            href="https://calendly.com/mahee_clarity-session"
            className="mt-10 inline-block px-10 py-4 bg-[#4f7f67] text-white rounded-full text-lg shadow-lg"
          >
            Book Your Session
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Mahee | Marriage & Intimacy Coach
      </footer>

    </main>
  )
}