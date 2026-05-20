# Docker インストール

[README.ja.md](../../README.ja.md) の Docker セクションと同等の内容です。

## イメージの取得（GHCR）

```bash
docker pull ghcr.io/debpalash/omnivoice-studio:latest
```

## 起動

```bash
# CPU
docker run -d --name omnivoice \
  -p 127.0.0.1:3900:3900 \
  -v omnivoice-data:/app/omnivoice_data \
  ghcr.io/debpalash/omnivoice-studio:latest

# NVIDIA GPU
docker run -d --name omnivoice --gpus all \
  -p 127.0.0.1:3900:3900 \
  -v omnivoice-data:/app/omnivoice_data \
  ghcr.io/debpalash/omnivoice-studio:latest
```

## Docker Compose（推奨）

リポジトリを clone したうえで:

```bash
# CPU
docker compose -f deploy/docker-compose.yml --profile cpu up -d

# GPU (NVIDIA)
docker compose -f deploy/docker-compose.yml --profile gpu up -d
```

ヘルスチェック後、ブラウザで http://localhost:3900 を開きます。初回はモデル（約 4 GB）のダウンロードがあり、`docker compose logs -f` で進捗を確認できます。

## NVIDIA GPU の前提

[NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html) が必要です。

```bash
# Ubuntu / Debian
sudo apt-get install -y nvidia-container-toolkit
sudo nvidia-ctk runtime configure --runtime=docker
sudo systemctl restart docker
```

確認:

```bash
docker run --rm --gpus all nvidia/cuda:12.8.0-base-ubuntu22.04 nvidia-smi
```

## ソースからビルド

```bash
docker compose -f deploy/docker-compose.yml --profile cpu up --build -d
# または --profile gpu
```

## ネットワーク

既定ではホスト側 `127.0.0.1:3900` にバインドされ、LAN 公開はされません。LAN 公開する場合はポートマッピングを `0.0.0.0:3900:3900` に変更してください。認証は同梱されていないため、逆プロキシ + 認証（Tailscale 等）を検討してください。

## Web UI の言語

ブラウザで開いた UI は **設定 → 全般 → 言語** で日本語に切り替えられます。
