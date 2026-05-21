/**
 * API / UI 由来の英語メッセージを表示ロケール（既定: ja）に寄せる。
 * バックエンドのログ・detail は英語のまま。画面表示のみ翻訳。
 */
import i18n from './index';

/** 完全一致（英語原文 → i18n キー） */
const EXACT_UI = {
  'Upload cancelled': 'toast.upload_cancelled',
  'Ingest cancelled': 'toast.ingest_cancelled',
  'Retry cancelled': 'toast.retry_cancelled',
  'Dubbing aborted': 'toast.dubbing_aborted',
  'Generation aborted.': 'toast.generation_aborted',
  'Upload or ingest a video first — there is no job to attach subtitles to.': 'toast.need_video_for_srt',
  'SRT import failed': 'errors.srt_import_failed',
  'Segments already clean': 'toast.segments_already_clean',
  'Please enter text': 'toast.enter_text',
  'Upload an audio or select a voice profile': 'toast.need_ref_audio',
  'Recording too short': 'toast.recording_too_short',
  'Recording loaded (raw — denoising unavailable)': 'toast.recording_raw_loaded',
  'Microphone access denied': 'toast.mic_denied',
  'Need a name and reference audio': 'toast.need_name_and_ref',
  'Preview ready!': 'toast.preview_ready',
  'Playback failed': 'toast.playback_failed',
  'Voice saved to profiles!': 'toast.voice_saved',
  'Failed to save voice profile': 'errors.save_voice_profile_failed',
  'Failed to lock profile': 'errors.lock_profile_failed',
  'Failed to unlock profile': 'errors.unlock_profile_failed',
  'Failed to load voice': 'errors.load_voice_failed',
  'Comparison complete!': 'toast.comparison_complete',
  'History cleared': 'toast.history_cleared',
  'Glossary needs a loaded project.': 'toast.glossary_needs_project',
  'Pick a target language first.': 'toast.pick_target_lang',
  'No segments to scan.': 'toast.no_segments_scan',
  'Auto-extract found no new terms.': 'toast.auto_extract_empty',
  "Please click 'Upload & Transcribe' first so the video is processed on the server before saving.": 'toast.upload_before_save',
  'Project saved': 'toast.project_saved',
  'Project created': 'toast.project_created',
  'Restored previous generation state': 'toast.restored_generation',
  'History item deleted': 'toast.history_deleted',
  'Trimmed audio loaded': 'toast.trimmed_loaded',
  'Opened:': 'toast.opened_project',
  'Project deleted': 'toast.project_deleted',
  'Recommended models are already installed.': 'toast.models_already_installed',
  "You're on the latest version.": 'toast.latest_version',
  'Installed — relaunching.': 'toast.installed_relaunch',
  'Updater only runs in the desktop app.': 'toast.updater_desktop_only',
  'Diagnostics copied — paste into your issue report.': 'toast.diagnostics_copied',
  'Frontend logs cleared': 'toast.frontend_logs_cleared',
  'Backend logs cleared': 'toast.backend_logs_cleared',
  'Failed to clear logs': 'errors.clear_logs_failed',
  'Nothing to clear — no Tauri log file on disk yet.': 'toast.nothing_to_clear_tauri',
  'Reset to default': 'toast.reset_default',
  'HuggingFace token set — faster downloads enabled': 'toast.hf_token_set',
  'Failed to save token': 'errors.save_token_failed',
  'Failed to switch engine': 'errors.switch_engine_failed',
  'Failed to stop': 'errors.stop_failed',
  'Download failed': 'errors.download_failed',
  'Save failed': 'errors.save_failed',
  'metadata failed': 'errors.metadata_failed',
  'Decode failed:': 'errors.decode_failed',
  'Audio load failed': 'errors.audio_load_failed_short',
  'Playback failed:': 'errors.playback_failed_colon',
  'prep stream closed unexpectedly': 'errors.prep_stream_closed',
  'unknown error': 'errors.unknown',
  'Generation stream ended before completion': 'errors.generation_stream_incomplete',
  'Error': 'common.error_title',
  'Done': 'toast.done',
  'Checking system…': 'readiness.checking',
  'All systems ready': 'readiness.all_ready',
  'System Readiness': 'readiness.title',
  'Checking environment…': 'bootstrap.checking',
  'Downloading uv (Python package manager)…': 'bootstrap.downloading_uv',
  'Creating Python virtual environment…': 'bootstrap.creating_venv',
  'Installing dependencies — first run, 5–10 min.': 'bootstrap.installing_deps',
  'Starting backend…': 'bootstrap.starting_backend',
  'Ready': 'bootstrap.ready',
  'Setup failed': 'bootstrap.failed',
  'Preparing video…': 'pill.preparing_video',
  'Extracting audio & scenes…': 'pill.extracting',
  'Transcribing audio…': 'pill.transcribing',
  'Transcription complete': 'pill.transcription_complete',
  'Downloading video…': 'pill.downloading_video',
  'Generating dub…': 'pill.generating_dub',
  'Dub complete': 'pill.dub_complete',
  'Model ready': 'pill.model_ready',
  'Diagnostic report copied — paste it into a GitHub issue.': 'logs.diagnostic_copied',
  'Voice saved as profile!': 'voice_gallery.saved_profile',
  'Failed to save profile': 'voice_gallery.save_profile_failed',
};

