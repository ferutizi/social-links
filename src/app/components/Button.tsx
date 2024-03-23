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
      className="overflow-hidden rounded-lg"
    >
      <button
        type="button"
        className="w-full rounded-lg shadow-md py-2 text-sm bg-zinc-800 hover:text-orange-400 border-transparent border-b transition-all ease-in-out duration-300 after:duration-300 relative after:absolute after:content-[''] after:bg-orange-400 after:h-[1px] after:w-[0%] hover:after:w-[100%] after:left-[0px] after:-bottom-[0.7px] after:rounded-lg after:ease-in"
      >{name}
      </button>
    </a>
  )
}

