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

We can also see some github repositories on it:

https://gist.github.com/gokulkrishh/242e68d1ee94ad05f488
and in:
https://gist.github.com/gokulkrishh/242e68d1ee94ad05f488

We can use th "rem" unit for responsiveness:
we can change the html font size and use it as a ground unite:

```
html{
    font-size:10px;
}
@media screen and (max-width:800px){
    html{
        font-size:15px;
    }
}
```

all height and widths and font sizes set relatively to the rem and change the font size only.
Now in screens bigger then 800px all those elements stiled with rem will change accordingly.

we can also set the font size to 62.5% that is 10px if the default font-size is 16 px.

**Remember that em is the size that is inherited from the parent div**
Both "em" and "rem" are references to the font-size

# Flex box

The flex alignment is set on the parent container, it's children are flex-aligned, they behave like inline blocks

## Animations:

- http://css3.bradshawenterprises.com/cfimg/
