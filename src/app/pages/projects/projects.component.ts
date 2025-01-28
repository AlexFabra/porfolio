import { Component, OnInit } from '@angular/core';

interface Project {
  title: string,
  subtitle: string,
  image: string,
  summary: string,
  content: string,
  url?: string,
  isVisible: boolean
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  showModal: boolean = false;

  selectedProject!: Project;

  projects: Project[] = [
    {
      title: 'Pizza Maula',
      subtitle: `(Desktop app project) 2021 <br> Java`,
      image: 'https://res.cloudinary.com/dlmdj7zsu/image/upload/v1714588308/j2ezvpi05tqvzabxcp8f.png',
      summary: '',
      content: `
      Program to create kitchen tickets and send them to the kitchen printer. It is prepared to connect to a MySql database to save and access customer data.
      Features: - Allows you to manage the creation and access to customer data quickly. - Efficient, intuitive and accessible creation of orders and printing of data. - Permanence of order information sorted by collection time to facilitate the work of the clerk. - Ability to make a backup copy of customer data by pressing a button.`,
      isVisible: true,
      url: 'https://github.com/AlexFabra/PizzaMaula'
    },
    {
      title: 'Calendar PCP (team member at Nexus Geographics)',
      subtitle: `2023 <br> Angular and React`,
      image: './../../../assets/imgs/logo-nexus.png',
      summary: '',
      content: 'Creation of a web application to view and manage employee vacations. The application was first developed in Angular and then in React.',
      isVisible: true,
      url: 'https://github.com/AlexFabra/calendar-mood'
    },
    {
      title: 'Calendar Mood (team member)',
      subtitle: `(Android app project) 2022 <br> Angular-Ionic-Java-SQLite`,
      image: 'https://res.cloudinary.com/dlmdj7zsu/image/upload/v1648071863/logoCalendarMood_avsuw4.png',
      summary: '',
      content: 'Android application to facilitate self-awareness of our emotional states and their causes. It allows us to keep a daily record of a form that includes the emotions experienced. Through these forms, information is saved and statistics are created. The forms and the selectable emotions can be edited.',
      isVisible: true,
      url: 'https://github.com/AlexFabra/calendar-mood'
    },
    {
      title: 'Demomusic',
      subtitle: `(Web app project) 2022 <br> Angular-Express-MongoDb`,
      image: 'https://res.cloudinary.com/dlmdj7zsu/image/upload/v1660905933/DemoMusic/demomusictextogrueso_zgg8bv.png',
      summary: '',
      content: 'Application to manage music for groups of people through a voting system. (More information at Demomusic v2)',
      isVisible: true
    },
    {
      title: 'Uniqueids (team member at Zertifier)',
      subtitle: `(Web project) 2022-2023 <br> Express-Sql-Solidity`,
      image: './../../../assets/imgs/logo-zertifier.png',
      summary: '',
      content: 'In this project, NFTS and NFCS are linked to identify and improve product traceability. My task was to design and develop a database, a backend and an administrative panel on the web, as well as various Smart Contracts in Solidity.',
      isVisible: true,
      url: 'https://www.zertifier.com/uniqueid.html'
    },
    {
      title: 'Zerticarbon (team member at Zertifier)',
      subtitle: `(Web project) 2023 <br> Vue`,
      image: './../../../assets/imgs/logo_zerticarbon.png',
      summary: '',
      content: 'Zerticarbon is a project that sells the CO2 absorbed by trees. Absorption is calculated from physical data and the CO2 is tokenized. My task was to automate this tokenization through the processing of various files where the information is stored.',
      isVisible: true,
      url: 'https://app.zerticarbon.com/'
    },
    {
      title: 'Megasite (team member at Zertifier)',
      subtitle: `(Web project) 2023 <br> Php-sql`,
      image: './../../../assets/imgs/logo-megatro.png',
      summary: '',
      content: 'Megasite is a web application that creates web pages. My task was to update it.',
      isVisible: true,
      url: 'https://www.megatro.com/disseny_web.html'
    },
    {
      title: 'Ecologización',
      subtitle: `(Web project) 2023-2024 <br> Html-Javascript`,
      image: './../../../assets/imgs/ecologizacion-logo.png',
      summary: '',
      content: 'This project aims to create articles and a repository of news classified by environmental themes.',
      isVisible: true,
      url: 'https://ecologizacion.es/'
    },
    {
      title: `Emergència climàtica Pla de l'Estany`,
      subtitle: `(Web project) 2024 <br> Angular-Node-Express-Mysql2-Sql`,
      image: './../../../assets/imgs/emergencia-climatica-pde.png',
      summary: '',
      content: 'Self-authentication; dynamically created pages and modals: content creation panel; contact service; editable calendar.',
      isVisible: true,
      url: 'https://emergenciaclimaplaestany.cat/inici'
    },
    {
      title: `Zertipower (team member at Zertifier)`,
      subtitle: `(Web project) 2023-2024 <br> Angular-Nest-Prisma-Sql-Solidity`,
      image: './../../../assets/imgs/zertipower-logo-black.png',
      summary: `<a href="https://www.zertipower.com/">Official project information</a>`,
      content: 'This project aims to facilitate energy management in energy communities by tokenizing it. I have participated in the creation of Smart Contracts, in the creation of the client panel, in the creation of the administrator control panel and in the app to calculate the capacity of a house to include solar panels and the simulation of its entry into an energy community. I have mainly been responsible for the backend and the web application. I have touched on authentication mechanisms, maps, methods to obtain the land registries. I have created algorithms for energy distribution.',
      isVisible: true,
      url: 'https://calculadora.zertipower.com'
    },
    {
      title: `Pocimarvm`,
      subtitle: `(Web project) 2024-2025 <br> Angular`,
      image: './../../../assets/imgs/pocimarum-logo.png',
      summary: ``,
      content: 'Application to facilitate the creation and editing of letters, as well as creating printable documents.',
      isVisible: true
    },
    {
      title: 'Demomusic v2',
      subtitle: `(Web app project) 2024-2025 <br> Angular-Nest-TypeOrm-Sql`,
      image: 'https://res.cloudinary.com/dlmdj7zsu/image/upload/v1660905933/DemoMusic/demomusictextogrueso_zgg8bv.png',
      summary: '',
      content: 'Application to manage music for groups of people through a voting system. Different user groups can be created. In each group, a list of participating songs is created and everyone can vote. Each round, each user can propose and vote once. The main functionalities are supported through a socket system that allows the application to manage information in real time. This application has a user registration system that can be linked to Google users.',
      isVisible: true
    },
  ]

  knownLibraries:string[]=['Google auth','JWT','Google maps', 'Mapbox','Leaflet','Datadis','Ethersjs','bootstrap','Angular material']

  ngOnInit(): void {
  }

  selectProject(project: Project) {
    this.selectedProject = project;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }


}
