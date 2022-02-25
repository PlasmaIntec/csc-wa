import {
  useState
} from "react";
import {
  Accordion, Col, Container, Row, Tab, Tabs
} from "react-bootstrap"
import {
  Menu
} from "../Menu"
import "./style.css";

export const AboutUs = () => {
  const [
    key,
    setKey
  ] = useState('community');
  return (
    <>
      <Menu />
      <Container className="about-us-container">
        <Row className="about-us-row">
          <Col className="about-us-header">
                Our Mission
          </Col>
          <Col>
            <h4><i>Bridging cultures, communities and generations.</i></h4>
            <br/>
                We support immigrants and their families by creating opportunities for them to succeed, while honoring their heritage.
          </Col>
        </Row>
        <Row className="about-us-row">
          <Col className="about-us-span">
                About CISC
          </Col>
          <Col>
                CISC is a nonprofit organization working to support immigrants and their families by creating opportunities for them to succeed, while honoring their heritage. Our team of bilingual staff provide linguistically and culturally appropriate information, referral, advocacy, social, and support services to the Chinese immigrant community and immigrants from Eastern Europe, Latin America, and other parts of Asia. Our services include early childhood education, youth development, family support, senior and disabled adult services, and health care access programs. We provide these services at our offices in Seattle, Bellevue, Kent, and Redmond and numerous community-based sites.
          </Col>
        </Row>
        <Row className="about-us-row">
          <Col className="about-us-span">
                How We Got Started
          </Col>
          <Col>
              CISC was started in 1972 by a group of energetic college and high school students. They worked as part time volunteers in a tiny donated space in Chinatown to fulfill a community need. The early focus was on helping non-English speaking elderly in the community. Later, CISC broadened its scope and added adult and youth employment programs, ESL and naturalization classes, family and youth services, domestic violence and crime victim services, and a community technology center.              </Col>
        </Row>
        <Row className="about-us-row">
          <Col className="about-us-span">
                Our Philosophy
          </Col>
          <Col>
              Our agency’s service philosophy is to use an holistic approach with bilingual/bicultural staff to provide developmentally appropriate services to individuals, families, and groups within our community. The focus is first on stabilizing, then strengthening our community members through strength-based skill building. The ultimate goal is for each client to reach their maximum potential as quickly as possible, and become self-sufficient, contributing members of the community.          
          </Col>
        </Row>
        <Row className="about-us-row">
          <Col className="about-us-span">
                Our Values
          </Col>
          <Col>          
            <Tabs
              activeKey={key}
              onSelect={(k: any) => setKey(k)}
              className="mb-3 about-us-tabs"
            >
              <Tab eventKey="community" title="Community">
                <b>Community:</b> Serving immigrant communities is our passion. Each member of our team acts with integrity to maintain trust with the youth, families, and older adults in our care. Our knowledge of and roots in the community enable us to advocate for the well-being of the people we serve and help decision-makers assess the impact of their actions. We develop strong connections with organizations and funders to foster understanding and appreciation of the unique needs of immigrant communities.

              </Tab>
              <Tab eventKey="compassion" title="Compassion">
                <b>Compassion:</b> Each day at CISC, we are present for families, youth, and older adults and listen to understand their needs with concern and care. We share lived experiences or heritage with the communities we serve, which enables us to connect with their challenges as if they are our own. We respond with patience and yearning to help them feel safe and supported.

              </Tab>
              <Tab eventKey="empowerment" title="Empowerment">
                <b>Empowerment:</b> We bring out the strengths in individuals by providing information and services that improve their well-being so they can reach their full potential and achieve their personal goals. We enable each person to make informed decisions on their path to success. We cultivate each person’s strengths through skill building. We present opportunities to advocate for their needs and the community.
              </Tab>
              <Tab eventKey="equity" title="Equity">
                <b>Equity:</b> We recognize each person comes with different strengths and needs. To improve their wellbeing, we seek additional resources to develop programs centered around the cultural and linguistic needs of the people we serve. CISC has a history of advocating for social justice and we believe action is needed to undo racism and achieve racial equity.           
              </Tab>
              <Tab eventKey="inclusion" title="Inclusion">
                <b>Inclusion:</b> Every person who comes to CISC will be treated with respect. Through collaboration, we strive to embrace the background and diversity of our staff and clients and also differences and similarities. We seek to better serve our clients and new groups of people by continually learning from our team and the community. To honor our heritage, we want every staff member and community we serve to be reflected and represented in the agency.           
              </Tab>
            </Tabs>

          </Col>
        </Row>
        <Row className="about-us-row">
          <Col className="about-us-span">
                Equity Statement
          </Col>
          <Col>
            CISC’s founding in 1972 by community volunteers is rooted in the principles of equity and inclusion. We are continuing their vision in our commitment to advancing diversity, equity, and inclusion and in our journey to become an anti-racist organization.
            <br/><br/>
            We recognize each person comes with different strengths and needs to reach their full potential and goals. Our diverse and dedicated team of bilingual and bicultural staff, who share similar lived experiences of the immigrants we serve, develop programs and serve individuals and families by centering their unique needs and strengths.
            <br/><br/>
            CISC has a history of advocating for social justice and we believe action is needed to undo systemic racism and achieve racial equity. To advance equity, we advocate for resources and policies to develop programs centered around the social, emotional, cognitive, physical, cultural, and linguistic needs of the people we serve for every person to have optimal health and well-being.
          </Col>
        </Row>
      </Container>
    </>
  )
}