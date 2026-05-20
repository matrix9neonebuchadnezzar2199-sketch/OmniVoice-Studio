# インストール・起動のトラブルシューティング

よくある事象と対処です。英語版の詳細は [README.en.md](../../README.en.md) の Quickstart 内 `<details>` も参照してください。

## 初回起動が非常に長い

| 環境 | 原因 | 対処 |
|------|------|------|
| デスクトップ (Win/macOS/Linux) | Python venv・依存・ffmpeg・モデル DL | スプラッシュの進捗を待つ。2 回目以降は短い |
| Docker | 初回イメージ内でモデル DL | `docker compose logs -f` で確認 |
| ソース (`bun run dev`) | `~/.cache` / `omnivoice_data` へモデル DL | `HF_TOKEN` で HF ミラーが速くなる場合あり |

## macOS「アプリが壊れている」

```bash
xattr -cr /Applications/OmniVoice\ Studio.app
```

## Linux 白画面 (Fedora 44 / Ubuntu 24.04)

```bash
WEBKIT_DISABLE_COMPOSITING_MODE=1 ./OmniVoice.Studio_*.AppImage
```

## ファイアウォール内・GitHub 到達不可

デスクトップ版は初回に GitHub から Python 関連を取得します。

1. [python.org](https://python.org/downloads/) から Python 3.11 を手動インストール
2. 起動前に `UV_PYTHON_PREFERENCE=system` を設定、または `bun run dev` でソース実行
3. PyPI ミラー例: `UV_INDEX_URL=https://mirrors.aliyun.com/pypi/simple/`

## Docker で GPU プロファイルがポート競合する

`docker compose --profile gpu up` で CPU サービスとポートがぶつかる場合は **`--profile cpu`** または **`--profile gpu` のどちらか一方** を使ってください（同時に同じホストポートを取らない）。

## 話者分離が 1 人扱いになる

Pyannote 利用には Hugging Face トークンとモデル利用規約の同意が必要です。UI に警告トーストが出た場合は **設定 → 認証情報** で `HF_TOKEN` を設定し、[huggingface-token.ja.md](../setup/huggingface-token.ja.md) を参照してください。

## UI が英語のまま

**設定 → 全般 → 言語** で **日本語** を選択。反映されない場合は UI を再読み込み（設定内の Force Reload UI）またはアプリ再起動。

## それでも解決しない場合

- [Discord](https://discord.gg/bzQavDfVV9) の `#help`
- [GitHub Issues](https://github.com/debpalash/OmniVoice-Studio/issues)
