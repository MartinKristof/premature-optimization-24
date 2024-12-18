import { memo, useCallback } from 'react';
import { MemoizedItem } from './MemoizedItem';
import { TItem, TItems } from '@showtime/app/types';

export const MemoizedListOfItems = memo<{ items: TItems; onRemove: (id: TItem['id']) => void }>(
  ({ items, onRemove }) => {
    console.log('Rendering <MemoizedListOfItems />');

    const handleRemove = useCallback((id: string) => onRemove(id), [onRemove]);

    return (
      items.length > 0 && (
        <ul>
          {items.map(item => (
            <MemoizedItem {...item} key={item.id} onRemove={handleRemove} />
          ))}
        </ul>
      )
    );
  },
);

MemoizedListOfItems.displayName = 'MemoizedListOfItems';
