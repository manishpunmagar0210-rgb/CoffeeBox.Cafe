import { useState, useEffect } from 'react';

export type OrderStatus = 'pending' | 'preparing' | 'ready' | 'completed';

export interface Order {
  id: string;
  name: string;
  phone: string;
  details: string;
  status: OrderStatus;
  createdAt: number;
}

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('coffeebox_orders');
    if (saved) {
      try {
        setOrders(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse orders');
      }
    }
  }, []);

  const saveOrders = (newOrders: Order[]) => {
    localStorage.setItem('coffeebox_orders', JSON.stringify(newOrders));
    setOrders(newOrders);
  };

  const addOrder = (orderData: Omit<Order, 'id' | 'status' | 'createdAt'>) => {
    const newOrder: Order = {
      ...orderData,
      id: Math.random().toString(36).substring(2, 9).toUpperCase(),
      status: 'pending',
      createdAt: Date.now(),
    };
    saveOrders([newOrder, ...orders]);
    return newOrder;
  };

  return { orders, addOrder };
}
