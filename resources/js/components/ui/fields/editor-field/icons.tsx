import React, { SVGProps } from 'react';

export const Icons = {
  bold: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg fill="none" viewBox="0 0 14 20" {...props}>
      <path fill="currentColor" d="M0 20V0h7.305c1.583 0 2.98.483 4.194 1.449 1.212.966 1.819 2.226 1.819 3.78 0 1.016-.265 1.911-.796 2.687-.53.775-1.196 1.333-1.999 1.674v.093c.98.27 1.804.836 2.473 1.699.67.862 1.004 1.891 1.004 3.086 0 1.714-.666 3.065-1.997 4.052-1.331.987-2.805 1.48-4.42 1.48H0Zm2.866-2.582h4.56c1.093 0 1.976-.321 2.652-.965.676-.644 1.014-1.395 1.014-2.255 0-.855-.338-1.605-1.014-2.248-.676-.644-1.566-.965-2.672-.965h-4.54v6.433Zm0-8.921h4.246c.939 0 1.732-.284 2.38-.852.647-.568.97-1.278.97-2.13 0-.864-.329-1.577-.987-2.136-.658-.56-1.44-.84-2.347-.84H2.866v5.958Z" />
    </svg>
  ),
  italic: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg fill="none" viewBox="0 0 20 20" {...props}>
      <path fill="currentColor" d="M0 20v-2.608h6.208l5.293-14.784H5.248V0H20v2.608h-5.699l-5.3 14.784h5.752V20H0Z" />
    </svg>
  ),
  underline: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg fill="none" viewBox="0 0 16 20" {...props}>
      <path fill="currentColor" d="M0 20v-1.698h16V20H0Zm7.997-4.364c-1.864 0-3.318-.567-4.364-1.702-1.046-1.136-1.569-2.657-1.569-4.563V0h2.124v9.483c0 1.248.33 2.247.99 2.996.662.75 1.601 1.124 2.82 1.124 1.22 0 2.16-.375 2.822-1.124.661-.75.992-1.748.992-2.996V0h2.124v9.37c0 1.907-.524 3.428-1.57 4.564-1.047 1.135-2.503 1.702-4.369 1.702Z" />
    </svg>
  ),
  strike: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg fill="none" viewBox="0 0 20 16" {...props}>
      <path fill="currentColor" d="M0 9.824V8.292h20v1.532H0Zm8.95-3.59v-4.07H3.236V0h13.536v2.164h-5.712v4.07H8.949Zm0 9.766v-4.117h2.111V16H8.949Z" />
    </svg>
  ),
  subscript: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg fill="none" viewBox="0 0 20 18" {...props}>
      <path fill="currentColor" d="M15.279 18v-2.081c0-.295.107-.544.322-.749.214-.204.477-.306.787-.306h2.528V13.79H15.28V12.76h3.612c.31 0 .572.102.787.307a.994.994 0 0 1 .322.748v1.026a.995.995 0 0 1-.322.749 1.099 1.099 0 0 1-.787.306h-2.528v1.073H20V18h-4.721ZM0 15.895l5.522-8.274L.433 0h2.261l4.15 6.294h.027L11.054 0h2.272L8.179 7.621l5.568 8.274h-2.271L6.86 8.962h-.027l-4.57 6.933H0Z" />
    </svg>
  ),
  superscript: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg fill="none" viewBox="0 0 20 18" {...props}>
      <path fill="currentColor" d="M15.279 5.235v-2.08c0-.292.107-.54.322-.744.214-.204.477-.306.787-.306h2.528v-1.08H15.28V0h3.612c.31 0 .572.102.787.306A.988.988 0 0 1 20 1.05v1.032a.985.985 0 0 1-.322.746 1.104 1.104 0 0 1-.787.304h-2.528V4.21H20v1.025h-4.721ZM0 18l5.522-8.274L.433 2.105h2.261l4.15 6.294h.027l4.183-6.294h2.272l-5.147 7.62L13.747 18h-2.271L6.86 11.067h-.027L2.264 18H0Z" />
    </svg>
  ),
  bulletList: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg fill="none" viewBox="0 0 20 18" {...props}>
      <path fill="currentColor" d="M6.666 16.935v-1.683H20v1.683H6.666Zm0-7.106V8.147H20v1.682H6.666Zm0-7.087V1.06H20v1.683H6.666ZM1.9 18c-.521 0-.968-.187-1.34-.562A1.841 1.841 0 0 1 0 16.093c0-.522.187-.97.562-1.342.374-.372.822-.559 1.344-.559.521 0 .968.188 1.34.562.373.375.56.823.56 1.345s-.188.97-.563 1.342C2.87 17.814 2.421 18 1.9 18Zm0-7.111c-.521 0-.968-.187-1.34-.56A1.836 1.836 0 0 1 0 8.984c0-.523.187-.971.562-1.344.374-.373.822-.559 1.344-.559.521 0 .968.187 1.34.562.373.375.56.824.56 1.348 0 .524-.188.97-.563 1.341-.374.371-.822.557-1.344.557Zm0-7.081c-.521 0-.968-.187-1.34-.562A1.841 1.841 0 0 1 0 1.9C0 1.379.187.93.562.559.936.186 1.384 0 1.906 0c.521 0 .968.187 1.34.562.373.375.56.823.56 1.345s-.188.97-.563 1.342c-.374.373-.822.559-1.344.559Z" />
    </svg>
  ),
  orderedList: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg fill="none" viewBox="0 0 18 20" {...props}>
      <path fill="currentColor" d="M0 20v-1.173h2.684v-1.194h-1.61v-1.172h1.61v-1.189H0V14.1h3c.237 0 .439.084.605.251.167.168.25.368.25.602v1.281c0 .238-.083.44-.25.607a.825.825 0 0 1-.606.25c.237 0 .44.084.606.252.167.167.25.368.25.601v1.2c0 .237-.083.44-.25.606A.824.824 0 0 1 3 20H0Zm0-7.043v-2.682c0-.237.083-.44.248-.607a.817.817 0 0 1 .604-.25h1.832V8.229H0V7.056h3c.237 0 .439.084.605.25a.82.82 0 0 1 .25.602v1.83c0 .238-.083.44-.25.605A.83.83 0 0 1 3 10.59H1.172v1.193h2.684v1.173H0Zm1.61-7.056V1.173H0V0h2.782v5.9H1.61ZM6.3 17.11v-1.504H18v1.504H6.3Zm0-6.362V9.244H18v1.504H6.3Zm0-6.362V2.882H18v1.504H6.3Z" />
    </svg>
  ),
  paragraph: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg fill="none" viewBox="0 0 16 20" {...props}>
      <path fill="currentColor" d="M6.072 20v-8.023h-.197c-1.63 0-3.017-.583-4.16-1.748C.572 9.066 0 7.652 0 5.99s.571-3.075 1.714-4.241C2.857.583 4.244 0 5.874 0H16v1.883h-2.642V20h-1.849V1.883H7.921V20H6.072Z" />
    </svg>
  ),
  alignLeft: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg fill="none" viewBox="0 0 20 20" {...props}>
      <path fill="currentColor" d="M0 20v-1.686h20V20H0Zm0-4.572v-1.686h12.77v1.685H0Zm0-4.588V9.154h20v1.686H0Zm0-4.573V4.582h12.77v1.685H0Zm0-4.581V0h20v1.686H0Z" />
    </svg>
  ),
  alignCenter: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg fill="none" viewBox="0 0 20 20" {...props}>
      <path fill="currentColor" d="M0 20v-1.686h20V20H0Zm4.82-4.572v-1.686h10.36v1.685H4.82ZM0 10.84V9.154h20v1.686H0Zm4.82-4.573V4.582h10.36v1.685H4.82ZM0 1.686V0h20v1.686H0Z" />
    </svg>
  ),
  alignRight: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg fill="none" viewBox="0 0 20 20" {...props}>
      <path fill="currentColor" d="M0 1.686V0h20v1.686H0Zm7.23 4.572V4.572H20v1.686H7.23ZM0 10.84V9.154h20v1.686H0Zm7.23 4.572v-1.686H20v1.686H7.23ZM0 20v-1.686h20V20H0Z" />
    </svg>
  ),
  alignJustify: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg fill="none" viewBox="0 0 20 20" {...props}>
      <path fill="currentColor" d="M0 20v-1.686h20V20H0Zm0-4.572v-1.686h20v1.685H0Zm0-4.588V9.154h20v1.686H0Zm0-4.573V4.582h20v1.685H0Zm0-4.581V0h20v1.686H0Z" />
    </svg>
  ),
  image: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg fill="none" viewBox="0 0 20 21" {...props}>
      <path fill="currentColor" d="M2.05 20.318c-.569 0-1.052-.2-1.451-.598A1.975 1.975 0 0 1 0 18.27V2.366C0 1.8.2 1.316.599.917c.399-.4.882-.599 1.45-.599h15.902c.568 0 1.051.2 1.45.599.4.399.599.882.599 1.45V18.27c0 .568-.2 1.052-.599 1.45-.399.4-.882.6-1.45.6H2.049Zm.002-1.682h15.896a.353.353 0 0 0 .254-.115.353.353 0 0 0 .116-.255V2.37a.353.353 0 0 0-.116-.254.353.353 0 0 0-.254-.116H2.052a.353.353 0 0 0-.254.116.353.353 0 0 0-.116.254v15.896c0 .093.038.178.116.255a.353.353 0 0 0 .254.115Zm1.83-2.68h12.352l-3.832-5.101-3.327 4.32-2.355-2.978-2.837 3.759Z" />
    </svg>
  ),
  fontSize: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg fill="none" viewBox="0 0 20 17" {...props}>
      <path fill="currentColor" d="M12.63 16.304V2.468H7.369V.304H20v2.164h-5.258v13.836h-2.111Zm-9.468 0V7.79H0V5.63h8.426V7.79H5.263v8.514h-2.1Z" />
    </svg>
  ),
  fontColor: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg fill="none" viewBox="0 0 18 21" {...props}>
      <path fill="currentColor" d="M0 20.149v-3.477h18v3.477H0Zm3.18-6.897L8.24.149h1.52l5.06 13.103h-1.628L11.87 9.686H6.104L4.75 13.252H3.18Zm3.395-4.926h4.794L9.049 2.12h-.116L6.575 8.326Z" />
    </svg>
  ),
  link: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg fill="none" viewBox="0 0 20 11" {...props}>
      <path fill="currentColor" d="M8.696 10.897H4.729c-1.316 0-2.433-.486-3.351-1.457C.459 8.47 0 7.288 0 5.897c0-1.39.46-2.572 1.378-3.543C2.296 1.383 3.413.897 4.729.897h3.967v1.59H4.724c-.889 0-1.648.332-2.276.995-.629.662-.943 1.466-.943 2.412 0 .945.313 1.75.94 2.415.628.665 1.389.997 2.284.997h3.967v1.591ZM6.054 6.681v-1.59h7.892v1.59H6.054Zm5.25 4.216v-1.59h3.972c.889 0 1.648-.332 2.276-.995.629-.662.943-1.466.943-2.412 0-.945-.313-1.75-.94-2.415-.628-.665-1.389-.997-2.284-.997h-3.967V.897h3.967c1.316 0 2.433.486 3.351 1.457.919.97 1.378 2.152 1.378 3.543 0 1.39-.46 2.572-1.378 3.543-.918.971-2.035 1.457-3.351 1.457h-3.967Z" />
    </svg>
  ),
};
