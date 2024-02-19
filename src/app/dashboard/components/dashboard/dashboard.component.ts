import { Component, OnInit } from '@angular/core';
import { CompetitionModule } from 'src/app/models/competition/competition.module';
import { CompetitionService } from '../../services/competition/competition.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allCompetitions: CompetitionModule[];
  currentPage:number = 0;
  pageSize:number = 2;
  totalPages : any ;
  totalElements = 0;


  constructor(
    private competitionService: CompetitionService,
    private route : ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.load()

   // this.loadcompitition();
  }

  loadcompitition(): void {
    this.competitionService.getCompetitions()
      .subscribe(
        (responsables) => {
this.allCompetitions=responsables
        },
         (error) => {
           this.handleError(error);
         });

}
load(): void {
  this.route.queryParams.subscribe((params) => {
    const page = params['page'] || 0;
    this.currentPage = +page;

    this.competitionService.getCompetitionsPagination(this.currentPage, this.pageSize).subscribe(
      (data) => {
        this.allCompetitions = data['content'];
        this.totalPages = data['totalPages'];
      },
      (error) => {
        this.handleError(error);
      }
    );
  });
}





  private handleError(errorMessage: string) {
    console.error(errorMessage);

  }
}
