import { FC } from 'react';
import { TItem } from '@showtime/app/types';

const squareRoot = (num: string) => (Math.round(Math.sqrt(parseInt(num, 10)) * 100) / 100).toFixed(2);

export const Item: FC<{ value: TItem['value']; id: TItem['id']; onRemove: (id: TItem['id']) => void }> = ({
  value,
  id,
  onRemove,
}) => {
  console.log('Rendering <Item />');

  const getFormattedItemText = () => {
    console.log(`getFormattedItemText called for number ${value}`);

    return `Square root of ${value} is ${squareRoot(value)}`;
  };

  return (
    <li>
      {getFormattedItemText()}

      <button
        type="button"
        className="ml-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-1 border border-gray-400 rounded shadow"
        onClick={() => onRemove(id)}
      >
        x
      </button>
    </li>
  );
};
