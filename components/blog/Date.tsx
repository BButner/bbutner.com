import { FC } from 'react'
import { isValid, parseISO, format } from 'date-fns'

// export default function Date({ dateString }) {
//   if (!isValid(parseISO(dateString))) {
//     return 'No date'
//   }
//   const date = parseISO(dateString)
//   return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
// }

type DateProps = {
  dateString: string;
}

export const Date: FC<DateProps> = ({ dateString }) => {
  if (!isValid(parseISO(dateString))) {
    return <p>No date</p>
  }

  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}