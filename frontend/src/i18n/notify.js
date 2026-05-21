/**
 * トースト・エラーバナー用。英語の生メッセージは uiMsg() で日本語化してから表示する。
 */
import toast from 'react-hot-toast';
import i18n from './index';
import { uiMsg } from './localizeApi';

/** @param {string} message */
export function errMsg(message) {
  return uiMsg(message);
}

/**
 * @param {string} message
 * @param {import('react-hot-toast').ToastOptions} [opts]
 */
export function toastErr(message, opts) {
  return toast.error(uiMsg(message), opts);
}

/**
 * @param {string} message
 * @param {import('react-hot-toast').ToastOptions} [opts]
 */
export function toastOk(message, opts) {
  return toast.success(uiMsg(message), opts);
}

/**
 * @param {string} message
 * @param {import('react-hot-toast').ToastOptions} [opts]
 */
export function toastInfo(message, opts) {
  return toast(uiMsg(message), opts);
}

/** i18n キーを直接使う場合（既存の t('key') 用） */
export function toastErrKey(key, params = {}) {
  return toast.error(i18n.t(key, params));
}

export function toastOkKey(key, params = {}) {
  return toast.success(i18n.t(key, params));
}
