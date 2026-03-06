export default function Home() {
  return (

    <main className="bg-[#f8f6f3] text-[#1f2937]">

       {/* LOGO */}

         <div className="max-w-6xl mx-auto px-6 pt-8 pb-6 flex items-center">
         <img
         src="/logo.png"
         alt="Mahee Coaching"
         className="h-30"
             />

            </div>

      {/* HERO */}

      <section className="max-w-6xl mx-auto px-6 pt-24 pb-32 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE - TEXT */}

        <div className="max-w-xl">

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            Rebuild Emotional Connection in Your Relationship
          </h1>

          <p className="mt-4 text-xl text-gray-700">
            90-Minute Couples Clarity Session with Mahee
          </p>

          <p className="mt-6 text-lg text-gray-600">
            Feeling distant, misunderstood, or stuck in the same arguments?
            You don't need to wait until things get worse.
          </p>

          <a
            href="https://calendly.com/mahee_clarity-session"
            className="mt-10 inline-block px-10 py-4 bg-[#4f7f67] text-white rounded-full text-lg"
          >
            Book Your Couples Clarity Session
          </a>

          <p className="mt-3 text-sm text-gray-500">
            Limited sessions available each week to ensure personal attention.
            </p>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-600">

          <div className="flex items-center gap-2">
          <span className="text-lg">⭐</span>
          <span>Trusted by couples across India</span>
          </div>

          <div className="flex items-center gap-2">
          <span className="text-lg">🔒</span>
          <span>Private & confidential sessions</span>
          </div>

          <div className="flex items-center gap-2">
         <span className="text-lg">🤝</span>
          <span>Safe & judgment-free conversation</span>
        </div>

        </div>

        </div>

        {/* RIGHT SIDE - IMAGE */}

        <div className="flex justify-center">

          <img
            src="/couple.png"
            alt="Couple reconnecting emotionally"
            className="rounded-2xl shadow-2xl w-full max-w-xl transform md:translate-y-6"
          />

        </div>

      </section>

      <hr className="max-w-6xl mx-auto border-gray-200 my-16" />

      {/* PROBLEMS */}

  <section className="bg-white py-28 px-6">

  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT SIDE - TEXT */}

    <div className="text-lg space-y-4">

      <p>You live in the same house but feel emotionally distant.</p>

      <p>Small conversations turn into arguments.</p>

      <p>One partner shuts down while the other feels unheard.</p>

      <p>Physical intimacy feels rare or awkward.</p>

      <p>You don't want separation — but something feels disconnected.</p>

    </div>

    {/* RIGHT SIDE - IMAGE */}

    <div className="flex justify-center">

      <img
        src="/problem-couple.png"
        alt="Couple experiencing relationship tension"
        className="rounded-2xl shadow-lg w-full max-w-md"
      />

    </div>

    </div>

      </section>

      <hr className="max-w-6xl mx-auto border-gray-200 my-16" />

      {/* IS THIS SESSION RIGHT FOR YOU */}

      <section className="bg-[#f8f6f3] py-28 px-6">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-4xl font-semibold text-center">
            Is This Session Right For You?
          </h2>

          <ul className="mt-10 space-y-4 text-lg">

            <li>✓ You feel emotionally distant from your partner</li>
            <li>✓ Conversations quickly turn into arguments</li>
            <li>✓ One partner shuts down while the other feels unheard</li>
            <li>✓ Physical intimacy has become rare or awkward</li>
            <li>✓ You want clarity before things get worse</li>

          </ul>

          <div className="text-center mt-12">

            <a
              href="https://calendly.com/mahee_clarity-session"
              className="inline-block px-10 py-4 bg-[#4f7f67] text-white rounded-full text-lg"
            >
              Book Your Couples Clarity Session
            </a>

          </div>

        </div>

      </section>

      <hr className="max-w-6xl mx-auto border-gray-200 my-16" />

      {/* ABOUT */}

      <section className="bg-[#f1ebe2] py-28 px-6">

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <img
            src="/mahee.jpg"
            alt="Mahee - Marriage and Intimacy Coach"
            className="rounded-2xl shadow-xl w-full max-w-md"
          />

          <div>

            <h2 className="text-4xl font-semibold">
              Hi, I'm Mahee
            </h2>

            <p className="mt-6 text-lg leading-relaxed">
              I'm a Marriage & Intimacy Coach helping couples rebuild emotional safety,
              conscious communication, and physical connection.
            </p>

            <p className="mt-4 text-lg leading-relaxed">
              My approach is calm, practical, and deeply respectful — helping both
              partners feel heard while creating a path forward together.
            </p>

          </div>

        </div>

      </section>

      <hr className="max-w-6xl mx-auto border-gray-200 my-16" />

      {/* SESSION DETAILS */}

      <section className="bg-white py-28 px-6 text-center">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-4xl font-semibold">
            What Happens In This Session
          </h2>

          <ul className="mt-10 space-y-6 text-lg text-left">

        <li className="flex items-start gap-3">
        <span className="text-2xl">🧠</span>
        <span>Identify repeating conflict patterns</span>
        </li>

        <li className="flex items-start gap-3">
<span className="text-2xl">💬</span>
<span>Understand emotional triggers on both sides</span>
        </li>

        <li className="flex items-start gap-3">
        <span className="text-2xl">🤝</span>
        <span>Learn a safe communication structure</span>
        </li>

        <li className="flex items-start gap-3">
        <span className="text-2xl">❤️</span>
        <span>Address intimacy blocks respectfully</span>
        </li>

        <li className="flex items-start gap-3">
        <span className="text-2xl">🛠</span>
        <span>Create a reconnection plan</span>
        </li>

        </ul>
        </div>

      </section>

      <hr className="max-w-6xl mx-auto border-gray-200 my-16" />

      {/* FIRST 10 MINUTES */}

<section className="bg-[#f8f6f3] py-28 px-6">

  <div className="max-w-3xl mx-auto">

    <h2 className="text-4xl font-semibold text-center">
      What Happens In The First 10 Minutes
    </h2>

    <div className="mt-12 space-y-6 text-lg">

      <p>
        <strong>1. You both share what brought you here.</strong><br/>
        Each partner briefly explains what they are experiencing in the relationship.
      </p>

      <p>
        <strong>2. We identify the real issue.</strong><br/>
        Most couples think the problem is communication, but often there is a deeper pattern underneath.
      </p>

      <p>
        <strong>3. I guide the first safe conversation.</strong><br/>
        Instead of another argument, I help both partners speak and listen in a way that creates understanding.
      </p>

    </div>

  </div>

</section>

<hr className="max-w-6xl mx-auto border-gray-200 my-16" />

      {/* TESTIMONIALS */}

<section className="bg-[#f8f6f3] py-28 px-6">

  <div className="max-w-5xl mx-auto">

    <h2 className="text-4xl font-semibold text-center">
      What Couples Say
    </h2>

    <div className="mt-16 grid md:grid-cols-2 gap-8">

      {/* Testimonial 1 */}

      <div className="bg-white p-8 rounded-2xl shadow-md">

        <p className="text-lg italic">
          “Mahee helped us understand each other without blaming each other.
          We left the session feeling connected again.”
        </p>

        <p className="mt-4 font-medium text-gray-700">
          — Couple from Bangalore
        </p>

      </div>

      {/* Testimonial 2 */}

      <div className="bg-white p-8 rounded-2xl shadow-md">

        <p className="text-lg italic">
          “This session changed the way we communicate. It was calm,
          respectful, and incredibly insightful.”
        </p>

        <p className="mt-4 font-medium text-gray-700">
          — Anonymous Couple
        </p>

      </div>

    </div>

  </div>

</section>

<hr className="max-w-6xl mx-auto border-gray-200 my-16" />

      {/* PRICING */}

      <section className="bg-white py-28 px-6 text-center">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-4xl font-semibold">
            90-Minute Couples Clarity Session
          </h2>

          <p className="mt-6 text-2xl font-semibold">
            Investment: ₹1,999
          </p>

          <a
            href="https://calendly.com/mahee_clarity-session"
            className="mt-10 inline-block px-10 py-4 bg-[#4f7f67] text-white rounded-full text-lg"
          >
            Book Your Session
          </a>

          <p className="mt-3 text-sm text-gray-500">
             Only a few clarity sessions are offered each week.
          </p>
        </div>

      </section>

<hr className="max-w-6xl mx-auto border-gray-200 my-16" />

      {/* FOOTER */}

      <footer className="text-center py-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Mahee | Marriage & Intimacy Coach
      </footer>

    </main>
  );
}