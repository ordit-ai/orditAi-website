import React from "react";

interface TypographyProps extends React.HTMLProps<HTMLParagraphElement> {}

function Typography({ ...props }: TypographyProps) {
  return <p {...props} className={`${props.className} text-sm`} />;
}

Typography.Heading = function ({ ...props }: TypographyProps) {
  return (
    <p
      {...props}
      className={`${props.className} sm:text-[64px] text-[42px] text-[#030124] sm:leading-[72px] leading-[50px] font-medium `}
    >
      {props.children}
    </p>
  );
};

Typography.SubHeading = function ({ ...props }: TypographyProps) {
  return (
    <p
      {...props}
      className={`${props.className} text-gray-700 sm:text-2xl text-sm font-primary text-center sm:text-left`}
    >
      {props.children}
    </p>
  );
};

Typography.Headers = function ({ ...props }: TypographyProps) {
  return (
    <p {...props} className={`sm:text-4xl text-2xl font-secondary font-semibold ${props.className}`}>
      {props.children}
    </p>
  );
};

Typography.H1 = function ({ ...props }: TypographyProps) {
  return (
    <p {...props} className={`md:text-5xl text-4xl font-primary font-normal leading-[4rem] ${props.className}`}>
      {props.children}
    </p>
  );
};

Typography.H2 = function ({ ...props }: TypographyProps) {
  return (
    <p {...props} className={`sm:text-[48px] text-3xl font-primary font-medium  ${props.className}`}>
      {props.children}
    </p>
  );
};

Typography.H22 = function ({ ...props }: TypographyProps) {
  return (
    <p {...props} className={`sm:text-[40px] text-2xl font-primary font-medium  ${props.className}`}>
      {props.children}
    </p>
  );
};

Typography.H33 = function ({ ...props }: TypographyProps) {
  return (
    <p {...props} className={`sm:text-2xl text-lg font-secondary font-semibold ${props.className}`}>
      {props.children}
    </p>
  );
};


Typography.H3 = function ({ ...props }: TypographyProps) {
  return (
    <p {...props} className={`sm:text-xl text-lg font-secondary font-semibold ${props.className}`}>
      {props.children}
    </p>
  );
};

Typography.H4 = function ({ ...props }: TypographyProps) {
  return (
    <p {...props} className={`text-lg font-secondary ${props.className}`}>
      {props.children}
    </p>
  );
};

Typography.Text = function ({ ...props }: TypographyProps) {
  return (
    <p {...props} className={`sm:text-lg text-base text-[#5E626A] font-primary font-normal ${props.className}`}>
      {props.children}
    </p>
  );
};

Typography.SubText = function ({ ...props }: TypographyProps) {
  return (
    <p {...props} className={`sm:text-base text-sm text-[#5E626A] font-primary ${props.className}`}>
      {props.children}
    </p>
  );
};

Typography.MicroText = function ({ ...props }: TypographyProps) {
  return (
    <p {...props} className={`text-xs font-primary text-gray-500 ${props.className}`}>
      {props.children}
    </p>
  );
};

export default Typography;
