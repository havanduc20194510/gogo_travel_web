import React from "react";
import { Upload } from "antd";
import type { GetProp, UploadFile, UploadProps } from "antd";
import { UploadChangeParam } from "antd/es/upload";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

type Props = {
  fileList: UploadFile[];
  onChangeFile:
    | ((info: UploadChangeParam<UploadFile<any>>) => void)
    | undefined;
};

const UploadImage: React.FC<Props> = ({ fileList, onChangeFile }) => {
  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <Upload
      listType="picture-card"
      fileList={fileList}
      onChange={onChangeFile}
      onPreview={onPreview}
    >
      {fileList.length < 5 && "+ Upload"}
    </Upload>
  );
};

export default UploadImage;
