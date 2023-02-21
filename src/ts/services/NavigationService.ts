class NavigationService {
  goToFilmSchedule = (cinemaId: string, movieId: string): string => {
    return `schedule/${cinemaId}/${movieId}`
  }

  goToHomePage = (): string => {
    return `/`
  }
}

export default new NavigationService()
