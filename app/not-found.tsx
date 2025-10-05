import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="text-center space-y-6">
        <h2 className="text-6xl md:text-8xl font-bold text-[var(--color-highlight)]">
          404
        </h2>
        <p className="text-2xl md:text-4xl text-[var(--color-light)]">
          Page Not Found
        </p>
        <p className="text-sm md:text-base text-[var(--color-light)] opacity-70">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 bg-[var(--color-highlight)] text-[var(--color-primary)] rounded hover:opacity-80 transition-opacity"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
