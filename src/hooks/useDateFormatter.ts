import { useState } from 'react'

type ObjectDayType = {
  hours: number
  minutes: number
  seconds: number
}

type ObjectMonthType = {
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

  return {
    dateToDayObject,
    formatDateToHHMMSS
  }
}

export default UseDateFormatter
