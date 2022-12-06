function countHours(year, holidays) {
    return holidays.filter(date => new Date(`${date}/${year}`).getDay() % 6).length * 2
}
