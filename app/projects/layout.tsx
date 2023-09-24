import BackBar from "./BackBar";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <BackBar />
      {children}
    </div>
  );
}
