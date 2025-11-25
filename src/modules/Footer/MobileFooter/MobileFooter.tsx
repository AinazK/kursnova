import type { FC } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import { Container } from "../../../components/Container/Container";
import { FooterCard } from "../FooterCard/FooterCard";
import { FooterContactsMobile } from "../FooterContactsMobile/FooterContactsMobile";
import { FooterLicense } from "../FooterLicense/FooterLicense";

const Bot = "/wp-content/themes/kursnova-wp-theme/assets/footer/bot.png";
const GreenBall =
  "/wp-content/themes/kursnova-wp-theme/assets/footer/green-ball.png";
const Eurica = "/wp-content/themes/kursnova-wp-theme/assets/footer/eurica.png";
const Horse = "/wp-content/themes/kursnova-wp-theme/assets/footer/horse.png";
// const GooglePlayIcon =
//   "/wp-content/themes/kursnova-wp-theme/assets/icons/googleplay-icon.svg";
// const AppleIcon =
//   "/wp-content/themes/kursnova-wp-theme/assets/icons/apple-logo.svg";
const CardBackground =
  "/wp-content/themes/kursnova-wp-theme/assets/footer/card-bg-mobile.png";

import styles from "./MobileFooter.module.sass";

interface MobileFooterProps {
  className?: string;
}

export const MobileFooter: FC<MobileFooterProps> = ({ className }) => {
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  return (
    <div className={clsx(styles.footer, className)}>
      <Container>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3 },
              }}
              viewport={{ once: true, amount: 0.1 }}
            >
              Учиться
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3 },
              }}
              viewport={{ once: true, amount: 0.1 }}
            >
              по-новому
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3 },
              }}
              viewport={{ once: true, amount: 0.1 }}
            >
              с kursnova
            </motion.div>
            <motion.img
              className={styles.bot}
              src={Bot}
              alt="Bot"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3 },
              }}
              viewport={{ once: true, amount: 0.1 }}
            />
            <motion.img
              className={styles.greenBall}
              src={GreenBall}
              alt="GreenBall"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3 },
              }}
              viewport={{ once: true, amount: 0.1 }}
            />
            <motion.img
              className={styles.eurica}
              src={Eurica}
              alt=""
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateZ: -30,
                transition: { duration: 0.3 },
              }}
              viewport={{ once: true, amount: 0.1 }}
            />
            <motion.img
              className={styles.horse}
              src={Horse}
              alt="Horse"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3 },
              }}
              viewport={{ once: true, amount: 0.1 }}
            />
          </h3>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <FooterCard
              backgroundImage={CardBackground}
              className={styles.card}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <FooterContactsMobile className={styles.contacts} />
          </motion.div>

          <motion.div
            className={styles.download}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className={styles.downloadTitle}>
              Скачать приложение kursnova
            </div>
            {isIOS ? (
              <a
                href="https://apps.apple.com/ru/app/курснова-уроки-без-скуки/id6751051566"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.downloadButton}
              >
                <img
                  src="/wp-content/themes/kursnova-wp-theme/assets/icons/apple-logo.svg"
                  alt="Apple"
                />
                Перейти в App Store
              </a>
            ) : (
              <a
                href="https://play.google.com/store/search?q=kursnova&c=apps&hl=ru"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.downloadButton}
              >
                <img
                  src="/wp-content/themes/kursnova-wp-theme/assets/icons/googleplay-icon.svg"
                  alt="Google Play"
                />
                Перейти в Google Play
              </a>
            )}
          </motion.div>

          <FooterLicense isMobile className={styles.license} />

          <div className={styles.copyright}>© ООО «КУРСНОВА»</div>
        </div>
      </Container>
    </div>
  );
};
