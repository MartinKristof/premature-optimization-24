import { FormEvent, memo, RefObject } from 'react';

export const Form = memo<{
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  inputRef: RefObject<HTMLInputElement | null>;
}>(({ handleSubmit, inputRef }) => (
  <form onSubmit={handleSubmit} className="h-1/3">
    <div className="flex items-center border-b border-teal-500 py-2 h-20">
      <input
        ref={inputRef}
        name="search"
        autoComplete="off"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
      />

      <button className="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
        Search
      </button>
    </div>
  </form>
));

Form.displayName = 'MemoForm';
