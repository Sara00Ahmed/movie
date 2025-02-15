import { useSelector } from 'react-redux';

const translation = {
  EN: { Cinema: "Cinema", signIn: "Sign In", signUp: "Sign Up", Home: "Home", Blogs: "Blogs", Schedule: "Schedule", Favorite: "Favorite" },
  AR: { Cinema: "سينما", signIn: "تسجيل الدخول", signUp: "إنشاء حساب", Home: "الرئيسية", Blogs: "المدونات", Schedule: "الجدول", Favorite: "المفضلة" }
};

const useTranslation = () => {
  const lang = useSelector((state) => state.lang?.lang || "EN"); // Default to "EN" if lang is not set

  const t = (key) => {
    return translation[lang]?.[key] || translation["EN"][key] || key; // Fallback to English if translation is missing
  };

  return { t };
};

export default useTranslation;
