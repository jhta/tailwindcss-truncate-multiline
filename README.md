# Transitions Plugin for Tailwind CSS

## Installation

```bash
npm install tailwindcss-truncate-multiline --save-dev
```

or

```bash
yarn install tailwindcss-truncate-multiline --dev
```



## Usage

```js
// tailwind.config.js
{
  theme: {
      truncate: {
          lines: {
              3: '3',
              5: '5',
              8: '8'.
          }
      }
    
  plugins: [
    require('tailwindcss-truncate-multiline')(),
  ],
}
```

This plugin generates the following utilities:

```css
.truncate-[key]-lines {
    'overflow': 'hidden',
    'display': '-webkit-box',
    '-webkit-line-clamp': [value],
    '-webkit-box-orient': 'vertical',
}
```

## Variants:
You can also add variants:
```js
//tailwind.config.js
{
    ...
    plugins: [
       require('tailwindcss-truncate-multiline')(['responsive', 'hover']), 
    ]
}
