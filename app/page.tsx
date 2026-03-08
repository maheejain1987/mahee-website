import { CheckCircle, XCircle } from "lucide-react";

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

      <section className="max-w-6xl mx-auto px-6 pt-20 pb-28 grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

        {/* LEFT SIDE - TEXT */}

        <div className="max-w-xl">

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            Rebuild Emotional Connection in Your Relationship
          </h1>

          <p className="mt-4 text-xl text-gray-700">
            90-Minute Couples Clarity Session with Mahee
          </p>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
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

        <div className="flex justify-center relative">

         <img
        src="/couple.png"
        alt="Couple reconnecting emotionally"
        className="relative z-10 rounded-3xl shadow-2xl w-full max-w-lg hover:scale-[1.02] transition duration-500"
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

      {/* WHO THIS SESSION IS FOR */}

<section className="bg-[#f8f6f3] py-28 px-6">

<div className="max-w-6xl mx-auto">

<h2 className="text-3xl font-semibold text-center mb-16">
Is This Session Right For You?
</h2>

<div className="grid md:grid-cols-2 gap-12">

<div className="bg-white p-8 rounded-xl shadow-sm">

<h3 className="text-xl font-semibold mb-6 text-green-700">
This session is a great fit if:
</h3>

<ul className="space-y-4 text-gray-700">

<li className="flex items-start gap-3">
<CheckCircle className="text-green-600 mt-1" size={20}/>
<span>You feel emotionally distant from your partner</span>
</li>

<li className="flex items-start gap-3">
<CheckCircle className="text-green-600 mt-1" size={20}/>
<span>Conversations often turn into arguments</span>
</li>

<li className="flex items-start gap-3">
<CheckCircle className="text-green-600 mt-1" size={20}/>
<span>You want to rebuild trust and intimacy</span>
</li>

<li className="flex items-start gap-3">
<CheckCircle className="text-green-600 mt-1" size={20}/>
<span>Both partners are willing to understand each other</span>
</li>

<li className="flex items-start gap-3">
<CheckCircle className="text-green-600 mt-1" size={20}/>
<span>You want clarity before problems escalate</span>
</li>

</ul>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm">

<h3 className="text-xl font-semibold mb-6 text-red-600">
This session may NOT be right if:
</h3>



</div>

</div>

<div className="bg-white p-8 rounded-xl shadow-md">

<h3 className="text-xl font-semibold mb-6 text-red-600">
This session may NOT be right if:
</h3>

<ul className="space-y-4 text-gray-700">

<li className="flex items-start gap-3">
<XCircle className="text-red-600 mt-1" size={20}/>
<span>One partner refuses to participate</span>
</li>

<li className="flex items-start gap-3">
<XCircle className="text-red-600 mt-1" size={20}/>
<span>You are looking for someone to take sides</span>
</li>

<li className="flex items-start gap-3">
<XCircle className="text-red-600 mt-1" size={20}/>
<span>There are safety or abuse concerns</span>
</li>

<li className="flex items-start gap-3">
<XCircle className="text-red-600 mt-1" size={20}/>
<span>You expect instant solutions</span>
</li>

</ul>

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

<section className="py-28 px-6">

<div className="max-w-6xl mx-auto">

<h2 className="text-3xl font-semibold text-center mb-16">
What Couples Are Saying
</h2>

<div className="grid md:grid-cols-3 gap-8">

{/* TESTIMONIAL 1 */}

<div className="bg-white p-8 rounded-xl shadow-sm">

<p className="text-yellow-500 text-lg mb-4">★★★★★</p>

<p className="text-gray-700">
“This session helped us understand each other in a way we hadn't for years.
We left with clarity and practical steps to reconnect.”
</p>

<p className="mt-6 text-sm text-gray-500">
— Couples Clarity Session Client
</p>

</div>

{/* TESTIMONIAL 2 */}

<div className="bg-white p-8 rounded-xl shadow-sm">

<p className="text-yellow-500 text-lg mb-4">★★★★★</p>

<p className="text-gray-700">
“We were stuck in the same arguments again and again.  
The session helped us slow down and actually listen to each other.”
</p>

<p className="mt-6 text-sm text-gray-500">
— Recent Client
</p>

</div>

{/* TESTIMONIAL 3 */}

<div className="bg-white p-8 rounded-xl shadow-sm">

<p className="text-yellow-500 text-lg mb-4">★★★★★</p>

<p className="text-gray-700">
“It felt safe, calm and non-judgmental.  
We both walked away feeling hopeful again.”
</p>

<p className="mt-6 text-sm text-gray-500">
— Couples Coaching Client
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
            Book Session
          </a>

          <p className="mt-3 text-sm text-gray-500">
             Only a few clarity sessions are offered each week.
          </p>
        </div>

      </section>

<hr className="max-w-6xl mx-auto border-gray-200 my-16" />

     {/* FINAL REASSURANCE */}

<section className="bg-[#f8f6f3] py-24 px-6">

  <div className="max-w-3xl mx-auto text-center">

    <h2 className="text-3xl font-semibold mb-6">
      Sometimes One Honest Conversation Can Change Everything
    </h2>

    <p className="text-lg text-gray-600">
      Many couples wait too long before seeking guidance.  
      If you both still care about the relationship, a structured conversation
      can help you understand each other in a completely new way.
    </p>

    <p className="mt-6 text-lg text-gray-600">
      This session is not about blame — it’s about clarity, understanding,
      and finding a way forward together.
    </p>

    <a
      href="https://calendly.com/mahee_clarity-session"
      className="inline-block mt-10 px-8 py-4 bg-[#4f7f67] text-white rounded-full shadow-md hover:shadow-lg transition"
    >
      Book Your Couples Clarity Session
    </a>

    <p className="mt-4 text-sm text-gray-500">
      Limited sessions available each week
    </p>

  </div>

</section>
     
      {/* FOOTER */}

      <footer className="text-center py-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Mahee | Marriage & Intimacy Coach
      </footer>


 {/* FLOATING CTA BUTTON */}

<a
  href="https://calendly.com/mahee_clarity-session"
  className="fixed bottom-6 right-6 bg-[#4f7f67] text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium hover:scale-105 transition"
>
  Book Session
</a>

    </main>

   
  );
}