import { Check, Plus, Minus, X, ExternalLink } from "lucide-react";
import { Disclosure } from "@headlessui/react";
import { BorderBeam } from "../magicui/border-beam";
import Link from "next/link";
import { Header } from "../Header";
import { Button } from "../ui/button";
import { HomeSection } from "./components/HomeSection";
import { cn } from "@/lib/utils";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const tiers = [
  {
    name: "Hobby",
    id: "tier-hobby",
    href: "https://cloud.langfuse.com",
    featured: false,
    description:
      "Get started, no credit card required. Great for hobby projects and POCs.",
    price: "Free",
    mainFeatures: [
      "No credit card required",
      "Try all platform features",
      "Up to 50k events / month",
      "Up to 2 users",
    ],
    cta: "Sign up",
  },
  {
    name: "Pro",
    id: "tier-pro",
    href: "https://cloud.langfuse.com",
    featured: true,
    description:
      "For serious projects. Includes access to full history and higher usage.",
    price: "$30",
    mainFeatures: [
      "100k events / month included, additional: $10 / 100k events",
      "Includes all platform features",
      "Unlimited data access",
      "Support via Email/Chat",
    ],
    cta: "Sign up",
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "/schedule-demo",
    featured: false,
    price: "Custom",
    description:
      "Dedicated solutions and support for your team. Contact us for pricing.",
    mainFeatures: [
      "Unlimited tracing throughput",
      "SSO and fine-grained RBAC",
      "SOC2, ISO27001, and InfoSec reviews",
      "Dedicated support engineer, and SLAs",
      "Deployment in your environment",
    ],
    cta: "Talk to founders",
  },
] as const;
const sections = [
  {
    name: "Tracing",
    href: "/docs/tracing",
    features: [
      {
        name: "Framework integrations & SDKs",
        href: "/docs/integrations/overview",
        tiers: {
          Hobby: true,
          Pro: true,
          Enterprise: true,
        },
      },
      {
        name: "Custom integration via API",
        href: "https://api.reference.langfuse.com/#post-/api/public/ingestion",
        tiers: {
          Hobby: true,
          Pro: true,
          Enterprise: true,
        },
      },
      {
        name: "Included usage",
        tiers: {
          Hobby: "50k events",
          Pro: "100k events",
          Enterprise: "Custom",
        },
      },
      {
        name: "Additional usage",
        tiers: {
          Hobby: false,
          Pro: "$10 / 100k events",
          Enterprise: "Custom",
        },
      },
      {
        name: "Data access",
        tiers: {
          Hobby: "30 days",
          Pro: "Unlimited",
          Enterprise: "Unlimited",
        },
      },
      {
        name: "Ingestion throughput",
        tiers: {
          Hobby: "1000 requests / min",
          Pro: "1000 requests / min",
          Enterprise: "Custom",
        },
      },
    ],
  },
  {
    name: "Platform Features",
    features: [
      {
        name: "Datasets",
        href: "/docs/datasets",
        tiers: { Hobby: true, Pro: true, Enterprise: true },
      },
      {
        name: "Playground",
        href: "/docs/playground",
        tiers: { Hobby: true, Pro: true, Enterprise: true },
      },
      {
        name: "Evaluation / User-feedback",
        href: "/docs/scores",
        tiers: { Hobby: true, Pro: true, Enterprise: true },
      },
      {
        name: "LLM-as-judge evaluators",
        href: "/docs/scores/model-based-evals",
        tiers: {
          Hobby: "1 evaluator",
          Pro: true,
          Enterprise: true,
        },
      },
      {
        name: "Prompt Management",
        href: "/docs/prompts",
        tiers: { Hobby: "10 prompts", Pro: true, Enterprise: true },
      },
      {
        name: "Annotation Queues",
        href: "/docs/scores/annotation#annotation-queues",
        tiers: {
          Hobby: "1 queue",
          Pro: "3 queues",
          Enterprise: true,
        },
      },
    ],
  },
  {
    name: "Collaboration",
    features: [
      {
        name: "Projects",
        tiers: {
          Hobby: "Unlimited",
          Pro: "Unlimited",
          Enterprise: "Unlimited",
        },
      },
      {
        name: "Users",
        tiers: { Hobby: "2", Pro: "Unlimited", Enterprise: "Unlimited" },
      },
    ],
  },
  {
    name: "API",
    href: "/docs/api",
    features: [
      {
        name: "Extensive GET API",
        tiers: {
          Hobby: true,
          Pro: true,
          Enterprise: true,
        },
      },
      {
        name: "Rate limit",
        tiers: {
          Hobby: "100 requests / min",
          Pro: "1000 requests / min",
          Enterprise: "Custom",
        },
      },
      {
        name: "Metrics API",
        tiers: {
          Hobby: "10 requests / day",
          Pro: "100 requests / day",
          Enterprise: "Custom",
        },
      },
    ],
  },
  {
    name: "Support",
    features: [
      {
        name: "Community (GitHub, Discord)",
        tiers: { Hobby: true, Pro: true, Enterprise: true },
      },
      {
        name: "Chat & Email",
        tiers: { Hobby: false, Pro: true, Enterprise: true },
      },
      {
        name: "Private Slack/Discord channel",
        tiers: { Hobby: false, Pro: false, Enterprise: true },
      },
      {
        name: "Dedicated Support Engineer",
        tiers: { Hobby: false, Pro: false, Enterprise: true },
      },
      {
        name: "SLAs",
        tiers: { Hobby: false, Pro: false, Enterprise: "Available" },
      },
    ],
  },
  {
    name: "Security",
    href: "/docs/security",
    features: [
      {
        name: "Data region",
        tiers: {
          Hobby: "US or EU",
          Pro: "US or EU",
          Enterprise: "US or EU",
        },
      },
      {
        name: "SSO via Google, AzureAD, GitHub",
        tiers: {
          Hobby: true,
          Pro: true,
          Enterprise: true,
        },
      },
      {
        name: "Organization-level RBAC",
        href: "/docs/rbac",
        tiers: {
          Hobby: true,
          Pro: true,
          Enterprise: true,
        },
      },
      {
        name: "Enterprise SSO (e.g. Okta, Auth0)",
        tiers: { Hobby: false, Pro: false, Enterprise: true },
      },
      {
        name: "SSO enforcement",
        tiers: { Hobby: false, Pro: false, Enterprise: true },
      },
      {
        name: "Project-level RBAC",
        href: "/docs/rbac",
        tiers: { Hobby: false, Pro: false, Enterprise: true },
      },
      {
        name: "Data retention management",
        tiers: {
          Hobby: false,
          Pro: false,
          Enterprise: true,
        },
      },
    ],
  },
  {
    name: "Compliance",
    href: "/docs/security",
    features: [
      {
        name: "Data processing agreement (GDPR)",
        tiers: { Hobby: false, Pro: true, Enterprise: true },
      },
      {
        name: "SOC2 Type II & ISO27001 reports",
        tiers: { Hobby: false, Pro: false, Enterprise: true },
      },
      {
        name: "InfoSec reviews",
        tiers: { Hobby: false, Pro: false, Enterprise: true },
      },
    ],
  },
];

