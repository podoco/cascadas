import { css } from '@emotion/react'

export const typographyMap = {
  h1: css`
    font-size: 104px;
    line-height: 1;
  `,
  h2: css`
    font-size: 85px;
    line-height: 1;
  `,
  h3: css`
    font-size: 70px;
    line-height: 1;
  `,

  t1: css`
    font-size: 30px;
    line-height: 1.35;
  `,
  t1Bold: css`
    font-size: 30px;
    line-height: 1.35;
    font-weight: 800;
  `,
  t2: css`
    font-size: 26px;
    line-height: 1.34;
  `,
  t3: css`
    font-size: 22px;
    line-height: 1.4;
  `,
  t4: css`
    font-size: 20px;
    line-height: 1.45;
  `,
  t5: css`
    font-size: 17px;
    line-height: 1.5;
  `,
  t6: css`
    font-size: 15px;
    line-height: 1.5;
  `,
  t7: css`
    font-size: 13px;
    line-height: 1.5;
  `,
}

export type Typography = keyof typeof typographyMap
