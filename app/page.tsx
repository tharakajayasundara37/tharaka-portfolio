"use client";

import {
  FaAws,
  FaLinkedin
} from "react-icons/fa";

import { IconType } from "react-icons";


import { useEffect, useState, useRef, CSSProperties } from "react";

import Image from "next/image";


import emailjs from "@emailjs/browser";

import { SiSharp } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiKotlin,
  SiFirebase,
  SiTailwindcss,
  SiHtml5,
  SiGit,
  SiGithub,
  SiCss,
  SiVercel,
  SiPhp,
  SiFigma
} from "react-icons/si";


import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  Menu,
  Smartphone,
  X,
  Mail,
  ExternalLink,
  Phone,
  Server,
  Layers,
  Palette
} from "lucide-react";

const services = [

  {
    n:"01",
    title:"Web Development",
    text:"Fast, responsive and modern websites built for real people.",
    icon:Code2,
  },


  {
    n:"02",
    title:"Mobile Applications",
    text:"Useful Android experiences with clean interfaces.",
    icon:Smartphone,
  },


  {
    n:"03",
    title:"Backend Systems",
    text:"Reliable APIs, databases and complete platforms.",
    icon:Database,
  },

];





const projects = [

  {
    n:"01",
    title:"WelfareX",
    category:"FULL STACK PROJECT",

    description:
    "A modern welfare management system to manage users, services and digital workflows efficiently.",

    image:"/images/welfare.png",

    tags:[
      "NEXT.JS",
      "MONGODB",
      "TYPESCRIPT",
    ],

    link:
    "https://welfare-system-navy.vercel.app/",
  },


  {
    n:"02",
    title:"News Blog",
    category:"FULL STACK PROJECT",

    description:
    "A modern news and blog management platform for creating, managing and publishing digital content efficiently.",

    image:"/images/news-blog.png",

    tags:[
      "LARAVEL",
      "MYSQL",
      "CSS",
      "JS",
    ],

    link:
    "https://news-blog-management-laravel.vercel.app/",
  },


  {
    n:"03",
    title:"MediCare Appointment App",

    category:"MOBILE APPLICATION",

    description:
    "A healthcare appointment platform designed to connect patients and doctors with seamless booking and management features.",

    image:"/images/medicare.jpg",

    tags:[
      "KOTLIN",
      "SQLITE",
      "MOBILE",
    ],

    link:
    "https://github.com/tharakajayasundara37/MediCare-Appointment-App",
  },

];






const technologies:{
  name:string;
  icon:IconType;
  color:string;

}[] = [

  {
    name:"Next.js",
    icon:SiNextdotjs,
    color:"#000000",
  },


  {
    name:"React",
    icon:SiReact,
    color:"#61DAFB",
  },


  {
    name:"TypeScript",
    icon:SiTypescript,
    color:"#3178C6",
  },


  {
    name:"AWS",
    icon:FaAws,
    color:"#FF9900",
  },


  {
    name:"JavaScript",
    icon:SiJavascript,
    color:"#F7DF1E",
  },


  {
    name:"Node.js",
    icon:SiNodedotjs,
    color:"#339933",
  },


  {
    name:"MongoDB",
    icon:SiMongodb,
    color:"#47A248",
  },


  {
    name:"MySQL",
    icon:SiMysql,
    color:"#4479A1",
  },


  {
    name:"Kotlin",
    icon:SiKotlin,
    color:"#7F52FF",
  },


  {
    name:"Firebase",
    icon:SiFirebase,
    color:"#FFCA28",
  },


  {
    name:"Tailwind CSS",
    icon:SiTailwindcss,
    color:"#06B6D4",
  },


  {
    name:"HTML5",
    icon:SiHtml5,
    color:"#E34F26",
  },


  {
    name:"CSS",
    icon:SiCss,
    color:"#1572B6",
  },


  {
    name:"Git",
    icon:SiGit,
    color:"#F05032",
  },


  {
    name:"GitHub",
    icon:SiGithub,
    color:"#181717",
  },


  {
    name:"Vercel",
    icon:SiVercel,
    color:"#000000",
  },

];






type SnowParticle = {

  id:number;

  left:number;

  size:number;

  duration:number;

  delay:number;

  blur:number;

  opacity:number;

};






