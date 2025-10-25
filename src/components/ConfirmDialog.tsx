"use client";

import { motion, AnimatePresence } from "framer-motion";
import React from "react";

type ConfirmDialogProps = {
  show: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export const ConfirmDialog = ({ show, message, onConfirm, onCancel }: ConfirmDialogProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-[300]"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="bg-white rounded-2xl shadow-xl px-6 py-5 text-center max-w-xs w-full"
          >
            <p className="text-gray-800 text-sm mb-4 font-medium">{message}</p>
            <div className="flex justify-center space-x-3">
              <button
                onClick={onCancel}
                className="px-4 py-1.5 rounded-lg text-sm font-medium bg-gray-200 hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                className="px-4 py-1.5 rounded-lg text-sm font-medium bg-sky-600 text-white hover:bg-sky-700 transition"
              >
                OK
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
