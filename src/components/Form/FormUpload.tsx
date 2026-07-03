"use client";

import { useCallback } from "react";
import { useField, useFormikContext } from "formik";
import { useDropzone } from "react-dropzone";
import { FileText, X } from "lucide-react";

import FormLabel from "./FormLabel";
import FormError from "./FormError";

interface FormUploadProps {
  name: string;
  label: string;
  required?: boolean;
  multiple?: boolean;
  maxFiles?: number;
  maxSize?: number;
  accept?: Record<string, string[]>;
}

export default function FormUpload({
  name,
  label,
  required = false,
  multiple = true,
  maxFiles = 3,
  maxSize = 10 * 1024 * 1024,
  accept = {
    "image/jpeg": [".jpg", ".jpeg"],
    "image/png": [".png"],
    "application/pdf": [".pdf"],
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
      ".docx",
    ],
    "application/zip": [".zip"],
  },
}: FormUploadProps) {
  const [field] = useField<File[]>(name);
  const { setFieldValue } = useFormikContext<any>();

  const files = field.value || [];

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const updated = [...files, ...acceptedFiles].slice(0, maxFiles);
      setFieldValue(name, updated);
    },
    [files, maxFiles, name, setFieldValue],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple,
    maxFiles,
    maxSize,
    accept,
  });

  const removeFile = (index: number) => {
    const updated = [...files];
    updated.splice(index, 1);
    setFieldValue(name, updated);
  };

  const formatSize = (size: number) => `${(size / 1024).toFixed(2)} KB`;

  return (
    <div>
      <FormLabel name={name} label={label} required={required} />

      <div
        {...getRootProps()}
        className="mt-1 cursor-pointer rounded border border-dashed border-gray-300 px-[20px] py-[15px] text-center transition hover:border-sky-400"
      >
        <input {...getInputProps()} />

        <h3 className="text-[22px] font-light text-sky-400 uppercase md:text-3xl">
          Drag & Drop Files Here
        </h3>

        <p className="my-2 text-[17px]">or</p>

        <span className="text-[17px] text-sky-500">Browse Files</span>

        <p className="mt-2 text-right text-[12px]">
          {files.length} of {maxFiles}
        </p>
      </div>

      {files.length > 0 && (
        <div className="mt-4 space-y-4">
          {files.map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              className="flex items-center gap-3"
            >
              <FileText size={26} />

              <div className="flex-1">
                <div className="flex justify-between text-[17px]">
                  <span className="truncate text-[#016d98]">{file.name}</span>

                  <em className="font-[700]">({formatSize(file.size)})</em>
                </div>

                <div className="mt-2 h-[14px] rounded-[5px] bg-gray-300">
                  <div className="h-full w-full rounded-[5px] bg-green-500" />
                </div>
              </div>

              <button type="button" onClick={() => removeFile(index)}>
                <X size={15} />
              </button>
            </div>
          ))}
        </div>
      )}

      <p className="mt-[15px] text-[15px] text-red-500">
        Acceptable file types: jpg, jpeg, png, pdf, docx, zip & Maximum file
        size: 10 MB.
      </p>

      <FormError name={name} />
    </div>
  );
}
