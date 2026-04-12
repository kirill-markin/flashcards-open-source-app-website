import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "機能",
  description:
    "FSRS 復習、カード作成、AI チャット、エージェント向けオンボーディング、パスワードレス認証、self-hosting、offline-first clients。",
  slug: "features",
  sections: [
    {
      type: "feature_list",
      title: "機能",
      intro:
        "必要なものに絞ったフラッシュカード構成です。ホスト版Webアプリ、リポジトリ内のiOSクライアント、外部エージェントAPI、そして self-hosting 用の基盤がそろっています。",
      items: [
        {
          title: "FSRS Review",
          description:
            "期限の来たカードは FSRS でスケジュールされます。4つの評価のいずれかを送信すると、バックエンドが client review timestamp を使って次回の復習時刻を更新します。",
        },
        {
          title: "Card Creation And Chat",
          description:
            "Web クライアントで表裏カードを作成し、workspace data や file attachments、plain text uploads を使った AI チャットを利用できます。",
        },
        {
          title: "Agent-Ready Onboarding",
          description:
            "Claude Code、Codex、OpenClaw を discovery URL に向けると、エージェントは認証フロー全体をたどり、APIキーを保存し、アカウントコンテキストを読み込み、正しいワークスペースを選び、コンパクトな /v1/agent/sql surface まで進めます。人間に必要なのは最新の8桁メールコードを共有することだけです。",
        },
        {
          title: "Passwordless Auth",
          description:
            "メール OTP 認証は専用の auth service 上で動きます。ブラウザセッションは shared-domain cookies を再利用するので、サブドメインをまたいでも自然にログインできます。",
        },
        {
          title: "Self-Hosted Stack",
          description:
            "Postgres、auth、backend、web client をローカルで実行できます。本番デプロイも CDK、CloudFront、API Gateway、Lambda、RDS を使って AWS 向けに配線済みです。",
        },
        {
          title: "Published Agent API",
          description:
            "現在の external contract には discovery、OTP bootstrap、workspace selection、そして workspace、cards、decks、review events 上の公開 SQL dialect が含まれます。",
        },
        {
          title: "Offline-First Clients",
          description:
            "リポジトリにはローカル SQLite と sync route を持つ iOS client が含まれており、Android アプリも Google Play で提供されています。",
        },
      ],
    },
  ],
  body: "",
} as const;
