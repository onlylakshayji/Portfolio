// "use client";
// import React, { useState } from "react";

// const defaultFormState = {
//   name: { value: "", error: "" },
//   email: { value: "", error: "" },
//   message: { value: "", error: "" },
// };

// export const Contact = () => {
//   const [formData, setFormData] = useState(defaultFormState);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [success, setSuccess] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSuccess("");

//     const { name, email, message } = formData;

//     // Simple validation
//     if (!name.value || !email.value || !message.value) {
//       setFormData({
//         name: { ...name, error: !name.value ? "Name is required" : "" },
//         email: { ...email, error: !email.value ? "Email is required" : "" },
//         message: {
//           ...message,
//           error: !message.value ? "Message is required" : "",
//         },
//       });
//       return;
//     }

//     try {
//       setIsSubmitting(true);

//       const res = await fetch("/api/send-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name: name.value,
//           email: email.value,
//           message: message.value,
//         }),
//       });

//       if (!res.ok) throw new Error("Failed");

//       setSuccess("Message sent successfully!");
//       setFormData(defaultFormState);
//     } catch (err) {
//       alert("Something went wrong. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <form className="form" onSubmit={handleSubmit}>
//       <div className="flex flex-col md:flex-row justify-between gap-5">
//         <input
//           type="text"
//           name="company"
//           placeholder="Your Name"
//           className="bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-500 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
//           value={formData.name.value}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               name: { value: e.target.value, error: "" },
//             })
//           }
//         />
//       </div>

//       <div className="mt-4">
//         <input
//           type="email"
//           placeholder="Your email address"
//           className="bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-500 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
//           value={formData.email.value}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               email: { value: e.target.value, error: "" },
//             })
//           }
//         />
//       </div>

//       <div>
//         <textarea
//           placeholder="Your Message"
//           rows={10}
//           className="bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-500 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
//           value={formData.message.value}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               message: { value: e.target.value, error: "" },
//             })
//           }
//         />
//       </div>

//       <button
//         className="w-full px-2 py-2 mt-4 bg-neutral-800 rounded-md font-bold text-white disabled:opacity-50"
//         type="submit"
//         disabled={isSubmitting}
//       >
//         {isSubmitting ? "Sending..." : "Submit"}
//       </button>

//       {success && (
//         <p className="text-sm text-green-600 mt-2 text-center">{success}</p>
//       )}
//     </form>
//   );
// };

"use client";
import React, { useState } from "react";
import { toast } from "sonner";

const defaultFormState = {
  name: "",
  email: "",
  message: "",
  company: "", // honeypot
};

export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      toast.success("Message sent successfully!");
      setFormData(defaultFormState);
    } catch (err: any) {
      toast.error(err.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot */}
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={(e) =>
          setFormData({ ...formData, company: e.target.value })
        }
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <input
        type="text"
        placeholder="Your Name"
        required
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
        className="w-full bg-neutral-200 px-2 py-2 rounded-md"
      />

      <input
        type="email"
        placeholder="Your Email"
        required
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
        className="w-full bg-neutral-200 px-2 py-2 rounded-md"
      />

      <textarea
        placeholder="Your Message"
        rows={8}
        required
        value={formData.message}
        onChange={(e) =>
          setFormData({ ...formData, message: e.target.value })
        }
        className="w-full bg-neutral-200 px-2 py-2 rounded-md"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-neutral-800 text-white py-2 rounded-md disabled:opacity-50"
      >
        {loading ? "Sending..." : "Submit"}
      </button>
    </form>
  );
};
