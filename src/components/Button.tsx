import "../styles/Button.css";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

export default function Button({ title, onClick }: ButtonProps) {
  return (
    <button className="button" onClick={onClick}>
      {title}
    </button>
  );
}
