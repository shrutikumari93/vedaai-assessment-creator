import DashboardLayout from "@/components/DashboardLayout";
import Link from "next/link";

export default function HomePage() {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-4xl font-bold mb-4">
          AI Assessment Dashboard
        </h1>

        <p className="text-gray-600 mb-8">
          Generate assignments and assessments using AI.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold">
              Total Assignments
            </h2>

            <p className="text-3xl font-bold mt-4">
              12
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold">
              Generated Papers
            </h2>

            <p className="text-3xl font-bold mt-4">
              28
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold">
              Subjects
            </h2>

            <p className="text-3xl font-bold mt-4">
              6
            </p>
          </div>
        </div>

        {/* Button */}
        <Link href="/create">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-medium">
            Create Assignment
          </button>
        </Link>
      </div>
    </DashboardLayout>
  );
}