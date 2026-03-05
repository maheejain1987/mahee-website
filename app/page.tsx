export default function Home() {
  return (
    <main style={{fontFamily:"Arial", background:"#f7f4ef", padding:"40px"}}>

      <div style={{maxWidth:"900px", margin:"auto"}}>

        {/* HERO */}
        <h1 style={{fontSize:"40px", marginBottom:"10px"}}>
          Reconnect. Rebuild. Rediscover Each Other.
        </h1>

        <p style={{fontSize:"18px", marginBottom:"30px"}}>
          A private clarity session for couples who love each other,
          but feel emotionally distant, misunderstood, or stuck in
          repeating conflicts.
        </p>

        <a
          href="https://calendly.com"
          style={{
            background:"#2f6f4f",
            color:"white",
            padding:"15px 25px",
            borderRadius:"8px",
            textDecoration:"none",
            fontSize:"18px"
          }}
        >
          Apply for Couples Clarity Session
        </a>

        {/* PAIN SECTION */}
        <h2 style={{marginTop:"60px"}}>If this feels familiar...</h2>

        <ul style={{lineHeight:"1.8"}}>
          <li>You live in the same house but feel emotionally distant</li>
          <li>Small conversations turn into arguments</li>
          <li>One of you shuts down, the other feels unheard</li>
          <li>Physical intimacy feels rare or awkward</li>
          <li>You don't want separation — but something feels disconnected</li>
        </ul>

        {/* WHO IT IS FOR */}
        <h2 style={{marginTop:"50px"}}>Who This Session Is For</h2>

        <ul style={{lineHeight:"1.8"}}>
          <li>Couples who want to stay together</li>
          <li>Couples tired of constant misunderstandings</li>
          <li>Couples feeling emotional or physical distance</li>
          <li>Partners willing to reflect and grow</li>
        </ul>

        {/* ABOUT */}
        <h2 style={{marginTop:"50px"}}>About Mahee</h2>

        <p style={{lineHeight:"1.8"}}>
          I'm a Marriage & Intimacy Coach helping couples rebuild
          emotional safety, conscious communication, and physical
          connection.
        </p>

        <p style={{lineHeight:"1.8"}}>
          With a background in HR and human behavior, I guide couples
          to understand the deeper dynamics behind their conflicts and
          help them reconnect with clarity and respect.
        </p>

        {/* SESSION */}
        <h2 style={{marginTop:"50px"}}>What Happens In This Session</h2>

        <ul style={{lineHeight:"1.8"}}>
          <li>Identify repeating conflict patterns</li>
          <li>Understand emotional triggers on both sides</li>
          <li>Learn a safe communication structure</li>
          <li>Address intimacy blocks respectfully</li>
          <li>Create a reconnection plan</li>
        </ul>

        {/* PRICE */}
        <h2 style={{marginTop:"50px"}}>90-Minute Couples Clarity Session</h2>

        <p style={{fontSize:"20px", fontWeight:"bold"}}>
          Investment: ₹1,999
        </p>

        <a
          href="https://calendly.com"
          style={{
            background:"#2f6f4f",
            color:"white",
            padding:"15px 25px",
            borderRadius:"8px",
            textDecoration:"none",
            fontSize:"18px"
          }}
        >
          Book Your Session
        </a>

        <p style={{marginTop:"40px"}}>
          With care,<br/>
          Mahee<br/>
          Marriage & Intimacy Coach
        </p>

      </div>
    </main>
  );
}