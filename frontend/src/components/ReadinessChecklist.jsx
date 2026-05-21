import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle, AlertTriangle, XCircle, Loader } from 'lucide-react';
import { usePreflight, useModelStatus } from '../api/hooks';
import { localizePreflightCheck } from '../i18n/localizeApi';
import { errMsg } from '../i18n/notify';
import './ReadinessChecklist.css';

const StatusIcon = ({ status, size = 14 }) => {
  switch (status) {
    case 'pass':    return <CheckCircle size={size} />;
    case 'warn':    return <AlertTriangle size={size} />;
    case 'fail':    return <XCircle size={size} />;
    case 'loading': return <Loader size={size} />;
    default:        return <Loader size={size} />;
  }
};

export default function ReadinessChecklist({ compact = false, showWhenAllPass = false }) {
  const { t } = useTranslation();
  const { data: preflight, isLoading: preflightLoading } = usePreflight();
  const { data: modelData, isLoading: modelLoading } = useModelStatus();

  const isLoading = preflightLoading || modelLoading;
  const modelStatus = modelData?.status ?? 'idle';
  const modelDetail = modelData?.detail || '';
  const modelErr = modelData?.error || null;

  const checks = [];

  const modelCheck = {
    id: 'asr-model',
    label: t('readiness.asr_model'),
    status: modelStatus === 'ready' ? 'pass'
      : modelStatus === 'loading' ? 'loading'
      : modelStatus === 'error' || modelData?.sub_stage === 'error' ? 'fail'
      : 'warn',
    detail: modelStatus === 'ready' ? t('readiness.asr_ready')
      : modelStatus === 'loading' ? (modelDetail || t('readiness.asr_loading'))
      : (modelData?.sub_stage === 'error' ? errMsg(modelErr || t('readiness.asr_load_failed')) : t('readiness.asr_not_loaded')),
    fix: (modelStatus === 'error' || modelData?.sub_stage === 'error')
      ? (modelErr
        ? t('readiness.asr_error_fix', { error: errMsg(modelErr) })
        : t('readiness.asr_error_fix_generic'))
      : null,
  };
  checks.push(modelCheck);

  if (preflight?.checks) {
    const relevant = ['gpu', 'ffmpeg', 'yt-dlp', 'ram'];
    for (const check of preflight.checks) {
      if (relevant.includes(check.id)) {
        checks.push(localizePreflightCheck(check, t));
      }
    }
  }

  const netPass = preflight?.checks?.find((c) => c.id === 'network')?.status === 'pass';
  checks.push({
    id: 'llm',
    label: t('readiness.llm_label'),
    status: 'warn',
    detail: netPass ? t('readiness.llm_detail_optional') : t('readiness.llm_detail_required'),
    fix: t('readiness.llm_fix'),
  });

  const allPass = checks.every((c) => c.status === 'pass' || c.status === 'warn');
  const anyFail = checks.some((c) => c.status === 'fail');

  if (!showWhenAllPass && allPass && !isLoading) return null;

  if (isLoading) {
    return (
      <div className="readiness-checklist">
        <div className="readiness-checklist__title">
          <span className="readiness-checklist__title-icon">🔍</span>
          {t('readiness.checking')}
        </div>
      </div>
    );
  }

  if (compact) {
    const issues = checks.filter((c) => c.status !== 'pass');
    if (issues.length === 0) {
      return (
        <div className="readiness-checklist__all-pass">
          <CheckCircle size={14} />
          {t('readiness.all_ready')}
        </div>
      );
    }
    return (
      <div className="readiness-checklist">
        <ul className="readiness-checklist__list">
          {issues.map((check) => (
            <li key={check.id} className="readiness-checklist__item">
              <span className={`readiness-checklist__status readiness-checklist__status--${check.status}`}>
                <StatusIcon status={check.status} />
              </span>
              <div>
                <div className="readiness-checklist__label">{check.label}</div>
                {check.fix && <div className="readiness-checklist__fix">{check.fix}</div>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="readiness-checklist">
      <div className="readiness-checklist__title">
        <span className="readiness-checklist__title-icon">
          {anyFail ? '⚠️' : '✅'}
        </span>
        {t('readiness.title')}
      </div>
      <ul className="readiness-checklist__list">
        {checks.map((check) => (
          <li key={check.id} className="readiness-checklist__item">
            <span className={`readiness-checklist__status readiness-checklist__status--${check.status}`}>
              <StatusIcon status={check.status} />
            </span>
            <div>
              <div className="readiness-checklist__label">{check.label}</div>
              <div className="readiness-checklist__detail">{check.detail}</div>
              {check.fix && <div className="readiness-checklist__fix">💡 {check.fix}</div>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
