import React from "react";
import { Modal, Button } from "antd";

type ConfirmModalProps = {
  isVisible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title: string;
  content: string;
};

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  onConfirm,
  onCancel,
  title,
  content,
  isVisible,
}) => {
  return (
    <Modal
      title={title}
      onOk={onConfirm}
      onCancel={onCancel}
      open={isVisible}
      centered
      footer={[
        <Button key="back" onClick={onCancel}>
          Huỷ bỏ
        </Button>,
        <Button key="submit" type="primary" onClick={onConfirm}>
          OK
        </Button>,
      ]}
    >
      <p>{content}</p>
    </Modal>
  );
};

export default ConfirmModal;
