class NavigationService {
  goToFilmSchedule = (cinemaId: string, movieId: string): string => {
    return `schedule/${cinemaId}/${movieId}`
  }

  goToBookingSession = (sessionId: string): string => {
    return `booking/${sessionId}`
  }

  goToHomePage = (): string => {
    return `/`
  }
}

export default new NavigationService()
