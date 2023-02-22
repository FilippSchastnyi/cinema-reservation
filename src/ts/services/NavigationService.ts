class NavigationService {
  goToFilmSchedule = (cinemaId: string, movieId: string): string => {
    return `schedule/${cinemaId}/${movieId}`
  }

  goToBookingSession = (cinemaId: string, sessionId: string): string => {
    return `booking/${cinemaId}/${sessionId}`
  }

  goToHomePage = (): string => {
    return `/`
  }
}

export default new NavigationService()
