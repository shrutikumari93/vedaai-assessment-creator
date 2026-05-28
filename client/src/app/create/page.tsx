"use client";

import DashboardLayout from "@/components/DashboardLayout";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  title: z.string().min(1, "Assignment title is required"),
  subject: z.string().min(1, "Subject is required"),
  dueDate: z.string().min(1, "Due date is required"),
  questions: z.coerce.number().positive(),
  marks: z.coerce.number().positive(),
  instructions: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function CreateAssignmentPage() {
  const [generatedText, setGeneratedText] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);

    setTimeout(() => {
      setGeneratedText(`
📘 ${data.title}

Subject: ${data.subject}
Due Date: ${data.dueDate}
Total Questions: ${data.questions}
Total Marks: ${data.marks}

--------------------------------------

1. Define Artificial Intelligence.
2. Explain Machine Learning with examples.
3. Differentiate between AI and Deep Learning.
4. What are Neural Networks?
5. Explain supervised and unsupervised learning.
6. Write short notes on Generative AI.
7. Explain the applications of AI in education.
8. What are Large Language Models (LLMs)?
9. Explain Natural Language Processing.
10. Discuss future trends in AI.

--------------------------------------

Instructions:
${data.instructions || "No additional instructions provided."}
      `);

      setLoading(false);
      reset();
    }, 2000);
  };

  return (
    <DashboardLayout>
      <div className="h-screen overflow-hidden p-3">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Create Assignment
          </h1>

          <p className="text-gray-500 mt-1">
            Generate AI-powered assessments instantly.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Form Section */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-3"
            >
              {/* Assignment Title */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Assignment Title
                </label>

                <input
                  {...register("title")}
                  placeholder="Enter assignment title"
                  className="w-full border border-gray-200 rounded-2xl p-3 outline-none focus:ring-2 focus:ring-orange-500"
                />

                {errors.title && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Subject
                </label>

                <input
                  {...register("subject")}
                  placeholder="Enter subject"
                  className="w-full border border-gray-200 rounded-2xl p-3 outline-none focus:ring-2 focus:ring-orange-500"
                />

                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Due Date + Questions */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Due Date
                  </label>

                  <input
                    type="date"
                    {...register("dueDate")}
                    className="w-full border border-gray-200 rounded-2xl p-3 outline-none focus:ring-2 focus:ring-orange-500"
                  />

                  {errors.dueDate && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.dueDate.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Questions
                  </label>

                  <input
                    type="number"
                    {...register("questions")}
                    placeholder="10"
                    className="w-full border border-gray-200 rounded-2xl p-3 outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Marks */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Total Marks
                </label>

                <input
                  type="number"
                  {...register("marks")}
                  placeholder="100"
                  className="w-full border border-gray-200 rounded-2xl p-3 outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Upload Reference File
                </label>

                <input
                  type="file"
                  className="w-full border border-dashed border-gray-300 rounded-2xl p-3 cursor-pointer"
                />
              </div>

              {/* Instructions */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Instructions
                </label>

                <textarea
                  {...register("instructions")}
                  rows={1}
                  placeholder="Add instructions for AI..."
                  className="w-full border border-gray-200 rounded-2xl p-3 outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white py-3 rounded-2xl font-semibold shadow-md"
              >
                {loading
                  ? "Generating Assessment..."
                  : "Generate Assessment"}
              </button>
            </form>
          </div>

          {/* Generated Output */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-4 h-fit">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-bold text-gray-800">
                Generated Assessment
              </h2>

              {generatedText && (
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                  Generated
                </span>
              )}
            </div>

            {!generatedText ? (
              <div className="flex flex-col items-center justify-center h-[350px] text-center">
                <div className="text-6xl mb-4">📄</div>

                <h3 className="text-xl font-semibold text-gray-700">
                  No Assessment Generated
                </h3>

                <p className="text-gray-500 mt-2 max-w-sm">
                  Fill the form and click generate to create
                  AI-powered assignments.
                </p>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-2xl p-5 overflow-y-auto max-h-[650px]">
                <pre className="whitespace-pre-wrap text-sm leading-7 text-gray-700 font-sans">
                  {generatedText}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}