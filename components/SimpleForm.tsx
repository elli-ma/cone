"use client";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";

const SimpleForm = (props: {
  height: number;
  setHeight: Dispatch<SetStateAction<number>>;
  radius: number;
  setRadius: Dispatch<SetStateAction<number>>;
  triangleCount: number;
  setTriangleCount: Dispatch<SetStateAction<number>>;
  onSubmit: () => void;
}) => {
  let {
    height,
    setHeight,
    radius,
    setRadius,
    triangleCount,
    setTriangleCount,
    onSubmit,
  } = props;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSubmit();
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="height"
          >
            height
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="height"
            type="number"
            placeholder="height"
            value={height}
            onChange={(e) => setHeight(parseFloat(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="radius"
          >
            radius
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="radius"
            type="number"
            placeholder="radius"
            value={radius}
            onChange={(e) => setRadius(parseFloat(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="triangleCount"
          >
            number of segments
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="triangleCount"
            type="number"
            placeholder="number of segments"
            value={triangleCount}
            onChange={(e) => setTriangleCount(parseInt(e.target.value))}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default SimpleForm;
