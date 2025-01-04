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
        "group w-96 overflow-hidden rounded-2xl bg-[#1EAEDB] text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl",
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
        <h3 className="mb-3 text-2xl font-bold text-white">JV Custom: {title}</h3>
        <p className="text-base text-gray-200">{description}</p>
      </div>
    </div>
  );
};

export default Card;