export default function HomePage(){

const form = useRef<HTMLFormElement>(null);

const [sending,setSending] = useState(false);


const sendEmail = (e:any)=>{

  e.preventDefault();

  setSending(true);


  emailjs.sendForm(

    "service_ukx97ce",

    "template_n94c84u",

    form.current!,

    "324MNf10hepHk3XZ2"

  )

  .then(()=>{

    alert("Message sent successfully!");

    form.current?.reset();

  })

  .catch((error)=>{

    console.log(error);

    alert("Message failed!");

  })

  .finally(()=>{

    setSending(false);

  });

};

  const [snowflakes,setSnowflakes] =
    useState<SnowParticle[]>([]);


  const [open,setOpen] =
    useState(false);


  const [heroProgress,setHeroProgress] =
    useState(0);

  const [contactOpen,setContactOpen] = useState(false);



// Scroll Reveal Animation


useEffect(()=>{


  const observer = new IntersectionObserver(


    (entries)=>{


      entries.forEach((entry)=>{


        if(entry.isIntersecting){


          entry.target.classList.add(
            "in-view"
          );


        }


        else{


          entry.target.classList.remove(
            "in-view"
          );


        }


      });


    },


    {

      threshold:0.14,

      rootMargin:"0px 0px -80px 0px"

    }


  );





  const elements =

    document.querySelectorAll(
      "[data-reveal]"
    );





  elements.forEach((element)=>{


    observer.observe(element);


  });





  return ()=>{


    observer.disconnect();


  };


},[]);
 // Generate snow particles

useEffect(()=>{


  const particles:SnowParticle[] =


    Array.from(


      {
        length:180
      },


      (_,index)=>({


        id:index,


        left:
        Math.random()*100,


        size:
        Math.random()*10+4,


        duration:
        Math.random()*8+5,


        delay:
        Math.random()*10,


        blur:
        Math.random()*2,


        opacity:
        Math.random()*0.5+0.5,


      })


    );





  setSnowflakes(

    particles

  );


},[]);
  // Hero parallax scroll

  useEffect(()=>{


    let frame:number = 0;



    const updateHero = ()=>{


      cancelAnimationFrame(frame);



      frame =
      requestAnimationFrame(()=>{


        const distance =

          Math.max(

            window.innerHeight * 0.72,

            420

          );



        const progress =

          window.scrollY /

          distance;



        setHeroProgress(

          Math.min(

            1,

            Math.max(

              0,

              progress

            )

          )

        );


      });


    };



    updateHero();



    window.addEventListener(

      "scroll",

      updateHero,

      {
        passive:true
      }

    );



    return ()=>{


      cancelAnimationFrame(frame);



      window.removeEventListener(

        "scroll",

        updateHero

      );


    };


  },[]);




// Generate snow particles

useEffect(()=>{


  const particles:SnowParticle[] =

    Array.from(

      {
        length:120
      },


      (_,index)=>({


        id:index,


        left:
        Math.random()*100,


        size:
        Math.random()*8+3,


        duration:
        Math.random()*12+8,


        delay:
        Math.random()*15,


        blur:
        Math.random()*3,


        opacity:
        Math.random()*0.7+0.3,


      })


    );



  setSnowflakes(
    particles
  );


},[]);





// Hero parallax scroll

useEffect(()=>{


  let frame:number = 0;



  const updateHero = ()=>{


    cancelAnimationFrame(frame);



    frame =

    requestAnimationFrame(()=>{


      const distance =

        Math.max(

          window.innerHeight * 0.72,

          420

        );



      const progress =

        window.scrollY /

        distance;



      setHeroProgress(


        Math.min(

          1,


          Math.max(

            0,

            progress

          )


        )


      );



    });



  };



  updateHero();



  window.addEventListener(

    "scroll",

    updateHero,

    {

      passive:true

    }

  );



  return ()=>{


    cancelAnimationFrame(frame);



    window.removeEventListener(

      "scroll",

      updateHero

    );


  };


},[]);

 return (

  <main className="unifex-site">



    {/* HEADER */}

    <header className="u-header-new">


      <a
        href="#home"
        className="u-logo-new"
      >

        ◆ THARAKA

      </a>




      <nav className="u-nav-new">

        <a href="#home">
          HOME
        </a>


        <a href="#about">
          ABOUT
        </a>


        <a href="#services">
          SERVICES
        </a>


        <a href="#works">
          WORKS
        </a>


        <a href="#contact">
          CONTACT
        </a>


      </nav>

      <a
        href="#contact"
        className="u-talk-new"
      >

        LET'S TALK

        <ArrowUpRight size={15}/>

      </a>





      <button

        className="u-menu-new"

        onClick={()=>setOpen(!open)}

      >

        {
          open ?

          <X/>

          :

          <Menu/>

        }

      </button>






      {
        open && (

          <div className="u-mobile-new">


            <a href="#home">
              HOME
            </a>


            <a href="#about">
              ABOUT
            </a>


            <a href="#services">
              SERVICES
            </a>


            <a href="#works">
              WORKS
            </a>


            <a href="#contact">
              CONTACT
            </a>


          </div>

        )
      }



    </header>







{/* HERO */}


<section

      id="home"

      className="u-hero-scroll"

      data-reveal

    >

      <div

        className="u-hero"

        style={{

          "--hero-p":heroProgress,

        } as CSSProperties}

      >




        {/* SNOW */}

        <div className="snow-container">


          {

            snowflakes.map((snow)=>(


              <span

                key={snow.id}

                className="snowflake"

                style={{


                  left:`${snow.left}%`,


                  width:`${snow.size}px`,


                  height:`${snow.size}px`,


                  animationDuration:
                  `${snow.duration}s`,


                  animationDelay:
                  `${snow.delay}s`,


                  filter:
                  `blur(${snow.blur}px)`,


                  opacity:
                  snow.opacity,


                }}

              />


            ))

          }


        </div>







        {/* HERO TITLE */}


        <div className="u-hero-word">


          <span>

            THARAKA JAYASUNDARA

          </span>


          FULL STACK

          <br/>

          ENGINEER


        </div>








 {/* LEFT */}


<div className="u-hero-left u-rise">


  <div className="u-role-list">


    <span>
      PROGRAMMER
    </span>


    <span>
      DESIGNER
    </span>


    <span>
      DEVELOPER
    </span>


  </div>




  <div className="u-link-row">


    <a href="#works">

      PROJECTS

    </a>


    <a href="#about">

      ABOUT ME

    </a>


  </div>





  <a

    href="/Tharaka_Jayasundara_CV.pdf"

    download

    className="u-cv-button"

  >

    DOWNLOAD CV

  </a>


</div>

        {/* IMAGE */}


        <div className="u-portrait u-rise delay-1">


          <Image

            src="/images/tharaka-cutout-v2.png"

            alt="Tharaka Jayasundara"

            fill

            priority

            sizes="(max-width:700px) 90vw,45vw"

          />


        </div>








        {/* STATS Cards*/}


        <div className="u-hero-right u-rise delay-2">


          <div className="stat-card">


            <b>
              2+
            </b>


            <span>

              YEARS

              <br/>

              EXPERIENCE

            </span>


          </div>

          <div className="stat-card">


            <b>
              6+
            </b>


            <span>

              PROJECTS

              <br/>

              DEVELOP

            </span>


          </div>





          <div className="stat-card">


            <b>
              5+
            </b>


            <span>

              PROGRAMMING 


              <br/>

              LANGUAGES

            </span>


          </div>


        </div>








        <div className="u-scroll-label">


          SCROLL TO EXPLORE


          <ArrowDown size={13}/>


        </div>

        <a

          href="#about"

          className="u-float-arrow"

        >

          <ArrowDown size={18}/>

        </a>




      </div>


    </section>


    {/* MARQUEE */}


    <div className="u-marquee">


      <div>


        ✦ FULL STACK ENGINEER ✦

        WEB DEVELOPMENT ✦

        MOBILE APPLICATIONS ✦

        UI/UX DESIGN ✦

        BACKEND SYSTEMS ✦

        CLOUD SOLUTIONS ✦

        CYBER SECURITY ✦


      </div>


    </div>








    {/* ABOUT */}


    <section

      className="u-manifesto"

      id="about"

    >



      <div

        className="u-metric"

        data-reveal

      >

        <strong>

          10+

        </strong>


        <span>

          PROJECTS BUILT

          <br/>

          FROM IDEA TO PRODUCT

        </span>


      </div>





      <h2 data-reveal>


        I CREATE DIGITAL EXPERIENCES WITH CLEAN DESIGN,

        STRONG ENGINEERING AND MODERN TECHNOLOGY.



        <span>

          MY WORK SPEAKS THROUGH RESULTS.

        </span>


      </h2>





      <a

        href="#works"

        className="u-lime-dot"

      >

        <ArrowDown/>


      </a>



    </section>


    {/* ABOUT DETAIL */}


    <section className="u-about-detail">
      <div
        className="u-about-image"
        data-reveal
      >
        <Image

          src="/images/tharaka-jayasundara.png"

          alt="Tharaka"

          fill

          sizes="(max-width:800px) 100vw,50vw"

        />


      </div>

      <div
        className="u-about-copy"
        data-reveal

      >
        <p className="u-kicker">

          01 / WHO I AM

        </p>
        <h2>
          Creative thinking.Practical
          <br/>
          <span>
             building.
          </span>
        </h2>
        <p>

          I'm Tharaka Jayasundara, a developer focused on building web applications, digital products and secure technology solutions.

        </p>
        <p>

          I transform ideas into scalable and user-friendly digital experiences.

        </p>

        <a href="#contact">

          MORE ABOUT ME

          <ArrowRight size={16}/>

        </a>
        <br/>


        <div className="u-experience">


          <b>

            IT

          </b>


          <span>

            Developer

            <br/>

            Engineer

          </span>


        </div>



      </div>


    </section>

{/* ================= WHO I AM ================= */}


<section className="u-who">


  <div
    className="u-who-header"
    data-reveal
  >


    <span className="u-kicker">
      01 / WHO I AM
    </span>


    <h2>

      Creative
      <br />

      thinking.

      <br />

      <span>
        Practical
        <br />
        building.
      </span>


    </h2>


  </div>





  <div className="u-who-content">


    <p data-reveal>

      I am an Information Technology undergraduate currently
      pursuing Higher National Diploma in Information Technology
      (HNDIT), passionate about building modern digital solutions
      through software development and emerging technologies.

    </p>





    <p data-reveal>

      I enjoy creating responsive web applications, backend
      systems and database-driven solutions using modern
      technologies. Through academic projects and self-learning,
      I continue to improve my skills and explore new technologies.

    </p>





    <p data-reveal>

      I am currently seeking an internship opportunity where I can
      apply my knowledge, learn from experienced developers and
      contribute to real-world software projects.

    </p>


  </div>





  <div
    className="u-who-tags"
    data-reveal
  >


    <span>
      FULL STACK DEVELOPMENT
    </span>


    <span>
      WEB TECHNOLOGIES
    </span>


    <span>
      DATABASE SYSTEMS
    </span>


    <span>
      CONTINUOUS LEARNING
    </span>


  </div>


</section>

 {/* ===========TECHNOLOGIES=========== */}

<section className="u-tech">


  <div
    className="u-tech-header"
    data-reveal
  >

    <p className="u-kicker">

          01 / TECHNOLOGY STACK

        </p>



            <h2>

              Tools and <span> technologies use.</span>

            </h2>


      </div>





      <div className="u-tech-grid">


        {
          technologies.map((tech,index)=>{


            const Icon = tech.icon;


            return (

            <div
              className="u-tech-card"
              key={tech.name}
              data-reveal
              style={{
                transitionDelay:`${index * 80}ms`
              }}
            >


                <span className="u-tech-number">

                  {String(index + 1).padStart(2,"0")}

                </span>





                <div className="u-tech-icon-box">


                  <Icon

                    className="u-tech-icon"

                    style={{

                      color:tech.color

                    }}

                  />


                </div>





                <h3>

                  {tech.name}

                </h3>



              </div>

            );


          })
        }


      </div>



    </section>

{/* ================= CAPABILITIES ================= */}

<section 
  className="u-capabilities" 
  id="capabilities"
>


  <div
    className="u-capabilities-header"
    data-reveal
  >

    <span className="u-kicker">
      03 / CAPABILITIES
    </span>


    <h2>
      Building solutions with{" "}
      <span>
        modern technologies.
      </span>
    </h2>


  </div>





  <div className="u-capabilities-grid">





    {/* WEB DEVELOPMENT */}

    <div className="u-capability-card">


      <div className="u-capability-tech">

        <SiHtml5 className="html-icon" />

        <SiCss className="css-icon" />

        <SiJavascript className="js-icon" />

        <SiReact className="react-icon" />

        <SiNextdotjs className="next-icon" />

      </div>
      <span className="u-capability-number">
        01
      </span>
      <h3>
        WEB DEVELOPMENT
      </h3>
      <p>
        Creating modern responsive websites with clean structure,
        optimized performance and user-focused experiences.
      </p>

      <small>
        HTML • CSS • JavaScript • React • Next.js
      </small>

    </div>









    {/* FULL STACK DEVELOPMENT */}


    <div className="u-capability-card">



      <div className="u-capability-tech">


        <SiReact className="react-icon" />

        <SiNextdotjs className="next-icon" />

        <SiNodedotjs className="node-icon" />



      </div>





      <span className="u-capability-number">
        02
      </span>

      <h3>
        FULL STACK DEVELOPMENT
      </h3>

      <p>
        Building complete web applications with frontend,
        backend systems and database integration.
      </p>

      <small>
        React • Next.js • Node.js • APIs
      </small>

    </div>

    {/* UI DEVELOPMENT */}



    <div className="u-capability-card">



      <div className="u-capability-tech">


        <SiReact className="react-icon" />

        <SiTailwindcss className="tailwind-icon" />

        <SiTypescript className="ts-icon" />



      </div>





      <span className="u-capability-number">
        03
      </span>





      <h3>
        UI DEVELOPMENT
      </h3>





      <p>
        Transforming designs into responsive and interactive
        user interfaces.
      </p>





      <small>
        Responsive Design • Components • UX
      </small>



    </div>









    {/* DATABASE SYSTEMS */}



    <div className="u-capability-card">



      <div className="u-capability-tech">


        <SiMysql className="mysql-icon" />

        <SiMongodb className="mongo-icon" />

        <SiFirebase className="firebase-icon" />



      </div>





      <span className="u-capability-number">
        04
      </span>





      <h3>
        DATABASE SYSTEMS
      </h3>





      <p>
        Designing structured database solutions for
        reliable applications.
      </p>





      <small>
        MySQL • MongoDB • Firebase
      </small>



    </div>









    {/* API & BACKEND */}



    <div className="u-capability-card">



      <div className="u-capability-tech">


        <SiNodedotjs className="node-icon" />

        <SiPhp className="php-icon" />

        <FaJava className="java-icon" />

      </div>

      <span className="u-capability-number">
        05
      </span>
      <h3>
        API & BACKEND
      </h3>
      <p>
        Developing backend logic, REST APIs and
        server-side solutions.
      </p>
      <small>
        Node.js • PHP • Java • C#
      </small>
    </div>
  </div>
</section>    
{/* SERVICES */}

<section

  className="u-services"

  id="services"

>
      <p className="u-kicker light">

        04 / WHAT I DO

      </p>
      <h2 data-reveal>

        SERVICES

      </h2>

      <div className="u-service-list">

        {
          services.map(

            ({
              n,
              title,
              text,
              icon:Icon

            })=>(


              <article

                key={title}

                data-reveal

              >
                <span>

                  {n}

                </span>
                <Icon />
                <div>
                  <h3>

                    {title}

                  </h3>




                  <p>

                    {text}

                  </p>



                </div>

                <ArrowUpRight

                  className="u-service-arrow"

                />

              </article>

            )

          )
        }
      </div>


      <div className="u-service-blob">


        CREATE

        <br/>

        BUILD

        <br/>

        GROW


      </div>



    </section>


 {/* PROJECTS */}


<section

  className="u-works"

  id="works"

>


<div 
  className="u-works-header"
>

  <span className="u-kicker">
    05 / SELECTED PROJECTS
  </span>


  <h2>
    WOR
    <span>
      KS
    </span>
  </h2>


</div>



<div className="u-projects">


{
  projects.map((project)=>(


    <article

      key={project.title}

      className="u-project"

      data-reveal

    >


      <div

        className={`u-project-screen project-${project.n}`}

        style={{

          backgroundImage:

          `url(${project.image})`

        }}

      >


        <div className="u-project-overlay"/>



        <div className="u-project-meta">


          <span>

            {project.category}

          </span>


          <span>

            {project.n}

          </span>


        </div>




        <div className="u-project-content">


          <h3>

            {project.title}

          </h3>



          <p>

            {project.description}

          </p>




          <div className="u-project-tags">


          {

            project.tags.map((tag)=>(


              <span

                key={tag}

              >

                {tag}


              </span>


            ))

          }


          </div>




          <a

            href={project.link}

            target="_blank"

            rel="noopener noreferrer"

            className="u-project-button"

          >

            EXPLORE PROJECT


          </a>




        </div>


      </div>


    </article>


  ))
}



</div>





{/* DOWNLOAD CV */}


<div 
  className="u-works-cv"
  data-reveal
>


<a

  href="/Tharaka_Jayasundara_CV.pdf"

  download

  className="u-cv-button"

>

  DOWNLOAD CV 


</a>


</div>

</section>

{/* ================= CONTACT ================= */}

<section 

className="u-contact" 

id="contact"

>


<p className="u-kicker light">

06 / GET IN TOUCH

</p>



<div className="u-contact-grid">



  {/* LEFT TITLE */}

  <div className="u-contact-title">


    <h2 data-reveal>

      LET'S MAKE
      <br/>

      SOMETHING
      <br/>

      <span>
        GREAT.
      </span>

    </h2>


  </div>

  {/* RIGHT FORM */}

<div className="u-contact-form">


  <form
    ref={form}
    onSubmit={sendEmail}
  >


    <div className="u-form-row">


      <div>

        <label>
          NAME
        </label>


        <input
          type="text"
          name="from_name"
          placeholder="Your name"
          required
        />

      </div>



      <div>

        <label>
          EMAIL
        </label>


        <input
          type="email"
          name="from_email"
          placeholder="you@email.com"
          required
        />

      </div>


    </div>

    <label>
      MESSAGE
    </label>

    <textarea

      name="message"

      placeholder="Tell me about your project..."

      required

    />

    <button

      type="submit"

      disabled={sending}

    >
      {
        sending

        ?

        "Sending..."

        :

        "Send Message →"
      }
    </button>

  </form>

</div>

</div>

  {/* ================= FOOTER ================= */}


        <footer className="u-footer">


          <div className="u-footer-grid">


            {/* BRAND */}

            <div className="u-footer-brand">


              <h3>
                THARAKA
              </h3>


              <p>

                Full Stack Developer passionate about
                building modern web applications,
                digital experiences and exploring
                new technologies.

              </p>



              <div className="u-footer-social">


                <a
                  href="https://github.com/tharakajayasundara37"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub />
                </a>



                <a
                  href="https://www.linkedin.com/in/tharaka-jayasundara-4ab1813ba/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>



                <a
                  href="https://vercel.com/tharakajayasundara37s-projects"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiVercel />
                </a>


              </div>


            </div>

            {/* LINKS */}

            <div className="u-footer-links">


              <h4>
                QUICK LINKS
              </h4>


              <a href="#home">
                Home
              </a>


              <a href="#about">
                About
              </a>


              <a href="#services">
                Services
              </a>


              <a href="#works">
                Works
              </a>


              <a href="#contact">
                Contact
              </a>


            </div>

            {/* CONTACT */}


            <div className="u-footer-contact">


              <h4>
                GET IN TOUCH
              </h4>



              <a href="mailto:tharakajayasundara37@gmail.com">

                Email

              </a>



              <a href="tel:+94743153951">

                Phone

              </a>



              <a href="https://github.com/tharakajayasundara37">

                GitHub

              </a>



              <a href="https://www.linkedin.com/in/tharaka-jayasundara-4ab1813ba/">

                LinkedIn

              </a>


            </div>

          </div>

          <div className="u-footer-bottom">


            <span>

              © 2026 THARAKA JAYASUNDARA

            </span>

            <a href="#home">

              BACK TO TOP ↑
            </a>
          </div>
</footer>
    </section>

              {/* ================= FLOATING CONTACT ================= */}


              <div className="floating-contact">


                <button

                  className="contact-toggle"

                  onClick={()=>setContactOpen(!contactOpen)}

                >

                  {contactOpen ? <X /> : <Mail />}

                  <span>
                    LET'S TALK
                  </span>


                </button>





                {contactOpen && (


                  <div className="contact-menu">


                    <a

                      href="https://github.com/tharakajayasundara37"

                      target="_blank"

                      rel="noopener noreferrer"

                    >

                      <SiGithub />

                      <span>
                        GitHub
                      </span>

                    </a>





                    <a

                      href="https://www.linkedin.com/in/tharaka-jayasundara-4ab1813ba/"

                      target="_blank"

                      rel="noopener noreferrer"

                    >

                      <FaLinkedin />

                      <span>
                        LinkedIn
                      </span>

                    </a>





                    <a

                      href="https://vercel.com/tharakajayasundara37s-projects"

                      target="_blank"

                      rel="noopener noreferrer"

                    >

                      <SiVercel />

                      <span>
                        Vercel
                      </span>

                    </a>





                    <a

                      href="mailto:tharakajayasundara37@gmail.com"

                    >

                      <Mail />

                      <span>
                        Email
                      </span>

                    </a>





                    <a

                      href="tel:+94743153951"

                    >

                      <Phone />

                      <span>
                        Call
                      </span>

                    </a>

                  </div>

                )}
        </div>
  </main>

);

}