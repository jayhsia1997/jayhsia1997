import enTranslation from "./locales/en/translation.json";
import zhTWTranslation from "@/i18n/locales/traditional_chinese/translation.json";
import { Resource } from "i18next";

export const resources: Resource = {
  en: {
    translation: enTranslation,
  },
  'zh-tw': {
    translation: zhTWTranslation,
  }
}