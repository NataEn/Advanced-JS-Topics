# CSS

## Debugging tools

Firefox has good developers tools

## CSS Grid

1. CSS selector specificity

- Type selectors (e.g., h1) and pseudo-elements (e.g., `::before`).
- Class selectors (e.g., .example), attributes selectors (e.g.,
  `[type="radio"])` and pseudo-classes (e.g., `:hover`).
- ID selectors (e.g., `#example)`.

Universal selector (\*), combinators (+, >, ~, ' ', ||) and negation pseudo-class (:not()) have no effect on specificity. (The selectors declared inside :not() do, however.)

`!important` declaration overrides any other declarations.

## Margin collaps

read: https://www.joshwcomeau.com/css/rules-of-margin-collapse/

## Position elements in the middle

1. `text-align:center`- works on inline blocks so for any block if we change it to an "inline" and set it's parent block with `text-align:center` we can position its inline blocks in the middle.
   Than if we would like to add left and right boxes we could style them as floats and as they are floating in the page (like absolutes) they are not effected by the `text-align:center`

## Fonts

Fonts can be embedded through the "@font-face" with url- the url can have the font itself as an encoded 64base data:
read more on:

1. https://www.htmlgoodies.com/beyond/webmaster/serving-up-base64-encoded-custom-fonts.html
2. http://stephenscaff.com/articles/2013/09/font-face-and-base64-data-uri/
   and
   https://www.ietf.org/rfc/rfc2397.txt
3. https://stackoverflow.com/questions/26867893/converting-and-rendering-web-fonts-to-base64-keep-original-look

## screen sizes:

In this site we can see the current popular screen size that is being used: https://gs.statcounter.com/screen-resolution-stats/all/israel
