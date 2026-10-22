import Hero from "@/components/Hero";
import RevealSection from "@/components/RevealSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <RevealSection
        id="profile"
        className="scroll-mt-24 border-t border-b border-slate-200 bg-slate-50"
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
                  <span aria-hidden="true"><i className="fa fa-github" style={{ fontSize: '24px' }}></i></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
      
      <RevealSection id="works" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] text-slate-400">
                SELECTED WORKS
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                制作実績
              </h2>
            </div>

            <a
              href="https://github.com/dicey44"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-sm text-slate-700 underline-offset-4 hover:underline"
            >
              GitHub
              <span aria-hidden="true"> <i className="fa fa-github" style={{ fontSize: '24px' }}></i></span>
            </a>
          </div>

          <div className="mt-10 grid gap-x-8 gap-y-12 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "OrderCraft",
                image: "/ordercraft-home.png",
                alt: "OrderCraftの受注管理画面",
                background: "bg-[#e4edf5]",
                description:
                  "検索・作成・更新・削除に対応した、業務向け受注管理アプリケーション。",
                technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vitest"],
                site: "https://order-craft-phi.vercel.app/",
                github: "https://github.com/dicey44/order-craft",
              },
              {
                name: "OsakaMove",
                image: "/osakamove-home.png",
                alt: "OsakaMoveの物件検索画面",
                background: "bg-[#e0e9e5]",
                description:
                  "自然な言葉で希望条件を入力し、大阪の物件を探せるAI活用アプリ。",
                technologies: ["React", "TypeScript", "Node.js", "OpenAI API"],
                site: "https://dicey44.github.io/osakamove/",
                github: "https://github.com/dicey44/osakamove",
              },
              {
                name: "MiMart",
                image: "/mimart-home.png",
                alt: "MiMartの商品一覧画面",
                background: "bg-[#ece5df]",
                description:
                  "商品検索・絞り込み・カート機能を備えた、日英対応のレスポンシブECサイト。",
                technologies: ["React", "TypeScript", "REST API", "CSS"],
                site: "https://dicey44.github.io/mini-ecommerce-site/",
                github: "https://github.com/dicey44/mini-ecommerce-site/",
              },
            ].map((project) => (
              <article key={project.name} className="flex min-w-0 flex-col">
                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name}のサイトを見る`}
                  className={`group block aspect-[8/5] overflow-hidden rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-700 ${project.background}`}
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-300 motion-safe:group-hover:scale-105"
                  />
                </a>

                <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900">
                  <a
                    href={project.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 transition-colors hover:text-red-600"
                  >
                    {project.name}
                  </a>
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {project.description}
                </p>

                <div className="mt-auto pt-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-sm bg-[#eaf0f4] px-2.5 py-1.5 text-xs text-slate-500"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
                    >
                      サイトを見る
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"
                    >
                      ソースコード
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>
      <RevealSection id="skills" className="scroll-mt-24 bg-[#f6f7f9]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <p className="text-xs font-medium tracking-[0.2em] text-slate-400">
            TECHNICAL SKILLS
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            スキル
          </h2>

          <div className="mt-10 grid gap-6 md:mt-12 lg:grid-cols-3">
            {[
              {
                title: "フロントエンド",
                skills: [
                  { name: "HTML", symbol: "5", color: "text-orange-600" },
                  { name: "CSS", symbol: "#", color: "text-sky-600" },
                  { name: "JavaScript", symbol: "JS", color: "text-yellow-600" },
                  { name: "TypeScript", symbol: "TS", color: "text-blue-800" },
                  { name: "React", symbol: "⚛", color: "text-cyan-600" },
                  { name: "Next.js", symbol: "N", color: "text-slate-900" },
                ],
              },
              {
                title: "UI・状態管理",
                skills: [
                  { name: "Tailwind CSS", symbol: "≈", color: "text-cyan-500" },
                  { name: "Bootstrap", symbol: "B", color: "text-purple-600" },
                  { name: "Context API", symbol: "◎", color: "text-blue-800" },
                ],
              },
              {
                title: "開発ツール・テスト",
                skills: [
                  { name: "Git", symbol: "⑂", color: "text-red-500" },
                  { name: "GitHub", symbol: "GH", color: "text-slate-800" },
                  { name: "Vitest", symbol: "V", color: "text-green-600" },
                  { name: "Testing Library", symbol: "RTL", color: "text-blue-800" },
                ],
              },
            ].map((category) => (
              <div
                key={category.title}
                className="border border-slate-200 p-6 md:p-7"
              >
                <h3 className="text-sm font-bold text-slate-900">
                  {category.title}
                </h3>

                <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-7">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex w-[68px] flex-col items-center gap-3"
                    >
                      <span
                        aria-hidden="true"
                        className={`flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-lg font-semibold ${skill.color}`}
                      >
                        {skill.symbol}
                      </span>

                      <span className="text-center text-xs leading-5 text-slate-600">
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
      <RevealSection
        id="contact"
        className="scroll-mt-24 border-t border-slate-200 bg-white"
      >
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-red-600">
              CONTACT
            </p>

            <h2 className="mt-4 text-2xl font-bold leading-relaxed tracking-tight text-slate-900 md:text-3xl">
              一緒に、つくりませんか。
            </h2>

            <p className="mt-8 text-sm leading-8 text-slate-600 md:text-base">
              フロントエンド開発のお仕事を探しています。
              <br />
              採用やプロジェクトについて、ぜひお話ししましょう。
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="https://linkedin.com/in/nicolas-ryan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-5 rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
              >
                LinkedInでつながる
                <span aria-hidden="true"><i className="fa fa-linkedin-square" style={{ fontSize: '24px' }}></i></span>
              </a>

              <a
                href="https://github.com/dicey44"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-5 rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"
              >
                GitHub
                <span aria-hidden="true"><i className="fa fa-github" style={{ fontSize: '24px' }}></i></span>
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-red-600">
              FAQ
            </p>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
              よくある質問
            </h2>

            <div className="mt-8">
              {[
                {
                  question: "いつから働けますか？",
                  answer:
                    "2027年1月に日本へ移住し、2月からの就業を希望しています。",
                },
                {
                  question: "日本語でコミュニケーションできますか？",
                  answer:
                    "はい。日常会話レベルの日本語でコミュニケーションできます。現在も学習を続けています。",
                },
                {
                  question: "ソースコードは公開していますか？",
                  answer:
                    "はい。各プロジェクトのGitHubリンクから、コードとREADMEをご確認いただけます。",
                },
              ].map((faq) => (
                <details
                  key={faq.question}
                  open
                  className="group border-b border-slate-200 py-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-sm text-sm font-medium leading-7 text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600 [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-lg font-normal text-slate-400"
                    >
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">−</span>
                    </span>
                  </summary>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>
    </div>
  );
}
