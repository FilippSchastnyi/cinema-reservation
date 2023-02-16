class UrlService {
  goToFilmSchedule = (cinemaId: string, filmId: string): string => {
    return `schedule/${cinemaId}/${filmId}`
  }
}

export default new UrlService()
