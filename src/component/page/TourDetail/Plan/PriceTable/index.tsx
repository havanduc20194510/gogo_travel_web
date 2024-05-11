import { Tour } from "@/models/tour/get";
import { formatPrice } from "@/utils/price";
import { FC } from "react";

type Props = {
  tour: Tour;
};

export const PriceTable: FC<Props> = ({ tour }) => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th className="border bg-slate-200 px-4 py-2">Dịch vụ</th>
          <th className="border bg-slate-200 px-4 py-2">Loại dịch vụ</th>
          <th className="border bg-slate-200 px-4 py-2">Giá từ</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border"></td>
          <td className="border px-4 py-2">
            <p>Người lớn</p>
            <p>{`(>=10 tuổi)`}</p>
          </td>
          <td className="border px-4 py-2">{formatPrice(tour.adultPrice)}</td>
        </tr>
        <tr>
          <td className="border">Giá Tour</td>
          <td className="border px-4 py-2">
            <p>Trẻ em</p>
            <p>{`(5-9 tuổi)`}</p>
          </td>
          <td className="border px-4 py-2">{formatPrice(tour.childPrice)}</td>
        </tr>
        <tr>
          <td className="border"></td>
          <td className="border px-4 py-2">
            <p>Em bé</p>
            <p>{`(<5 tuổi)`}</p>
          </td>
          <td className="border px-4 py-2">{formatPrice(tour.babyPrice)}</td>
        </tr>
      </tbody>
    </table>
  );
};
