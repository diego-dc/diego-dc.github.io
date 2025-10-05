import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="text-center space-y-6">
        <h2 className="text-6xl md:text-8xl font-bold text-[var(--color-highlight)]">
          404
        </h2>
        <p className="text-2xl md:text-4xl text-[var(--color-light)]">
          Project Not Found
        </p>
        <p className="text-sm md:text-base text-[var(--color-light)] opacity-70">
          The project you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/Portfolio"
          className="inline-block mt-8 px-6 py-3 bg-[var(--color-highlight)] text-[var(--color-primary)] rounded hover:opacity-80 transition-opacity"
        >
          View all projects
        </Link>
      </div>
    </div>
  );
}
