import React from "react";

interface TypographyProps extends React.HTMLProps<HTMLParagraphElement> {}

function Typography({ ...props }: TypographyProps) {
  return <p {...props} className={`${props.className} text-sm`} />;
}

Typography.Heading = function ({ ...props }: TypographyProps) {
  return (
    <p
      {...props}
      className={`${props.className} md:text-[64px] md:leading-[64px] leading-11  text-4xl font-secondary font-semibold text-center sm:text-left`}
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
    <p {...props} className={`sm:text-4xl text-2xl font-primary  ${props.className}`}>
      {props.children}
    </p>
  );
};

Typography.H3 = function ({ ...props }: TypographyProps) {
  return (
    <p {...props} className={`text-xl font-secondary font-semibold ${props.className}`}>
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
    <p {...props} className={`text-base font-primary ${props.className}`}>
      {props.children}
    </p>
  );
};

Typography.SubText = function ({ ...props }: TypographyProps) {
  return (
    <p {...props} className={`text-sm font-primary ${props.className}`}>
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
