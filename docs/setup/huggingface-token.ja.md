# Hugging Face トークンの設定

話者分離（Pyannote）やモデルの高速ダウンロードに使います。

## トークンの取得

1. https://huggingface.co/settings/tokens で **Read** 権限のトークンを作成
2. Pyannote 関連モデル利用に必要な場合、[pyannote/speaker-diarization](https://huggingface.co/pyannote/speaker-diarization) 等のモデルページで利用規約に同意

## アプリ内（セッションのみ）

**設定 → 認証情報 → HuggingFace Token** に貼り付けて保存。再起動すると消える場合があります。

## 永続化（推奨）

シェルプロファイルまたは環境変数:

```bash
export HF_TOKEN=hf_xxxxxxxx
```

Windows (PowerShell):

```powershell
$env:HF_TOKEN = "hf_xxxxxxxx"
```

Docker Compose では `deploy/docker-compose.yml` の環境変数セクション、または `.env` で設定します。

## 確認

設定後、ダビングで話者分離を実行し、複数話者に分割されるか確認してください。フォールバック時は UI に警告が表示されます。
