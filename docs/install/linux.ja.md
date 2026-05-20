# Linux インストール

[README.ja.md](../../README.ja.md) のクイックスタートもあわせて参照してください。

## 推奨: デスクトップアプリ

[Releases](https://github.com/debpalash/OmniVoice-Studio/releases/latest) から次のいずれかを取得します。

- **AppImage (amd64)** — 汎用
- **.deb** — Debian / Ubuntu 系

初回起動で Python 環境とモデルがセットアップされます。

## AppImage で FUSE がない場合

```bash
chmod +x OmniVoice.Studio_*.AppImage
./OmniVoice.Studio_*.AppImage --appimage-extract-and-run
```

`.deb` を使うか、ソース実行も選択肢です。

## Fedora 44 / Ubuntu 24.04 で真っ白な画面になる場合

WebKit / GTK の合成まわりで起きることがあります。

```bash
WEBKIT_DISABLE_COMPOSITING_MODE=1 ./OmniVoice.Studio_*.AppImage
```

改善しない場合は `.deb` またはソース実行を試してください。

## UI 言語を日本語にする

**設定 → 全般 → 言語** → **日本語**

## ソースから実行

```bash
git clone https://github.com/matrix9neonebuchadnezzar2199-sketch/OmniVoice-Studio.git
cd OmniVoice-Studio
bun install
bun run dev
```

前提: [Bun](https://bun.sh/)、[uv](https://docs.astral.sh/uv/)（Python 3.10+）、`ffmpeg`

## トラブルシューティング

- [troubleshooting.ja.md](./troubleshooting.ja.md)
- Docker 利用: [docker.ja.md](./docker.ja.md)
