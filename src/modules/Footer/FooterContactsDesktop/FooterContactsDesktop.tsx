import type { FC } from "react";
import clsx from "clsx";

const IphoneQrcode =
  "/wp-content/themes/kursnova-wp-theme/assets/footer/iphone-qrcode1.svg";
const AndroidQrcode =
  "/wp-content/themes/kursnova-wp-theme/assets/footer/android-qrcode1.svg";
const AppleLogo =
  "/wp-content/themes/kursnova-wp-theme/assets/icons/apple-logo.svg";
const AndroidLogo =
  "/wp-content/themes/kursnova-wp-theme/assets/icons/android-logo.svg";

import styles from "./FooterContactsDesktop.module.sass";

interface FooterContactsDesktopProps {
  className?: string;
}

export const FooterContactsDesktop: FC<FooterContactsDesktopProps> = ({
  className,
}) => {
  return (
    <div className={clsx(styles.contacts, className)}>
      <div className={styles.title}>Связаться с нами</div>
      <a href="mailto:hello@kursnova.com" className={styles.mail}>
        hello@kursnova.com
      </a>
      <div className={styles.buttons}>
        <button className={styles.button}>WhatsApp</button>
        {/* <button className={styles.button}>Телеграм</button> */}
      </div>

      <div className={styles.title}>Скачать приложение kursnova</div>
      <div className={styles.qrcodes}>
        <a href="https://apps.apple.com/ru/app/курснова-уроки-без-скуки/id6751051566">
          <div className={styles.qrcode}>
            <img
              className={styles.qrcodeImg}
              src={IphoneQrcode}
              alt="IphoneQrcode"
            />
            <div className={styles.qrcodeSubtitle}>
              <img src={AppleLogo} alt="AppleLogo" />
              для iPhone
            </div>
          </div>
        </a>
        <a href="https://play.google.com/store/search?q=kursnova&c=apps&hl=ru">
          <div className={styles.qrcode}>
            <img
              className={styles.qrcodeImg}
              src={AndroidQrcode}
              alt="AndroidQrcode"
            />
            <div className={styles.qrcodeSubtitle}>
              <img src={AndroidLogo} alt="AndroidLogo" />
              для android
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
