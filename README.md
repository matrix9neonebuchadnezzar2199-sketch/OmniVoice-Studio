<div align="center">
  <img src="docs/logo.png" alt="OmniVoice Logo" width="120" />
  <h1>OmniVoice Studio</h1>
  <h3>オープンソース版 ElevenLabs 代替</h3>
  <p>リアルタイムディクテーション、ゼロショット音声クローン、シネマ品質の動画ダビング——すべてデスクトップで。<br/>オープンソース、API キー不要、完全ローカル。<b>646 言語対応。</b></p>

  <p>
    <a href="https://github.com/debpalash/OmniVoice-Studio/stargazers"><img src="https://img.shields.io/github/stars/debpalash/OmniVoice-Studio?style=flat-square&color=f59e0b" alt="Stars" /></a>
    <a href="https://github.com/debpalash/OmniVoice-Studio/releases/latest"><img src="https://img.shields.io/github/v/release/debpalash/OmniVoice-Studio?style=flat-square&color=10b981" alt="Release" /></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/license-FSL--1.1--ALv2-blue?style=flat-square" alt="License" /></a>
    <a href="https://github.com/debpalash/OmniVoice-Studio/issues"><img src="https://img.shields.io/github/issues/debpalash/OmniVoice-Studio?style=flat-square&color=ef4444" alt="Issues" /></a>
    <a href="https://discord.gg/bzQavDfVV9"><img src="https://img.shields.io/badge/Discord-Join_Community-5865F2?style=flat-square&logo=discord&logoColor=white" alt="Discord" /></a>
  </p>

  <p>
    <a href="#クイックスタート">クイックスタート</a> ·
    <a href="#機能">機能</a> ·
    <a href="#なぜ-omnivoice-studio">なぜ OmniVoice Studio？</a> ·
    <a href="#tts-エンジン">TTS エンジン</a> ·
    <a href="#コントリビューション">コントリビューション</a> ·
    <a href="https://discord.gg/bzQavDfVV9">Discord</a> ·
    <a href="README.en.md">English</a> ·
    <a href="README_CN.md">简体中文</a>
  </p>

  <p>
    <a href="https://github.com/debpalash/OmniVoice-Studio/releases/download/v0.2.7/OmniVoice.Studio_0.2.7_aarch64.dmg"><img src="https://img.shields.io/badge/macOS-DMG_(Apple_Silicon)-000?style=for-the-badge&logo=apple&logoColor=white" alt="Download macOS DMG" /></a>
    <a href="https://github.com/debpalash/OmniVoice-Studio/releases/download/v0.2.7/OmniVoice.Studio_0.2.7_x64_en-US.msi"><img src="https://img.shields.io/badge/Windows-MSI_(x64)-0078D4?style=for-the-badge&logo=windows&logoColor=white" alt="Download Windows MSI" /></a>
    <a href="https://github.com/debpalash/OmniVoice-Studio/releases/download/v0.2.7/OmniVoice.Studio_0.2.7_amd64.AppImage"><img src="https://img.shields.io/badge/Linux-AppImage_(x64)-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Download Linux AppImage" /></a>
    <a href="https://github.com/debpalash/OmniVoice-Studio/releases/download/v0.2.7/OmniVoice.Studio_0.2.7_amd64.deb"><img src="https://img.shields.io/badge/Debian-.deb-A81D33?style=for-the-badge&logo=debian&logoColor=white" alt="Download Debian .deb" /></a>
  </p>
</div>

<br/>

<div align="center">
  <img src=".github/assets/social-preview.png" alt="OmniVoice Studio — オープンソース版 ElevenLabs 代替" width="100%"/>
</div>

