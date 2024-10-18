import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills:any={
    technologies:[
        {name:"Html, Css, BooTstrap",percent:90,remark:'excellent'},
        {name:"PHP, PHPUNIT",percent:90,remark:'excellent'},
        {name:"Java, J2EE, JavaScript, TypeScript, Jquery",percent:70,remark:'good'},
        {name:"Symfony, Spring boot, Hibernate, Angular", percent:90,remark:'excellent'},
        {name:"Android",percent:50,remark:'average'},
        {name:"C, C++, C#, Matlab",percent:50,remark:'average'},
      ],
    tools:[
        {name:"SonarQube et Checkmarx", percent:90,remark:'excellent'},
        {name:"MySql, PgSql, Maria DB MySql", percent:90,remark:'excellent'},
        {name:"GitLab, GitHub", percent:90,remark:'excellent'},
        {name:"Docker, Kubernetes",percent:70,remark:'good'},
        {name:"Linux, Windows",percent:70,remark:'very-good'},
        {name:"Vs code, Eclipse, HeidiSQL",percent:90,remark:'excellent'}
      ],
    methodologies:[
        {name:"Agilité",percent:70,remark:'excellent'},
        {name:"Uml",percent:90,remark:'excellent'},
        {name:"Disign Thinking",percent:70,remark:'good'},
        {name:"TDD",percent:90,remark:'excellent'},
        {name:"DevOps",percent:50,remark:'average'}
      ],
    other:[
        {name:"Installation entretien et dépannage des équipements informatiques, câblage réseau informatique.",percent:90,remark:'excellent'},
        {name:"Radiométrie , géométrie de l’image et Synthèse d’image.",percent:50,remark:'average'},

      ]
  };

  ngOnInit(): void {
  }
}
