import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Alert, Button, Space, Spin, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { TourListResponse } from "@/models/tour/get";
import { getTours } from "@/service/tour";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Link from "next/link";

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
};

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
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
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="large">
        <Link href={`/admin/tour/edit/${record.key}`}>
          <EditOutlined />
        </Link>
        <a>
          <DeleteOutlined />
        </a>
      </Space>
    ),
  },
];

const Tour: FC = () => {
  const [tourListResponse, setTourListResponse] = useState<TourListResponse>();
  const [loading, setLoading] = useState(false);
  const loadTour = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getTours();
      setTourListResponse(response);
    } catch {
      //Do nothing
    } finally {
      setLoading(false);
    }
  }, []);

  const tourData: DataType[] = useMemo(() => {
    return (tourListResponse?.data ?? []).map((tour) => ({
      key: tour.tourId,
      name: tour.name,
      price: tour.adultPrice,
      description: tour.description,
      numberOfDays: tour.numberOfDays,
      numberOfNights: tour.numberOfNights,
      vehicle: tour.vehicle,
      departureLocation: tour.departureLocation,
      status: tour.status,
    }));
  }, [tourListResponse?.data]);

  useEffect(() => {
    loadTour();
  }, [loadTour]);

  if (loading) {
    return <Spin tip="Loading..." />;
  }

  return (
    <>
      <div className="flex justify-end mb-3">
        <Button type="primary" size="large">
          <Link href="/admin/tour/add"> Add tour</Link>
        </Button>
      </div>
      <Table columns={columns} dataSource={tourData} />
    </>
  );
};
export default Tour;
