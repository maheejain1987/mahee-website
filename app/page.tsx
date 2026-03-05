export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#3e372f]">

      {/* HERO */}
      <section
        className="relative text-center py-32 px-6 text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            Reconnect. Rebuild. Rediscover Each Other.
          </h1>

          <p className="mt-6 text-xl">
            A private clarity session for couples who love each other
            but feel emotionally distant or stuck in repeating conflicts.
          </p>

          <button className="mt-10 px-12 py-5 bg-[#a88f6c] rounded-full text-lg shadow-xl hover:bg-[#94785a] transition">
            Apply for Couples Clarity Session
          </button>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold">
            If This Feels Familiar…
          </h2>

          <div className="mt-10 space-y-5 text-lg leading-relaxed">
            <p>You live in the same house but feel emotionally distant.</p>
            <p>Small conversations turn into arguments.</p>
            <p>One partner shuts down while the other feels unheard.</p>
            <p>Physical intimacy feels rare or awkward.</p>
            <p>You don’t want separation — but something feels disconnected.</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-[#f1ebe2] py-24 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <img
  src="/mahee.jpg"
  className="rounded-xl shadow-lg"
/>
          />

          <div>
            <h2 className="text-4xl font-semibold">
              Hi, I'm Mahee
            </h2>

            <p className="mt-6 text-lg leading-relaxed">
              I’m a Marriage & Intimacy Coach helping couples rebuild
              emotional safety, conscious communication, and physical connection.
            </p>

            <p className="mt-4 text-lg leading-relaxed">
              My approach is calm, practical, and deeply respectful —
              helping both partners feel heard while creating a path
              forward together.
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
            <li>✔ Identify repeating conflict patterns</li>
            <li>✔ Understand emotional triggers</li>
            <li>✔ Learn a safe communication structure</li>
            <li>✔ Address intimacy blocks respectfully</li>
            <li>✔ Create a reconnection plan</li>
          </ul>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-[#f1ebe2] py-24 px-6 text-center">
<div className="max-w-3xl mx-auto">

<h2 className="text-4xl font-semibold">
What Couples Say
</h2>

<div className="mt-10 space-y-8">

<p className="text-lg italic">
“Mahee helped us understand each other without blaming each other.
We left the session feeling connected again.”
</p>

<p className="font-medium">
— Couple from Bangalore
</p>

<p className="text-lg italic">
“This session changed the way we communicate. It was calm,
respectful and incredibly insightful.”
</p>

<p className="font-medium">
— Anonymous Couple
</p>

</div>
</div>
</section>

      {/* PRICING */}
      <section className="py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold">
            90-Minute Couples Clarity Session
          </h2>

          <p className="mt-6 text-2xl font-semibold">
            Investment: ₹1,999
          </p>

          <<a
href="https://calendly.com/mahee_clarity-session"
className="mt-10 inline-block px-12 py-5 bg-[#a88f6c] text-white rounded-full text-lg shadow-xl hover:bg-[#94785a] transition"
>
Book Your Session
</a>
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-12 text-sm text-[#6a6054]">
        © {new Date().getFullYear()} Mahee | Marriage & Intimacy Coach
      </footer>

    </div>
  );
}