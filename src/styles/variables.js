import { css } from 'styled-components';

/**
 * Variables globales
 */

const variables = css`
    :root {
        --primary       : #64ffda;
        --primary-rgb   : 100, 255, 218;
        --primary-light : #9DFEE7;
        --primary-dark  : #4AFED3;

        --body           : #0a192f;
        --body-rgb       : 10, 25, 47;
        --body-light     : #112240;
        --body-light-rgb : 17, 34, 64;

        --content         : #182131;
        --content-rgb     : 24, 33, 49;
        --content-light   : #253043;
        --content-x-light : #475569;

        --navbar     : #0A192F;
        --navbar-rgb : 10, 25, 47;
        --footer     : #0A192F;
        --footer-rgb : 10, 25, 47;

        --text           : #f8fafc;
        --text-secondary : #A4B1DC;
        --text-tertiary  : rgb(148 163 184);

        --light-border   : rgb(255 255 255/0.1);

        --input-text  : #696969;
        --placeholder : #9a9fa7;
    }
    .dark {
        --primary       : #38bdf8;
        --primary-rgb   : 14, 165, 233;
        --primary-light : #65CCF9;
        --primary-dark  : #4c73f1;

        --body           : #ffffff;
        --body-rgb       : 255, 255, 255;
        --body-light     : #F8FAFC;
        --body-light-rgb : 248, 250, 252;

        --content         : #F8FAFC;
        --content-rgb     : 248, 250, 252;
        --content-light   : #ffffff;
        --content-x-light : #1A2D48;

        --navbar     : #0A192F;
        --navbar-rgb : 10, 25, 47;
        --footer     : #0A192F;
        --footer-rgb : 10, 25, 47;

        --text-secondary : #A4B1DC;
    }

    :root {
        --slate            : #8892b0;
        --slate-rgb        : 136, 146, 176;
        --dark-slate       : #495670;
        --dark-slate-rgb   : 73,  86,  112;
        --light-slate      : #a8b2d1;
        --light-slate-rgb  : 168, 178, 209;
        --xlight-slate     : #ccd6f6;
        --xlight-slate-rgb : 204, 214, 246;
        --navy             : #0a192f;
        --navy-rgb         : 10,  25,  47;
        --dark-navy        : #020c1b;
        --dark-navy-rgb    : 2,   12,  27;
        --light-navy       : #112240;
        --light-navy-rgb   : 17,  34,  64;
        --xlight-navy      : #233554;
        --xlight-navy-rgb  : 35,  53,  84;
        --blue             : #2562ea;
        --blue-rgb         : 37,  98,  234;
        --xblue            : #0284c7;
        --xblue-rgb        : 2,   132, 199;
        --light-blue       : #00aefd;
        --light-blue-rgb   : 0,   174, 253;
        --xlight-blue      : #00c2f5;
        --xlight-blue-rgb  : 0,   194, 245;
        --turquoise        : #2edbdb;
        --turquoise-rgb    : 46,  219, 219;
        --xturquoise       : #47e7e7;
        --xturquoise-rgb   : 71,  231, 231;
        --dark-green       : #25954c;
        --dark-green-rgb   : 37,  149, 76;
        --green            : #3dcf70;
        --green-rgb        : 61,  207, 112;
        --xgreen           : #3ee58c;
        --xgreen-rgb       : 62,  229, 140;
        --neon-green       : #64ffda;
        --neon-green-rgb   : 100, 255, 218;
        --purple           : #4338ca;
        --purple-rgb       : 67,  56,  202;
        --xpurple          : #6d71ff;
        --xpurple-rgb      : 162, 108, 247;
        --red              : #be185d;
        --red-rgb          : 190, 24,  93;
        --xred             : #ec4899;
        --xred-rgb         : 236, 72,  153;
        --orange           : #ffb004;
        --orange-rgb       : 255, 176, 4;
        --xorange          : #FED06C;
        --xorange-rgb      : 254, 208, 108;
        --yellow           : #ffd427;
        --yellow-rgb       : 255, 212, 39;
        --xyellow          : #ffe542;
        --xyellow-rgb      : 255, 229, 66;
        --grey             : #c2c2c2;
        --grey-light       : #dedede;
        --xgrey            : #f0f0f0;
        --xgrey-light      : #f5f5f5;
        --white            : #ffffff;

        --rounded-sm   : 0.125rem;
        --rounded-md   : 0.375rem;
        --rounded-lg   : 0.5rem;
        --rounded-xl   : 0.75rem;
        --rounded-2xl  : 1rem;
        --rounded-3xl  : 1.5rem;
        --rounded-full : 9999px;

        --shadow-one          : 0px 12px 34px rgb(32 52 89 / 25%);
        --shadow-two          : 0px 9px 28px 0px rgb(0 0 0 / 15%);
        --shadow-three        : 0 10px 20px 0 rgb(0 0 0 / 5%);
        --shadow-smooth       : 0px 9px 26px 0px rgb(0 0 0 / 15%);
        --shadow-x-smooth     : 0 20px 30px 0 rgb(28 9 80 / 5%);
        --shadow-light        : 0 20px 25px -5px rgb(0 0 0 / 0), 0 8px 10px -6px rgb(0 0 0 / 0);
        --shadow-top          : 0 -12px 20px -2px rgba(0, 0, 0, 0.10);
        --shadow-bottom       : 0 12px 8px -5px rgba(0, 0, 0, 0.23);
        --shadow-left         : 8px 0 15px -5px rgb(0 0 0 / 15%);
        --shadow-right        : -8px 0 12px -3px rgba(0 0 0 / 15%);
        --shadow-inset-bottom : inset 0px -30px 33px -10px rgb(28 9 80 / 5%);
        --shadow-tiny         : rgb(35 34 33 / 17%) 0px 1px 4px 1px;
        --shadow-relief       : inset 0 1px 0 0 hsl(0deg 0% 100% / 5%);
        --shadow-dark:        : 0 1px .625rem 0 rgba(7, 10, 13, .6), 0 .125rem .25rem 0 rgba(7, 10, 13, .4);


        --font-fam-list : system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        --font-fam1     : 'Mona Sans', var(--font-fam-list);

        --easing     : cubic-bezier(0.645, 0.045, 0.355, 1);
        --transition : all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
`;

export default variables;