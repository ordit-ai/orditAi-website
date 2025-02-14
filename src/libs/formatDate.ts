import dayjs from "dayjs";

export const formatDateTime = (value: string) => {
  return dayjs(value).format("ddd hh:mm A");
};
