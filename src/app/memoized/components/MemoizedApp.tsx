import { FormEvent, useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { MemoizedListOfItems } from './MemoizedListOfItems';
import { TItem, TItems } from '@showtime/app/types';

const initialState: TItems = [
  { value: '1', id: uuid() },
  { value: '2', id: uuid() },
  { value: '3', id: uuid() },
  { value: '4', id: uuid() },
];

export const MemoizedApp = () => {
  console.log('Rendering <MemoizedApp />');

  const [items, setItems] = useState(initialState);
  const [newItem, setNewItem] = useState({ value: '', id: uuid() });

  const addItem = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!newItem.value) {
      return;
    }

    setItems(prevItems => [...prevItems, newItem]);

    setNewItem({ value: '', id: uuid() });
  };

  const handleRemove = useCallback((id: TItem['id']) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  }, []);

  return (
    <div>
      <form onSubmit={addItem}>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            placeholder="New value"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            value={newItem.value}
            onChange={({ target: { value } }) => setNewItem({ value, id: newItem.id })}
          />

          <button className="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
            Add
          </button>
        </div>
      </form>

      <MemoizedListOfItems items={items} onRemove={handleRemove} />
    </div>
  );
};
