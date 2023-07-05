interface Props {
  image: React.ReactNode;
  title: React.ReactNode;
  text: React.ReactNode;
}

export default function CardContent({ image, title, text }: Props) {
  return (
    <div className="p-2">
      <div className="mb-4">{image}</div>
      <div className="mb- text-sm font-medium text-gray-dark mb-2.5">
        {title}
      </div>
      <div className="mb- text-right text-3xl font-bold">{text}</div>
    </div>
  );
}
