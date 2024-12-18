import { Dispatch, FC, SetStateAction, useEffect } from 'react';

export const KEYS = {
  UP: 38,
  DOWN: 40,
};

export const ResultList: FC<{
  items: { id: number; title: string }[];
  activeItem: number;
  setActiveItem: Dispatch<SetStateAction<number>>;
  handleBlur: () => void;
  handleFocus: () => void;
}> = ({ items, activeItem, setActiveItem, handleBlur, handleFocus }) => {
  useEffect(() => {
    const handleKeys = (event: { keyCode: number; preventDefault: () => void }) => {
      const key = event.keyCode;

      switch (key) {
        case KEYS.UP: {
          event.preventDefault();
          if (activeItem === 0) {
            return;
          }
          if (activeItem === 1) {
            handleFocus();
          }

          setActiveItem(prevActiveItem => prevActiveItem - 1);
          break;
        }

        case KEYS.DOWN:
          event.preventDefault();
          if (activeItem === items.length) {
            return;
          }

          if (activeItem === 0) {
            handleBlur();
          }

          setActiveItem(prevActiveItem => prevActiveItem + 1);
          break;

        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeys);

    return () => {
      window.removeEventListener('keydown', handleKeys);
    };
  }, [activeItem, setActiveItem, items, handleBlur, handleFocus]);

  return (
    <ul className="h-2/3">
      {items.map(({ id, title }) => (
        <li className={id === activeItem ? 'is-selected' : undefined} key={id}>
          {title}
        </li>
      ))}
    </ul>
  );
};
