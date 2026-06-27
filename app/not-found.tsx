import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-navy">
      <div className="container-content flex min-h-[60vh] flex-col items-center justify-center py-20 text-center text-offWhite">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-softGold">
          404
        </p>
        <h1 className="mt-3 text-display-md font-semibold">Page not found</h1>
        <p className="mt-4 max-w-md text-offWhite/75">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-softGold"
        >
          Return home
        </Link>
      </div>
    </section>
  );
}
