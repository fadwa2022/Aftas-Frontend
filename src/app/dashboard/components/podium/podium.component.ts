import { Component } from '@angular/core';
import { CompetitionService } from '../../services/competition/competition.service';
import { CompetitionModule } from 'src/app/models/competition/competition.module';
import { RankingsService } from '../../services/rankings/rankings.service';
import { RankingModule } from 'src/app/models/ranking/ranking.module';

@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.css']
})
export class PodiumComponent {
podiumVisibl= false;
allCompetitions: CompetitionModule[];
filteredCompetitions:CompetitionModule[];
competitionCode: String;
familyname:String;
AllPodiums: RankingModule[] = [];

constructor(
  private competitionService: CompetitionService,
 private rankingService:RankingsService,
) { }
ngOnInit(): void {
  this.loadcompitition();
}
  loadcompitition() {
    this.competitionService.getCompetitions()
    .subscribe(
      (data) => {
        this.allCompetitions = data
        this.filterCompetitions();
      },
      (error) => {
      });
  }
  filterCompetitions() {
    const today = new Date();
    today.setDate(today.getDate() + 1);

    this.filteredCompetitions = this.allCompetitions.filter(competition => {
      const competitionDate = new Date(competition.date);
      return competitionDate > today;
    });
  }
  showPodium() {
    this.podiumVisibl = true;

 this.calculScor(this.competitionCode);

 this.rankingService.calculeRank(this.competitionCode)
    .subscribe(
      (data ) => {
        for (let i = 0; i < Math.min(3, data.length); i++) {
            this.AllPodiums [i]= data[i];
        }
       console.log(this.AllPodiums)
      },
      (error) => {
      });
  }
  calculScor(competition:String){
    this.rankingService.calculeScore(competition)
    .subscribe(
      (data) => {
      },
      (error) => {
      });
  }
}
