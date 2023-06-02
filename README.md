# next-intl-link
This repository showcases a bug when trying to pass a `<Link>` from [next-intl](https://github.com/amannn/next-intl) to a client component through props.

## Steps to reproduce
- Install the dependencies
  ```
  npm install
  ```
- Start the development server
  ```
  npm run dev
  ```
- Go to [localhost:3000](http://localhost:3000)

## Potential fix
Converting the `<Link>` component to a client component seems to fix the problem. Checkout the [fix branch](https://github.com/ClementDreptin/next-intl-link/tree/fix) to see it in action.
