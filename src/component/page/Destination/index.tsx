"use client";

import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Pagination } from "antd";
import SpecialList from "./SpecialList";
import { searchPlaces } from "@/service/place";
import { Place } from "@/models/place/get";
import { SearchBar } from "./SearchBar";
import { SearchPlaceRequest } from "@/models/place/search";

export default function Destination() {
  const [loading, setLoading] = useState(false);
  const [placeList, setPlaceList] = useState<Place[]>();
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const [totalPage, setTotalPage] = useState<number>(0);
  const [formData, setFormData] = useState<SearchPlaceRequest>({
    name: "",
    address: "",
    activities: "",
    offset: page,
    pageSize,
  });

  const getPlaces = useCallback(
    async (request: SearchPlaceRequest) => {
      try {
        setLoading(true);
        const res = await searchPlaces({
          ...request,
          offset: page,
        });
        setPlaceList(res.data.content);
        setTotalPage(res.data.totalPages);
      } finally {
        setLoading(false);
      }
    },
    [page]
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    },
    [formData]
  );

  const handleSubmit = useCallback(async () => {
    getPlaces({ ...formData });
  }, [formData, getPlaces]);

  useEffect(() => {
    getPlaces({
      name: "",
      address: "",
      activities: "",
      offset: page,
      pageSize,
    });
  }, [getPlaces, page]);

  return (
    <div className="content py-36">
      <SearchBar onChange={handleChange} onSubmit={handleSubmit} />
      <SpecialList placeList={placeList} loading={loading} />
      <Pagination
        className="flex justify-center mt-6"
        current={page}
        pageSize={pageSize}
        total={totalPage * pageSize}
        onChange={(page) => setPage(page)}
      />
    </div>
  );
}
