import { ChangeEvent, FC, useCallback } from "react";

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
};

export const SearchBar: FC<Props> = ({ onChange, onSubmit }) => {
  return (
    <div className="bg-gray-200 mb-5">
      <div className="container p-5 mx-3 gap-3 flex justify-center items-center sm:px-6 lg:px-8">
        <div className="relative">
          <input
            name="name"
            type="text"
            className="h-14 w-80 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
            placeholder="Tên"
            onChange={onChange}
          />
          <div className="absolute top-4 right-3">
            <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500" />
          </div>
        </div>
        <div className="relative">
          <input
            name="address"
            type="text"
            className="h-14 w-80 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
            placeholder="Địa chỉ"
            onChange={onChange}
          />
          <div className="absolute top-4 right-3">
            <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500" />
          </div>
        </div>
        <div className="relative">
          <input
            type="text"
            name="activities"
            className="h-14 w-80 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
            placeholder="Activities"
            onChange={onChange}
          />
          <div className="absolute top-4 right-3">
            <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500" />
          </div>
        </div>
        <div className="relative">
          <button
            className="shadow h-14 w-32 bg-emerald-500 hover:bg-emerald-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
            type="button"
            onClick={onSubmit}
          >
            Tìm kiếm
          </button>
        </div>
      </div>
    </div>
  );
};
