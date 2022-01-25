import { CardTypes, NumberCard } from 'types/Dashboard';

export class NumberCardBaseComponent {
  public details: NumberCard;

  public constructor() {
    this.details = {
      display: false,
      title: '',
      description: '',
      icon: 'info'
    };
  }

  public setDetails(
    cardDetails: NumberCard,
  ){
    Object.assign(this.details, cardDetails);
  }

}
