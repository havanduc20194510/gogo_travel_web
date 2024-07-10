import { ChangeEvent, FC, useState } from "react";

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
};

export const SearchBar: FC<Props> = ({ onChange, onSubmit }) => {
  const [location, setLocation] = useState<string>(""); // State để lưu trữ giá trị vị trí
  const [locationError, setLocationError] = useState<string>(""); // State để lưu trữ thông báo lỗi

  // Hàm xử lý khi người dùng nhấn nút Tìm kiếm
  const handleSearch = () => {
    if (!location) {
      setLocationError("Vui lòng nhập vị trí");
      return;
    }
    // Nếu đã nhập vị trí, gọi hàm onSubmit để xử lý tiếp
    onSubmit();
  };

  // Hàm xử lý khi thay đổi giá trị của input vị trí
  const handleLocationChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
    setLocationError(""); // Xóa thông báo lỗi khi người dùng thao tác vào trường này
    onChange(e);
  };

  return (
    <div className="bg-gray-200 mb-5">
      <div className="container p-5 mx-3 gap-3 flex justify-center items-center sm:px-6 lg:px-8">
        <div className="relative">
          <input
            name="location"
            type="text"
            value={location}
            className={`h-14 w-80 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none ${
              locationError ? "border-red-500" : ""
            }`}
            placeholder="Vị trí"
            onChange={handleLocationChange} // Sử dụng hàm xử lý đã thay đổi
          />
          <div className="absolute top-4 right-3">
            <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500" />
          </div>
        </div>
       
        <div className="relative">
          <input
            name="time"
            type="text"
            className="h-14 w-80 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
            placeholder="Thời gian"
            onChange={onChange}
          />
          <div className="absolute top-4 right-3">
            <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500" />
          </div>
        </div>
        <div className="relative">
          <input
            type="text"
            name="activity"
            className="h-14 w-80 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
            placeholder="Hoạt động"
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
            onClick={handleSearch} // Thay đổi thành handleSearch để kiểm tra vị trí trước khi tìm kiếm
          >
            Tìm kiếm
          </button>
        </div>
      </div>
       {locationError && (
      <p className="text-red-500 text-sm pl-8">{locationError}</p>
    )}
    </div>
   
  );
};
