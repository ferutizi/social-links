import Button from "./components/Button";
import Carrousel from "./components/Carrousel";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <article className="flex flex-col w-80 px-6 py-8 rounded-lg bg-zinc-900 items-center shadow-lg">
        <div className="flex rounded-full overflow-hidden h-32 w-32 border-2 mb-2 border-orange-400 shadow-md">
          <Carrousel />
        </div>
        <h1 className="my-1 text-xl">Fernando Utizi</h1>
        <h2 className="mb-6 text-sm text-orange-400">Frontend Developer</h2>
        <div className="flex flex-col gap-4 w-full">
          <Button url="https://www.linkedin.com/in/fernando-utizi-2a72a3233/" name="Linkedin" ></Button>
          <Button url="https://ferutizi.github.io/Portfolio/" name="Portfolio"></Button>
          <Button url="https://drive.google.com/file/d/1wZD1FW_PkvLFE63DBAxVKK1TONldZMqB/view?usp=drive_link" name="Online CV" ></Button>
          <Button url="https://github.com/ferutizi" name="Github" ></Button>
        </div>
      </article>
    </main>
  );
}
