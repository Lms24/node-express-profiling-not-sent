const Sentry = require("@sentry/node");
const { nodeProfilingIntegration } = require("@sentry/profiling-node");

// Ensure to call this before requiring any other modules!
Sentry.init({
  debug: true,
  dsn: "https://3517e870db694e11ac3fff20f9bff10d@o447951.ingest.us.sentry.io/4505437769039872",
  integrations: [
    // Add our Profiling integration
    nodeProfilingIntegration(),
  ],
  // Add Tracing by setting tracesSampleRate
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // Set sampling rate for profiling
  // This is relative to tracesSampleRate
  profilesSampleRate: 1.0,
});
