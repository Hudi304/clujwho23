import { useInView } from 'react-intersection-observer'
import { NavBarComponent } from '../login/components/navbar/navbar-component'

import './committees.scss'
import { WorldMap, WorldMapNewColors } from './world-map'
import { useState, useEffect } from 'react'

import { EURODescriptionNew } from './descriptions/Euro/Euro'
import { AFRODescriptionNew } from './descriptions/Afro/Afro'
import { EMRODescriptionNew } from './descriptions/Emro/Emro'
import { AMRODescriptionNew } from './descriptions/Amro/Amro'
import { SEARODescriptionNew } from './descriptions/Searo/Searo'
import { WPROescriptionNew } from './descriptions/Wpro/Wpro'

import { Footer } from '../../common-components/components/footer/footer'
import WorldMapEuro from './descriptions/Euro/EuroMap'
import WorldMapAfro from './descriptions/Afro/AfroMap'
import WorldMapEmro from './descriptions/Emro/EmroMap'
import WorldMapAmro from './descriptions/Amro/AmroMap'
import WorldMapSearo from './descriptions/Searo/SearoMap'
import WorldMapWpro from './descriptions/Wpro/WproMap'
import { Helmet } from 'react-helmet'

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

  const [ref1, inView1] = useInView({
    threshold: 0.99
  })

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
        <Helmet>
          <title>Comittees | ClujWHO</title>
          <meta
            name="description"
            content="ClujWHO is formed out of six committees. Learn more about each committee, their challenges and some of their plans to combat the issues they are facing."
          />
        </Helmet>
        <div className="committees-web-backgroud ">
          <div className="committees-web-page-grid">
            <div className="map-container-container ">
              <div className="map-container">
                <WorldMap />
              </div>
            </div>

            <div className="descriptions-list-container ">
              <div className="descriptions-list">
                <EuroCard mobile={mobile} />

                <AfroCard mobile={mobile} />

                <EmroCard mobile={mobile} />

                <AmroCard mobile={mobile} />

                <SearoCard mobile={mobile} />

                <WproCard mobile={mobile} />
              </div>
            </div>
          </div>
        </div>

        <div className={`nav-bar-container`}>
          <NavBarComponent inView={inView} mobile={mobile} />
        </div>
      </div>
    )
  }
}

function EuroCard(props: { mobile: any }) {
  const [ref, inView] = useInView({
    threshold: 0.99
  })

  return (
    <div className="description-list-item" ref={ref}>
      <div
        className={`description-map-container ${
          inView ? 'description-map-container-left' : null
        }`}
      >
        <WorldMapEuro />
      </div>
      <div
        className={`description-container ${
          inView ? 'description-container-right' : null
        }`}
      >
        <EURODescriptionNew mobile={props.mobile} />
      </div>
    </div>
  )
}

function EmroCard(props: { mobile: any }) {
  const [ref, inView] = useInView({
    threshold: 0.99
  })

  return (
    <div className="description-list-item" ref={ref}>
      <div
        className={`description-map-container ${
          inView ? 'description-map-container-left' : null
        }`}
      >
        <WorldMapEmro />
      </div>
      <div
        className={`description-container ${
          inView ? 'description-container-right' : null
        }`}
      >
        <EMRODescriptionNew mobile={props.mobile} />
      </div>
    </div>
  )
}

function AfroCard(props: { mobile: any }) {
  const [ref, inView] = useInView({
    threshold: 0.99
  })

  return (
    <div className="description-list-item" ref={ref}>
      <div
        className={`description-map-container ${
          inView ? 'description-map-container-left' : null
        }`}
      >
        <WorldMapAfro />
      </div>
      <div
        className={`description-container ${
          inView ? 'description-container-right' : null
        }`}
      >
        <AFRODescriptionNew mobile={props.mobile} />
      </div>
    </div>
  )
}

function AmroCard(props: { mobile: any }) {
  const [ref, inView] = useInView({
    threshold: 0.99
  })

  return (
    <div className="description-list-item" ref={ref}>
      <div
        className={`description-map-container ${
          inView ? 'description-map-container-left' : null
        }`}
      >
        <WorldMapAmro />
      </div>
      <div
        className={`description-container ${
          inView ? 'description-container-right' : null
        }`}
      >
        <AMRODescriptionNew mobile={props.mobile} />
      </div>
    </div>
  )
}

function SearoCard(props: { mobile: any }) {
  const [ref, inView] = useInView({
    threshold: 0.99
  })

  return (
    <div className="description-list-item" ref={ref}>
      <div
        className={`description-map-container ${
          inView ? 'description-map-container-left' : null
        }`}
      >
        <WorldMapSearo />
      </div>
      <div
        className={`description-container ${
          inView ? 'description-container-right' : null
        }`}
      >
        <SEARODescriptionNew mobile={props.mobile} />
      </div>
    </div>
  )
}

function WproCard(props: { mobile: any }) {
  const [ref, inView] = useInView({
    threshold: 0.99
  })

  return (
    <div className="description-list-item" ref={ref}>
      <div
        className={`description-map-container ${
          inView ? 'description-map-container-left' : null
        }`}
      >
        <WorldMapWpro />
      </div>
      <div
        className={`description-container ${
          inView ? 'description-container-right' : null
        }`}
      >
        <WPROescriptionNew mobile={props.mobile} />
      </div>
    </div>
  )
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
