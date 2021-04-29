# rodoma

（ロゴ画像）

## 概要

- フロントエンド リポジトリ
  ![rodoma-frontend](https://github.com/kentsunekawa/rodoma-frontend)
- バックエンド リポジトリ
  ![rodoma-backend](https://github.com/kentsunekawa/rodoma-backend)

## サービス紹介

**挑戦する人を応援する、学習ロードマップのシェアサービス**

rodoma（ロドマ）は、新しいことを勉強しようとしているけれど、どう進めたらいいかわからない人のための、学習のロードマップシェアサービスです。
これから学ぼうとしている人は、先輩や現役の人たちが公開する学習方法とロードマップを見ることができます。
一方ロードマップを公開する人は、自分が書いたブログの記事や運営する YouTube チャンネル、書籍を出しているならその販売ページへの URL を記載することで、販売チャネルの一つとしても活用できます。
また、フォロー機能やコメント機能といった SNS としての機能も備えているので、人脈を広げるきっかけを作ることも可能です。
rodoma は見る人にとっても投稿する人にとっても、キャリアを形成する上でメリットがある、そんなサービスです。

## 主な機能一覧

|ユーザー|新規登録、サインイン、サインアウト、ユーザー情報編集、メール認証、パスワードリセット|
|投稿|閲覧、新規作成、保存、公開、限定公開、アイキャッチ画像設定|
|投稿検索・ソート|キーワードで検索、カテゴリで検索、ソート（Like 数 / Mark 数 / 作成日）|
|ユーザー検索・ソート|キーワードで検索、カテゴリで検索、ソート（フォロワー数 / 登録日）|
|コメント|コメント作成、コメント削除|
|Like（ライク）|良いと思った投稿に Like する、Like の解除|
|Mark（マーク）|後で見たい投稿に Mark する、Mark の解除|
|フォロー|フォロー、フォロー解除|
|その他|無限スクロール、ライトモード / ダークモード|

## 技術・アーキテクチャ

### フロントエンド

言語は TypeScript、ライブラリは React を採用。
スタイリングに関しては UI ライブラリは導入せず、 styled-components で独自に開発し Storybook で管理した。
詳細は下記に示す。

#### 使用技術

|言語|TypeScript 4.1.2|
|ライブラリ|React 17.0.1|
|状態管理|Redux（Redux Toolkit）|
|スタイリング|styled-components|
|http クライアント|axios|
|アニメーション|GSAP|
|コンポーネント管理|Storybook|
|テストフレームワーク|Jest|
|リンター|ESlint|
|コードフォーマッター|Prettier|

#### storybook

コンポーネントは Storybook で管理。

[Storybook](https://storybook.rodoma.net)
![storybook]()

### バックエンド

**※ 本リポジトリはフロントエンドのリポジトリです。バックエンドのリポジトリは下記リンクから。**
![rodoma-backend](https://github.com/kentsunekawa/rodoma-backend)

言語は PHP、フレームワークは Laravel、データベースは MySQL を採用。
詳細は下記に示す。

|言語|PHP 7.4.15|
|フレームワーク|Laravel 6.20|
|データベース|MySQL 8.0.23|

### 開発環境・インフラ

|バージョン管理|Git|
|CI/CD|GitHub Actions|
|コンテナ（開発環境のみ）|Docker / Docker Compose|
|本番環境|Heroku|
|画像配信|AWS S3|
|リバースプロキシ|Cloudflare|
