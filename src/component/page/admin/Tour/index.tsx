/* eslint-disable jsx-a11y/alt-text */
import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Button, Image, Space, Spin, Table, Pagination } from "antd";
import type { TableProps } from "antd";
import { Image as ImageType } from "@/models/tour/get";
import { deleteTour, getTourByFilterAndSort } from "@/service/tour";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Tour } from "@/models/tour/get";
import { Toast, showToast } from "@/component/ui/toast";

type DataType = {
  key: string;
  name: string;
  price: number;
  description: string;
  numberOfDays: number;
  numberOfNights: number;
  vehicle: string;
  departureLocation: string;
  status: string;
  images?: ImageType[];
};

const Tour: FC = () => {
  const [loading, setLoading] = useState(false);
  const [tourList, setTourList] = useState<Tour[]>([]);
  const [totalPage, setTotalPage] = useState<number>(10);
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const handleDeleteTour = async (id: string) => {
    try {
      await deleteTour(id);
      await loadTour();
      showToast({
        message: "Xoá tour thành công",
        type: "success",
      });
    } catch {
      showToast({
        message: "Xoá tour thất bại",
        type: "success",
      });
    }
  };

  const loadTour = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getTourByFilterAndSort({
        offset: page,
        pageSize,
      });
      setTourList(res.data.content);
      setTotalPage(res.data.totalPages);
    } catch {
      setTourList([]);
    } finally {
      setLoading(false);
    }
  }, [page]);

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <div className="w-40">
          <a>{text}</a>,
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text) => (
        <div className="w-60">
          <a>{text}</a>,
        </div>
      ),
    },
    {
      title: "Number of days",
      dataIndex: "numberOfDays",
      key: "numberOfDays",
    },
    {
      title: "Number of nights",
      dataIndex: "numberOfNights",
      key: "numberOfNights",
    },
    {
      title: "Vehicle",
      dataIndex: "vehicle",
      key: "vehicle",
    },
    {
      title: "Departure location",
      dataIndex: "departureLocation",
      key: "departureLocation",
    },
    {
      title: "Images",
      dataIndex: "images",
      key: "images.id",
      render: (_, record) => (
        <div className="w-64 flex align-center flex-wrap">
          <Space size="large">
            {record.images?.slice(0, 2).map((image) => (
              <Image width={100} key={image.id} src={image.url} />
            ))}
          </Space>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Schedule",
      key: "status",
      render: (_, record) => (
        <Link href={`/admin/schedule/${record.key}`}>
          <Button>Xem lịch trình</Button>
        </Link>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="large">
          <Link href={`/admin/tour/edit/${record.key}`}>
            <EditOutlined />
          </Link>
          <a onClick={() => handleDeleteTour(record.key)}>
            <DeleteOutlined />
          </a>
        </Space>
      ),
    },
  ];

  const tourData: DataType[] = useMemo(() => {
    return tourList.map((tour) => ({
      key: tour.tourId,
      name: tour.name,
      price: tour.adultPrice,
      description: tour.description,
      numberOfDays: tour.numberOfDays,
      numberOfNights: tour.numberOfNights,
      vehicle: tour.vehicle,
      departureLocation: tour.departureLocation,
      status: tour.status,
      images: tour.images,
    }));
  }, [tourList]);

  useEffect(() => {
    loadTour();
  }, [loadTour, page]);

  return (
    <>
      <Toast />
      <div className="flex justify-end my-3">
        <Button type="primary" size="large">
          <Link href="/admin/tour/add"> Add tour</Link>
        </Button>
      </div>
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <Spin tip="Loading..." />
        </div>
      ) : (
        <Table
          className="overflow-x-auto"
          columns={columns}
          dataSource={tourData}
          pagination={false}
        />
      )}
      <Pagination
        className="mt-4"
        current={page}
        pageSize={pageSize}
        total={totalPage * pageSize}
        onChange={(page) => setPage(page)}
      />
    </>
  );
};

export default Tour;
