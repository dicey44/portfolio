import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row md:px-10">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-slate-900"
        >
          Nicolas Verne<span className="text-red-600">.</span>
        </Link>

        <p className="text-center text-xs text-slate-500">
          © 2026 Nicolas Verne. All rights reserved.
        </p>

        <a
          href="#hero"
          className="inline-flex items-center gap-3 rounded-sm text-sm font-medium text-slate-600 transition-colors hover:text-red-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
        >
          トップへ戻る
          <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}