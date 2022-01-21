import { useInView } from 'react-intersection-observer'
import { CustomPaper } from '../../components/custom-paper/paper-component'
import { NavBarComponent } from '../login/components/navbar/navbar-component'

import './committees.scss'
import { WorldMap, WorldMapMobile, WorldMapNewColors } from './world-map'
import { AMRO_Description } from './committees-page-text'
import { useState, useEffect } from 'react'
import { Paper } from '@mui/material'

import AFRO_Image from '../../assets/images/AFRO-map-image.png'
import EMRO_Image from '../../assets/images/EMRO-map-image.png'

import amongUS from '../../assets/amonfUS.png'
import { EURODescriptionNew } from './descriptions/Euro/Euro'
import { AFRODescriptionNew } from './descriptions/Afro/Afro'
import { EMRODescriptionNew } from './descriptions/Emro/Emro'
import { AMRODescriptionNew } from './descriptions/Amro/Amro'
import { SEARODescriptionNew } from './descriptions/Searo/Searo'
import { WPROescriptionNew } from './descriptions/Wpro/Wpro'
import { FaceBookUrl, InstaUrl } from '../home/home-component'
import Instagram from '../../assets/ClujWho/icons/Instagram'
import Facebook from '../../assets/ClujWho/icons/Facebook'
import Email from '../../assets/ClujWho/icons/Email'

import OSM_Logo from '../../assets/ClujWho/siglaosmbuna_400.png'
import { Footer } from '../../common-components/components/footer/footer'

export function Committees(props: any): JSX.Element {
  const [ref, inView] = useInView({
    threshold: 0.5
  })

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    if (dimensions.width < 600) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [dimensions])

  console.log(mobile)

  if (mobile) {
    return (
      <div className="committees-backgroud">
        <div className="world-map-container">
          <WorldMapNewColors />
        </div>

        <div className="committees-content">
          <EURODescriptionNew mobile={mobile} />
          <AFRODescriptionNew mobile={mobile} />
          <EMRODescriptionNew mobile={mobile} />
          <AMRODescriptionNew mobile={mobile} />
          <SEARODescriptionNew mobile={mobile} />
          <WPROescriptionNew mobile={mobile} />
        </div>

        <div className="footer-container">
          <Footer />
        </div>

        <div className={`nav-bar-container`}>
          <NavBarComponent inView={true} mobile={mobile} />
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div className="committees-web-backgroud ">
          <div className="committees-web-page-grid">
            <div className="map-container debug">
              <WorldMap width={'100vw'} height={'30vh'} />
            </div>

            <div className="descriptions-list debug">dsadsa</div>
          </div>
        </div>

        <div className={`nav-bar-container`}>
          <NavBarComponent inView={inView} mobile={mobile} />
        </div>
      </div>
    )
  }
}

interface SignitureProps {
  name: string
  image: any
  mobile: any
}

function Signiture(props: SignitureProps) {
  const { mobile, name, image } = props

  if (mobile) {
    return (
      <div className="signiture-container">
        <div className="signiture-card">
          <img className="signiture-image" src={image}></img>
          <div className="signiture-name">{name}</div>
        </div>
      </div>
    )
  } else {
    return <> </>
  }
}

