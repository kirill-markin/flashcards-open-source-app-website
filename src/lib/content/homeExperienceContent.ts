import type { AppLocale } from "../localeConfig";
import { getFooterCtaCopy } from "../footerCtaCopy";
import { getHomeExperienceCopy } from "../homeExperienceCopy";
import type { PageContent } from "./types";

export function applyHomeExperienceContent(page: PageContent, locale: AppLocale): PageContent {
  const copy = getHomeExperienceCopy(locale);
  return {
    ...page,
    sections: page.sections.map(section=>{
      switch(section.type){
        case "hero": return {...section, titleLines:[copy.heading[0], copy.heading.slice(1).join("")], subtitle:copy.flow.join(" → ")};
        case "app_walkthrough": return {...section, title:copy.story.slice(1).join(" "), items:section.items.slice(0,3)};
        case "feature_list": return {...section, title:copy.features[1], intro:copy.features[0], items:section.items.slice(1)};
        case "review_cta": return {...section, titleLines:[copy.footerTitle], description:getFooterCtaCopy(locale).descriptionLines.join(" ")};
        default: throw new Error(`Unexpected home section ${section.type} for ${locale}.`);
      }
    }),
  };
}
