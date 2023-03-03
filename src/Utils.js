/**
 * Add choosen class if condition matches
 * @param {*} state Condition required
 * @param {*} classe Class to add
 */

export const addClass = (state, classe) => {
    if (state) return classe
    else return 'un' + classe
}

/**
 * Converted duration to format hh:mm:ss
 * @param {*} number Duration number
 */

export function timeFormat(number) {
    const duration = Math.floor(number);
    const h = Math.floor(duration / 3600);
    const m = Math.floor((duration - h * 3600) / 60);
    const s = duration % 60;
    const H = h === 0 ? '' : `${h}:`;
    const M = m < 10 ? `0${m}:` : `${m}:`;
    const S = s < 10 ? `0${s}` : `${s}`;
    return H + M + S;
}