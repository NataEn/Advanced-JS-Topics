## CSS

1. CSS selector specificity

- Type selectors (e.g., h1) and pseudo-elements (e.g., `::before`).
- Class selectors (e.g., .example), attributes selectors (e.g.,
  `[type="radio"])` and pseudo-classes (e.g., `:hover`).
- ID selectors (e.g., `#example)`.

Universal selector (\*), combinators (+, >, ~, ' ', ||) and negation pseudo-class (:not()) have no effect on specificity. (The selectors declared inside :not() do, however.)

`!important` declaration overrides any other declarations.
