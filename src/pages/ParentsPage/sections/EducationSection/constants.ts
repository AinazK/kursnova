import { v4 } from "uuid";

const EyesIcon =
  "/wp-content/themes/kursnova-wp-theme/assets/common/icons/eyes.svg";
const MeteoriteIcon =
  "/wp-content/themes/kursnova-wp-theme/assets/common/icons/meteorite.svg";

const BookImg =
  "/wp-content/themes/kursnova-wp-theme/assets/parents/education/book.svg";
const PercentageImg =
  "/wp-content/themes/kursnova-wp-theme/assets/parents/education/percentage.svg";
const WarningImg =
  "/wp-content/themes/kursnova-wp-theme/assets/parents/education/warning.svg";

const Poster_1 =
  "/wp-content/themes/kursnova-wp-theme/assets/parents/education/poster-1.png";
const Poster_2 =
  "/wp-content/themes/kursnova-wp-theme/assets/parents/education/poster-2.png";
const Poster_3 =
  "/wp-content/themes/kursnova-wp-theme/assets/parents/education/poster-3.png";

export const VIDEO_SIDE = [
  {
    id: v4(),
    icon: EyesIcon,
    title: "20-30 минут",
    text: "среднее время концентрации ребенка",
  },
  {
    id: v4(),
    icon: MeteoriteIcon,
    title: "5–10 минут",
    text: "длится один ролик kursnova. Ещё и на задачки остаётся!",
  },
];

export const PROGRESS_SIDE = [
  {
    id: v4(),
    icon: BookImg,
    title: "Отображение изучаемых предметов и прогресса по ним",
  },
  {
    id: v4(),
    icon: PercentageImg,
    title: "Детальная статистика поможет оценить качество обучения",
  },
  {
    id: v4(),
    icon: WarningImg,
    title:
      "Подсказки по слабым местам ребёнка, рекомендации по улучшению знаний",
  },
];

export const STAGES_LABEL = [
  {
    id: v4(),
    title: "Обучающие видео",
    text: "Наши ролики составлены так, чтобы за короткое время дать максимум пользы. Ориентируемся на школьную программу 5–11 классов: все уроки снимаем с учётом актуальных учебных материалов",
  },
  {
    id: v4(),
    title: "Закрепляем знания на тренажёрах",
    text: "После видео ребёнок может решить задания двух уровней сложности — базового и повышенного",
  },
  {
    id: v4(),
    title: "Отслеживаем прогресс",
    text: "Даже скучную тему можно превратить в приключение. Вовлекающие игровые механики проведут ребенка к знаниям легко и интересно",
  },
];

export const EDUCATION_VIDEOS = [
  {
    id: v4(),
    src: "https://storage.yandexcloud.net/test-backet-kursnova/features-video-1.mp4",
    poster: Poster_1,
  },
  {
    id: v4(),
    src: "https://storage.yandexcloud.net/test-backet-kursnova/features-task-1.mp4",
    poster: Poster_3,
  },
  {
    id: v4(),
    src: "https://storage.yandexcloud.net/test-backet-kursnova/TaskExtra.mp4",
    poster: Poster_2,
  },
];
