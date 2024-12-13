import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  imageUrl: string;
}

const Card = ({ title, description, imageUrl, className, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        className
      )}
      {...props}
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h1>HI!!!</h1>
        <h3 className="mb-3 text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-base text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;
