import { ThemeToggle } from "@/components/settings";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const Page = () => {
  return (
    <main>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur h-16 flex items-center">
        <div className="container flex items-center justify-between">
          <div>
            <p className="text-xl font-bold text-primary uppercase">Next-ui</p>
          </div>
          <nav>
            <ThemeToggle />
          </nav>
        </div>
      </header>
      <div className="container mx-auto py-4">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-primary md:text-2xl lg:text-4xl text-left">
              Build your component library.
            </h1>
            <p className="text-base text-primary">
              Dashboard, cards, authentication. Some examples built using the
              components. Use this as a guide to build your own.
            </p>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <Button variant="default" asChild>
              <a
                href="https://github.com/sizarcorpse"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                Follow me on github
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a
                href="https://www.linkedin.com/in/ramizimran/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
