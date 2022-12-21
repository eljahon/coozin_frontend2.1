const WeekDates = (beginDate) => {
  const nowDay = this.$dayjs(beginDate).format('DD');
  let allWeekdata = [this.$dayjs(beginDate).format('DD:MM:YYYY')]
  for (let i=1; i<=7; i++) {
allWeekdata.push(this.$dayjs(beginDate).add(i, 'day').format('DD:MM:YYYY'))
  }
}
