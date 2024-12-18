import { FC, ReactNode, useState } from 'react';

export const Input: FC<{ children: ReactNode }> = ({ children }) => {
  const [name, setName] = useState('name');

  return (
    <div>
      <input value={name} onChange={event => setName(event.target.value)} />
      {children}
    </div>
  );
};
