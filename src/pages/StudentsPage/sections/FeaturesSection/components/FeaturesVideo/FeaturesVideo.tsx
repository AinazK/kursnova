import { type FC } from "react";
import {
  FeaturesDescription,
  type FeaturesDescriptionProps,
} from "../FeaturesDescription/FeaturesDescription";
import clsx from "clsx";
import { motion } from "framer-motion";

import { Container } from "../../../../../../components/Container/Container";

const PhoneIcon =
  "/wp-content/themes/kursnova-wp-theme/assets/students/features/video-phone.svg";
const VideoTagImage =
  "/wp-content/themes/kursnova-wp-theme/assets/students/features/video-tag.svg";
// const VideoPlayIcon = "/wp-content/themes/kursnova-wp-theme/assets/students/features/video-play.svg";

const EyeIcon =
  "/wp-content/themes/kursnova-wp-theme/assets/common/icons/eyes.svg";
const TimerIcon =
  "/wp-content/themes/kursnova-wp-theme/assets/common/icons/timer.svg";

const Poster =
  "/wp-content/themes/kursnova-wp-theme/assets/parents/education/poster-1.png";

import styles from "./FeaturesVideo.module.sass";

interface FeaturesVideoProps {
  className?: string;
}

export const FeaturesVideo: FC<FeaturesVideoProps> = ({ className }) => {
  return (
    <Container className={styles.container}>
      <div className={clsx(styles.wrapper, className)}>
        <div className={styles.left}>
          <div className={styles.textWrapper}>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.3,
                },
              }}
              viewport={{ once: true, amount: 0.3 }}
              className={styles.title}
            >
              Смотри
            </motion.div>
            <div className={styles.text}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.3 },
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div>ви</div>
                <img
                  src={PhoneIcon}
                  alt="Телефон"
                  className={styles.phoneIcon}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.3 },
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                део
              </motion.div>
              <motion.img
                className={styles.videoTag}
                src={VideoTagImage}
                alt=""
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.2 },
                }}
                viewport={{ once: true, amount: 0.3 }}
              />
              {/* Dont delete */}
              {/* <motion.button
								initial={{ opacity: 0, scale: 0 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									rotateZ: -8,
									transition: {
										duration: 0.3,
										delay: 0.3,
									},
								}}
								viewport={{ once: true, amount: 0.3 }}
								className={styles.button}
							>
								<VideoPlayIcon className={styles.playIcon} />
								Смотреть пример
							</motion.button> */}
            </div>
          </div>
        </div>
        <motion.div
          className={styles.center}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.5,
              type: "spring",
            },
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <video
            className={styles.video}
            src="https://storage.yandexcloud.net/test-backet-kursnova/features-video-1.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            poster={Poster}
            loop
          ></video>
        </motion.div>
        <div className={styles.right}>
          {/* {FEATURES_DESCRIPTIONS.map((props, index) => {
            const baseDelay = 0.1;
            return (
              <FeaturesDescription
                // delayIcon={baseDelay + index * 0.1}
                // delayTitle={baseDelay + index * 0.2}
                // delayText={baseDelay + index * 0.3}
                key={index}
                {...props}
              />
            );
          })} */}

          {FEATURES_DESCRIPTIONS.map((props, index) => (
            <FeaturesDescription key={index} {...props} />
          ))}
        </div>
      </div>
    </Container>
  );
};

const FEATURES_DESCRIPTIONS: FeaturesDescriptionProps[] = [
  {
    icon: <img src={EyeIcon} alt="Глаз" />,
    title: "Более 400 видео",
    description: "на нашей платформе",
  },
  {
    icon: <img src={TimerIcon} alt="Таймер" />,
    title: "5-10 минут",
    description: (
      <>
        длится один ролик kursnova. <br /> Ещё и на задачки остаётся!
      </>
    ),
  },
];
