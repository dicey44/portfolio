import "../app/globals.css"
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
                {/* Campfire illustration */}
                <div
                    aria-hidden="true"
                    className="relative mx-auto h-72 w-full max-w-sm"
                >
                    {/* Soft glow */}
                    <div className="absolute bottom-5 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-orange-400/15 blur-3xl" />

                    {/* Ground shadow */}
                    <div className="absolute bottom-6 left-1/2 h-4 w-40 -translate-x-1/2 rounded-full bg-slate-900/10 blur-md" />

                    {/* Flames */}
                    <div className="absolute bottom-12 left-1/2 h-40 w-28 -translate-x-1/2">
                        <div className="campfire-flame campfire-flame-outer absolute inset-x-0 bottom-0 h-36 rounded-[70%_30%_55%_45%/65%_40%_60%_35%] bg-gradient-to-t from-red-600 via-orange-500 to-orange-300" />

                        <div className="campfire-flame campfire-flame-middle absolute bottom-0 left-5 h-28 w-20 rounded-[40%_60%_45%_55%/60%_45%_55%_40%] bg-gradient-to-t from-orange-500 via-amber-400 to-yellow-200" />

                        <div className="campfire-flame campfire-flame-inner absolute bottom-0 left-9 h-16 w-12 rounded-[60%_40%_50%_50%/65%_50%_50%_35%] bg-gradient-to-t from-amber-200 to-yellow-50" />

                        {/* Rising sparks */}
                        <span className="campfire-spark absolute bottom-12 left-5 h-1 w-1 rounded-full bg-orange-400" />
                        <span className="campfire-spark campfire-spark-two absolute bottom-12 left-14 h-1.5 w-1.5 rounded-full bg-amber-400" />
                        <span className="campfire-spark campfire-spark-three absolute bottom-12 right-4 h-1 w-1 rounded-full bg-red-400" />
                    </div>

                    {/* Logs */}
                    <div className="absolute bottom-8 left-1/2 h-5 w-32 -translate-x-1/2 rotate-[18deg] rounded-full border border-amber-950/30 bg-gradient-to-b from-amber-800 to-amber-950" />
                    <div className="absolute bottom-8 left-1/2 h-5 w-32 -translate-x-1/2 -rotate-[18deg] rounded-full border border-amber-950/30 bg-gradient-to-b from-amber-700 to-amber-950" />
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