function AFRODescription(props: any): JSX.Element {
  const { mobile } = props

  if (mobile) {
    return (
      <>
        <div className="OxCenter committeePageContainer">
          <CustomPaper width={'90vw'} height={'auto'}>
            <div className="mobileTextContainer">
              <div className="committee-description-container">
                <div className="committee-description-title-m">
                  Africa Regional Office (AFRO)
                </div>

                <div className="AFRO-first-paragraph">
                  The Regional Office for Africa (AFRO) consists of 47 member
                  states. AFRO works with member states and other developmental
                  partners to improve the health of people living in Africa. The
                  Regional Office works in combating both infectious and
                  non-infectious diseases, health sector development as well as
                  responding to disasters and emergencies.
                </div>

                <div className="AFRO-image-container">
                  <img className="AFRO-Image" src={AFRO_Image}></img>
                  <div>
                    <p>
                      This is achieved by adapting global health initiatives
                      into regional plans which meet the specific needs of those
                      living within the Region.
                    </p>
                    <p>
                      In regard to sexual health the Region has been working
                      towards the eradication of HIV/AIDS, decreasing the
                      prevalence and mortality of cervical cancer and improving
                      maternal and neonatal health care.
                    </p>
                  </div>
                </div>

                <div className="AFRO-bullet-point-list-container">
                  <p className="AFRO-bullet-point-list-title">
                    To achieve these goals the Region has been working on
                    several initiatives such as:
                  </p>
                  <ul className="AFRO-bullet-point-list">
                    <li className="AFRO-bullet-point-list-item">
                      Working to achieve the UNAIDs 90-90-90 targets
                    </li>
                    <li className="AFRO-bullet-point-list-item">
                      The Free to Shine campaign
                    </li>
                    <li className="AFRO-bullet-point-list-item">
                      Implementing the Treat All policy
                    </li>
                    <li className="AFRO-bullet-point-list-item">
                      Creating toolkits to assist with cervical cancer data
                      collection, use and standardization
                    </li>
                    <li className="AFRO-bullet-point-list-item">
                      Creation of a zero Draft of the Global Strategy towards
                      the Elimination of Cervical Cancer
                    </li>
                    <li className="AFRO-bullet-point-list-item">
                      Introducing a Reproductive, Maternal, New-born, Child and
                      Adolescent Health Technical Advisory Group
                    </li>
                    <li className="AFRO-bullet-point-list-item">
                      Supporting the development of national strategies and
                      guidelines on sexual reproductive health and rights
                    </li>
                  </ul>
                </div>

                <Signiture
                  name={'- Ion Popescu'}
                  image={amongUS}
                  mobile={mobile}
                />
              </div>
            </div>
          </CustomPaper>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="OxCenter committeePageContainer">
          <CustomPaper width={'90vw'} height={'auto'}>
            <div className="mobileTextContainer">
              <div className="committee-description-container">
                <div className="committee-description-title">
                  Africa Regional Office (AFRO)
                </div>

                <div className="AFRO-first-paragraph">
                  The Regional Office for Africa (AFRO) consists of 47 member
                  states. AFRO works with member states and other developmental
                  partners to improve the health of people living in Africa. The
                  Regional Office works in combating both infectious and
                  non-infectious diseases, health sector development as well as
                  responding to disasters and emergencies.
                </div>

                <div className="AFRO-image-container">
                  <img className="AFRO-Image" src={AFRO_Image}></img>
                  <div>
                    <p>
                      This is achieved by adapting global health initiatives
                      into regional plans which meet the specific needs of those
                      living within the Region.
                    </p>
                    <p>
                      In regard to sexual health the Region has been working
                      towards the eradication of HIV/AIDS, decreasing the
                      prevalence and mortality of cervical cancer and improving
                      maternal and neonatal health care.
                    </p>
                  </div>
                </div>

                <div className="AFRO-bullet-point-list-container">
                  <p className="AFRO-bullet-point-list-title">
                    To achieve these goals the Region has been working on
                    several initiatives such as:
                  </p>
                  <ul className="AFRO-bullet-point-list">
                    <li className="AFRO-bullet-point-list-item">
                      Working to achieve the UNAIDs 90-90-90 targets
                    </li>
                    <li className="AFRO-bullet-point-list-item">
                      The Free to Shine campaign
                    </li>
                    <li className="AFRO-bullet-point-list-item">
                      Implementing the Treat All policy
                    </li>
                    <li className="AFRO-bullet-point-list-item">
                      Creating toolkits to assist with cervical cancer data
                      collection, use and standardization
                    </li>
                    <li className="AFRO-bullet-point-list-item">
                      Creation of a zero Draft of the Global Strategy towards
                      the Elimination of Cervical Cancer
                    </li>
                    <li className="AFRO-bullet-point-list-item">
                      Introducing a Reproductive, Maternal, New-born, Child and
                      Adolescent Health Technical Advisory Group
                    </li>
                    <li className="AFRO-bullet-point-list-item">
                      Supporting the development of national strategies and
                      guidelines on sexual reproductive health and rights
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CustomPaper>
        </div>
      </>
    )
  }
}

