"use client";

import { useCallback, useEffect, useId, useRef, useState, type ReactNode } from "react";
import { AuthButton } from "./AuthButton";
import type { AppLocale } from "@/lib/i18n";
import type { PricingExperienceCopy } from "@/lib/pricingExperienceCopy";
import { fetchRegionalOffer, readPricingCountry, rememberPricingCountry, type PublicRegionalOffer } from "@/lib/regionalPricing";
import styles from "./PricingCards.module.css";

export function RegionalPremiumOffer({ locale, copy, standardPrice, actionLabel, closeLabel, children }: {
  readonly locale: AppLocale;
  readonly copy: PricingExperienceCopy;
  readonly standardPrice: string;
  readonly actionLabel: string;
  readonly closeLabel: string;
  readonly children: ReactNode;
}): React.JSX.Element {
  const [pricesFor, changeCountry, chooseCountry, loading, error, retry, checkoutNote, purchasesDisabled, countryUnavailable, storageUnavailable] = copy.regional;
  const [result, setResult] = useState<PublicRegionalOffer | null>(null);
  const [codes, setCodes] = useState<readonly string[]>([]);
  const [country, setCountry] = useState<string | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [storageError, setStorageError] = useState(false);
  const request = useRef<AbortController | null>(null);
  const countryDialog = useRef<HTMLDialogElement>(null);
  const countryTrigger = useRef<HTMLButtonElement>(null);
  const countryDialogId = useId();

  const load = useCallback((selected: string | null): void => {
    request.current?.abort();
    const controller = new AbortController();
    request.current = controller;
    void fetchRegionalOffer(selected, controller.signal).then(async initial => {
      let next = initial;
      if (controller.signal.aborted) return;
      setCodes(next.supportedCountryCodes);
      if (selected === null) {
        let preferred: string | null = null;
        try {
          preferred = readPricingCountry(next.supportedCountryCodes);
        } catch (cause) {
          console.error("Regional pricing preference read failed", { cause });
          setStorageError(true);
        }
        if (preferred !== null) {
          setCountry(preferred);
          next = await fetchRegionalOffer(preferred, controller.signal);
        }
      }
      if (controller.signal.aborted) return;
      setCountry(next.selectedCountry);
      setResult(next);
      setStatus("ready");
    }).catch((cause: unknown) => {
      if (controller.signal.aborted) return;
      console.error("Regional pricing request failed", { selectedCountry: selected, cause });
      setStatus("error");
    });
  }, []);

  useEffect(() => {
    void load(null);
    return () => request.current?.abort();
  }, [load]);

  const startLoad = (selected: string | null): void => {
    setStatus("loading");
    setResult(null);
    void load(selected);
  };
  const selectCountry = (selected: string): void => {
    if (!codes.includes(selected)) return;
    setCountry(selected);
    try {
      rememberPricingCountry(selected, codes);
      setStorageError(false);
    } catch (cause) {
      console.error("Regional pricing preference write failed", { selectedCountry: selected, cause });
      setStorageError(true);
    }
    startLoad(selected);
  };
  const names = new Intl.DisplayNames([locale], { type: "region" });
  const countries = codes.map(code => ({ code, name: names.of(code) ?? code })).sort((a, b) => a.name.localeCompare(b.name, locale));
  const countryName = country === null ? "" : names.of(country) ?? country;
  const offer = result?.state === "offer" ? result.offer : null;
  const amount = offer === null ? null : new Intl.NumberFormat(locale, { style: "currency", currency: offer.basePrice.currency }).format(offer.basePrice.unitAmount / 100);

  return <>
    <div className={styles.regionalPrice} data-regional-pricing-state={status}>
      <p className={styles.standardPrice}>{standardPrice}</p>
      <div aria-live="polite" aria-atomic="true">
        {status === "loading" && <p role="status">{loading}</p>}
        {status === "error" && <p role="alert">{error} <button type="button" onClick={() => startLoad(country)} data-testid="regional-price-retry">{retry}</button></p>}
        {status === "ready" && offer === null && <p>{chooseCountry}</p>}
        {offer !== null && <>
          <p className={styles.price}><strong><bdi>{amount}</bdi></strong><span>{copy.period}</span></p>
          {!offer.salesAvailable && <p>{offer.salesUnavailableReason === "country_unavailable" ? countryUnavailable : purchasesDisabled}</p>}
          <p>{checkoutNote}</p>
        </>}
      </div>
      {storageError && <p role="status">{storageUnavailable}</p>}
    </div>
    {children}
    <div className={styles.action}>
      <AuthButton locale={locale} placement="pricing" label={actionLabel} pricingCountry={country ?? undefined} />
      <p className={styles.countryCorrection}>
        {country !== null && <><span>{pricesFor.replace("{country}", countryName)}</span><span aria-hidden="true"> · </span></>}
        <button ref={countryTrigger} className={styles.countryChange} type="button" aria-haspopup="dialog" aria-controls={countryDialogId} disabled={codes.length === 0} onClick={() => countryDialog.current?.showModal()} data-testid="regional-price-change-country">
          {country === null ? chooseCountry : changeCountry}
        </button>
      </p>
      <dialog ref={countryDialog} id={countryDialogId} className={styles.countryDialog} aria-labelledby={`${countryDialogId}-title`} onCancel={event => event.stopPropagation()} onClose={() => countryTrigger.current?.focus({ preventScroll: true })} data-testid="regional-price-country-dialog">
        <div className={styles.countryDialogHeader}>
          <h2 id={`${countryDialogId}-title`}>{changeCountry}</h2>
          <form method="dialog"><button type="submit" data-testid="regional-price-country-close">{closeLabel}</button></form>
        </div>
        <label className={styles.countrySelector}>
          <span>{chooseCountry}</span>
          <select value={country ?? ""} disabled={codes.length === 0} onChange={event => selectCountry(event.target.value)} data-testid="regional-price-country">
            <option value="" disabled>{chooseCountry}</option>
            {countries.map(item => <option key={item.code} value={item.code}>{item.name}</option>)}
          </select>
        </label>
      </dialog>
    </div>
  </>;
}
