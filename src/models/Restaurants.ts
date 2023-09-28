class Restaurant {
  infos: string[]
  image: string
  title: string
  rating: number
  description: string
  about: string
  id: number

  constructor(
    infos: string[],
    image: string,
    title: string,
    rating: number,
    description: string,
    about: string,
    id: number
  ) {
    this.infos = infos
    this.image = image
    this.title = title
    this.rating = rating
    this.description = description
    this.about = about
    this.id = id
  }
}

export default Restaurant
