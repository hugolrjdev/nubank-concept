export type ButtonProps = {
  text: string;
};

export function Button({ text }: ButtonProps) {
  return <button className="bg-purple">{text}</button>;
}
