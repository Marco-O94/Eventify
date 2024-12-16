export class EventProp {
  constructor(
    public readonly id: string,
    public title: string,
    public description: string,
    public date: Date,
    public time: string, // formato suggerito: "HH:mm"
    public location: string,
    public price: number,
    public category: 'Musica' | 'Teatro' | 'Sport' | 'Conferenza' | 'Altro', // esempio di union type
    public image?: string // URL opzionale
  ) {
    this.validateDate(date);
  }

  // Metodo per validare la data
  private validateDate(date: Date): void {
    if (isNaN(date.getTime())) {
      throw new Error('La data fornita non è valida.');
    }
  }
}
