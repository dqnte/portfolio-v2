import Head from 'next/head';
import React from 'react';

import '../styles/sizing.scss';
import '../styles/text.scss';

import Projects from './projects';
import Header from './header';
import Viewer from './viewer';
import About from './about';
import Contact from './contact';
import Compression from './compression';
import Stockpicker from './stockpicker';

import Dopaliscious from './dopaliscious';
import Coreo from './coreo';
import Nanas from './nanas';
import CityHall from './cityHall';
import Photography from './photography';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = { selectedView: null, selectedPage: null };
    this.selectView = this.selectView.bind(this);
    this.selectPage = this.selectPage.bind(this);

    this.projectList = [
      {
        id: 1,
        title: 'dopaliscious',
        component: <Dopaliscious />,
        color: '#fff',
        accent: '#5E00DE',
        backColor: '#e42954',
        buttonUrl: 'dope-button.jpg',
        description: (
          <p>
            <span>an online radio station</span>
          </p>
        ),
        stack: (
          <React.Fragment>
            <p>React / Node.js / MongoDb</p>
          </React.Fragment>
        ),
      },
      {
        id: 2,
        title: 'los angeles city hall',
        component: <CityHall />,
        color: '#fff',
        accent: '#FFDB00',
        backColor: '#7fb6ff',
        buttonUrl: 'cityhall-button copy.jpg',
        description: <p>databases for admin and accounting</p>,
        stack: (
          <React.Fragment>
            <p>VBA / SQL Server</p>
          </React.Fragment>
        ),
      },
      {
        id: 3,
        title: 'nanas',
        component: <Nanas />,
        color: '#000',
        accent: '#16693b',
        backColor: '#fee252',
        buttonUrl: 'nanas-button.jpg',
        description: <p>an e-commerce project built with an Agile team</p>,
        stack: (
          <React.Fragment>
            <p>React / Node.js / PostgreSQL</p>
          </React.Fragment>
        ),
      },
      {
        id: 4,
        title: 'coreo',
        component: <Coreo />,
        color: '#000',
        accent: 'grey',
        backColor: '#fff',
        buttonUrl: 'coreo-button.jpg',
        description: (
          <p>coreography assistance with a machine learning twist</p>
        ),
      },
      {
        id: 5,
        title: 'compression',
        component: <Compression />,
        color: '#fff',
        accent: '#3c04a2',
        buttonUrl: 'compression-button.jpg',
        description: <p>a machine learning compression applet</p>,
      },
      {
        id: 6,
        title: 'stock picker',
        component: <Stockpicker />,
        color: '#000',
        accent: 'green',
        buttonUrl: 'stockpicker-button.jpg',
        description: <p>a simple stock picking app</p>,
      },
    ];
  }

  selectView(view) {
    this.setState({ selectedView: view });
  }

  selectPage(page) {
    this.setState({ selectedPage: page });
  }

  render() {
    const { selectedPage } = this.state;
    return (
      <div className="container">
        <Head>
          <title>Dante Tobar</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <main>
          <Viewer view={this.state.selectedView} selectView={this.selectView} />

          <Header
            hide={this.state.selectedView !== null}
            selectPage={this.selectPage}
            selectedPage={this.state.selectedPage}
          />
          {selectedPage === 1 && (
            <Projects
              projectList={this.projectList}
              selectView={this.selectView}
              hide={this.state.selectedView !== null}
            />
          )}
          {selectedPage === 2 && <Photography />}
          {selectedPage === 3 && <About />}
          {selectedPage === 4 && <Contact />}
        </main>
      </div>
    );
  }
}
