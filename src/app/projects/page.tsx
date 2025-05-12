import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <main className="max-w-2xl w-full space-y-8 py-20">
        <h1 className="text-gradient-brand text-center">Our Work</h1>
        <p className="text-lg text-medium-contrast text-center">
          Explore some of the projects I've made, each focused on delivering practical, effective solutions for real people and organizations.
        </p>
        <a href="https://unemployment-visualization-gih01tf2q.vercel.app/">
    <h2 className="text-lg text-medium-contrast text-center">Unemployment</h2>
</a>
<p className="text-lg text-medium-contrast text-center">
    This site shows a slideshow showing the rates of unemployment in America.
</p>

<a href="https://chat-mu-tawny-31.vercel.app/">
    <h2 className="text-lg text-medium-contrast text-center">Chat</h2>
</a>
<p className="text-lg text-medium-contrast text-center">
    This site is a chat application that allows users to send and receive messages in real-time.
</p>

<a href="https://weekdays-nine.vercel.app/">
    <h2 className="text-lg text-medium-contrast text-center">Weekdays</h2>
</a>
<p>This site tells you what day it is today.</p>

        <div className="text-center">
          <Link href="/" className="text-primary underline hover:text-primary-700">Back to Home</Link>
        </div>
      </main>
    </div>
  );
}