const LOG_NAME_JA = { backend: 'バックエンド', frontend: 'フロントエンド', tauri: 'Tauri' };

/** @type {Array<{ test: (m: string) => boolean, key: string, stripPrefix?: boolean, parse?: (m: string) => object }>} */
const API_ERROR_RULES = [
  { test: (m) => m.startsWith('Transcribe stream dropped before emitting'), key: 'errors.transcribe_stream_dropped' },
  { test: (m) => m.startsWith('No ASR backend is ready'), key: 'errors.asr_not_ready' },
  { test: (m) => m.startsWith('ASR backend initialization failed'), key: 'errors.asr_init_failed', parse: (m) => ({ detail: m.replace(/^ASR backend initialization failed:\s*/i, '') }) },
  { test: (m) => m === 'No audio available for transcription.', key: 'errors.no_audio_for_transcription' },
  { test: (m) => m.startsWith('Job not found'), key: 'errors.job_not_found' },
  { test: (m) => m.startsWith('audio load failed'), key: 'errors.audio_load_failed', parse: (m) => ({ detail: m.replace(/^audio load failed:\s*/i, '') }) },
  { test: (m) => m.startsWith('Upload failed:'), key: 'errors.upload_failed', stripPrefix: true },
  { test: (m) => m.startsWith('URL ingest failed:'), key: 'errors.url_ingest_failed', stripPrefix: true },
  { test: (m) => m.startsWith('Transcription failed:'), key: 'errors.transcription_failed', stripPrefix: true },
  { test: (m) => m.startsWith('Translation failed:'), key: 'errors.translation_failed', stripPrefix: true },
  { test: (m) => m.startsWith('Export failed:'), key: 'errors.export_failed', stripPrefix: true },
  { test: (m) => m.startsWith('Save failed:'), key: 'errors.save_failed', stripPrefix: true },
  { test: (m) => m.startsWith('Save error:'), key: 'errors.save_error', stripPrefix: true },
  { test: (m) => m.startsWith('Download error:'), key: 'errors.download_error', stripPrefix: true },
  { test: (m) => m.startsWith('Could not open folder:'), key: 'errors.open_folder_failed', stripPrefix: true },
  { test: (m) => m.startsWith('Flush failed:'), key: 'errors.flush_failed', stripPrefix: true },
  { test: (m) => m.startsWith('Clean up failed:'), key: 'errors.cleanup_failed', stripPrefix: true },
  { test: (m) => m.startsWith('Install failed:'), key: 'errors.install_failed', stripPrefix: true },
  { test: (m) => m.startsWith('Failed to load engines:'), key: 'errors.load_engines_failed', stripPrefix: true },
  { test: (m) => m.startsWith('Failed to load logs:'), key: 'errors.load_logs_failed', stripPrefix: true },
  { test: (m) => m.startsWith('Failed to clear Tauri logs:'), key: 'errors.clear_tauri_logs_failed', stripPrefix: true },
  { test: (m) => m.startsWith('Copy failed:'), key: 'errors.copy_failed', stripPrefix: true },
  { test: (m) => m.startsWith('Update check failed:'), key: 'errors.update_check_failed', stripPrefix: true },
  { test: (m) => m.startsWith('Could not load shortcut:'), key: 'errors.load_shortcut_failed', stripPrefix: true },
  { test: (m) => m.startsWith("Couldn't register:"), key: 'errors.register_shortcut_failed', stripPrefix: true },
  { test: (m) => m.startsWith('Reset failed:'), key: 'errors.reset_shortcut_failed', stripPrefix: true },
  { test: (m) => m.startsWith('Clear failed:'), key: 'errors.clear_failed', stripPrefix: true },
  { test: (m) => m.startsWith('Add failed:'), key: 'errors.add_failed', stripPrefix: true },
  { test: (m) => m.startsWith('Update failed:'), key: 'errors.update_failed', stripPrefix: true },
  { test: (m) => m.startsWith('Delete failed:'), key: 'errors.delete_failed', stripPrefix: true },
  { test: (m) => m.startsWith('Auto-extract failed:'), key: 'errors.auto_extract_failed', stripPrefix: true },
  { test: (m) => m.startsWith('Failed to load glossary:'), key: 'errors.load_glossary_failed', stripPrefix: true },
  { test: (m) => m.startsWith('Preview failed:'), key: 'errors.preview_failed', stripPrefix: true },
  { test: (m) => m.startsWith('Play failed:'), key: 'errors.play_failed', stripPrefix: true },
  { test: (m) => m.startsWith('Error: '), key: 'errors.generic', stripPrefix: true },
  { test: (m) => m.startsWith('pip install') && m.includes('failed'), key: 'errors.pip_install_failed' },
  { test: (m) => m.startsWith('ffmpeg failed'), key: 'errors.ffmpeg_failed' },
  { test: (m) => m.startsWith('ffprobe failed'), key: 'errors.ffprobe_failed' },
  { test: (m) => m.startsWith('YouTube search failed'), key: 'errors.youtube_search_failed' },
  { test: (m) => m.startsWith('Download failed:') && m.includes('yt'), key: 'errors.youtube_download_failed' },
];

