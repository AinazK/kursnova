import type { FC } from "react";
import clsx from "clsx";

import { Helmet } from "react-helmet";

import { Header } from "../../../modules/Header/Header";
import { Container } from "../../../components/Container/Container";
import { BackButton } from "../../../components/BackButton/BackButton";

import "../policy.sass";
import LicenseQRCode from "../../../assets/common/footer/license-qrcode.png";
import LicenseSeal from "../../../assets/common/footer/license-seal.png";

interface LicenseProps {
  className?: string;
}

export const License: FC<LicenseProps> = ({ className }) => {
  return (
    <>
      <Helmet>
        <title>
          Kursnova | Лицензия на образовательную деятельность сайта «Курснова»
        </title>
      </Helmet>

      <section className={clsx("policy-section", className)}>
        <Header />

        <Container>
          <BackButton />
          <div className="policy-wrapper">
            <h3 className="pageTitle">
              Министерство образования и науки Республики Татарстан
            </h3>
            <div className="container">
              <p
                className="policy-p"
                style={{
                  marginTop: "-30px",
                  marginBottom: "40px",
                  textAlign: "center",
                }}
              >
                (наименование лицензирующего органа)
              </p>

              <div className="license-info-row">
                <div className="license-text">
                  <p className="policy-p">
                    Выписка из реестра лицензий по состоянию на: 11:19 «29» июля
                    2025г.
                  </p>
                  <p className="policy-p">1. Статус лицензии Действует</p>
                  <p className="policy-p">
                    2. Регистрационный номер лицензии: No Л035-01272-16/02780415
                  </p>
                </div>

                <div className="license-qrcode">
                  <img src={LicenseQRCode} alt="QR-код лицензии" />
                </div>
              </div>

              <p className="policy-p">
                3. Дата предоставления лицензии: 29.07.2025
              </p>

              <p className="policy-p">
                4. Полное и (в случае, если имеется) сокращенное наименование, в
                том числе фирменное наименование, и организационно-правовая
                форма юридического лица, адрес его места нахождения,
                государственный регистрационный номер записи о создании
                юридического лица:
              </p>

              <p
                className="policy-p"
                style={{
                  marginTop: "-15px",
                  textAlign: "center",
                }}
              >
                Общество с ограниченной ответственностью «КУРСНОВА», (ООО
                «КУРСНОВА»), Общества с ограниченной ответственностью, 420015,
                Республика Татарстан, г. Казань, ул. Карла Маркса, д. 51/14,
                помещ. 73, 1241600045015
              </p>
              <p
                className="policy-p"
                style={{
                  marginTop: "-20px",
                  textAlign: "center",
                  borderTop: "#fff solid 1px",
                  fontSize: "14px",
                }}
              >
                (заполняется в случае, если лицензиатом является юридическое
                лицо)
              </p>

              <p className="policy-p">
                5. Полное и (в случае, если имеется) сокращенное наименование
                иностранного юридического лица, полное и (в случае, если
                имеется) сокращенное наименование филиала иностранного
                юридического лица, аккредитованного в соответствии с Федеральным
                законом "Об иностранных инвестициях в Российской Федерации",
                адрес (место нахождения) филиала иностранного юридического лица
                на территории Российской Федерации, номер записи об аккредитации
                филиала иностранного юридического лица в государственном реестре
                аккредитованных филиалов, представительств иностранных
                юридических лиц:
              </p>

              <p
                className="policy-p"
                style={{
                  textAlign: "center",
                  borderTop: "#fff solid 1px",
                  fontSize: "14px",
                }}
              >
                (заполняется в случае, если лицензиатом является иностранное
                юридическое лицо)
              </p>

              <p className="policy-p">
                6. Фамилия, имя и (в случае, если имеется) отчество
                индивидуального предпринимателя, государственный регистрационный
                номер записи о государственной регистрации индивидуального
                предпринимателя, а также иные сведения, предусмотренные пунктом
                5 части 2 статьи 21 Федерального закона «О лицензировании
                отдельных видов деятельности»:
              </p>

              <p
                className="policy-p"
                style={{
                  textAlign: "center",
                  borderTop: "#fff solid 1px",
                  fontSize: "14px",
                }}
              >
                (заполняется в случае, если лицензиатом является индивидуальный
                предприниматель)
              </p>

              <p className="policy-p">
                7. Идентификационный номер налогоплательщика: No 1683023468
              </p>

              <p className="policy-p">
                8. Адреса мест осуществления отдельного вида деятельности,
                подлежащего лицензированию:
              </p>

              <p
                className="policy-p"
                style={{
                  marginTop: "-15px",
                  textAlign: "center",
                }}
              >
                420015, Республика Татарстан, г. Казань, ул. Карла Маркса, д.
                51/14, помещ. 73
              </p>
              <p
                className="policy-p"
                style={{
                  marginTop: "-20px",
                  textAlign: "center",
                  borderTop: "#fff solid 1px",
                  fontSize: "14px",
                }}
              ></p>
              <p className="policy-p">
                9. Лицензируемый вид деятельности с указанием выполняемых работ,
                оказываемых услуг, составляющих лицензируемый вид деятельности:
                на осуществление образовательной деятельности по реализации
                образовательных программ по видам образования, уровням
                образования, по профессиям, специальностям, направлениям
                подготовки (для профессионального образования), по подвидам
                дополнительного образования:
              </p>

              <div className="table">
                <div className="table-row">
                  <div className="bolder table-left table-title">
                    Дополнительное образование
                  </div>
                </div>

                <div className="table-row">
                  <div className="bolder table-left table-title">No п/п</div>
                  <div className="bolder table-right table-title">Подвиды</div>
                </div>

                <div className="table-row">
                  <div className="table-left">1</div>
                  <div className="table-right">2</div>
                </div>
                <div className="table-row">
                  <div className="table-left">1</div>
                  <div className="table-right">
                    Дополнительное образование детей и взрослых
                  </div>
                </div>
              </div>

              <p
                className="policy-p"
                style={{
                  marginTop: "50px",
                }}
              >
                10. Номер и дата приказа (распоряжения) лицензирующего органа о
                предоставлении лицензии:
              </p>
              <p
                className="policy-p"
                style={{
                  marginTop: "-15px",
                  textAlign: "center",
                }}
              >
                Приказ Noпод-1419/25-Д от 29.07.2025
              </p>
              <p
                className="policy-p"
                style={{
                  marginTop: "-20px",
                  textAlign: "center",
                  borderTop: "#fff solid 1px",
                  fontSize: "14px",
                }}
              >
                (заполняется в случае, если лицензиатом является юридическое
                лицо)
              </p>

              <p
                className="policy-p"
                style={{
                  textAlign: "center",
                }}
              >
                Заместитель министра образования и науки - руководитель
                департамента надзора и контроля в сфере образования РТ
              </p>

              <p
                className="policy-p"
                style={{
                  marginTop: "-20px",
                  textAlign: "center",
                  borderTop: "#fff solid 1px",
                  fontSize: "14px",
                }}
              >
                (Должность уполномоченного лица)
              </p>

              <p className="policy-p" style={{ textAlign: "center" }}>
                <img
                  src={LicenseSeal}
                  alt=""
                  style={{
                    height: "auto",
                    width: "200px",
                  }}
                />
              </p>

              <p
                className="policy-p"
                style={{
                  marginTop: "-20px",
                  textAlign: "center",
                  borderTop: "#fff solid 1px",
                  fontSize: "14px",
                }}
              >
                (Электронная подпись уполномоченного лица)
              </p>

              <p
                className="policy-p"
                style={{
                  textAlign: "center",
                }}
              >
                Музипов Рамис Гаптраисович
              </p>

              <p
                className="policy-p"
                style={{
                  marginTop: "-20px",
                  textAlign: "center",
                  borderTop: "#fff solid 1px",
                  fontSize: "14px",
                }}
              >
                (Фамилия, имя, отчество уполномоченного лица)
              </p>
              <p
                className="policy-p"
                style={{
                  fontSize: "14px",
                  marginTop: "10px",
                }}
              >
                Выписка носит информационный характер, после ее составления в
                реестр лицензий могли быть внесены изменения
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
