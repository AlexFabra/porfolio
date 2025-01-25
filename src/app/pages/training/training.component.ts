import { Component, OnInit } from '@angular/core';
import { timelineItem } from '../../components/timeline/timeline.component';


@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  studies: timelineItem[] = [
    { id: 'study3', title: `Higher Technician in Multiplatform Application Development`, description: `Software development and optimization. Familiarization with the creation and management of relational and non-relational databases.`, location: `Ins Pla de l'Estany, Banyoles.`, date: `2020-2022` },
    { id: 'study2', title: 'University degree in history of philosophy', description: `Knowledge of the history of philosophical, ethical and political thought. Promotion of reasoned analysis of arguments and logic.`, location: 'University of Girona.', date: '2015-2020' },
    { id: 'study1', title: 'bachelors degree', description: `Specialty in plastic arts`, location: `Ins Josep Brugulat, Banyoles.`, date: `2013-2015` }
  ]

  works: timelineItem[] = [
    { id: 'workInfo7', title: 'Full stack developer at Zertifier', description: 'Development of web pages with Angular, Javascript, Typescript, Php, Express, Nest, Sql, Firebase... Blockchain projects', date: `2022-2024` },
    { id: 'workInfo6', title: 'Front-end developer at Nexus Geographics', description: 'Internships for the higher DAM degree. Training in Angular and React. Participation in a project developed in Angular. Teamwork. Using Git.', date: `2021-2022` },
    { id: 'workInfo5', title: 'Programmer at Can Maula bakery/pizza shop', description: `Desktop program development with Java/MySql to streamline pizzeria orders.`, location: 'Melianta, Girona', date: `2020-2021` },
    //{ id: 'work4', title: `Representant de la Facultat de lletres a la Universitat de Girona a l'Event Expojove`, description: 'Exposició als interessats de la oferta de la Facultat de Lletres de la UdG', location: 'Girona', date: '2019' },
    { id: 'workInfo3', title: 'Clerk and web manager at the Ulyssus bookstore', description: 'Web design and layout and customer service.', location: 'Girona', date: `2018` },
    //{ id: 'work2', title: 'Cambrer i ajudant de cuina a La Parra', description: `Servei a taula i a barra, cobrament; encarregat de la disposició i neteja de les taules i el local; responsable de la comptabilitat.`, location: 'Banyoles, Girona', date: 'Estius de 2018 a 2019' },
    //{ id: 'work1', title: 'Operari a Haribo', description: `Delegat de treballs de certa responsabilitat com la preparació de les proporcions del ingredients de la pasta del caramel i la preparació del colorant i el aroma.`, location: 'Cornellà del Terri, Girona', date: 'Estius de 2015 a 2017' }
  ]

  frameworksAndLibrariesTitle:string='Experience with frameworks and libraries'
  frameworksAndLibraries=[{ name: 'Angular', value: 70 }, { name: 'React', value: 50 }, {name:'Bootstrap', value:50}, {name:'ionic',value:30}, { name: 'Node', value: 60 }, { name: 'Nest', value: 40 }, { name: 'Hibernate', value: 10} , {name:'firebase',value:10}, {name:'TypeOrm', value:20}, {name:'Prisma', value:20}, {name:'Ethers.js',value:40}];

  codeLanguagesTitle:string='Familiarity with programming languages';
  codeLanguages=[{name:'Javascript',value:80}, {name:'Java', value:80},{name:'Python',value:20},{name:'Php',value:30},{name:'Sql',value:40},{name:'Solidity',value:10}];

  githubIcon='https://res.cloudinary.com/dlmdj7zsu/image/upload/v1655978043/github_fmsq6s.png';
  urlGitHub='https://github.com/AlexFabra?tab=repositories';
  
  certificates:string[] = [
    'https://res.cloudinary.com/dlmdj7zsu/image/upload/v1655978054/angular_cert_icc07r.jpg',
    'https://res.cloudinary.com/dlmdj7zsu/image/upload/v1659280644/certificado_Angular_avanzado_zhn4o8.jpg',
    'https://res.cloudinary.com/dlmdj7zsu/image/upload/v1655978057/certificado_React_img_dqsy2x.jpg',
    'https://res.cloudinary.com/dlmdj7zsu/image/upload/v1655978048/filosofiacert_crjdmy.jpg']

  worksView!: timelineItem[];

  timelinePointColor = 'white';

  constructor() { }

  ngOnInit(): void {
    this.UnfilterWork();
  }

  FilterWorkBySoftware(): void {
    this.worksView = this.works.filter((work) => work.id.includes('Info'))
  }
  UnfilterWork(): void {
    this.worksView = this.works;
  }

}
