// src/components/SkeletonLoader/SkeletonLoader.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import SkeletonLoader from './SkeletonLoader';

test('renders skeleton loader', () => {
  render(<SkeletonLoader />);
  const skeletonLoader = screen.getByTestId('skeleton-loader');
  expect(skeletonLoader).toBeInTheDocument();
});
