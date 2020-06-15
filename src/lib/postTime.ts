import { parse, format } from 'date-fns';

export const formatRawDate = (date: string, formatStr: string) => {
  const parsed = parse(date, 'yyyy-MM-dd', new Date());
  return format(parsed, formatStr);
};
