// import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { store } from '../redux';
// import {
//   ProductItem,
//   ProductList,
//   Subtotal,
//   SummaryButton, // 注意这里的拼写错误已更正
//   Cart,
// } from './Cart';
// import { addProduct, clearCart } from '../redux/slice/cartSlice';

// describe('Cart Components', () => {
//   const mockProduct = {
//     sku: '123',
//     title: '测试商品',
//     price: 100,
//     currencyFormat: '$',
//     style: '黑色',
//     size: 'M',
//   };

//   beforeEach(() => {
//     // 在每个测试前清空mock调用
//     vi.clearAllMocks();
//   });

//   it('renders ProductItem correctly', () => {
//     const onDeleteMock = vi.fn();
//     render(
//       <ProductItem
//         product={mockProduct}
//         amount={1}
//         size="M"
//         onDelete={onDeleteMock}
//       />
//     );
//     expect(screen.getByText('测试商品')).toBeInTheDocument();
//     expect(screen.getByText('M 码 | 黑色')).toBeInTheDocument();
//     expect(screen.getByText('$')).toBeInTheDocument();
//     expect(screen.getByText('100.00')).toBeInTheDocument();
//     fireEvent.click(screen.getByRole('button'));
//     expect(onDeleteMock).toHaveBeenCalled();
//   });

//   it('renders ProductList with empty state', () => {
//     render(<ProductList value={{}} />);
//     expect(screen.getByText('请添加商品到购物车')).toBeInTheDocument();
//   });

//   it('renders Subtotal correctly', () => {
//     render(<Subtotal value={300} installments={3} />);
//     expect(screen.getByText('小计：')).toBeInTheDocument();
//     expect(screen.getByText('$300.00')).toBeInTheDocument();
//     expect(screen.getByText('最多可分 3 期 $100.00 /月')).toBeInTheDocument();
//   });

//   it('renders SummaryButton correctly', () => {
//     const onClickMock = vi.fn();
//     render(<SummaryButton onClick={onClickMock} />);
//     fireEvent.click(screen.getByRole('button'));
//     expect(onClickMock).toHaveBeenCalled();
//   });

//   it('Cart integration', async () => {
//     render(
//       <Provider store={store}>
//         <Cart />
//       </Provider>
//     );
//     expect(screen.getByText('请添加商品到购物车')).toBeInTheDocument();

//     store.dispatch(addProduct({ product: mockProduct, amount: 1, size: 'M' }));
//     // 由于状态更新可能不会立即反映在组件中，可能需要重新渲染或使用异步测试方法

//     store.dispatch(clearCart());
//     // 重新渲染组件以反映清空购物车操作
//     render(
//       <Provider store={store}>
//         <Cart />
//       </Provider>
//     );
//     expect(screen.getByText('请添加商品到购物车')).toBeInTheDocument();
//   });
// });
