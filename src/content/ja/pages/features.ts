import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "機能",
  description:
    "FSRS による復習、カード作成、AI チャット、エージェント対応の導入フロー、パスワードレス認証、セルフホスティング、オフラインファーストのクライアント。",
  slug: "features",
  sections: [
    {
      type: "feature_list",
      title: "機能",
      intro:
        "フラッシュカードに必要な要素を無駄なくまとめた構成です。ホスト済みの Web アプリ、リポジトリに含まれる iOS クライアント、外部向けエージェント API、さらにセルフホスティングに必要な基盤まで、ひととおりそろっています。",
      items: [
        {
          title: "FSRS による復習",
          description:
            "期限が来たカードは FSRS に従ってスケジュールされます。4 段階の評価のいずれかを送信すると、バックエンドがクライアントの復習タイムスタンプをもとに次回の復習時刻を更新します。",
        },
        {
          title: "カード作成と AI チャット",
          description:
            "Web クライアントから表裏カードを作成でき、ワークスペース内のデータやファイル添付、プレーンテキストのアップロードを活用した AI チャットも利用できます。",
        },
        {
          title: "エージェント対応の導入フロー",
          description:
            "Claude Code、Codex、OpenClaw を discovery URL に向けるだけで、エージェントが認証フロー全体を進め、API キーの保存、アカウントコンテキストの読み込み、適切なワークスペースの選択まで自動で行えます。その後はコンパクトな `/v1/agent/sql` インターフェースで処理を続けられ、人が行うのは最新の 8 桁メールコードを共有することだけです。",
        },
        {
          title: "パスワードレス認証",
          description:
            "メール OTP 認証は専用の認証サービスで動作します。ブラウザセッションは共有ドメイン Cookie を再利用するため、サブドメインをまたいでもスムーズにログインできます。",
        },
        {
          title: "セルフホスト対応スタック",
          description:
            "Postgres、認証サービス、バックエンド、Web クライアントをローカルで実行できます。本番デプロイも AWS 向けにすでに組み込まれており、CDK、CloudFront、API Gateway、Lambda、RDS を使って構成されています。",
        },
        {
          title: "公開済みのエージェント API",
          description:
            "現在公開している外部向け仕様では、discovery、OTP の開始、ワークスペース選択に加えて、workspace、cards、decks、review events を対象にした公開 SQL 方言を利用できます。",
        },
        {
          title: "オフラインファーストのクライアント",
          description:
            "このリポジトリには、ローカル SQLite とバックエンドの同期ルートを備えた iOS クライアントがすでに含まれており、Android アプリも Google Play で公開されています。",
        },
      ],
    },
  ],
  body: "",
} as const;