/** @type {Array<{ test: (m: string) => boolean, key: string, parse?: (m: string) => object }>} */
const UI_PREFIX_RULES = [
  { test: (m) => /^Ingested /.test(m), key: 'toast.ingested_url', parse: (m) => ({ url: m.replace(/^Ingested /, '').trim() }) },
  { test: (m) => /^Exported: /.test(m), key: 'toast.exported', parse: (m) => ({ name: m.replace(/^Exported: /, '') }) },
  { test: (m) => /^Saved: /.test(m), key: 'toast.saved_path', parse: (m) => ({ path: m.replace(/^Saved: /, '') }) },
  { test: (m) => /^Downloaded /.test(m), key: 'toast.downloaded', parse: (m) => ({ name: m.replace(/^Downloaded /, '') }) },
  { test: (m) => /^Opened: /.test(m), key: 'toast.opened_project', parse: (m) => ({ name: m.replace(/^Opened: /, '') }) },
  { test: (m) => /^Flushed —/.test(m), key: 'toast.flushed', parse: (m) => ({ detail: m.replace(/^Flushed — /, '') }) },
  { test: (m) => /^Imported \d+/.test(m), key: 'toast.srt_import_note', parse: (m) => ({ note: m }) },
  { test: (m) => /^Cleaned \d+/.test(m), key: 'toast.cleaned_fragments', parse: (m) => {
    const n = parseInt(m.match(/^Cleaned (\d+)/)?.[1] || '0', 10);
    return { count: n };
  }},
  { test: (m) => /^Translated \d+/.test(m), key: 'toast.translated_segments', parse: (m) => ({ note: m }) },
  { test: (m) => /segment.*failed:/i.test(m), key: 'toast.translate_segments_failed', parse: (m) => ({ detail: m }) },
  { test: (m) => /^Started downloading /.test(m), key: 'toast.download_started', parse: (m) => ({ detail: m.replace(/^Started downloading /, '') }) },
  { test: (m) => /^Cleared \d+/.test(m), key: 'toast.cleared_tauri_logs', parse: (m) => ({ detail: m }) },
  { test: (m) => /^Dictation shortcut set to /.test(m), key: 'toast.shortcut_set', parse: (m) => ({ shortcut: m.replace(/^Dictation shortcut set to /, '') }) },
  { test: (m) => /^Added \d+ auto term/.test(m), key: 'toast.glossary_auto_added', parse: (m) => {
    const n = parseInt(m.match(/^Added (\d+)/)?.[1] || '0', 10);
    return { count: n };
  }},
  { test: (m) => /^Regenerating \d+/.test(m), key: 'pill.regenerating', parse: (m) => {
    const n = parseInt(m.match(/^Regenerating (\d+)/)?.[1] || '0', 10);
    return { count: n };
  }},
  { test: (m) => /^Generating dub… \d+/.test(m), key: 'pill.generating_progress', parse: (m) => ({ detail: m }) },
  { test: (m) => /^([^:]+): (.+)$/.test(m) && /^(download|extract|demucs|scene|prep)/i.test(m), key: 'errors.prep_stage_failed', parse: (m) => {
    const [, stage, error] = m.match(/^([^:]+): (.+)$/) || [];
    return { stage: stage || 'prep', error: error || m };
  }},
  { test: (m) => m.startsWith('Seg '), key: 'errors.seg_generate_failed', parse: (m) => ({ detail: m }) },
  { test: (m) => / log cleared$/.test(m), key: 'logs.cleared', parse: (m) => {
    const name = m.replace(/ log cleared$/, '');
    return { name: LOG_NAME_JA[name] || name };
  }},
  { test: (m) => /^Copied .+ log$/.test(m), key: 'logs.copied', parse: (m) => {
    const name = m.replace(/^Copied /, '').replace(/ log$/, '');
    return { name: LOG_NAME_JA[name] || name };
  }},
  { test: (m) => m.startsWith('Report failed:'), key: 'logs.report_failed', stripPrefix: true },
  { test: (m) => m.includes('Cinematic quality needs an LLM'), key: 'toast.cinematic_needs_llm' },
  { test: (m) => m.includes('Falling back to Fast'), key: 'toast.cinematic_fallback' },
  { test: (m) => /^🎙️ Recording cleaned/.test(m), key: 'toast.recording_cleaned' },
  { test: (m) => /^🔒 Voice locked/.test(m), key: 'toast.voice_locked' },
  { test: (m) => /^🎨 Voice unlocked/.test(m), key: 'toast.voice_unlocked' },
  { test: (m) => /^Microphone access denied\./.test(m), key: 'toast.mic_denied_hint', parse: (m) => ({ hint: m.replace(/^Microphone access denied\.\s*/, '') }) },
];

