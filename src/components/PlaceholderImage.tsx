interface PlaceholderImageProps {
  text?: string;
  className?: string;
}

export default function PlaceholderImage({ text = "", className = "" }: PlaceholderImageProps) {
  return (
    <div
      className={`bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white font-semibold ${className}`}
    >
      {text}
    </div>
  );
} 