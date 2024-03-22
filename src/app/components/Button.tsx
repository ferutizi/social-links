interface ButtonProps {
  url: string,
  name: string,
}

export default function Button({ url, name }: ButtonProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      <button type="button" className="bg-zinc-800">{name}</button>
    </a>
  )
}

