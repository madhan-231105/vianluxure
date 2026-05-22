import { cn } from "@/lib/utils";

export const Button = ({ children, variant = "primary", className, ...props }) => {
  const variants = {
    primary: "bg-vian-text text-white hover:bg-vian-gold",
    outline: "border border-vian-text text-vian-text hover:bg-vian-text hover:text-white",
    ghost: "bg-transparent text-vian-text hover:text-vian-gold",
  };

  return (
    <button 
      className={cn(
        "luxury-button px-8 py-4 uppercase text-[10px] tracking-[0.2em] transition-all duration-500 ease-in-out font-sans",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};