enum JOB_TYPE {
  DESIGN = "design",
  ENGINEERING = "enginerring",
  MARKETING = "marketing",
  SALES = "sales",
}

export const jobType = (type: string) => {
  switch (type) {
    case JOB_TYPE.DESIGN:
      return "text-[#175CD3] bg-[#EFF8FF]";
    case JOB_TYPE.ENGINEERING:
      return "text-[#C11574] bg-[#FDF2FA]";
    default:
  }
};
