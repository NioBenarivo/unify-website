### Usage

1. Install **unify-react-mobile** by running `yarn add unify-react-mobile` or `npm install unify-react-mobile` on your project.
2. Use `import { BottomNav } from 'unify-react-mobile'` on top of your code.
3. Code your `<BottomNav />` component based on your requirement with modifiers & props below.



### Styles

#### Props

Use these props on each `<BottomNav />` component. The bold one in Value section is the default value.

| Props            | Description                         | Type            | Value
|---------------------|----------------------------------|-----------------|---------------------|
| className   | Props for applying custom classes   | string            | **""**
| items   | Props to set items inside bottom nav. Use same format as the sample above.   | array            | **[]**
| indexActive   | Props for set which item is active based on array index number   | number            | **0**