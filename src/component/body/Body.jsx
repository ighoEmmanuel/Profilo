import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { useMemo, useRef, useState, useEffect } from "react";
import "../body/Body.css";
import emailjs from "emailjs-com";
function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        inset: 0,
        height: 64,
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(12,14,24,0.35)",
        backdropFilter: "blur(6px)",
        color: "white",
        zIndex: 5,
        boxShadow: "0 2px 12px rgba(0,0,0,0.25)",
      }}
    >
      <a href="#about" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>About</a>
      <a href="#work" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>Work</a>
      <a href="#contact" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>Contact</a>
    </nav>
  );
}






function Hero() {
  const { size } = useThree();
  const scale = size.width < 680 ? 0.8 : 1;

  return (
    <group position={[0, 0.4 * scale, 0]}>
      <Text
        fontSize={0.36 * scale}
        position={[0, 1.4 * scale, 0]}
        color="white"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.012}
        outlineColor="black"
        fontFamily="Montserrat, Arial, sans-serif"
        
      >
        Hi, I'm
      </Text>

      <group position={[0, 0.9 * scale, 0]}>
        <Text
          fontSize={0.4 * scale}
          color="rgba(30, 64, 175, 0.35)"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="black"
        >
          Emmanuel Igho Ejiro
        </Text>

      </group>

      <Text
        fontSize={0.23 * scale}
        position={[0, -0.4 * scale, 0]}
        color="white"
        maxWidth={4 * scale}
        lineHeight={1.2}
        anchorX="center"
        anchorY="middle"
      >
         Developer. Problem Solver. Building robust web
        applications, mobile applications.
      </Text>
    </group>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#0c0f1c"]} />
      <fog attach="fog" args={["#0c0f1c", 6, 16]} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 4]} intensity={1.2} />
      <directionalLight position={[-6, -2, -3]} intensity={0.4} />
      <Hero />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}


function AboutMe() {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        zIndex: 3,
        margin: "0 auto",
        maxWidth: 900,
        color: "white",
        padding: "6rem 1.25rem",
        
      }}
    >
      <h2 style={{ fontSize: 28, marginBottom: 12, textAlign: "center" }}>About Me</h2>
      <div
        className="about-flex"
      >
        <img
          src="../assets/mypic.jpg"
          alt="Profile"
          style={{
            borderRadius: "50%",
            width: 200,
            height: 200,
            objectFit: "cover",
            marginBottom: "2rem",
            flexShrink: 0,
            marginTop: "1rem",
          }}
        />
        <p style={{ opacity: 0.9, lineHeight: 1.6, textAlign: "center" }}>
          I’m a passionate software engineer with experience building fast, responsive,
          and reliable mobile and web applications that deliver real value to users.
          A skilled software engineer with 1 years of professional experience,
          focusing on creating beautiful and functional web applications. 
          I have a strong foundation in frontend technologies and a love for bringing ideas to life, 
          from concept to deployment. I'm a quick learner and thrive on collaborating with teams to build efficient,
          scalable, and user-friendly solutions 
          that solve real-world problems. Let's work together to build something amazing!
        </p>
      </div>
    </section>
  );
}




function ContactMe() {
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: senderEmail,
      subject: title,
      message: message
    };


    emailjs
      .send(
         import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY     
      )
      .then(() => {
        setLoading(false);
        alert("Message sent successfully!");
      })
      .catch((err) => {
        console.error("Failed to send message:", err);
        alert("Something went wrong.");
      });
  };

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        zIndex: 3,
        margin: "0 auto",
        maxWidth: 500,
        color: "white",
        padding: "4rem 1.25rem",
        
      }}
    >
      <h2 style={{ fontSize: 28, marginBottom: 12,textAlign: "center", }}>Contact Me</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <label htmlFor="name" style={{fontSize: 20}}>Your Name</label>
        <input
          type="text"
          placeholder="What is your name?"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            padding: "0.75rem",
            borderRadius: 8,
            border: "1px solid #ccc",
            fontSize: 16,
          }}
        />
        <label htmlFor="senderEmail" style={{fontSize: 20}}>Your Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
          required
          style={{
            padding: "0.75rem",
            borderRadius: 8,
            border: "1px solid #ccc",
            fontSize: 16,
          }}
        />

        <label htmlFor="title" style={{fontSize: 20}}>Title</label>
        <input
          type="text"
          placeholder="Enter the title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{
            padding: "0.75rem",
            borderRadius: 8,
            border: "1px solid #ccc",
            fontSize: 16,
          }}
        />
      


        <label htmlFor="message" style={{fontSize: 20}}>Your message</label>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          style={{
            padding: "0.75rem",
            borderRadius: 8,
            border: "1px solid #ccc",
            fontSize: 16,
            resize: "vertical",
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "0.75rem",
            borderRadius: 8,
            border: "none",
            background: loading ? "#6b7280" : "#1e40af",
            color: "white",
            fontWeight: 700,
            fontSize: 18,
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </section>
  );
}

export default function Portfolio() {
  const [vh, setVh] = useState("100vh");
  useEffect(() => {
    const update = () => setVh(`${window.innerHeight}px`);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div style={{ background: "#0c0f1c" }}>
      <Navbar />
      <div id="home" style={{ position: "relative", height: vh, width: "100%", zIndex: 1 }}>
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <Scene />
        </Canvas>
      </div>

     
      <AboutMe />
        <ContactMe />

    </div>
  );
}
