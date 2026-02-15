import { createFileRoute } from "@tanstack/react-router";
import {
  Route as RouteIcon,
  Server,
  Shield,
  Sparkles,
  Waves,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const features = [
    {
      icon: <Zap className="w-12 h-12 text-cyan-400" />,
      title: "Powerful Server Functions",
      description:
        "Write server-side code that seamlessly integrates with your client components. Type-safe, secure, and simple.",
    },
    {
      icon: <Server className="w-12 h-12 text-cyan-400" />,
      title: "Flexible Server Side Rendering",
      description:
        "Full-document SSR, streaming, and progressive enhancement out of the box. Control exactly what renders where.",
    },
    {
      icon: <RouteIcon className="w-12 h-12 text-cyan-400" />,
      title: "API Routes",
      description:
        "Build type-safe API endpoints alongside your application. No separate backend needed.",
    },
    {
      icon: <Shield className="w-12 h-12 text-cyan-400" />,
      title: "Strongly Typed Everything",
      description:
        "End-to-end type safety from server to client. Catch errors before they reach production.",
    },
    {
      icon: <Waves className="w-12 h-12 text-cyan-400" />,
      title: "Full Streaming Support",
      description:
        "Stream data from server to client progressively. Perfect for AI applications and real-time updates.",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-cyan-400" />,
      title: "Next Generation Ready",
      description:
        "Built from the ground up for modern web applications. Deploy anywhere JavaScript runs.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <section className="overflow-hidden relative py-20 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative mx-auto max-w-5xl">
          <div className="flex gap-6 justify-center items-center mb-6">
            <img
              src="/tanstack-circle-logo.png"
              alt="TanStack Logo"
              className="w-24 h-24 md:w-32 md:h-32"
            />
            <h1 className="text-6xl font-black text-white md:text-7xl [letter-spacing:-0.08em]">
              <span className="text-gray-300">TANSTACK</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                START
              </span>
            </h1>
          </div>
          <p className="mb-4 text-2xl font-light text-gray-300 md:text-3xl">
            The framework for next generation AI applications
          </p>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-400">
            Full-stack framework powered by TanStack Router for React and Solid.
            Build modern applications with server functions, streaming, and type
            safety.
          </p>
          <div className="flex flex-col gap-4 items-center">
            <a
              href="https://tanstack.com/start"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-8 font-semibold text-white bg-cyan-500 rounded-lg shadow-lg transition-colors hover:bg-cyan-600 shadow-cyan-500/50"
            >
              Documentation
            </a>
            <p className="mt-2 text-sm text-gray-400">
              Begin your TanStack Start journey by editing{" "}
              <code className="py-1 px-2 text-cyan-400 rounded bg-slate-700">
                /src/routes/index.tsx
              </code>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl border transition-all duration-300 hover:shadow-lg bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-cyan-500/50 hover:shadow-cyan-500/10"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
