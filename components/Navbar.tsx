import Link from "next/link";

function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 py-6 md:flex-row md:px-10"
      >
        <Link
          href="/"
          className="shrink-0 text-2xl font-bold tracking-tight text-slate-900"
        >
          <span>Nicolas Verne</span>
          <span className="text-red-600">.</span>
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-600 md:gap-x-8">
          <Link
            href="/#profile"
            className="transition-colors hover:text-red-600"
          >
            プロフィール
          </Link>

          <Link
            href="/#works"
            className="transition-colors hover:text-red-600"
          >
            制作実績
          </Link>

          <Link
            href="/#skills"
            className="transition-colors hover:text-red-600"
          >
            スキル
          </Link>

          <Link
            href="/#contact"
            className="transition-colors hover:text-red-600"
          >
            お問い合わせ
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;