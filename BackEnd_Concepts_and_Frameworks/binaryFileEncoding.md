# Binary File Encoding

## Encoding to String- Base64

We can convert binary data into string so we can practically store any file in characters. In this technique a sequence of 8-bit bytes is translated to an ASCII string format using the redix-64 representation, where each non-final digit represent exactly 6 bits of data, so 3 8-bit bytes (i.e. total of 24 bits) is represented by 4 6-bit Base64 digits. aka, 3 binary bytes are converted to 4 Base64 characters:
binary 000011 (number 3) is represented by the letter D.
Any img tag in the HTML element can use a base64 encoded string of an image as the src.

##### Read more:

1. [https://en.wikipedia.org/wiki/Base64]
2. StackOverflow- why we should avoid using Base64 as the src in an img html element [https://stackoverflow.com/questions/31658382/normal-image-vs-base-64-image]
3. Why using base64 is beneficial: [https://varvy.com/pagespeed/base64-images.html]
