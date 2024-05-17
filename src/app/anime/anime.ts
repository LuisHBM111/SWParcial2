export class Anime {
    id: number;
    name: string;
    description: string;
    rating:number;
    episode:string
    categorie:string
    studio: string;
    image: string;
   
    constructor(
      id: number,
      name: string,
      description: string,
      rating:number,
      episode:string,
      categorie:string,
      image: string,
      studio: string,
    ) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.rating = rating;
      this.episode = episode;
      this.categorie = categorie;
      this.image = image;
      this.studio = studio;
    }
}