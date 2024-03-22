import Button from "./components/Button";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <article className="flex flex-col w-80 p-6 rounded-lg bg-zinc-900 items-center">
        <img></img>
        <h1 className="my-1">Fernando Utizi</h1>
        <h2 className="mb-6 text-sm text-orange-400">Frontend Developer</h2>
        <div className="flex flex-col gap-4 w-full">
          <Button url="https://www.linkedin.com/in/fernando-utizi-2a72a3233/" name="Linkedin" ></Button>
          <Button url="https://ferutizi.github.io/Portfolio/" name="Portfolio"></Button>
          <Button url="https://www.linkedin.com/in/fernando-utizi-2a72a3233/" name="Online CV" ></Button>
          <Button url="https://github.com/ferutizi" name="Github" ></Button>
        </div>
      </article>
    </main>
  );
}