function EMRODescription(props: any): JSX.Element {
  const { mobile } = props

  if (mobile) {
    return (
      <>
        <div className="OxCenter committeePageContainer">
          <CustomPaper width={'90vw'} height={'auto'}>
            <div className="mobileTextContainer">
              <div className="committee-description-container">
                <div className="committee-description-title-m">
                  Eastern Mediterranean Regional Office (EMRO)
                </div>

                <p>
                  Formed between 1948 and 1952, the WHO Regional Office for the
                  Eastern Mediterranean is one of WHO’s 6 regional offices
                  around the world. It serves the WHO Eastern Mediterranean
                  Region, which comprises 21 Member States and occupied
                  Palestinian territory (including East Jerusalem), with a
                  population of nearly 679 million people located in the Middle
                  East, the North Africa, the Horn of Africa and Central Asia.
                </p>

                <div className="EMRO-image-container-m">
                  <img className="EMRO-Image-m" src={EMRO_Image}></img>
                </div>

                <p>
                  Despite achievements in the population and health sectors
                  during the last decades, several reproductive health issues
                  remain, while new challenges have emerged.
                </p>

                <p>
                  There is a correlation between reproductive health issues, a
                  country' s level of social development, and the size of gaps
                  within a country; between men and women, urban and rural, rich
                  and poor and the EMRO region is heterogeneous in terms of both
                  culture and socioeconomic development. The region encompasses
                  the oil-rich states of the Gulf Cooperation Council—among the
                  wealthiest countries in the world— alongside struggling
                  countries that rank among the world’s poorest.
                </p>

                <p>
                  Major reproductive health issues in the region include high
                  maternal mortality, particularly in Yemen, Morocco, Egypt, and
                  Iraq; high fertility and slowing fertility decline; early
                  marriage and high teenage fertility; the increasing prevalence
                  of sexually transmitted infections and HIV/AIDS; and female
                  genital cutting in Egypt and Yemen.
                </p>

                <a href="https://www.who.int/publications/i/item/WHO-SRH-21.21">
                  www.who.int/publications
                </a>

                <Signiture
                  name={'- Ion Popescu'}
                  image={amongUS}
                  mobile={mobile}
                />
              </div>
            </div>
          </CustomPaper>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="OxCenter committeePageContainer">
          <CustomPaper width={'90vw'} height={'auto'}>
            <div className="mobileTextContainer">
              <div className="committee-description-container">
                <div className="committee-description-title">
                  Eastern Mediterranean Regional Office (EMRO)
                </div>

                <p>
                  Formed between 1948 and 1952, the WHO Regional Office for the
                  Eastern Mediterranean is one of WHO’s 6 regional offices
                  around the world. It serves the WHO Eastern Mediterranean
                  Region, which comprises 21 Member States and occupied
                  Palestinian territory (including East Jerusalem), with a
                  population of nearly 679 million people located in the Middle
                  East, the North Africa, the Horn of Africa and Central Asia.
                </p>

                <div className="EMRO-image-container">
                  <img className="EMRO-Image" src={EMRO_Image}></img>
                </div>

                <p>
                  Despite achievements in the population and health sectors
                  during the last decades, several reproductive health issues
                  remain, while new challenges have emerged.
                </p>

                <p>
                  There is a correlation between reproductive health issues, a
                  country' s level of social development, and the size of gaps
                  within a country; between men and women, urban and rural, rich
                  and poor and the EMRO region is heterogeneous in terms of both
                  culture and socioeconomic development. The region encompasses
                  the oil-rich states of the Gulf Cooperation Council—among the
                  wealthiest countries in the world— alongside struggling
                  countries that rank among the world’s poorest.
                </p>

                <p>
                  Major reproductive health issues in the region include high
                  maternal mortality, particularly in Yemen, Morocco, Egypt, and
                  Iraq; high fertility and slowing fertility decline; early
                  marriage and high teenage fertility; the increasing prevalence
                  of sexually transmitted infections and HIV/AIDS; and female
                  genital cutting in Egypt and Yemen.
                </p>

                <a href="https://www.who.int/publications/i/item/WHO-SRH-21.21">
                  www.who.int/publications
                </a>
              </div>
            </div>
          </CustomPaper>
        </div>
      </>
    )
  }
}

