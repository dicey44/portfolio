

export default function Home() {
  return (
    <div>
      <section id="hero" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-32">
          <div className="max-w-3xl">
            <p className="mb-6 text-xs font-semibold tracking-[0.25em] text-red-600 md:text-sm">
              FRONTEND DEVELOPER
            </p>

            <h1 className="text-3xl font-bold leading-[1.6] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              <span className="block">使いやすく、</span>
              <span className="block">伝わるWebをつくる。</span>
            </h1>

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
      </section>
      <section
        id="profile"
        className="scroll-mt-24 border-t border-slate-200 bg-slate-50"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <p className="text-xs font-semibold tracking-[0.25em] text-red-600">
            PROFILE
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            プロフィール
          </h2>

          <div className="mt-10 grid items-start gap-10 md:mt-12 md:grid-cols-[260px_1fr] md:gap-14">
            <img
              src="/profile-pic.jpg"
              alt="Nicolas Verne"
              className="aspect-[3/5] w-full max-w-[300px] rounded-lg object-cover md:max-w-none"
            />

            <div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                Nicolas Verne
              </h3>
              <p className="mt-5 text-sm leading-8 text-slate-600 md:text-base">
                React・TypeScript・Next.jsを中心に、使いやすいWebアプリケーションを制作しています。2年間のクライアント向けWebサイト制作の経験を活かし、ユーザーの目的に合ったUIと、保守しやすいコードを大切にしています。
              </p>

              <dl className="mt-8 divide-y divide-slate-200 border-y border-slate-200 text-sm">
                <div className="grid gap-2 py-5 sm:grid-cols-[100px_1fr] sm:gap-6">
                  <dt className="font-semibold text-slate-900">拠点</dt>
                  <dd className="leading-relaxed text-slate-600">
                    2027年1月、日本へ移住予定
                  </dd>
                </div>

                <div className="grid gap-2 py-5 sm:grid-cols-[100px_1fr] sm:gap-6">
                  <dt className="font-semibold text-slate-900">言語</dt>
                  <dd className="leading-relaxed text-slate-600">
                    英語（母語）・日本語（日常会話）
                  </dd>
                </div>

                <div className="grid gap-2 py-5 sm:grid-cols-[100px_1fr] sm:gap-6">
                  <dt className="font-semibold text-slate-900">就業開始</dt>
                  <dd className="leading-relaxed text-slate-600">
                    2027年2月〜
                  </dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
                >
                  お問い合わせ
                </a>

                <a
                  href="https://github.com/dicey44"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"
                >
                  GitHub
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
