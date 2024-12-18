import { TItem } from '@showtime/app/types';
import { memo, useMemo } from 'react';

const squareRoot = (num: string) => (Math.round(Math.sqrt(parseInt(num, 10)) * 100) / 100).toFixed(2);

export const MemoizedItem = memo<{ value: TItem['value']; id: TItem['id']; onRemove: (id: TItem['id']) => void }>(
  ({ value, id, onRemove }) => {
    console.log('Rendering <MemoizedItem />');

    const formattedItemText = useMemo(() => {
      console.log(`getFormattedItemText called for number ${value}`);

      return `Square root of ${value} is ${squareRoot(value)}`;
    }, [value]);

    return (
      <li>
        {formattedItemText}

        <button
          type="button"
          onClick={() => onRemove(id)}
          className="ml-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-1 border border-gray-400 rounded shadow"
        >
          x
        </button>
      </li>
    );
  },
);

MemoizedItem.displayName = 'MemoizedItem';
