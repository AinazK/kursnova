interface ILicenseItem {
  title: string;
  path: string;
  isExternal?: boolean;
}

export const LICENSE_ITEMS: ILicenseItem[] = [
  {
    title: "Политика конфиденциальности",
    path: "/privacy-policy",
  },
  {
    title: "Пользовательское соглашение",
    path: "/terms-consent",
  },
  {
    title: "Согласие на обработку персональных данных",
    path: "/personal-data",
  },
  {
    title: "Лицензия на образовательную деятельность",
    path: "/educational-license",
  },
  {
    title: "Согласие на получение информационных сообщений",
    path: "/ads-consent",
  },
  {
    title: "Условия использования файлов cookie",
    path: "/cookie-consent",
  },
  {
    title: "Юридические документы",
    path: "https://legal.kursnova.ru",
    isExternal: true,
  },
  {
    title: "Сведения об образовательной организации",
    path: "https://legal.kursnova.ru/obr_legal",
    isExternal: true,
  },
];
