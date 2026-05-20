# Windows インストール

[README.ja.md](../../README.ja.md) のクイックスタートもあわせて参照してください。

## 推奨: デスクトップアプリ（MSI）

1. [Releases](https://github.com/debpalash/OmniVoice-Studio/releases/latest) から **Windows MSI (x64)** をダウンロード
2. インストーラを実行し、起動
3. 初回起動時に Python 仮想環境・依存関係・ffmpeg の取得が走ります（**5〜10 分**程度）。スプラッシュ画面で進捗を確認できます
4. 2 回目以降の起動は通常数秒で完了します

## UI 言語を日本語にする

アプリ起動後: **設定 → 全般 → 言語** で **日本語** を選択してください。

## ソースから実行（開発者向け）

```powershell
git clone https://github.com/matrix9neonebuchadnezzar2199-sketch/OmniVoice-Studio.git
cd OmniVoice-Studio
bun install
bun run dev
```

ブラウザで http://localhost:3901 を開きます。デスクトップシェルは `bun run desktop`（Rust / Tauri の前提ツールが必要です）。

| サービス | URL |
|----------|-----|
| フロントエンド | http://localhost:3901 |
| バックエンド API | http://localhost:3900 |
| API ドキュメント | http://localhost:3900/docs |

初回はモデル重み（約 2.4 GB）のダウンロードがあります。任意で `HF_TOKEN` を設定すると Hugging Face からの取得が速くなる場合があります（[トークン取得](https://huggingface.co/settings/tokens)）。

## トラブルシューティング

- 初回が長い: 上記の初回ブートストラップが原因であることが多いです
- GPU: NVIDIA CUDA 対応。VRAM ≤8 GB では TTS が CPU にオフロードされることがあります
- 詳細: [troubleshooting.ja.md](./troubleshooting.ja.md)
