# Nicolas Verne | フロントエンドエンジニア ポートフォリオ

Next.js、React、TypeScript、Tailwind CSSを使用して制作した、日本語のポートフォリオサイトです。

制作したWebアプリケーション、使用できる技術、これまでの経験、今後の目標を紹介しています。

## 今後の目標

日本で、React・TypeScript・Next.jsを使用するフロントエンドエンジニアとして働くことを目指しています。

2027年1月に日本へ移住し、2027年2月からの就業を希望しています。

使いやすい画面と、修正・管理がしやすいコードを大切にしながら、チームの開発に貢献したいと考えています。また、チームでの開発やコードレビューを通して、コンポーネントの設計、テスト、業務に必要な機能の開発について理解を深めたいです。

AIを開発のサポートに使うだけでなく、ユーザーの課題を解決するために、アプリケーションへAI機能を取り入れることにも関心があります。

## 自己紹介

- クライアント向けのWebサイト制作経験があります。
- React・TypeScript・Next.jsを中心に、Webアプリケーションを制作しています。
- 英語が母語で、日本語での日常会話ができます。
- 使いやすいUI、再利用できるコンポーネント、分かりやすいデータの流れを意識しています。

## 主な機能

- パソコン・スマートフォンに対応したレスポンシブデザイン
- プロフィールと今後の目標の紹介
- 制作実績の画像・説明・使用技術の表示
- 各プロジェクトの公開サイトとソースコードへのリンク
- 分野ごとに整理した技術一覧
- 連絡先へのリンク
- 開閉できる「よくある質問」
- マウスの位置に合わせて文字が動く見出し
- CSSによる、炎と火の粉が動くたき火のアニメーション
- スクロールに合わせて各セクションが現れるアニメーション
- ページ内リンクとスムーズスクロール

## 制作実績

### OrderCraft

業務での使用を想定した受注管理アプリケーションです。
注文の検索・作成・更新・削除ができます。

**使用技術：** Next.js、TypeScript、Tailwind CSS、Vitest

- [公開サイト](https://order-craft-phi.vercel.app/)
- [ソースコード](https://github.com/dicey44/order-craft)

### OsakaMove

普段使う言葉で希望条件を入力し、大阪の物件を探せるAI活用アプリケーションです。

**使用技術：** React、TypeScript、Node.js、OpenAI API

- [公開サイト](https://dicey44.github.io/osakamove/)
- [ソースコード](https://github.com/dicey44/osakamove)

### MiMart

英語・日本語に対応した、デモ用のECサイトです。
商品検索、絞り込み、並び替え、ショッピングカートの機能があります。

**使用技術：** React、TypeScript、REST API、CSS

- [公開サイト](https://dicey44.github.io/mini-ecommerce-site/)
- [ソースコード](https://github.com/dicey44/mini-ecommerce-site)

## 使用技術

| 技術 | 使用目的 |
| --- | --- |
| Next.js | アプリケーションの構成とページの表示 |
| React | コンポーネントによる画面の作成 |
| TypeScript | 型によるデータの確認とエラーの防止 |
| Tailwind CSS | 画面のデザインとレスポンシブ対応 |
| CSS keyframes | たき火のアニメーション |
| Pointer Events・requestAnimationFrame | マウスに反応する見出し |
| Intersection Observer | スクロールに合わせたアニメーション |

## デザインで意識したこと

白とグレーを中心に、赤をアクセントカラーとして使用しました。
文字の読みやすさと余白を意識し、必要な情報を見つけやすいデザインを目指しました。

制作実績には、画像・短い説明・使用技術をまとめています。
また、見出しやたき火のアニメーションを通して、自分らしさを加えました。

ブラウザ上での操作が必要な部分にはClient Componentを使用し、メインページはServer Componentとして作成しています。

## ローカル環境での起動方法

プロジェクトに対応するバージョンのNode.jsとnpmが必要です。

### 1. リポジトリを取得

    git clone https://github.com/dicey44/portfolio.git

### 2. プロジェクトのフォルダへ移動

    cd portfolio

### 3. 必要なパッケージをインストール

    npm install

### 4. 開発サーバーを起動

    npm run dev

ブラウザで http://localhost:3000 を開いてください。

## 本番用ビルド

本番用のビルドを作成します。

    npm run build

ビルド後、サーバーを起動します。

    npm run start

## 連絡先

- [GitHub](https://github.com/dicey44)
- [LinkedIn]：(https://linkedin.com/in/nicolas-ryan)