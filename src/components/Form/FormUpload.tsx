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
        className="hover:border-primary-blue mt-1 flex min-h-[215px] cursor-pointer flex-col items-center justify-center rounded border border-dashed border-[#d9d9d9] px-6 py-8 text-center transition"
      >
        <input {...getInputProps()} />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary-blue mb-3 h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 17a4 4 0 010-8 5 5 0 019.7-1.5A3.5 3.5 0 1118 17H7zm5-8v8m0-8l-3 3m3-3l3 3"
          />
        </svg>

        <h3 className="text-primary-blue text-[18px] font-semibold tracking-wide uppercase">
          Drag & Drop Files Here
        </h3>

        <p className="my-0 text-[16px] text-black dark:text-white">or</p>

        <span className="text-primary-blue cursor-pointer text-[16px] underline underline-offset-2">
          Browse Files
        </span>

        <p className="text-primary-blue mt-6 text-center text-[13px] leading-7">
          <span className="text-black">Acceptable file types:</span>{" "}
          <span className="font-semibold">
            jpg, jpeg, png, pdf, docx, zip Maximum file size: 10 MB
          </span>
        </p>

        <p className="mt-2 text-[13px] text-gray-500 dark:text-gray-400">
          {files.length} of {maxFiles} uploaded
        </p>
      </div>

      {files.length > 0 && (
        <div className="mt-4 space-y-4">
          {files.map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              className="flex items-center gap-3"
            >
              <FileText size={20} />

              <div className="flex-1">
                <div className="flex justify-between text-[14px]">
                  <span className="truncate text-[#016d98]">{file.name}</span>

                  <em className="font-[700]">({formatSize(file.size)})</em>
                </div>

                <div className="mt-2 h-[10px] rounded-[5px] bg-gray-300">
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

      <FormError name={name} />
    </div>
  );
}
