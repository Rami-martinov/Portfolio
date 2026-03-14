import { Link } from "react-router";
import { FadeIn } from "./ui/motion-css";

export function NotFound() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-6">
      <FadeIn className="text-center">
        <h1
          className="text-6xl text-neutral-200 mb-4"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          404
        </h1>
        <p className="text-neutral-500 mb-8 text-sm">This page doesn't exist.</p>
        <Link
          to="/"
          className="text-sm text-neutral-900 underline underline-offset-4 hover:text-neutral-600 transition-colors"
        >
          Go home
        </Link>
      </FadeIn>
    </div>
  );
}
