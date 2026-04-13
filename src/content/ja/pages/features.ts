import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "機能",
  description:
    "FSRS による復習、カード作成、AI チャット、エージェント向けオンボーディング、パスワードレス認証、セルフホスト対応、オフラインファーストのクライアント。",
  slug: "features",
  sections: [
    {
      type: "feature_list",
      title: "機能",
      intro:
        "必要な機能に絞ったフラッシュカード基盤です。ホスト版の Web アプリ、リポジトリに含まれる iOS クライアント、外部エージェント向け API、そしてセルフホストに必要な基盤まで一通りそろっています。",
      items: [
        {
          title: "FSRS による復習",
          description:
            "復習期限の来たカードは FSRS に従ってスケジュールされます。4 段階の評価から 1 つを送信すると、バックエンドがクライアント側の復習タイムスタンプをもとに次回の復習時刻を更新します。",
        },
        {
          title: "カード作成と AI チャット",
          description:
            "Web クライアントから表面と裏面を持つカードを作成でき、ワークスペース内のデータを参照しながら、ファイル添付やプレーンテキストのアップロードにも対応した AI チャットを利用できます。",
        },
        {
          title: "エージェント向けオンボーディング",
          description:
            "Claude Code、Codex、OpenClaw に接続案内用の URL を渡すだけで、エージェントが認証フロー全体を進め、API キーの保存、アカウント情報の読み込み、適切なワークスペースの選択まで完了できます。以降はコンパクトな `/v1/agent/sql` だけで処理を進められ、人が行うのは最新の 8 桁メールコードを共有することだけです。",
        },
        {
          title: "パスワードレス認証",
          description:
            "メール OTP を使った認証は専用の認証サービスで処理されます。ブラウザセッションは共有ドメイン Cookie を再利用するため、サブドメインをまたいでもスムーズにログインできます。",
        },
        {
          title: "セルフホスト対応スタック",
          description:
            "Postgres、認証サービス、バックエンド、Web クライアントをローカルで動かせます。本番環境向けの AWS デプロイもすでに整っており、CDK、CloudFront、API Gateway、Lambda、RDS を使う構成が用意されています。",
        },
        {
          title: "公開済みのエージェント API",
          description:
            "現在の外部向け公開仕様には、接続情報を案内するエンドポイント、OTP による初期認証、ワークスペース選択に加えて、ワークスペース、カード、デッキ、復習イベントを扱う公開 SQL 方言が含まれています。",
        },
        {
          title: "オフラインファーストのクライアント",
          description:
            "このリポジトリには、ローカル SQLite とバックエンド側の同期 API を備えた iOS クライアントがすでに含まれており、Android アプリも Google Play で公開されています。",
        },
      ],
    },
  ],
  body: "",
} as const;
