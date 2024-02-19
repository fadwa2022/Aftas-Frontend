import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { CompetitionService } from '../../services/competition/competition.service';
import Swal from 'sweetalert2'
import { Timestamp } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
dateofcompetition: Date;
starttime: String;
endtime: String;
location:String;
amount:Number;

constructor(
  private competitionService: CompetitionService,) { }

  submitForm() {
  const formData = {
    code: 0,
    date:this.dateofcompetition,
    startTime: this.starttime,
    endTime:this.endtime,
    numberOfParticipants: 0,
    location: this.location,
    amount: this.amount
  }
  
  this.competitionService.addCompetition(formData).subscribe(
    (response) => {
      console.log('Données envoyées avec succès', response);
      this.showAlert();
     // window.location.reload();

    },
    (error) => {
      console.error('Erreur lors de l\'envoi des données', error);
    }
  );

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


