import { parse, format } from 'date-fns';

export const formatPostDate = (date: string) => {
  const parsed = parse(date, 'yyyy-MM-dd', new Date());
  return format(parsed, 'MMMM d, yyyy');
};

export const formatPostDateShort = (date: string) => {
  const parsed = parse(date, 'yyyy-MM-dd', new Date());
  return format(parsed, 'MMM dd, yyyy');
};