/** @param {import('i18next').TFunction} t */
export function localizePreflightCheck(check, t) {
  if (!check?.id) return check;
  const id = check.id;
  const status = check.status || 'pass';
  const label = t(`setup.preflight.checks.${id}.label`, { defaultValue: check.label });
  const detail = t(`setup.preflight.checks.${id}.${status}.detail`, { defaultValue: check.detail });
  const fix = check.fix
    ? t(`setup.preflight.checks.${id}.${status}.fix`, { defaultValue: check.fix })
    : null;
  return { ...check, label, detail, fix };
}

/** @param {string} msg @param {import('i18next').TFunction} t */
function applyRules(msg, rules, t) {
  for (const rule of rules) {
    if (!rule.test(msg)) continue;
    let params = rule.parse ? rule.parse(msg) : {};
    if (rule.stripPrefix) {
      const inner = msg.replace(/^[^:]+:\s*/, '');
      params = { message: uiMsg(inner, t), ...params };
    }
    return t(rule.key, { ...params, defaultValue: msg });
  }
  return null;
}

/** @param {string | null | undefined} message @param {import('i18next').TFunction} [t] */
export function localizeApiError(message, t = i18n.t.bind(i18n)) {
  if (message == null || message === '') return message;
  const msg = String(message);
  const fromRules = applyRules(msg, API_ERROR_RULES, t);
  if (fromRules) return fromRules;
  return msg;
}

/** エラー・成功トースト・ピルラベルなど UI 文言をまとめてローカライズ */
export function uiMsg(message, t = i18n.t.bind(i18n)) {
  if (message == null || message === '') return message;
  const msg = String(message);
  const exactKey = EXACT_UI[msg];
  if (exactKey) return t(exactKey, { defaultValue: msg });
  const err = localizeApiError(msg, t);
  if (err !== msg) return err;
  const ui = applyRules(msg, UI_PREFIX_RULES, t);
  if (ui) return ui;
  return msg;
}
