import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <main className="max-w-4xl w-full space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Samson Njogu
        </h1>
        <h2 className="text-xl text-muted-foreground sm:text-2xl md:text-3xl">
          Software Engineer | Climate Adaptation Tools | Full-Stack Developer | CI/CD Expert
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground">
          Experienced in building robust backend systems, API development, and implementing CI/CD pipelines. 
          Skilled in Django, TypeScript, and cloud technologies.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/skills">My Skills</Link>
          </Button>
        </div>
        <div className="flex justify-center space-x-4 mt-6">
          <Link href="https://www.linkedin.com/in/samsonnjogu-b2588473" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="w-6 h-6" />
          </Link>
          <Link href="mailto:samsonnjogu@gmail.com">
            <MailIcon className="w-6 h-6" />
          </Link>
          {/* Add your GitHub link here */}
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="w-6 h-6" />
          </Link>
        </div>
      </main>
    </div>
  )
}