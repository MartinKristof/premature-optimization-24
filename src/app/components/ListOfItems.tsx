import { FC } from 'react';
import { Item } from './Item';
import { TItem, TItems } from '@showtime/app/types';

export const ListOfItems: FC<{ items: TItems; onRemove: (id: TItem['id']) => void }> = ({ items, onRemove }) => {
  console.log('Rendering <ListOfItems />');

  return (
    items.length > 0 && (
      <ul>
        {items.map(item => (
          <Item {...item} key={item.id} onRemove={id => onRemove(id)} />
        ))}
      </ul>
    )
  );
};
