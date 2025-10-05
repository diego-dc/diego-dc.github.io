"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="text-center space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold text-[var(--color-highlight)]">
          Oops!
        </h2>
        <p className="text-xl md:text-2xl text-[var(--color-light)]">
          Something went wrong
        </p>
        <p className="text-sm text-[var(--color-light)] opacity-70">
          {error.message || "An unexpected error occurred"}
        </p>
        <button
          onClick={() => reset()}
          className="mt-8 px-6 py-3 bg-[var(--color-highlight)] text-[var(--color-primary)] rounded hover:opacity-80 transition-opacity"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
