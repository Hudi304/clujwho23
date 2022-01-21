import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Footer } from '../../common-components/components/footer/footer'
import { CustomPaper } from '../../components/custom-paper/paper-component'
import { NavBarComponent } from '../login/components/navbar/navbar-component'
import './about-us.scss'

export function AboutUs(props: any): JSX.Element {
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

  if (mobile) {
    return (
      <div>
        <div className="aboutUsPageContainer">
          <div className="aboutUsPageGrid">
            <div className="about-us-content">
              <h2 className="title">WHO?</h2>
              <p>
                A group of students from Cluj-Napoca who are planning to
                organize the first Model WHO in Eastern Europe.
              </p>
              <p>
                Inspired by similar, well-established simulations all around the
                world, we believe it is time to bring this type of conference
                closer to students in our geographical area.
              </p>
              <p>
                This is a fully student-led conference, beggining with the
                person who first came up with this exciting idea, Ioana Tabusca,
                the organizing committee, and last but not least, our dedicated
                volunteers. We are all working to help put together and
                popularize this type of simulation, in the hope of putting
                Cluj-Napoca on the Model WHO map, alongside more well-known
                conferences happening in Paris, London, Rotterdam and Sheffield.
              </p>
              <h2 className="title">WHAT?</h2>
              <p>
                A three-day simulation of the annual World Health Assembly in
                Geneva.
              </p>
              <p>
                For the first time in our part of the continent, students have
                the opportunity to embody a country's WHO Ambassador and see for
                themselves how crucial global public health decions are
                discussed, assesed and ultimately taken. Similar to MUNs, our
                participants have the chance to take part in engaging debates,
                expand their knowledge and better their team-work, diplomacy and
                negotiating skills.
              </p>
              <p>
                Moreover, they are able to meet new like-minded people, make
                connections and learn from new experiences. The conference has a
                well-established schedule, consisting of debate sessions
                (Regional Office Sessions and Plenaries), coffee and lunch
                breaks, and Speaker Sessions in order for them to better
                understand the year's theme and how the issues they discuss can
                be solved in the real world.
              </p>
              <p>
                If you need any explenation of the aforementioned terms, (check
                our instagram page, The Delegate's Handbook or ???) (ceva pentru
                new delegates? ca we cater to everyone and encourage everyone to
                participate even if it sounds intimidating? ca facem traininguri
                inainte?)
              </p>
              <h2 className="title">WHY?</h2>
              <p>
                The pandemic shed light on a bunch of irregularities in the
                medical and educational systems.
              </p>
              <p>
                We saw the population become divided over a series of scientific
                facts, governmental and global public health decisions. We
                believe one of the driving factors of this shift in public
                opinion is the lack of understanding of how global health
                policies come to be.
              </p>
              <p>
                As students, we understand one's necessity of familiarizing with
                the mechanics of an ever-changing world. This includes knowledge
                about how health policies come to be, which is especially
                important for future workers in health-related fields. However,
                students from all fields are more than welcome to participate.
              </p>

              <p>
                With ClujWHO, our goal is to raise awareness and further
                understanding of this decision-making process, as it has a big,
                although invisible, impact in all of our lives.
              </p>
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </div>

        <div className={`nav-bar-container`}>
          <NavBarComponent inView={inView} mobile={mobile} />
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div className="aboutUsPageContainer ">
          <div className="aboutUsPageGrid">
            <CustomPaper width={'auto'} height={'100vh'}>
              <div className="inPaper">AboutUs</div>
            </CustomPaper>
          </div>
        </div>

        <div className={`nav-bar-container`}>
          <NavBarComponent inView={inView} mobile={mobile} />
        </div>
      </div>
    )
  }
}
