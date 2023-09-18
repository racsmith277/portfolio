interface SectionHeaderProps {
  color: "rose" | "orange" | "emerald";
  title: string;
}

function SectionHeader({ color, title }: SectionHeaderProps) {
  const colorVariants = {
    rose: "bg-rose-300",
    orange: "bg-orange-300",
    emerald: "bg-emerald-300",
  };
  return (
    <div
      className={`w-screen border-y border-black ${colorVariants[color]} py-6`}
    >
      <h2
        className="text-center font-heading text-xl text-white font-outline"
      >
        {title.toUpperCase()}
      </h2>
    </div>
  );
}

export default SectionHeader;
