/* eslint-disable jsx-a11y/alt-text */
import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Button, Image, Space, Spin, Table } from "antd";
import type { TableProps } from "antd";
import { TourListResponse, Image as ImageType } from "@/models/tour/get";
import { deleteTour, getTours } from "@/service/tour";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Link from "next/link";
import ConfirmModal from "@/component/ui/ConfilmModal";

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
  const [tourListResponse, setTourListResponse] = useState<TourListResponse>();
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleConfirm = async (id: string) => {
    try {
      await deleteTour(id);
      await loadTour();
      setIsModalVisible(false);
    } catch {
      //Do nothing
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
        <div className="w-64 flex align-center flex-wrap	">
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
          <a onClick={showModal}>
            <DeleteOutlined />
          </a>
          <ConfirmModal
            isVisible={isModalVisible}
            onConfirm={() => handleConfirm(record.key)}
            onCancel={handleCancel}
            title="Xoá tour"
            content="Bạn có chắc chắn muốn xoá tour?"
          />
        </Space>
      ),
    },
  ];

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
      images: tour.images,
    }));
  }, [tourListResponse?.data]);

  useEffect(() => {
    loadTour();
  }, [loadTour]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spin tip="Loading..." />
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-end my-3">
        <Button type="primary" size="large">
          <Link href="/admin/tour/add"> Add tour</Link>
        </Button>
      </div>
      <Table
        className="overflow-x-auto"
        columns={columns}
        dataSource={tourData}
      />
    </>
  );
};
export default Tour;
