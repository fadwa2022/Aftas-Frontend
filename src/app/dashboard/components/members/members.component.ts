import { Component } from '@angular/core';
import { RankingsService } from '../../services/rankings/rankings.service';
import { RankingModule } from 'src/app/models/ranking/ranking.module';
import { IdentityDocumentTypeModule } from 'src/app/enum/identity-document-type/identity-document-type.module';
import { CompetitionService } from '../../services/competition/competition.service';
import { CompetitionModule } from 'src/app/models/competition/competition.module';
import { data } from 'autoprefixer';
import { FishService } from '../../services/fish/fish.service';
import { FishModule } from 'src/app/models/fish/fish.module';
import { HuntingService } from '../../services/hunting/hunting.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {

  competition: string;
  rankingCompitition: RankingModule[];
  identitydocument: IdentityDocumentTypeModule;
  allCompetitions: CompetitionModule[];
  filteredCompetitions: CompetitionModule[];

  competitioncode: any;
  name: any;
  familyName: any;
  nationality: any;
  documentType: any;
  identityNumber: any;
  fish: number;
  allFish: FishModule[];
  numberOfFish: number;
  fishFormVisible = false;
  selectedCompetitionCode: String;
  selectedMemberNum: Number;
  constructor(
    private competitionService: CompetitionService,
    private rankingsService: RankingsService,
    private fishService: FishService,
    private huntingService: HuntingService,
  ) { }

  ngOnInit(): void {
    this.loadfishs();
    this.loadcompitition();
  }


  getRanking() {
    this.rankingsService.getRanking(this.competition).subscribe(
      (data) => {
        this.rankingCompitition = data
      },
      (error) => {
        console.error(error);
      }
    );
  }


  loadcompitition(): void {
    this.competitionService.getCompetitions()
      .subscribe(
        (data) => {
          this.allCompetitions = data
          this.filterCompetitions();
        },
        (error) => {
        });

  }

  loadfishs(): void {
    this.fishService.getFish().subscribe(

      (data) => {
        this.allFish = data;
      },
      (error) => {
      });
  }

  addRanking() {
    const formData = {
      name: this.name,
      familyName: this.familyName,
      nationality: this.nationality,
      documentType: this.documentType,
      identityNumber: this.identityNumber
    }

    this.rankingsService.addRanking(formData, this.competitioncode)
      .subscribe(
        (data) => {
          console.log(data)
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

  showFishForm(competitionCode: String, memberNum: Number) {
    this.selectedCompetitionCode = competitionCode;
    this.selectedMemberNum = memberNum;
    this.fishFormVisible = true;
  }
  addRankingToHunting() {

    const formData = {
      competition: this.selectedCompetitionCode,
      member: this.selectedMemberNum,
      fish_id: this.fish,
      numberOfFish: this.numberOfFish
    }
    this.huntingService.addHunting(formData)
      .subscribe(
        (data) => {
          console.log(data);

          this.fishFormVisible = false;
          this.showAlert()

        },
        (error) => {
        });

  }

  showAlert() {
    Swal.fire({
      title: 'Success!',
      text: 'Copetition hase add by success!',
      icon: 'success',
      confirmButtonText: 'Got it!'
    });
  }
}
