
/**
 *  plugin uses to build `truncate-key-lines` classes based on `ellipsis`
 * example:
 * theme.ellipsis.lines = { 3: '3' }
 * result:
 * .truncate-3-lines {
 *    'overflow': 'hidden',
 *    'display': '-webkit-box',
 *    '-webkit-line-clamp': 3,
 *    '-webkit-box-orient': 'vertical',
 * }
 */
const ellipsisPlugin = (variants = []) => ({ addUtilities, config, e }) => {
  const lines = config('theme.truncate.lines')
  const keys = Object.keys(lines)

  if (!keys.length) return;


  const utilities = keys.map(key => ({
    [`.${e(`truncate-${key}-lines`)}`]: {
      'overflow': 'hidden',
      'display': '-webkit-box',
      '-webkit-line-clamp': lines[key],
      '-webkit-box-orient': 'vertical',
    },
  }))
  
  addUtilities(utilities, variants);
};
  
module.exports = ellipsisPlugin 