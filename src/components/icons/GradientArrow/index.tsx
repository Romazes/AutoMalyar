import type { FC, SVGProps } from 'react';

type GradientArrowIconProps = SVGProps<SVGSVGElement>;

export const GradientArrowIcon: FC<GradientArrowIconProps> = ({
  width = 661,
  height = 492,
  ...props
}) => {
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox="0 0 661 492"
      fill="none"
      strokeWidth="12.4174"
    >
      <path
        d="M357.296 706L653.394 277.759L357.296 -150.483"
        stroke="url(#paint0_linear_30_23)"
      />
      <path
        d="M240.197 706L536.296 277.759L240.197 -150.483"
        stroke="url(#paint1_linear_30_23)"
      />
      <path
        d="M123.099 706L419.197 277.759L123.099 -150.483"
        stroke="url(#paint2_linear_30_23)"
      />
      <path
        d="M6.00002 706L302.099 277.759L6.00002 -150.483"
        stroke="url(#paint3_linear_30_23)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_30_23"
          x1="505.345"
          y1="-150.483"
          x2="505.345"
          y2="706"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.180208" stopOpacity="0" />
          <stop offset="0.523958" stopColor="#00FFF0" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_30_23"
          x1="388.247"
          y1="-150.483"
          x2="388.247"
          y2="706"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.180208" stopOpacity="0" />
          <stop offset="0.523958" stopColor="#00FFF0" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_30_23"
          x1="271.148"
          y1="-150.483"
          x2="271.148"
          y2="706"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.180208" stopOpacity="0" />
          <stop offset="0.523958" stopColor="#00FFF0" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_30_23"
          x1="154.049"
          y1="-150.483"
          x2="154.049"
          y2="706"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.180208" stopOpacity="0" />
          <stop offset="0.523958" stopColor="#00FFF0" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};