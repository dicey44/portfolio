import "@/app/globals.css"
import CurvedHeading from "@/components/CurvedHeading"

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative flex min-h-[calc(100svh-9rem)] items-center overflow-hidden bg-white md:min-h-[calc(100svh-6rem)]"
        >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-16 md:px-10 lg:grid-cols-[1.4fr_1fr]">
                <div>
                    <div className="max-w-3xl">
                        <p className="mb-6 text-xs font-semibold tracking-[0.25em] text-red-600 md:text-sm">
                        FRONTEND DEVELOPER
                        </p>

                        <CurvedHeading />

                        <div className="mt-8 space-y-2 text-sm leading-relaxed text-slate-600 md:text-base">
                        <p>React・TypeScript・Next.jsで、</p>
                        <p>日々の課題を解決するWebアプリケーションを。</p>
                        <p>日本で、フロントエンドエンジニアとして次の一歩へ。</p>
                        </div>
                    </div>

                    <a
                        href="#works"
                        className="mt-10 inline-flex items-center gap-6 rounded-md bg-red-600 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
                    >
                        制作実績を見る
                    </a>

                    <p className="mt-14 text-xs font-medium tracking-[0.18em] text-slate-400 md:mt-20">
                        REACT / TYPESCRIPT / NEXT.JS
                    </p>
                </div>

                <div
                aria-hidden="true"
                className="relative mx-auto h-72 w-full max-w-sm"
                >
                <div className="absolute inset-x-8 bottom-8 h-px bg-slate-200" />

                <div className="hero-ball-shadow absolute bottom-6 left-1/2 -ml-10 h-3 w-20 rounded-full bg-slate-900 blur-sm" />

                <div className="hero-ball absolute bottom-8 left-1/2 -ml-10 h-20 w-20 rounded-full bg-[radial-gradient(circle_at_30%_25%,#fca5a5_0%,#ef4444_35%,#b91c1c_75%,#7f1d1d_100%)] shadow-[inset_-8px_-8px_16px_rgba(0,0,0,0.15)]" />
                </div>
            </div>
            <a
                href="#profile"
                aria-label="プロフィールへスクロール"
                className="absolute bottom-6 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-slate-300 text-slate-500 transition-colors hover:border-red-600 hover:text-red-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
            >
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="h-5 w-5 motion-safe:animate-bounce"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m-6-6 6 6 6-6" />
            </svg>
            </a>
        </section>
    )
}