function EURODescription(props: any): JSX.Element {
  const { mobile } = props

  if (mobile) {
    return (
      <>
        <div className="OxCenter committeePageContainer">
          <CustomPaper width={'90vw'} height={'auto'}>
            <div className="mobileTextContainer">
              <div className="committee-description-container">
                <div className="committee-description-title-m">
                  European Regional Office (EURO)
                </div>

                <p>
                  The Regional office for the European Region entails 53
                  countries, around 900 million people, over 200 languages and
                  17 time zones - thus having huge geographical, cultural and
                  health situation variations. The main bureau is in Copenhagen,
                  Denmark and there are five technical centers as well as
                  separate offices in the member countries. It aims to aid the
                  member states in several aspects, including health research
                  thus generating data to develop campaigns, emergency
                  operational support, training, improvements of public health
                  practices and of regional health services.
                </p>

                <p>
                  Concerning sexual health in the EURO regional committee, key
                  topics include:
                </p>

                <ul>
                  <li>
                    HIV - the EURO was able to significantly reduce transmission
                    to children, however due to the COVID-19 pandemic a
                    dramatically increasing number remain undiagnosed
                  </li>

                  <li>
                    Viral hepatitis elimination - promoting vaccinations,
                    diagnosis and treatment
                  </li>

                  <li>
                    Cervical cancer - promoting vaccinations, screening programs
                  </li>

                  <li>
                    Sexual violence - its is approximated that 1 in 4 women in
                    the EURO region experienced physical or sexual violence.
                  </li>
                </ul>

                <p>
                  The EURO “Action Plan for Sexual and Reproductive Health
                  Agenda 2030” aims to:
                </p>

                <ul>
                  <li>
                    “Enable all people to make informed decisions about their
                    sexual and reproductive health and ensure that their human
                    rights are respected, protected and fulfilled”
                  </li>

                  <li>
                    “Ensure that all people can enjoy the highest attainable
                    standard of sexual and reproductive health and well-being”
                  </li>

                  <li>
                    “Guarantee universal access to sexual and reproductive
                    health and eliminate inequities”
                  </li>
                </ul>

                <p>References</p>
                <ul>
                  <li>
                    <a href="https://apps.who.int/iris/bitstream/handle/10665/345018/WHO-EURO-2021-3230-42989-60075-eng.pdf?sequence=1&isAllowed=y">
                      An introduction to WHO in the European Region.pdf
                    </a>
                  </li>
                  <li>
                    <a href="https://www.euro.who.int/__data/assets/pdf_file/0003/322275/Action-plan-sexual-reproductive-health.pdf">
                      Action Plan for Sexual and Reproductive Health.pdf
                    </a>
                  </li>
                  <li>
                    <a href="https://www.euro.who.int/en/health-topics/Life-stages/sexual-and-reproductive-health">
                      www.euro.who.int/en/health-topics
                    </a>
                  </li>
                </ul>

                <Signiture
                  name={'- Ion Popescu'}
                  image={amongUS}
                  mobile={mobile}
                />
              </div>
            </div>
          </CustomPaper>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="OxCenter committeePageContainer">
          <CustomPaper width={'90vw'} height={'auto'}>
            <div className="mobileTextContainer">
              <div className="committee-description-container">
                <div className="committee-description-title">
                  European Regional Office (EURO)
                </div>

                <p>
                  The Regional office for the European Region entails 53
                  countries, around 900 million people, over 200 languages and
                  17 time zones - thus having huge geographical, cultural and
                  health situation variations. The main bureau is in Copenhagen,
                  Denmark and there are five technical centers as well as
                  separate offices in the member countries. It aims to aid the
                  member states in several aspects, including health research
                  thus generating data to develop campaigns, emergency
                  operational support, training, improvements of public health
                  practices and of regional health services.
                </p>

                <p>
                  Concerning sexual health in the EURO regional committee, key
                  topics include:
                </p>

                <ul>
                  <li>
                    HIV - the EURO was able to significantly reduce transmission
                    to children, however due to the COVID-19 pandemic a
                    dramatically increasing number remain undiagnosed
                  </li>

                  <li>
                    Viral hepatitis elimination - promoting vaccinations,
                    diagnosis and treatment
                  </li>

                  <li>
                    Cervical cancer - promoting vaccinations, screening programs
                  </li>

                  <li>
                    Sexual violence - its is approximated that 1 in 4 women in
                    the EURO region experienced physical or sexual violence.
                  </li>
                </ul>

                <p>
                  The EURO “Action Plan for Sexual and Reproductive Health
                  Agenda 2030” aims to:
                </p>

                <ul>
                  <li>
                    “Enable all people to make informed decisions about their
                    sexual and reproductive health and ensure that their human
                    rights are respected, protected and fulfilled”
                  </li>

                  <li>
                    “Ensure that all people can enjoy the highest attainable
                    standard of sexual and reproductive health and well-being”
                  </li>

                  <li>
                    “Guarantee universal access to sexual and reproductive
                    health and eliminate inequities”
                  </li>
                </ul>

                <p>References</p>
                <ul>
                  <li>
                    <a href="https://apps.who.int/iris/bitstream/handle/10665/345018/WHO-EURO-2021-3230-42989-60075-eng.pdf?sequence=1&isAllowed=y">
                      An introduction to WHO in the European Region.pdf
                    </a>
                  </li>
                  <li>
                    <a href="https://www.euro.who.int/__data/assets/pdf_file/0003/322275/Action-plan-sexual-reproductive-health.pdf">
                      Action Plan for Sexual and Reproductive Health.pdf
                    </a>
                  </li>
                  <li>
                    <a href="https://www.euro.who.int/en/health-topics/Life-stages/sexual-and-reproductive-health">
                      www.euro.who.int/en/health-topics
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </CustomPaper>
        </div>
      </>
    )
  }
}
