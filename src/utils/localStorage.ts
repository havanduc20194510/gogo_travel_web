export const saveToLocalStorage = <T>(key: string, data: T) => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error("Lỗi khi lưu vào localStorage:", error);
    }
  }
};

export const deleteFromLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Lỗi khi xóa khỏi localStorage:", error);
    }
  }
};

export const getFromLocalStorage = <T>(key: string): T | undefined => {
  if (typeof window !== "undefined") {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu từ localStorage:", error);
    }
  }
};

export const updateLocalStorageItem = <T>(key: string, newValue: T) => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error("Lỗi khi cập nhật mục trong localStorage:", error);
    }
  }
};
