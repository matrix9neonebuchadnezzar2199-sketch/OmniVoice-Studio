# macOS インストール

[README.ja.md](../../README.ja.md) のクイックスタートもあわせて参照してください。

## 推奨: デスクトップアプリ（DMG）

1. [Releases](https://github.com/debpalash/OmniVoice-Studio/releases/latest) から **macOS DMG (Apple Silicon)** をダウンロード（Intel 版がある場合は環境に合わせて選択）
2. アプリを `/Applications` にドラッグして起動
3. 初回は Python 環境とモデルの自動セットアップがあります

### 「アプリが壊れているため開けません」と出る場合

App Store 外から取得したアプリに macOS が検疫をかけることがあります。一度だけ次を実行します。

```bash
xattr -cr /Applications/OmniVoice\ Studio.app
```

その後、通常どおり起動できます。

## UI 言語を日本語にする

**設定 → 全般 → 言語** で **日本語** を選択してください。

## Apple Silicon (M1/M2/M3/M4)

MPS が自動検出されます。MLX 向け Whisper モデルは Apple ハードウェアで高速化される場合があります。

## ソースから実行

```bash
git clone https://github.com/matrix9neonebuchadnezzar2199-sketch/OmniVoice-Studio.git
cd OmniVoice-Studio
bun install
bun run dev
```

デスクトップ: `bun run desktop`（[Tauri 前提条件](https://v2.tauri.app/start/prerequisites/)）

## トラブルシューティング

- ディクテーションのグローバルホットキー: **システム設定 → プライバシーとセキュリティ → アクセシビリティ** で OmniVoice Studio を許可
- 詳細: [troubleshooting.ja.md](./troubleshooting.ja.md)
