import { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import {
  ArrowLeft,
  ArrowRight,
  Baby,
  Briefcase,
  Check,
  CheckCircle2,
  FileText,
  GraduationCap,
  Mail,
  MessageCircle,
  Phone,
  Plane,
  ShieldCheck,
  User,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Field from "../components/ui/Field";
import ParallaxBlobs from "../components/ui/ParallaxBlobs";
import StripeCheckoutForm from "../components/payment/StripeCheckoutForm";
import MockCheckoutForm from "../components/payment/MockCheckoutForm";
import { assets } from "../assets";
import {
  authUrls,
  languageFlags,
  onboardingLanguageIds,
} from "../data/metadata";
import { isStripeConfigured, stripePromise } from "../lib/stripe";
import { useLocalePath } from "../routing/useLocalePath";

const audienceIcons = {
  Baby,
  GraduationCap,
  User,
};

const goalIcons = {
  Briefcase,
  MessageCircle,
  Plane,
  FileText,
};

const flagIndexByKey = {
  turkish: 0,
  english: 1,
  german: 2,
  french: 3,
  spanish: 4,
  russian: 5,
  chinese: 6,
};

function getLanguageFlag(langId) {
  const key = languageFlags[langId];
  return assets.languageFlags[flagIndexByKey[key]];
}

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function isValidEmail(email) {
  return emailRegex.test(email.trim());
}

function isValidPhone(phone) {
  const digits = phone.replace(/\D/g, "");
  return (
    (digits.length === 10 && digits.startsWith("5")) ||
    (digits.length === 11 && digits.startsWith("05")) ||
    (digits.length === 12 && digits.startsWith("905"))
  );
}

const stepsFor = (audience) => {
  const middle =
    audience === "child" ? ["birthYear", "level"] : ["level", "goal"];
  return ["language", "audience", ...middle, "personal"];
};

const currentYear = new Date().getFullYear();
const birthYears = Array.from(
  { length: 15 },
  (_, index) => currentYear - 4 - index,
);

export default function OnboardingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { localizedPath } = useLocalePath();
  const { t } = useTranslation(["onboarding", "pricing"]);
  const pricingTiers = useMemo(
    () => t("pricing:tiers", { returnObjects: true }),
    [t],
  );
  const languages = useMemo(() => {
    const items = t("languages", { returnObjects: true });
    return onboardingLanguageIds.map((id) => {
      const language = items.find((item) => item.id === id);
      return { ...language, flag: getLanguageFlag(id) };
    });
  }, [t]);
  const audiences = t("audiences", { returnObjects: true });
  const goals = t("goals", { returnObjects: true });

  const selectedTier =
    pricingTiers.find((tier) => tier.id === location.state?.tier) ?? null;
  const [stepIndex, setStepIndex] = useState(0);
  const [phase, setPhase] = useState("wizard");
  const [formErrors, setFormErrors] = useState({});
  const [answers, setAnswers] = useState({
    language: null,
    audience: null,
    birthYear: null,
    level: null,
    goal: null,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const steps = useMemo(() => stepsFor(answers.audience), [answers.audience]);
  const stepKey = steps[stepIndex];
  const totalSteps = steps.length;

  const goBack = () => setStepIndex((index) => Math.max(0, index - 1));

  const selectLanguage = (id) => {
    setAnswers((prev) => ({ ...prev, language: id }));
    setStepIndex(1);
  };

  const selectAudience = (id) => {
    setAnswers((prev) => ({
      ...prev,
      audience: id,
      birthYear: id === "self" ? null : prev.birthYear,
      level: null,
      goal: null,
    }));
    setStepIndex(2);
  };

  const selectBirthYear = (year) => {
    setAnswers((prev) => ({ ...prev, birthYear: year }));
    setStepIndex(3);
  };

  const selectLevel = (id) => {
    setAnswers((prev) => ({ ...prev, level: id }));
    setStepIndex((index) => index + 1);
  };

  const selectGoal = (id) => {
    setAnswers((prev) => ({ ...prev, goal: id }));
    setStepIndex((index) => index + 1);
  };

  const updateField = (field) => (event) => {
    const { value } = event.target;
    setAnswers((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {};
    if (!isValidEmail(answers.email)) {
      errors.email = t("ui.validation.email");
    }
    if (!isValidPhone(answers.phone)) {
      errors.phone = t("ui.validation.phone");
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setPhase("payment");
  };

  const handlePaymentSubmit = () => {
    setPhase("success");
  };

  const levelOptions =
    answers.audience === "child"
      ? t("levels.child", { returnObjects: true })
      : t("levels.self", { returnObjects: true });

  if (phase === "payment") {
    return (
      <Shell>
        <PaymentScreen
          answers={answers}
          tier={selectedTier}
          languages={languages}
          audiences={audiences}
          goals={goals}
          levelOptions={levelOptions}
          onBack={() => setPhase("wizard")}
          onSubmit={handlePaymentSubmit}
        />
      </Shell>
    );
  }

  if (phase === "success") {
    return (
      <Shell>
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
            <CheckCircle2 className="h-9 w-9" />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t("success.title")}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            {t("success.subtitle")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={authUrls.signup} size="lg">
              {t("ui.successSignup")}
            </Button>
            <Button
              onClick={() => navigate(localizedPath("home"))}
              variant="outline"
              size="lg"
            >
              {t("ui.successHome")}
            </Button>
          </div>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={goBack}
            disabled={stepIndex === 0}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold text-slate-500 transition-colors hover:text-primary-700 disabled:pointer-events-none disabled:opacity-0"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("ui.back")}
          </button>
          <span className="rounded-full bg-white/70 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary-700 shadow-sm ring-1 ring-primary-100">
            {t("ui.step", { current: stepIndex + 1, total: totalSteps })}
          </span>
        </div>

        <div className="mt-4 flex gap-1.5">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <span
              key={index}
              className={`h-1.5 flex-1 rounded-full transition-all duration-500 ease-out ${
                index <= stepIndex
                  ? "bg-linear-to-r from-primary-600 to-primary-400"
                  : "bg-slate-200/70"
              }`}
            />
          ))}
        </div>

        <div
          key={stepKey}
          className="animate-fade-in mt-8 rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-xl shadow-primary-200/30 backdrop-blur-md sm:p-10"
        >
          {stepKey === "language" && (
            <StepContent
              title={t("languageStep.title")}
              subtitle={t("languageStep.subtitle")}
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {languages.map((language) => (
                  <OptionButton
                    key={language.id}
                    active={answers.language === language.id}
                    onClick={() => selectLanguage(language.id)}
                  >
                    <img
                      src={language.flag}
                      alt=""
                      className="h-9 w-9 shrink-0 rounded-full object-cover shadow-sm"
                    />
                    <span className="min-w-0">
                      <span className="block font-bold text-slate-900">
                        {language.name}
                      </span>
                      <span className="block text-sm text-slate-500">
                        {language.native}
                      </span>
                    </span>
                  </OptionButton>
                ))}
              </div>
            </StepContent>
          )}

          {stepKey === "audience" && (
            <StepContent
              title={t("audienceStep.title")}
              subtitle={t("audienceStep.subtitle")}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {audiences.map((audience) => {
                  const Icon = audienceIcons[audience.icon] ?? User;
                  return (
                    <OptionButton
                      key={audience.id}
                      active={answers.audience === audience.id}
                      onClick={() => selectAudience(audience.id)}
                      className="flex-col items-start text-left sm:p-6"
                    >
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-600/25">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="mt-4 block text-lg font-bold text-slate-900">
                        {audience.title}
                      </span>
                      <span className="mt-0.5 block text-sm font-semibold text-primary-600">
                        {audience.subtitle}
                      </span>
                      <span className="mt-2 block text-sm leading-6 text-slate-500">
                        {audience.description}
                      </span>
                    </OptionButton>
                  );
                })}
              </div>
            </StepContent>
          )}

          {stepKey === "birthYear" && (
            <StepContent
              title={t("birthYearStep.title")}
              subtitle={t("birthYearStep.subtitle")}
            >
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
                {birthYears.map((year) => (
                  <button
                    key={year}
                    type="button"
                    onClick={() => selectBirthYear(year)}
                    className={`rounded-2xl border px-2 py-4 text-center text-lg font-bold transition-all duration-200 hover:-translate-y-0.5 ${
                      answers.birthYear === year
                        ? "border-primary-500 bg-primary-50 text-primary-700 shadow-md shadow-primary-200/50 ring-2 ring-primary-200"
                        : "border-slate-200 bg-white text-slate-700 hover:border-primary-300 hover:shadow-md hover:shadow-primary-100/60"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </StepContent>
          )}

          {stepKey === "level" && (
            <StepContent
              title={t("levelStep.title")}
              subtitle={t("levelStep.subtitle")}
            >
              <div className="grid gap-3">
                {levelOptions.map((level) => (
                  <OptionButton
                    key={level.id}
                    active={answers.level === level.id}
                    onClick={() => selectLevel(level.id)}
                  >
                    <span className="min-w-0">
                      <span className="block font-bold text-slate-900">
                        {level.title}
                      </span>
                      <span className="block text-sm text-slate-500">
                        {level.description}
                      </span>
                    </span>
                  </OptionButton>
                ))}
              </div>
            </StepContent>
          )}

          {stepKey === "goal" && (
            <StepContent
              title={t("goalStep.title")}
              subtitle={t("goalStep.subtitle")}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {goals.map((goal) => {
                  const Icon = goalIcons[goal.icon] ?? Briefcase;
                  return (
                    <OptionButton
                      key={goal.id}
                      active={answers.goal === goal.id}
                      onClick={() => selectGoal(goal.id)}
                    >
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-600/25">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-bold text-slate-900">
                          {goal.title}
                        </span>
                        <span className="block text-sm text-slate-500">
                          {goal.description}
                        </span>
                      </span>
                    </OptionButton>
                  );
                })}
              </div>
            </StepContent>
          )}

          {stepKey === "personal" && (
            <StepContent
              title={t("personalStep.title")}
              subtitle={t("personalStep.subtitle")}
            >
              <form onSubmit={handleSubmit} className="mx-auto max-w-xl">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    id="firstName"
                    label={t("ui.form.firstName")}
                    value={answers.firstName}
                    onChange={updateField("firstName")}
                    placeholder={t("ui.form.firstNamePlaceholder")}
                    autoComplete="given-name"
                    icon={User}
                  />
                  <Field
                    id="lastName"
                    label={t("ui.form.lastName")}
                    value={answers.lastName}
                    onChange={updateField("lastName")}
                    placeholder={t("ui.form.lastNamePlaceholder")}
                    autoComplete="family-name"
                    icon={User}
                  />
                </div>
                <div className="mt-5">
                  <Field
                    id="email"
                    type="email"
                    label={t("ui.form.email")}
                    value={answers.email}
                    onChange={updateField("email")}
                    placeholder={t("ui.form.emailPlaceholder")}
                    autoComplete="email"
                    icon={Mail}
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    title={t("ui.validation.email")}
                    error={formErrors.email}
                  />
                </div>
                <div className="mt-5">
                  <Field
                    id="phone"
                    type="tel"
                    label={t("ui.form.phone")}
                    value={answers.phone}
                    onChange={updateField("phone")}
                    placeholder={t("ui.form.phonePlaceholder")}
                    autoComplete="tel"
                    icon={Phone}
                    pattern="(\+90|0090|90)?[\s.-]?0?5\d{2}[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}"
                    title={t("ui.validation.phone")}
                    error={formErrors.phone}
                  />
                </div>

                <Button type="submit" size="lg" className="mt-8 w-full">
                  {t("ui.form.submit")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="mt-4 text-center text-xs leading-5 text-slate-400">
                  {t("ui.form.privacyNote")}
                </p>
              </form>
            </StepContent>
          )}
        </div>
      </div>
    </Shell>
  );
}

function Shell({ children }) {
  const { t } = useTranslation("onboarding");
  const { localizedPath } = useLocalePath();

  return (
    <main className="relative min-h-svh bg-surface-accent">
      <ParallaxBlobs variant="a" />
      <Container className="relative">
        <div className="flex min-h-16 items-center justify-between py-5">
          <Link to={localizedPath("home")} className="flex items-center gap-3">
            {assets.logo ? (
              <img src={assets.logo} alt="Hurra Lingo" className="h-8 w-auto" />
            ) : (
              <span className="text-lg font-bold text-slate-900">
                Hurra Lingo
              </span>
            )}
          </Link>
          <Link
            to={localizedPath("pricing")}
            className="text-sm font-semibold text-slate-500 transition-colors hover:text-primary-700"
          >
            {t("ui.cancel")}
          </Link>
        </div>
        <div className="py-8 md:py-12">{children}</div>
      </Container>
    </main>
  );
}

function StepContent({ title, subtitle, children }) {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
          {subtitle}
        </p>
      </div>
      <div className="mt-10">{children}</div>
    </div>
  );
}

function OptionButton({ active, onClick, children, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex items-center gap-4 rounded-2xl border bg-white p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/70 ${
        active
          ? "border-primary-500 shadow-md shadow-primary-200/50 ring-2 ring-primary-200"
          : "border-slate-200"
      } ${className}`}
    >
      {children}
      {!className.includes("flex-col") && (
        <span
          className={`ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 ${
            active
              ? "scale-100 border-transparent bg-linear-to-br from-primary-500 to-primary-700 text-white shadow-sm shadow-primary-500/40"
              : "scale-90 border-slate-200 text-transparent group-hover:border-primary-300"
          }`}
        >
          <Check className="h-4 w-4" />
        </span>
      )}
      {className.includes("flex-col") && active && (
        <span className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-linear-to-br from-primary-500 to-primary-700 text-white shadow-sm shadow-primary-500/40">
          <Check className="h-4 w-4" />
        </span>
      )}
    </button>
  );
}

function PaymentScreen({
  answers,
  tier,
  languages,
  audiences,
  goals,
  levelOptions,
  onBack,
  onSubmit,
}) {
  const { t } = useTranslation(["onboarding", "pricing"]);
  const language = languages.find((item) => item.id === answers.language);
  const audience = audiences.find((item) => item.id === answers.audience);
  const level = levelOptions.find((item) => item.id === answers.level);
  const goal = goals.find((item) => item.id === answers.goal);

  const summary = [
    language && { label: t("ui.summary.language"), value: language.name },
    audience && { label: t("ui.summary.program"), value: audience.title },
    level && { label: t("ui.summary.level"), value: level.title },
    goal && { label: t("ui.summary.goal"), value: goal.title },
  ].filter(Boolean);

  return (
    <div className="mx-auto max-w-6xl">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold text-slate-600 transition-colors hover:text-primary-700"
      >
        <ArrowLeft className="h-4 w-4" />
        {t("ui.back")}
      </button>

      <div className="mt-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {t("payment.title")}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
          {t("payment.subtitle")}
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <div className="min-w-0">
          <aside className="lg:sticky lg:top-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">
                {t("ui.orderSummary")}
              </h2>

              {tier && (
                <div className="mt-5 rounded-2xl border-2 border-primary-200 bg-primary-50/60 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-bold text-slate-900">{tier.name}</h3>
                    {tier.badge && (
                      <span className="rounded-full bg-primary-600 px-2.5 py-0.5 text-xs font-semibold text-white">
                        {tier.badge}
                      </span>
                    )}
                  </div>
                  <div className="mt-3 flex items-end gap-1">
                    <span className="text-3xl font-extrabold text-slate-900">
                      {tier.price}
                    </span>
                    <span className="pb-0.5 text-base font-semibold text-slate-900">
                      {t("pricing:currency")}
                    </span>
                    <span className="pb-1 text-sm font-medium text-slate-400">
                      / {tier.unit}
                    </span>
                  </div>
                  {tier.note && (
                    <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-primary-600">
                      {tier.note}
                    </p>
                  )}
                  <ul className="mt-4 space-y-2 border-t border-primary-200/70 pt-4">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-2 text-sm text-slate-600"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                        <span className="leading-6">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {summary.length > 0 && (
                <dl className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                  {summary.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between gap-4 text-sm"
                    >
                      <dt className="text-slate-500">{item.label}</dt>
                      <dd className="text-right font-semibold text-slate-900">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}

              {tier && (
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-sm font-semibold text-slate-500">
                    {t("ui.perLessonAmount")}
                  </span>
                  <span className="text-xl font-extrabold text-slate-900">
                    {tier.price} {t("pricing:currency")}
                  </span>
                </div>
              )}

              <div className="mt-6 flex items-start gap-2 rounded-2xl bg-primary-50 p-4 text-sm text-primary-700">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" />
                <span>{t("ui.paymentSecurity")}</span>
              </div>
            </div>
          </aside>
        </div>

        {isStripeConfigured && stripePromise ? (
          <Elements stripe={stripePromise}>
            <StripeCheckoutForm
              defaultCardholderName={`${answers.firstName} ${answers.lastName}`.trim()}
              onSuccess={onSubmit}
            />
          </Elements>
        ) : (
          <MockCheckoutForm onSuccess={onSubmit} />
        )}
      </div>
    </div>
  );
}
