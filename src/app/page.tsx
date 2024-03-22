import Button from "./components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <article>
        <img></img>
        <h1>Fernando Utizi</h1>
        <h2>Frontend Developer</h2>
        <div className="flex flex-col gap-4 bg-zinc-900">
          <Button url="https://www.linkedin.com/in/fernando-utizi-2a72a3233/" name="Linkedin" ></Button>
          <Button url="https://ferutizi.github.io/Portfolio/" name="Portfolio" ></Button>
          <Button url="https://www.linkedin.com/in/fernando-utizi-2a72a3233/" name="Online CV" ></Button>
          <Button url="https://github.com/ferutizi" name="Github" ></Button>
        </div>
      </article>
    </main>
  );
}
