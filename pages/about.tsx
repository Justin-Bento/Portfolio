import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { RiGithubFill, RiInstagramFill, RiLinkedinBoxFill, RiMailFill, RiSoundcloudFill, RiTwitterFill  } from "react-icons/ri";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import about from "@/styles/About.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>Justin Bento — About</title>
        <meta name="title" content="Justin Bento — About" />
        <meta
          name="keywords"
          content="Full-Stack, website design website developer"
        />
        <meta
          name="description"
          content="Explore my portfolio website showcasing my latest full-stack development work, featuring creative solutions for various clients and industries."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/public/website-screenshot.webp" />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://justin-bento.com/" />
        <meta property="og:title" content="Justin Bento — About" />
        <meta
          property="og:description"
          content="Explore my portfolio website showcasing my latest full-stack development work, featuring creative solutions for various clients and industries."
        />
        <meta property="og:image" content="/public/website-screenshot.webp" />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://justin-bento.com/" />
        <meta property="twitter:title" content="Justin Bento — About" />
        <meta
          property="twitter:description"
          content="Explore my portfolio website showcasing my latest full-stack development work, featuring creative solutions for various clients and industries."
        />
        <meta
          property="twitter:image"
          content="/public/website-screenshot.webp"
        />
      </Head>
      <Header />
      <main className={about.mainGrid}>
        <div className="">
          <div className={about.mediaContainer}>
            <Image
              src={"/media/tinywow_PXL_20230514_151905273_24263847.jpg"}
              fill
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className={about.mainImage}
            />
          </div>
        </div>
        <div className={about.aboutCopy} >
          <h1>
            I&#39;m Justin Bento. I live in Toronto Canada, where I create
            expirences unique for the web!
          </h1>
            <p>
              Ever since I can remember, my fascination with technology has been
              a driving force in my life. From dismantling old gadgets to
              understand their inner workings, to putting them back together
              again, I&#39;ve always been captivated by the world of technology. It
              was during middle school when I took my first computer class that
              I truly fell in love with this field, and nothing else seemed to
              capture my interest for a full-time career.
            </p>
            <p>
              Over time, my passion for technology led me to pursue a path in
              Humber College&#39;s Multimedia Design and Development Course. Here, I
              gained valuable knowledge in UI/UX design and developed a solid
              foundation of design and development skills. I have always
              prioritized strategy and established strong conceptual frameworks
              for my projects, ensuring that every aspect is thoughtfully
              crafted. Furthermore, I have always upheld accessibility as a
              crucial aspect of my work, recognizing the importance of
              inclusivity in the digital space.
            </p>
            <p>
              What sets me apart from other developers is my unique skillset,
              which allows me to envision the bigger picture, break things down,
              and effectively help people. This ability showcases my commitment,
              creativity, and problem-solving prowess, making me an ideal
              candidate for a wide range of IT roles.
            </p>
            <p>
              Fuelled by an insatiable thirst for knowledge, my eagerness to
              learn, passion, and growth mindset serve as the cornerstones of my
              success. I constantly seek opportunities to expand my skills and
              stay up-to-date with the latest advancements in the industry. From
              personal side projects to customizing my Linux setup, I
              consistently seek feedback and embrace challenges that come my
              way.
            </p>
          </div>
        <div className="">
          <ul role="list" className={about.social}>
            <SocialLink href="https://twitter.com/bilentoos" icon={RiTwitterFill}>
              Follow on Twitter
            </SocialLink>
            <SocialLink
              href="https://soundcloud.com/bento-box-519166246"
              target="_blank"
              icon={RiSoundcloudFill}
              className="mt-4"
            >
              Follow on Soundcloud
            </SocialLink>
            <SocialLink
              href="https://github.com/Justin-Bento"
              icon={RiGithubFill}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/justin--bento/"
              icon={RiLinkedinBoxFill}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:contact@justin-bento.com"
              icon={RiMailFill}
              className="pt-8 mt-4 border-t border-gray-100 dark:border-gray-700/40"
            >
              contact@justin-bento.com
            </SocialLink>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}

function SocialLink({ className, href, children, icon: Icon }: any) {
  return (
    <li className={className}>
      <Link
        href={href}
        className={about.socialLink}
      >
        <Icon className={about.SocialLinkIcon} />
        <span className="ml-3 text-sm">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}