> [!WARNING]
> **OmniVoice Studio は活発な Beta 開発中です。** リリース間で動作が変わる場合があります。最新の機能と修正を使うには、プリビルドインストーラよりリポジトリをクローンしてソースから実行することをおすすめします。Bug 報告と PR を歓迎します——[Issue を開く](https://github.com/debpalash/OmniVoice-Studio/issues) または [Discord に参加](https://discord.gg/bzQavDfVV9)。

<div align="center">
  <br/>
  <a href="https://discord.gg/bzQavDfVV9"><img src="https://img.shields.io/badge/💬_Join_the_Community-Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Join Discord" /></a>
  <br/>
  <sub>セットアップの相談 · ダビング作品の共有 · ロードマップへの投票 · 新エンジンの先行アクセス</sub>
  <br/>
</div>

<br/>

## 機能

<table>
<tr>
  <td align="center" width="33%">
    <h3>🎙️ 音声クローン</h3>
    <p>3 秒クリップ → 任意の声を再現。<br/><b>646 言語</b>、ゼロショット。</p>
  </td>
  <td align="center" width="33%">
    <h3>🎨 ボイスデザイン</h3>
    <p>性別、年齢、アクセント、ピッチ、速度、<br/>感情、方言——<b>細かく調整</b>。</p>
  </td>
  <td align="center" width="33%">
    <h3>🎬 動画ダビング</h3>
    <p>YouTube URL またはファイル → 文字起こし →<br/>翻訳 → 再ボイス → <b>MP4</b>。</p>
  </td>
</tr>
<tr>
  <td align="center" valign="top">
    <h3>⌨️ ディクテーションウィジェット</h3>
    <p><code>⌘+⇧+Space</code> で<b>任意のアプリ</b>から。<br/>文字起こし、自動貼り付け、消える。</p>
  </td>
  <td align="center" valign="top">
    <h3>🔊 ボーカル分離</h3>
    <p>Demucs 搭載。音声を音楽から分離し、<br/><b>背景はそのまま</b>残す。</p>
  </td>
  <td align="center" valign="top">
    <h3>👥 話者ダイアライゼーション</h3>
    <p>Pyannote + WhisperX。<br/>誰が何を言ったかを<b>自動識別</b>。</p>
  </td>
</tr>
<tr>
  <td align="center" valign="top">
    <h3>📦 バッチキュー</h3>
    <p><b>50 本の動画</b>をドロップして離れるだけ。<br/>ジョブごとにプログレスバー。</p>
  </td>
  <td align="center" valign="top">
    <h3>🤖 MCP サーバー</h3>
    <p><b>Claude</b>、Cursor、<br/>任意の MCP クライアントから OmniVoice を利用。</p>
  </td>
  <td align="center" valign="top">
    <h3>🛡️ AI ウォーターマーク</h3>
    <p>AudioSeal（Meta）。<b>不可視</b>で、<br/>圧縮後も残る。</p>
  </td>
</tr>
<tr>
  <td align="center" valign="top">
    <h3>🔐 100% ローカル</h3>
    <p>キー不要、クラウド不要、アカウント不要。<br/><b>あなたのマシンのみ</b>。</p>
  </td>
  <td align="center" valign="top">
    <h3>⚡ GPU 自動検出</h3>
    <p>CUDA · MPS · ROCm · CPU。<br/>VRAM ≤8 GB？<b>自動オフロード</b>。</p>
  </td>
  <td align="center" valign="top">
    <h3>🧩 拡張可能</h3>
    <p><code>TTSBackend</code> をサブクラス化し、<br/>約 <b>50 行</b>で任意のエンジンを追加。</p>
  </td>
</tr>
</table>

---

## クイックスタート

OS 別の詳細手順（日本語）:

- [Windows](docs/install/windows.ja.md) · [macOS](docs/install/macos.ja.md) · [Linux](docs/install/linux.ja.md) · [Docker](docs/install/docker.ja.md) · [トラブルシューティング](docs/install/troubleshooting.ja.md) · [Hugging Face トークン](docs/setup/huggingface-token.ja.md)

用途に合わせて選べます——ゼロインストールからフル開発者セットアップまで：

<table>
<tr>
<td width="33%" align="center">
<h3>🖥️ デスクトップアプリ</h3>
<sub><b>最も簡単</b> · 約 2 分 · 依存関係不要</sub>
<br/><br/>
<a href="https://github.com/debpalash/OmniVoice-Studio/releases/latest"><img src="https://img.shields.io/badge/Download-Installer-10b981?style=for-the-badge&logo=github&logoColor=white" alt="Download"/></a>
<br/><br/>
<sub>macOS DMG · Windows MSI · Linux AppImage/deb<br/>初回起動時に Python + モデルを自動ブートストラップ。</sub>
</td>
<td width="33%" align="center">
<h3>🐳 Docker</h3>
<sub><b>ワンコマンド</b> · 約 3 分 · Docker が必要</sub>
<br/><br/>
<code>docker pull ghcr.io/debpalash/omnivoice-studio</code>
<br/><br/>
<sub>GHCR のプリビルドイメージ。<br/>CPU + NVIDIA GPU 対応。</sub>
</td>
<td width="33%" align="center">
<h3>⚡ ソースから</h3>
<sub><b>フルコントロール</b> · 約 5 分 · Bun + Python が必要</sub>
<br/><br/>
<code>git clone → bun install → bun run dev</code>
<br/><br/>
<sub>ホットリロード、コードベース全体にアクセス。<br/>コントリビューター向け。</sub>
</td>
</tr>
</table>

---

### 🖥️ オプション 1 — デスクトップアプリ

プリビルドインストーラ（約 6–8 MB）は [**Releases**](https://github.com/debpalash/OmniVoice-Studio/releases/latest) ページにあります。ダウンロード、インストール、起動するだけです。アプリが Python 環境をブートストラップし、モデル重みを自動ダウンロードします——スプラッシュ画面に進捗が表示されます。

<details>
<summary><b>macOS — 「アプリが壊れているため開けません」</b></summary>
<br/>

macOS は App Store 外からダウンロードしたアプリを検疫します。`/Applications` にドラッグしたあと：

```bash
xattr -cr /Applications/OmniVoice\ Studio.app
```

その後は通常どおり開けます。一度だけの対処です。
</details>

<details>
<summary><b>Windows — 初回起動に 5〜10 分かかる</b></summary>
<br/>

初回実行時に Python 仮想環境のブートストラップ、依存関係のインストール、ffmpeg のダウンロードが行われます。スプラッシュ画面に各ステップが表示されます。2 回目以降の起動は数秒です。
</details>

<details>
<summary><b>Linux — AppImage には FUSE が必要</b></summary>
<br/>

FUSE が使えない場合は `.deb` パッケージを使うか、展開して実行してください：

```bash
chmod +x OmniVoice.Studio_*.AppImage
./OmniVoice.Studio_*.AppImage --appimage-extract-and-run
```
</details>

<details>
<summary><b>Linux — Fedora 44 / Ubuntu 24.04 で白画面</b></summary>
<br/>

一部の新しいディストリビューションでは、合成まわりに問題のある WebKit/GTK が同梱されています。次を試してください：

```bash
WEBKIT_DISABLE_COMPOSITING_MODE=1 ./OmniVoice.Studio_*.AppImage
```

それでも直らない場合は `.deb` パッケージを使うか、ソースから実行してください。
</details>

<details>
<summary><b>ファイアウォール内 / ロシアなどでインストールが失敗する</b></summary>
<br/>

デスクトップアプリは初回起動時に GitHub から Python をダウンロードします。ネットワークが GitHub をブロックしている場合：

1. [python.org](https://python.org/downloads/) から Python 3.11 を手動インストール
2. 起動前に `UV_PYTHON_PREFERENCE=system` を設定するか、`bun run dev` でソースから実行
3. PyPI ミラー：`UV_INDEX_URL=https://mirrors.aliyun.com/pypi/simple/` を設定
</details>

---

### 🐳 オプション 2 — Docker

**GitHub Container Registry** からプリビルドイメージを pull：

```bash
docker pull ghcr.io/debpalash/omnivoice-studio:latest
```

**実行：**

```bash
# CPU モード
docker run -d --name omnivoice \
  -p 127.0.0.1:3900:3900 \
  -v omnivoice-data:/app/omnivoice_data \
  ghcr.io/debpalash/omnivoice-studio:latest

# NVIDIA GPU モード
docker run -d --name omnivoice --gpus all \
  -p 127.0.0.1:3900:3900 \
  -v omnivoice-data:/app/omnivoice_data \
  ghcr.io/debpalash/omnivoice-studio:latest
```

**または Docker Compose（推奨）：**

```bash
# CPU モード
docker compose -f deploy/docker-compose.yml --profile cpu up -d

# GPU モード（NVIDIA）
docker compose -f deploy/docker-compose.yml --profile gpu up -d
```

ヘルスチェックが通ったら [localhost:3900](http://localhost:3900) を開いてください。初回実行では約 4 GB のモデル重みをダウンロードします——進捗は `docker compose logs -f` で確認できます。

<details>
<summary><b>NVIDIA GPU セットアップの前提条件</b></summary>
<br/>

GPU モードには [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html) が必要です：

```bash
# Arch / CachyOS
sudo pacman -S nvidia-container-toolkit

# Ubuntu / Debian
sudo apt-get install -y nvidia-container-toolkit

# 設定して Docker を再起動
sudo nvidia-ctk runtime configure --runtime=docker
sudo systemctl restart docker
```

`docker run --rm --gpus all nvidia/cuda:12.8.0-base-ubuntu22.04 nvidia-smi` で動作確認できます。
</details>

<details>
<summary><b>pull ではなくソースからビルドする</b></summary>
<br/>

```bash
# CPU
docker compose -f deploy/docker-compose.yml --profile cpu up --build -d

# GPU
docker compose -f deploy/docker-compose.yml --profile gpu up --build -d
```

</details>

> **ネットワークアクセス：** ホスト側のポートマッピングは `127.0.0.1` のみにバインドされ、バックエンド自体もデフォルトで `OMNIVOICE_BIND_HOST=127.0.0.1`（ループバック）です。同梱の `docker-compose.yml` はコンテナ内で `OMNIVOICE_BIND_HOST=0.0.0.0` を設定し、ホストのマッピングでトラフィックを転送できるようにしています——ホストでループバックのみにするのは `127.0.0.1:3900:3900` のマッピングです。LAN に公開する場合はホストのポートマッピングを `"0.0.0.0:3900:3900"` に変更してください。Docker 外でバックエンドを直接動かす場合は、全インターフェースで待ち受けるには `OMNIVOICE_BIND_HOST=0.0.0.0` を設定します。OmniVoice には認証が組み込まれていません——リバースプロキシで認証をかけてください（Caddy の `basic_auth`、nginx + htpasswd、Tailscale など）。

---

### ⚡ オプション 3 — ソースから

```bash
git clone https://github.com/debpalash/OmniVoice-Studio.git && cd OmniVoice-Studio
bun install && bun run dev
```

[localhost:3901](http://localhost:3901) を開いて音声クローンを始められます。フロントエンドとバックエンドの両方でホットリロードが有効です。

```bash
bun run desktop    # ソースからネイティブデスクトップアプリをビルド
```

| サービス | URL | スタック |
|---------|-----|-------|
| **バックエンド** | `localhost:3900` | FastAPI · 97 endpoints · WhisperX · Demucs · OmniVoice |
| **フロントエンド** | `localhost:3901` | React · Vite · Waveform timeline · Glassmorphism UI |
| **API ドキュメント** | [`localhost:3900/docs`](http://localhost:3900/docs) | Scalar — 対話型 API リファレンス |

> [!NOTE]
> 初回実行でモデル重み（約 2.4 GB）をダウンロードします。アカウントは不要です。ダウンロードを速くする場合は、環境変数に `HF_TOKEN=hf_...` を任意で設定してください（[無料トークンはこちら](https://huggingface.co/settings/tokens)）。
>
> **困ったときは？** セットアップやトラブルシュートは [Discord](https://discord.gg/bzQavDfVV9) でお手伝いします。

---

## スクリーンショット

<table>
  <tr>
    <td align="center" width="50%">
      <img src="docs/screenshot-clone.png" alt="Voice Clone" width="100%"/>
      <br/><b>Voice Clone</b><br/>
      <sub>3 秒クリップをドロップ → 任意の声を再現。646 言語、ゼロショット。</sub>
    </td>
    <td align="center" width="50%">
      <img src="docs/screenshot-design.png" alt="Voice Design" width="100%"/>
      <br/><b>Voice Design</b><br/>
      <sub>ゼロから新しい声を構築——性別、年齢、アクセント、ピッチ、スタイル。</sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="docs/screenshot-dub.png" alt="Video Dubbing" width="100%"/>
      <br/><b>Video Dubbing</b><br/>
      <sub>アップロードまたは YouTube URL を貼り付け。文字起こし、翻訳、再ボイス、エクスポート。</sub>
    </td>
    <td align="center">
      <img src="docs/screenshot-gallery.png" alt="Voice Gallery" width="100%"/>
      <br/><b>Voice Gallery</b><br/>
      <sub>YouTube を検索、カテゴリを閲覧、クリップをダウンロードしてライブラリを構築。</sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="docs/screenshot-settings.png" alt="Settings — Models" width="100%"/>
      <br/><b>Settings → Models</b><br/>
      <sub>15 モデル。ワンクリックインストール。プラットフォームを自動検出（CUDA / MPS / CPU）。</sub>
    </td>
    <td align="center">
      <img src="docs/screenshot-libraryprojects.png" alt="Projects" width="100%"/>
      <br/><b>Projects</b><br/>
      <sub>ダビングプロジェクト、ボイスプロファイル、生成履歴、エクスポート——すべて検索可能。</sub>
    </td>
  </tr>
  <tr>
    <td align="center" colspan="2">
      <img src="docs/screenshot-logs.png" alt="Settings — Logs" width="100%"/>
      <br/><b>Settings → Logs</b><br/>
      <sub>バックエンド、フロントエンド、Tauri ランタイムのライブログ。フィルタ、更新、クリア。</sub>
    </td>
  </tr>
</table>

---

## なぜ OmniVoice Studio？

ElevenLabs は **月額 $5〜$330** で、音声を自社サーバーで処理します。OmniVoice Studio は **あなたのハードウェア上で、利用量制限なし** で動きます。

| | **ElevenLabs** | **OmniVoice Studio** |
|---|---|---|
| **料金** | 月額 $5〜$330、文字数課金 | 個人利用は無料 · 事業向けは[商用ライセンス](#ライセンス) |
| **音声クローン** | ✅ 3 秒クリップ | ✅ 3 秒クリップ、ゼロショット |
| **ボイスデザイン** | ✅ 性別、年齢 | ✅ 性別、年齢、アクセント、ピッチ、スタイル、方言 |
| **言語** | 32 | **646** |
| **動画ダビング** | ✅ クラウドのみ | ✅ 完全ローカル |
| **データプライバシー** | 音声がクラウドへ送信 | **データはマシンから出ない** |
| **API キー** | 必須 | 不要 |
| **GPU サポート** | 該当なし（クラウド） | CUDA · Apple Silicon · ROCm · CPU |
| **デスクトップアプリ** | ❌ | ✅ macOS · Windows · Linux |
| **カスタマイズ** | ❌ クローズド | ✅ Fork、拡張、配布可能 |

OmniVoice Studio は、サブスクリプションやクラウドなしでプロ品質の AI ツールを提供します。

<div align="center">
  <br/>
  <b>魅力を感じたら、一緒に作りましょう。</b><br/>
  <a href="https://discord.gg/bzQavDfVV9"><img src="https://img.shields.io/badge/Join_Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Join Discord" /></a>
  <br/><br/>
</div>

---

## システム要件

| | **最小** | **推奨** |
|---|---|---|
| **OS** | Windows 10, macOS 12+, Ubuntu 20.04+ | 任意のモダン 64 ビット OS |
| **RAM** | 8 GB | 16 GB 以上 |
| **VRAM（GPU）** | 4 GB（TTS を CPU に自動オフロード） | 8 GB 以上（NVIDIA RTX 3060+） |
| **ディスク** | 空き 10 GB（モデル + キャッシュ） | 20 GB 以上 SSD |
| **Python** | 3.10+（`uv` が管理） | 3.11–3.12 |
| **GPU** | 任意——CPU でも可 | NVIDIA CUDA · Apple Silicon MPS · AMD ROCm |

> [!TIP]
> **VRAM ≤8 GB** の GPU では、文字起こし中に TTS が自動的に CPU にオフロードされます——設定は不要です。専用 GPU は必須ではなく、パイプライン全体を CPU で実行できます（その分遅くなります）。

### TTS エンジン

OmniVoice はマルチエンジン TTS バックエンドを同梱しています。デフォルトエンジン（OmniVoice）は常に利用可能で、追加エンジンはオプトインで自動検出されます。**Settings → TTS Engine** または環境変数 `OMNIVOICE_TTS_BACKEND` で切り替えられます。

| エンジン | 言語 | クローン | Instruct | Linux | macOS ARM | Windows | ライセンス |
|--------|:---------:|:-----:|:--------:|:-----:|:---------:|:-------:|:-------:|
| **OmniVoice**（デフォルト） | 600+ | ✅ | ✅ | ✅ CUDA/CPU | ✅ MPS | ✅ CUDA/CPU | 同梱 |
| **CosyVoice 3** | 9 + 18 方言 | ✅ | ✅ | ✅ CUDA/CPU | ✅ MPS | ✅ CUDA/CPU | Apache-2.0 |
| **MLX-Audio**（Kokoro, Qwen3-TTS, CSM, Dia, …） | 複数 | エンジンによる | エンジンによる | ❌ | ✅ Native | ❌ | エンジンによる |
| **VoxCPM2** | 30 | ✅ | ✅ | ✅ CUDA/CPU | ✅ MPS | ✅ CUDA/CPU | Apache-2.0 |
| **MOSS-TTS-Nano** | 20 | ✅ | ❌ | ✅ CUDA/CPU | ✅ CPU | ✅ CUDA/CPU | Apache-2.0 |
| **KittenTTS** | 英語 | ❌ | ❌ | ✅ CPU | ✅ CPU | ✅ CPU | MIT |

> **CUDA** = GPU 加速 · **MPS** = Apple Silicon Metal · **CPU** = どこでも動作、大モデルは遅め · KittenTTS と MOSS-TTS-Nano は CPU でリアルタイム · MLX-Audio は Apple Silicon のみ。

---

## アーキテクチャ

```
┌─────────────────────────────────────────────────┐
│                  Frontend (React)                │
│  DubTab · VoicePreview · BatchQueue · Gallery    │
├─────────────────────────────────────────────────┤
│                Backend (FastAPI)                  │
│  97 API endpoints · SSE streaming · SQLite       │
├──────────┬──────────┬──────────┬────────────────┤
│ WhisperX │  Demucs  │OmniVoice │   Pyannote     │
│   ASR    │  Source  │   TTS    │  Diarization   │
│          │  Sep.    │          │                │
└──────────┴──────────┴──────────┴────────────────┘
        CUDA / MPS / ROCm / CPU (auto-detected)
```

---

## ロードマップ

### ✅ リリース済み

| カテゴリ | 機能 |
|----------|----------|
| **ダビング** | フルパイプライン（文字起こし→翻訳→合成→mux）、シーン認識分割、リップシンクスコア、ストリーミング TTS |
| **ボイス** | ゼロショットクローン、ボイスデザイン、A/B 比較、ボイスプレビューウィジェット、お気に入り/タグ付きギャラリー |
| **オーディオ** | Demucs ボーカル分離、セグメント単位ゲイン、選択的トラックエクスポート、stem/SRT/VTT/MP3 エクスポート |
| **多言語** | 多言語バッチピッカー、GPU 順次実行のバッチダビングキュー |
| **ダイアライゼーション** | Pyannote ML ダイアライゼーション、話者クローン自動抽出、話者ごとのボイス割り当て |
| **インフラ** | Docker デプロイ、CUDA/MPS/ROCm 自動検出、cuDNN 8 互換、VRAM 認識モデルオフロード |
| **AI 由来証明** | AudioSeal 不可視ウォーターマーク（SynthID 相当）、動画ロゴオーバーレイ、ウォーターマーク検出 API |
| **UX** | 元に戻す/やり直し、キーボードショートカット、ドラッグ＆ドロップ、セッション永続化、グラスモーフィズムデザイン |
| **リアルタイムイベント** | WebSocket イベントバス——データ変更時の即時サイドバー更新、指数バックオフ再接続 |
| **状態管理** | Zustand ストア移行——`uiSlice`、`pillSlice`、`dubSlice`、`generateSlice`、`prefsSlice`、`glossarySlice` |
| **デスクトップ** | クロスプラットフォーム Tauri インストーラ（macOS DMG、Windows MSI、Linux deb/AppImage）、自動更新基盤 |
| **Windows 強化** | クロスプラットフォームログパス、Triton 回避策、HF シンボリックリンク回避、300 秒ヘルスチェックタイムアウト |
| **ディクテーション** | グローバルシステムホットキー（`⌘+⇧+Space`）、フレームレスフローティングウィジェット、WebSocket ストリーミング ASR、自動貼り付け |
| **バッチパイプライン** | フルバッチ TTS：抽出 → 文字起こし → 翻訳 → 生成 → ミックス → エクスポート、ライブ進捗追跡 |

### 🔜 次に予定

- 🎬 **Lip-sync v2** — wav2lip による視覚的な発話タイミング
- 📖 **Audiobook Editor** — 章単位の長文ナレーション
- 🌐 **Hosted Demo** — インストールなしで OmniVoice を試用
- 🔌 **Plugin Marketplace** — コミュニティ提供の TTS エンジンとエフェクト

---

## コミュニティ

<div align="center">
  <a href="https://discord.gg/bzQavDfVV9"><img src="https://img.shields.io/badge/💬_Discord-Join_Community-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Join Discord" /></a>
</div>

<br/>

| チャンネル | 内容 |
|---------|--------------------|
| `#showcase` | ダビング、クローン、ボイスデザインの共有 |
| `#help` | セットアップ、GPU トラブルシュート、モデルに関する質問 |
| `#feature-requests` | 次に作る機能への投票 |
| `#dev` | アーキテクチャ議論、PR レビュー、エンジン統合 |
| `#announcements` | リリースノート、破壊的変更、先行アクセス |

**[→ Discord に参加](https://discord.gg/bzQavDfVV9)** — セットアップの質問には数日ではなく、数時間以内に返信します。

---

## コントリビューション

Bug 修正、新しい TTS エンジンアダプター、UI 改善、ドキュメント、翻訳など、あらゆる貢献を歓迎します。

- 📖 **[Contributing Guide](CONTRIBUTING.md)** でセットアップ、コードスタイル、PR ワークフローを確認
- 🐛 [good first issues](https://github.com/debpalash/OmniVoice-Studio/labels/good%20first%20issue) を参照
- 💬 アイデアの相談や質問は [Discord](https://discord.gg/bzQavDfVV9) へ

---

## よくある質問

<details>
<summary><b>本当に ElevenLabs と同じくらい良いの？</b></summary>
<br/>
音声クローンとダビングについては、はい——OmniVoice は最先端の拡散 TTS モデルで 646 言語に対応しています（ElevenLabs は 32 言語）。多くの用途で品質は同等です。ElevenLabs が優れるのは洗練されたクラウド API とプリセットのボイスライブラリです。OmniVoice はプライバシー、コスト、言語カバレッジ、カスタマイズ性で優れます。
</details>

<details>
<summary><b>Apple Silicon（M1/M2/M3/M4）で動く？</b></summary>
<br/>
はい。MPS 加速は自動検出されます。Apple ハードウェアでは MLX 最適化の Whisper モデルで文字起こしを高速化できます。
</details>

<details>
<summary><b>どのくらい VRAM が必要？</b></summary>
<br/>
<b>最低 4 GB。</b> VRAM が 8 GB 以下の場合、文字起こし中に TTS モデルは自動的に CPU にオフロードされます。8 GB 以上ならすべてを GPU 上で同時実行できます。GPU がなくても CPU モードで動作します——TTS は約 3 倍遅くなります。
</details>

<details>
<summary><b>商用利用できる？</b></summary>
<br/>
個人、教育、社内チーム、非商用利用は <a href="https://fsl.software/">FSL-1.1-ALv2</a> の下で無料です。OmniVoice Studio の上に競合製品やサービスを構築する場合は商用ライセンスが必要です——<a href="#ライセンス">ライセンス</a>を参照してください。料金プランは近日公開予定です。各リリースは公開から 2 年後に Apache 2.0 に自動変換されます。
</details>

<details>
<summary><b>どの言語に対応している？</b></summary>
<br/>
OmniVoice モデルによる TTS は 646 言語です。文字起こし（WhisperX）は 99 言語です。翻訳のカバー範囲は言語ペアによります。
</details>

<details>
<summary><b>独自の TTS エンジンを追加できる？</b></summary>
<br/>
はい。OmniVoice は<b>組み込みバックエンドレジストリ</b>を使います。約 50 行で追加するには、<code>backend/services/tts_backend.py</code> で <code>TTSBackend</code> をサブクラス化し、ファイル末尾の <code>_REGISTRY</code> 辞書に登録します。組み込みは 6 エンジン：OmniVoice、CosyVoice、MLX-Audio（14+ サブエンジン）、VoxCPM2、MOSS-TTS-Nano、KittenTTS。詳細は <a href="#tts-エンジン">TTS エンジン</a> を参照してください。
</details>

---

## ライセンス

OmniVoice Studio は [**Functional Source License (FSL-1.1-ALv2)**](https://fsl.software/) の下でソース提供されています。

**無料**で利用できるのは、個人、教育、研究、社内チーム、非商用です。各リリースは**公開から 2 年後に自動的に Apache 2.0 に変換**されます。

**ビジネス / エンタープライズ**で OmniVoice Studio の上に競合製品やサービスを構築する場合は商用ライセンスが必要です。**料金プランは近日公開予定です。** それまでのお問い合わせは **OmniVoice@palash.dev** まで。

全文は [`LICENSE`](LICENSE) を参照してください。

---

## 謝辞

OmniVoice Studio は優れたオープンソースの上に成り立っています：

| プロジェクト | 役割 |
|---------|------|
| [**OmniVoice (k2-fsa)**](https://github.com/k2-fsa/OmniVoice) | ゼロショット拡散 TTS エンジン——コア音声合成モデル |
| [**WhisperX**](https://github.com/m-bain/whisperX) | 単語レベルの音声認識とアライメント |
| [**Demucs (Meta)**](https://github.com/facebookresearch/demucs) | ボーカル分離のための音源分離 |
| [**Pyannote**](https://github.com/pyannote/pyannote-audio) | 話者ダイアライゼーション——誰が何を言ったか |
| [**CTranslate2**](https://github.com/OpenNMT/CTranslate2) | CPU / GPU 上の最適化 Transformer 推論 |
| [**AudioSeal (Meta)**](https://github.com/facebookresearch/audioseal) | AI 由来証明のための不可視ニューラル音声ウォーターマーク |
| [**Tauri**](https://tauri.app) | ネイティブデスクトップアプリフレームワーク |

---

<div align="center">

<br/>

ここまで読んでいただき、ありがとうございます。<br/>
**[⭐ このリポジトリに Star](https://github.com/debpalash/OmniVoice-Studio)** を付けて、他の人にも見つけてもらいましょう。<br/>
**[💬 Discord に参加](https://discord.gg/bzQavDfVV9)** して、作ったものを共有してください。

<br/>

  <a href="https://star-history.com/#debpalash/OmniVoice-Studio&Date">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=debpalash/OmniVoice-Studio&type=Date&theme=dark" />
      <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=debpalash/OmniVoice-Studio&type=Date" />
      <img alt="Star History" src="https://api.star-history.com/svg?repos=debpalash/OmniVoice-Studio&type=Date&theme=dark" width="600" />
    </picture>
  </a>
</div>
