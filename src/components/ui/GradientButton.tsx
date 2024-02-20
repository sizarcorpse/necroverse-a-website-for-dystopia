import { ChevronRight } from "lucide-react";
import { FC } from "react";

type GradientButtonProps = {
  children: React.ReactNode;
};

const GradientButton: FC<GradientButtonProps> = ({ children }) => {
  return (
    <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-sm p-px text-sm font-medium leading-6 text-primary inline-block">
      <span className="absolute inset-0 overflow-hidden rounded-sm">
        <span className="absolute inset-0 rounded-sm bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.9)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="relative flex space-x-2 items-center z-10 rounded-sm py-3 px-6 ring-1 ring-white/10 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] animate-shimmer">
        <span>{children}</span>
        <ChevronRight className="w-4 h-4" />
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-60" />
    </button>
  );
};

export default GradientButton;
