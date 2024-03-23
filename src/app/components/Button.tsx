interface ButtonProps {
  url: string,
  name: string,
}

export default function Button({ url, name }: ButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <button type="button" className="w-full rounded-lg shadow-md py-2 text-sm bg-zinc-800 hover:text-orange-400 hover:border-orange-400 border-transparent border-b transition-all ease-in-out duration-200">{name}</button>
    </a>
  )
}

