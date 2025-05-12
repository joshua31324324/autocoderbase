import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto space-y-16 pt-20 px-4">
        {/* Hero Section - Everyman Brand */}
        <div className="text-center space-y-6 max-w-[800px] mx-auto">
          <h1 className="text-gradient-brand">
            Hello!
          </h1>
          <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
            My name is Joshua Oppong. I am a sophomore at the New Jersey Institute of Technology. I am currently studying for my Bachelor's degree in Computer Science. I am a full-stack developer with a passion for creating innovative and user-friendly applications. I have experience in various programming languages and frameworks, including JavaScript, React, Node.js, and Python. I am always eager to learn new technologies and improve my skills. I am excited to share my journey with you and showcase my work.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" className="text-base bg-gradient-brand hover:opacity-90">
              <Link href="/about">About</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-base border-primary-600 text-primary-700 hover:bg-primary-50">
              <Link href="/projects">Portfolio</Link>
            </Button>
          </div>
        </div>

        {/* Core Principles Section - Everyman Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
          <Card className="border-l-4 border-l-primary-500">
            <CardHeader>
              <CardTitle className="text-primary-700">Honest Guidance</CardTitle>
              <CardDescription>Clear advice you can trust</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                We believe in open, honest communication—so you always know where you stand and how to move forward.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary-500">
            <CardHeader>
              <CardTitle className="text-secondary-700">Practical Solutions</CardTitle>
              <CardDescription>Real results for real people</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                Our team focuses on what works for you—delivering solutions that are easy to understand, implement, and maintain.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent-500">
            <CardHeader>
              <CardTitle className="text-accent-700">Inclusive Support</CardTitle>
              <CardDescription>Here for everyone, every step</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                We’re committed to making technology accessible and helpful for all—no matter your background or experience.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Invitation Section - Friendly Call to Action */}
        <div className="text-center space-y-8 py-16">
          <h2 className="text-gradient-brand max-w-3xl mx-auto">
            Ready to see what approachable AI can do for you?
          </h2>
          <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
            Let’s work together to find practical, effective solutions that fit your needs. Everyone’s welcome.
          </p>
          <Button size="lg" className="text-base bg-gradient-innovation hover:opacity-90">
            <Link href="contact">Contact Me!</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
