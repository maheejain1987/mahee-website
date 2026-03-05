export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#3e372f]">

      {/* HERO */}
      <section
        className="text-center py-28 px-6 text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="max-w-3xl mx-auto bg-black/40 p-10 rounded-xl">
          <h1 className="text-5xl font-semibold leading-tight">
            Reconnect. Rebuild. Rediscover Each Other.
          </h1>

          <p className="mt-6 text-lg">
            A private clarity session for couples who love each other
            but feel emotionally distant or stuck in repeating conflicts.
          </p>

          <button className="mt-8 px-10 py-4 bg-[#a88f6c] rounded-full text-white text-lg">
            Apply for Couples Clarity Session
          </button>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold">If This Feels Familiar…</h2>

          <div className="mt-8 space-y-4 text-lg">
            <p>You live in the same house but feel emotionally distant.</p>
            <p>Small conversations turn into arguments.</p>
            <p>One of you shuts down. The other feels unheard.</p>
            <p>Physical intimacy feels rare or awkward.</p>
            <p>You don’t want separation — but something feels disconnected.</p>
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="bg-[#f1ebe2] py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold">Who This Session Is For</h2>

          <ul className="mt-8 space-y-3 text-lg">
            <li>✔ Couples who want to stay together</li>
            <li>✔ Couples tired of misunderstandings</li>
            <li>✔ Couples feeling emotional or physical distance</li>
            <li>✔ Partners willing to grow together</li>
          </ul>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold">About Mahee</h2>

          <p className="mt-6 text-lg">
            I'm a Marriage & Intimacy Coach helping couples rebuild
            emotional safety, conscious communication, and physical
            connection.
          </p>

          <p className="mt-4 text-lg">
            With a background in HR and human behavior, I guide couples
            to understand deeper relationship dynamics and reconnect
            with clarity and respect.
          </p>
        </div>
      </section>

      {/* SESSION DETAILS */}
      <section className="bg-[#f1ebe2] py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold">
            90-Minute Couples Clarity Session
          </h2>

          <p className="mt-6 text-xl font-semibold">
            Investment: ₹1,999
          </p>

          <button className="mt-8 px-10 py-4 bg-[#a88f6c] text-white rounded-full text-lg">
            Book Your Session
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-sm">
        © {new Date().getFullYear()} Mahee | Marriage & Intimacy Coach
      </footer>
    </div>
  );
}