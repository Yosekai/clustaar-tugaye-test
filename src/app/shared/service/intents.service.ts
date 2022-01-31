import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Intent } from '../model/intent';

@Injectable({
  providedIn: 'root'
})
export class IntentsService {
  allIntents: Intent[] = [
    {
      id: "1",
      formulations: [
        "Les horaires",
        "Quel sont les horaires",
        "A quelle heure ouvre",
        "A quelle heure ferme",
        "Etes vous ouvert"
      ],
      response: "Le magasin est ouvert du lundi au vendredi de 7h à 18h"
    },
    {
      id: "2",
      formulations: [
        "formulation",
        "intention",
      ],
      response: "Réponse"
    },
  ]

  constructor() { }

  getAllIntents(): Observable<Intent[]> {
    return of(this.allIntents);
  }
}
