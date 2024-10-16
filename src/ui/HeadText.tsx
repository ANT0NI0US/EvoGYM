interface Props {
  children: React.ReactNode;
}

export default function HeadText({ children }: Props) {
  return <div className="text-3xl font-bold">{children}</div>;
}
