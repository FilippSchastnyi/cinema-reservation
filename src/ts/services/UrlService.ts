class UrlService {
  goToFilmSchedule = (cinemaId: string, movieId: string): string => {
    return `schedule/${cinemaId}/${movieId}`
  }
}

export default new UrlService()
