# React Loading Skeleton
## Menu, Image and List 
React Loading Skeleton is a library for creating beautiful, animated loading skeletons that automatically adapt to your app's design. This README provides basic usage, principles, and props reference for the library.

## Basic Usage

To use React Loading Skeleton in your React project, follow these steps:

1. Install the library using npm or yarn:

   ```bash
   npm install react-loading-skeleton
   ```

   or

   ```bash
   yarn add react-loading-skeleton
   ```

2. Import the Skeleton component and use it in your components:

   ```jsx
   import Skeleton from 'react-loading-skeleton';

   const MyComponent = () => {
     return (
       <div>
         <Skeleton height={100} width={200} />
       </div>
     );
   };
   ```

## Principles

React Loading Skeleton follows these principles:

- **Customizable**: You can customize the appearance and behavior of the loading skeletons using props.
- **Adaptable**: Skeletons automatically adjust to fit the size and layout of your app.
- **Accessible**: The library ensures accessibility best practices are followed, making loading states usable for all users.

## Props Reference

- `height`: The height of the skeleton element.
- `width`: The width of the skeleton element.
- `loading`: Boolean flag to indicate whether the skeleton should be displayed as loading or not.

## Troubleshooting

### Skeleton Width Issue in Flex Containers

If the skeleton width is 0 when the parent container has `display: flex`, you can fix it by applying `flex: 1` to the skeleton container via the `containerClassName` prop.

```jsx
<div style={{ display: 'flex' }}>
  <Skeleton containerClassName="flex-1" />
</div>
```

### Container Height Issue

If the height of your container is off by a few pixels, ensure that the `line-height` of the container is set to 1.

```jsx
<div style={{ lineHeight: 1 }}>
  <Skeleton height={30} />
</div>
```

## Examples

Here's an example of using React Loading Skeleton in a React component:

```jsx
import React from 'react';
import Skeleton from 'react-loading-skeleton';

const MyComponent = ({ loading }) => {
  return (
    <div>
      {loading ? (
        <Skeleton height={100} width={200} />
      ) : (
        <div>Your content here</div>
      )}
    </div>
  );
};

export default MyComponent;
```