export default function Pricing({
  isPricingPage = false,
}: {
  isPricingPage?: boolean;
}) {
  const InfoLink = ({ href }: { href: string }) => (
    <Link href={href} className="inline-block" target="_blank">
      <ExternalLink className="size-4 ml-2 pt-0.5" />
    </Link>
  );
  return (
    <HomeSection id="pricing" className={cn(isPricingPage && "px-0 sm:px-0")}>
      <div className="isolate overflow-hidden">
        <div className="flow-root pb-16 lg:pb-0">
          <div className="mx-auto max-w-7xl">
            <Header
              title="Simple pricing for projects of all sizes"
              description="Get started on the Hobby plan for free. No credit card required."
              h="h1"
            />

            <div className="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div
                className="hidden lg:absolute lg:inset-x-px lg:bottom-4 lg:top-4 lg:block lg:rounded lg:bg-gray-800/80 lg:ring-1 lg:ring-white/10"
                aria-hidden="true"
              />
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className={classNames(
                    tier.featured
                      ? "z-10 bg-slate-100 shadow-xl ring-1 ring-gray-900/10"
                      : "bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0",
                    "relative rounded"
                  )}
                >
                  {tier.featured && <BorderBeam borderWidth={2} />}
                  <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                    <h3
                      id={tier.id}
                      className={classNames(
                        tier.featured ? "text-gray-900" : "text-white",
                        "text-sm font-semibold leading-6"
                      )}
                    >
                      {tier.name}
                    </h3>
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                      <div className="mt-2 flex items-center gap-x-4">
                        <p
                          className={classNames(
                            tier.featured ? "text-gray-900" : "text-white",
                            "text-4xl font-bold tracking-tight"
                          )}
                        >
                          {tier.price}
                        </p>
                        {tier.name === "Pro" && (
                          <div className="text-sm leading-5">
                            <p
                              className={
                                tier.featured ? "text-gray-900" : "text-white"
                              }
                            >
                              USD / user
                            </p>
                            <p
                              className={
                                tier.featured
                                  ? "text-gray-500"
                                  : "text-gray-400"
                              }
                            >{`Billed monthly`}</p>
                          </div>
                        )}
                      </div>
                      <Button
                        asChild
                        className="z-10"
                        variant={tier.featured ? "cta" : "secondary"}
                      >
                        <Link href={tier.href}>{tier.cta}</Link>
                      </Button>
                    </div>
                    <p
                      className={classNames(
                        tier.featured ? "text-gray-600" : "text-gray-300",
                        "text-sm leading-6 mt-6"
                      )}
                    >
                      {tier.description}
                    </p>
                    <div className="mt-8 flow-root sm:mt-10">
                      <ul
                        role="list"
                        className={classNames(
                          tier.featured
                            ? "divide-gray-900/5 border-gray-900/5 text-gray-600"
                            : "divide-white/5 border-white/5 text-white",
                          "-my-2 divide-y border-t text-sm leading-6 lg:border-t-0"
                        )}
                      >
                        {tier.mainFeatures.map((mainFeature) => (
                          <li key={mainFeature} className="flex gap-x-3 py-2">
                            <Check
                              className={classNames(
                                tier.featured
                                  ? "text-indigo-600"
                                  : "text-gray-500",
                                "h-6 w-5 flex-none"
                              )}
                              aria-hidden="true"
                            />
                            {mainFeature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {isPricingPage ? (
          <>
            <CallOutSelfhostEnterprise className="mt-10" />
            <div className="relative">
              <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                {/* Feature comparison (up to lg) */}
                <section
                  aria-labelledby="mobile-comparison-heading"
                  className="lg:hidden"
                >
                  <h2 id="mobile-comparison-heading" className="sr-only">
                    Feature comparison
                  </h2>

                  <div className="mx-auto max-w-2xl space-y-16">
                    {tiers.map((tier) => (
                      <div
                        key={tier.id}
                        className="border-t border-gray-900/10"
                      >
                        <div
                          className={classNames(
                            tier.featured
                              ? "border-indigo-600"
                              : "border-transparent",
                            "-mt-px w-72 border-t-2 pt-10 md:w-80"
                          )}
                        >
                          <h3
                            className={classNames(
                              tier.featured
                                ? "text-indigo-600 dark:text-indigo-400"
                                : "text-primary",
                              "text-sm font-semibold leading-6"
                            )}
                          >
                            {tier.name}
                          </h3>
                          <p className="mt-1 text-sm leading-6 text-primary/60">
                            {tier.description}
                          </p>
                        </div>

                        <div className="mt-10 space-y-10">
                          {sections.map((section) => (
                            <div key={section.name}>
                              <div>
                                <h4 className="text-sm font-semibold leading-6 text-primary inline">
                                  {section.name}
                                </h4>
                                {section.href && (
                                  <InfoLink href={section.href} />
                                )}
                              </div>
                              <div className="relative mt-6">
                                {/* Fake card background */}
                                <div
                                  aria-hidden="true"
                                  className="absolute inset-y-0 right-0 hidden w-1/2 rounded bg-white dark:bg-gray-800/80 shadow-sm sm:block"
                                />

                                <div
                                  className={classNames(
                                    tier.featured
                                      ? "ring-2 ring-indigo-600"
                                      : "ring-1 ring-gray-900/10",
                                    "relative rounded bg-white dark:bg-gray-800/80 shadow-sm sm:rounded-none dark:sm:bg-transparent sm:shadow-none sm:ring-0"
                                  )}
                                >
                                  <dl className="divide-y divide-gray-200 text-sm leading-6">
                                    {section.features.map((feature) => (
                                      <div
                                        key={feature.name}
                                        className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
                                      >
                                        <dt className="pr-4 text-primary/60">
                                          {feature.name}
                                          {feature.href && (
                                            <InfoLink href={feature.href} />
                                          )}
                                        </dt>
                                        <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                                          {typeof feature.tiers[tier.name] ===
                                          "string" ? (
                                            <span
                                              className={
                                                tier.featured
                                                  ? "font-semibold text-indigo-600 dark:text-indigo-400"
                                                  : "text-primary"
                                              }
                                            >
                                              {feature.tiers[tier.name]}
                                            </span>
                                          ) : (
                                            <>
                                              {feature.tiers[tier.name] ===
                                              true ? (
                                                <Check
                                                  className="mx-auto h-5 w-5 text-indigo-600 dark:text-indigo-400"
                                                  aria-hidden="true"
                                                />
                                              ) : (
                                                <X
                                                  className="mx-auto h-5 w-5 text-gray-400"
                                                  aria-hidden="true"
                                                />
                                              )}

                                              <span className="sr-only">
                                                {feature.tiers[tier.name] ===
                                                true
                                                  ? "Yes"
                                                  : "No"}
                                              </span>
                                            </>
                                          )}
                                        </dd>
                                      </div>
                                    ))}
                                  </dl>
                                </div>

                                {/* Fake card border */}
                                <div
                                  aria-hidden="true"
                                  className={classNames(
                                    tier.featured
                                      ? "ring-2 ring-indigo-600"
                                      : "ring-1 ring-gray-900/10",
                                    "pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded sm:block"
                                  )}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Feature comparison (lg+) */}
                <section
                  aria-labelledby="comparison-heading"
                  className="hidden lg:block"
                >
                  <h2 id="comparison-heading" className="sr-only">
                    Feature comparison
                  </h2>

                  <div className="grid grid-cols-4 gap-x-8 border-t border-gray-900/10 before:block">
                    {tiers.map((tier) => (
                      <div key={tier.id} aria-hidden="true" className="-mt-px">
                        <div
                          className={classNames(
                            tier.featured
                              ? "border-indigo-600"
                              : "border-transparent",
                            "border-t-2 pt-10"
                          )}
                        >
                          <p
                            className={classNames(
                              tier.featured
                                ? "text-indigo-600 dark:text-indigo-400"
                                : "text-primary",
                              "text-sm font-semibold leading-6"
                            )}
                          >
                            {tier.name}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-primary/70">
                            {tier.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="-mt-6 space-y-16">
                    {sections.map((section) => (
                      <div key={section.name}>
                        <div>
                          <h3 className="text-sm font-semibold leading-6 text-primary inline">
                            {section.name}
                          </h3>
                          {section.href && <InfoLink href={section.href} />}
                        </div>
                        <div className="relative -mx-8 mt-10">
                          {/* Fake card backgrounds */}
                          <div
                            className="absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
                            aria-hidden="true"
                          >
                            <div className="h-full w-full rounded bg-white dark:bg-gray-800/80 shadow-sm" />
                            <div className="h-full w-full rounded bg-white dark:bg-gray-800/80 shadow-sm" />
                            <div className="h-full w-full rounded bg-white dark:bg-gray-800/80 shadow-sm" />
                          </div>

                          <table className="relative w-full border-separate border-spacing-x-8">
                            <thead>
                              <tr className="text-left">
                                <th scope="col">
                                  <span className="sr-only">Feature</span>
                                </th>
                                {tiers.map((tier) => (
                                  <th key={tier.id} scope="col">
                                    <span className="sr-only">
                                      {tier.name} tier
                                    </span>
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {section.features.map((feature, featureIdx) => (
                                <tr key={feature.name}>
                                  <th
                                    scope="row"
                                    className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-primary"
                                  >
                                    <div>
                                      {feature.name}
                                      {feature.href && (
                                        <InfoLink href={feature.href} />
                                      )}
                                    </div>
                                    {featureIdx !==
                                    section.features.length - 1 ? (
                                      <div className="absolute inset-x-8 mt-3 h-px bg-gray-200" />
                                    ) : null}
                                  </th>
                                  {tiers.map((tier) => (
                                    <td
                                      key={tier.id}
                                      className="relative w-1/4 px-4 py-0 text-center"
                                    >
                                      <span className="relative h-full w-full py-3">
                                        {typeof feature.tiers[tier.name] ===
                                        "string" ? (
                                          <span
                                            className={classNames(
                                              tier.featured
                                                ? "font-semibold text-indigo-600 dark:text-indigo-400"
                                                : "text-primary",
                                              "text-sm leading-6"
                                            )}
                                          >
                                            {feature.tiers[tier.name]}
                                          </span>
                                        ) : (
                                          <>
                                            {feature.tiers[tier.name] ===
                                            true ? (
                                              <Check
                                                className="mx-auto h-5 w-5 text-indigo-600 dark:text-indigo-400"
                                                aria-hidden="true"
                                              />
                                            ) : (
                                              <X
                                                className="mx-auto h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                              />
                                            )}

                                            <span className="sr-only">
                                              {feature.tiers[tier.name] === true
                                                ? "Yes"
                                                : "No"}
                                            </span>
                                          </>
                                        )}
                                      </span>
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>

                          {/* Fake card borders */}
                          <div
                            className="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
                            aria-hidden="true"
                          >
                            {tiers.map((tier) => (
                              <div
                                key={tier.id}
                                className={classNames(
                                  tier.featured
                                    ? "ring-2 ring-indigo-600"
                                    : "ring-1 ring-gray-900/10",
                                  "rounded"
                                )}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
            <DiscountOverview className="mt-10" />
            <PricingFAQ />
          </>
        ) : (
          <>
            <div className="text-center mt-10">
              For a detailed comparison and FAQ, see our{" "}
              <Link href="/pricing" className="underline">
                pricing page
              </Link>
              .
            </div>
            <CallOutSelfhostEnterprise className="mt-3" />
          </>
        )}
      </div>
    </HomeSection>
  );
}

const discounts = [
  {
    name: "Early-stage startups",
    description: "50% off, first year",
  },
  {
    name: "Education / Non-profits",
    description: "Free depending on org-size",
  },
  {
    name: "Open-source projects",
    description: "Free depending on org-size",
  },
];

const DiscountOverview = ({ className }: { className?: string }) => (
  <div className={cn("mx-auto max-w-7xl px-6 lg:px-8", className)}>
    <div className="mx-auto max-w-4xl">
      <h2 className="text-2xl font-bold leading-10 tracking-tight text-primary">
        Discounts
      </h2>
      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {discounts.map((discount) => (
          <div
            key={discount.name}
            className="rounded-lg border border-gray-200 p-4 shadow-sm"
          >
            <dt className="text-base font-semibold leading-7 text-primary">
              {discount.name}
            </dt>
            <dd className="mt-2 text-sm leading-7 text-primary/60">
              {discount.description}
            </dd>
          </div>
        ))}
      </div>
      <p className="mt-6 leading-8 text-primary/60">
        Reach out to{" "}
        <Link href="mailto:support@langfuse.com" className="underline">
          support@langfuse.com
        </Link>{" "}
        to apply for a discount. We want all startups, educational users, and
        non-profits to build with Langfuse and are happy to work with you to
        make that happen.
      </p>
    </div>
  </div>
);

const CallOutSelfhostEnterprise = ({ className }: { className?: string }) => (
  <div className={cn("text-center", className)}>
    Langfuse is also easy to{" "}
    <Link href="/docs/deployment/local" className="underline">
      run locally
    </Link>{" "}
    and{" "}
    <Link href="/docs/deployment/self-host" className="underline">
      self-host
    </Link>
    . Find out more about{" "}
    <Link href="/enterprise" className="underline">
      Langfuse for Enterprise
    </Link>{" "}
    (cloud and on-premise).
  </div>
);

const faqs = [
  {
    question: "What is the easiest way to try Langfuse?",
    answer:
      "You can view the <a class='underline' href='/demo'>public demo project</a> or sign up for a <a class='underline' href='https://cloud.langfuse.com'>free account</a> to try Langfuse with your own data. The Hobby plan is completeley free and does not require a credit card.",
  },
  {
    question: "What is an event?",
    answer:
      "Events are the sum of all traces, observations and evaluation scores logged to Langfuse. Check out the <a class='underline' href='/docs/tracing'>Langfuse Tracing docs<a/> for more details.",
  },
  {
    question: "Can I self-host Langfuse?",
    answer:
      "Yes, Langfuse is open source and you can run Langfuse <a class='underline' href='/docs/deployment/local'>locally using docker compose<a/> or for <a class='underline' href='/docs/deployment/self-host'>production use via docker<a/> and a standalone database.",
  },
  {
    question: "Where is the data stored?",
    answer:
      "Langfuse Cloud is hosted on AWS and data is stored in the US or EU depending on your selection. See our <a class='underline' href='/docs/data-security-privacy'>security and privacy documentation</a> for more details.",
  },
  {
    question: "Do you offer discounts?",
    answer:
      "Yes, we offer discounts for students, academics and open-source projects. If you believe your situation warrants a discount, please contact us at sales@langfuse.com with details about your project.",
  },
];

export function PricingFAQ() {
  return (
    <div id="faq">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-primary/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-primary">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-primary/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-primary">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <Minus className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <Plus className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p
                        className="text-base leading-7 text-primary/70"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
