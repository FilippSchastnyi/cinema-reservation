import { useState } from 'react'

type ObjectDayType = {
  hours: number
  minutes: number
  seconds: number
}

type ObjectYearType = {
  year: number
  month: number
  day: number
}

const UseDateFormatter = () => {

  const dateToDayObject = (date: Date): ObjectDayType => {
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    return {
      hours,
      minutes,
      seconds,
    }
  }

  const dateToYearObject = (date: Date): ObjectYearType => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    return {
      year,
      month,
      day,
    }
  }

  const fillGapsFromStart = (value: number | string, count = 0, char = '0') => {
    return typeof value === 'string'
      ? value.padStart(count, char)
      : value.toString().padStart(count, char)
  }

  const formatDateToHHMMSS = (date: Date) => {
    const objDate = dateToDayObject(date)
    return {
      hours: fillGapsFromStart(objDate.hours, 2, "0"),
      minutes: fillGapsFromStart(objDate.minutes, 2, "0"),
      seconds: fillGapsFromStart(objDate.seconds, 2, "0"),
    }
  }

  const formatDateToDDMMYY = (date: Date) => {
    const objDate = dateToYearObject(date)
    return {
      year: objDate.year,
      month: fillGapsFromStart(objDate.month, 2, "0"),
      day: fillGapsFromStart(objDate.day, 2, "0"),
    }
  }

  return {
    dateToDayObject,
    formatDateToHHMMSS,
    formatDateToDDMMYY
  }
}

export default UseDateFormatter
