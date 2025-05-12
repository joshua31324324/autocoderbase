import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <main className="max-w-2xl w-full space-y-8 py-20">
        <h1 className="text-gradient-brand text-center">About Me</h1>
        <p className="text-lg text-medium-contrast text-center">
          I believe that most things are possible, as long as the person has enough knowledge on a situation. If a person wanted to, say, create a website that could function as a game AND a social media platform, I would say it is possible with enough effort. The reason I went into programming is because I wanted to create the things that I've always wanted. I've had a lot of aspirations since I was a child, but I always thought they would never come to pass. I always assumed that being a programmer was something I'd never get to do.</p>
        <p className="text-lg text-medium-contrast text-center">However, now that I'm an adult, I realize that achieving my dreams is all within the palm of my hand. As a result, I have decided to learn programming and web development. In my two years of learning programming, I have already learned Python, HTML, CSS, JavaScript/TypeScript, GDScript, and Java.I have also created a calculator project, maintained a database, and made other projects, some of which are hosted on this website.</p>
        <p className="text-lg text-medium-contrast text-center">I hope that what I've made satisfies you too.</p>
        <div className="text-center">
          <Link href="/" className="text-primary underline hover:text-primary-700">Back to Home</Link>
        </div>
      </main>
    </div>
  );
}
