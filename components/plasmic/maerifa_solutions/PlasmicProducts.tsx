// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: umqBp7PH6EsELMxj7VcR5D
// Component: M6uGwDrBr-xX

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import PageWrapper from "../../PageWrapper"; // plasmic-import: LxnEHVEe-YQz/component
import { PlasmicHead } from "@plasmicapp/react-web";
import FramerMotion from "../../FramerMotion"; // plasmic-import: NKtmoaTySRQh/codeComponent
import Kicker from "../../Kicker"; // plasmic-import: sRJYTCOVASaN/component
import { Embed } from "@plasmicpkgs/plasmic-basic-components";
import Button from "../../Button"; // plasmic-import: yRQ3u0JIMHGv/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariantsjnoQdQuyEw7D } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: JnoQdQUYEw7d/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: umqBp7PH6EsELMxj7VcR5D/projectcss
import sty from "./PlasmicProducts.module.css"; // plasmic-import: M6uGwDrBr-xX/css

import SquareCheckFilledSvgIcon from "./icons/PlasmicIcon__SquareCheckFilledSvg"; // plasmic-import: Ci_S92ecHKID/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: j96Eqe3O9l1a/icon
import Layer12SvgIcon from "./icons/PlasmicIcon__Layer12Svg"; // plasmic-import: XGTI_fupuDy3/icon

createPlasmicElementProxy;

export type PlasmicProducts__VariantMembers = {};
export type PlasmicProducts__VariantsArgs = {};
type VariantPropType = keyof PlasmicProducts__VariantsArgs;
export const PlasmicProducts__VariantProps = new Array<VariantPropType>();

export type PlasmicProducts__ArgsType = {};
type ArgPropType = keyof PlasmicProducts__ArgsType;
export const PlasmicProducts__ArgProps = new Array<ArgPropType>();

export type PlasmicProducts__OverridesType = {
  root?: Flex__<typeof PageWrapper>;
  pageMetadataOverride?: Flex__<typeof PlasmicHead>;
  heroWrapper?: Flex__<"header">;
  heroInner?: Flex__<"div">;
  heroContent?: Flex__<"hgroup">;
  kicker?: Flex__<typeof Kicker>;
  h1?: Flex__<"h1">;
  pageContent?: Flex__<"section">;
  embedHtml?: Flex__<typeof Embed>;
  h2?: Flex__<"h2">;
  link?: Flex__<"a"> & Partial<LinkProps>;
  h3?: Flex__<"h3">;
  img?: Flex__<typeof PlasmicImg__>;
  button?: Flex__<typeof Button>;
  accent?: Flex__<"div">;
};

export interface DefaultProductsProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProducts__RenderFunc(props: {
  variants: PlasmicProducts__VariantsArgs;
  args: PlasmicProducts__ArgsType;
  overrides: PlasmicProducts__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "counter",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0
      },
      {
        path: "formSubmitted",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "aMgmeTWQBv5yDEivoQ6vB4",
        opId: "01f6a63e-5c9d-45cc-8b32-194985f7f92e",
        userArgs: {},
        cacheKey: `plasmic.$.01f6a63e-5c9d-45cc-8b32-194985f7f92e.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsjnoQdQuyEw7D()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <PageWrapper
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          bottomLineNavbar={(() => {
            try {
              return $ctx.isScrolled;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return false;
              }
              throw e;
            }
          })()}
          children2={
            <div className={classNames(projectcss.all, sty.freeBox__idSoy)}>
              <PlasmicHead
                data-plasmic-name={"pageMetadataOverride"}
                data-plasmic-override={overrides.pageMetadataOverride}
                className={classNames(
                  "__wab_instance",
                  sty.pageMetadataOverride
                )}
                image={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "/plasmic/maerifa_solutions/images/asset28Png.png"
                    : "/plasmic/maerifa_solutions/images/asset28Png.png"
                }
                title={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Maerifa Solutions | High-Performance Server Technology on a Global Scale"
                    : "Maerifa Solutions | High-Performance Server Technology on a Global Scale"
                }
              />

              <header
                data-plasmic-name={"heroWrapper"}
                data-plasmic-override={overrides.heroWrapper}
                className={classNames(projectcss.all, sty.heroWrapper)}
              >
                <div
                  data-plasmic-name={"heroInner"}
                  data-plasmic-override={overrides.heroInner}
                  className={classNames(projectcss.all, sty.heroInner)}
                >
                  <Stack__
                    as={"hgroup"}
                    data-plasmic-name={"heroContent"}
                    data-plasmic-override={overrides.heroContent}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.heroContent)}
                  >
                    <FramerMotion
                      className={classNames(
                        "__wab_instance",
                        sty.framerMotion__yfcJt
                      )}
                      delay={0}
                    >
                      <Kicker
                        data-plasmic-name={"kicker"}
                        data-plasmic-override={overrides.kicker}
                        className={classNames("__wab_instance", sty.kicker)}
                        color={"dark"}
                        text={"Our Leadership"}
                      />
                    </FramerMotion>
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__cjgRv)}
                    >
                      <FramerMotion
                        className={classNames(
                          "__wab_instance",
                          sty.framerMotion__yOPg
                        )}
                        delay={0.1}
                      >
                        <h1
                          data-plasmic-name={"h1"}
                          data-plasmic-override={overrides.h1}
                          className={classNames(
                            projectcss.all,
                            projectcss.h1,
                            projectcss.__wab_text,
                            sty.h1
                          )}
                        >
                          {"Products"}
                        </h1>
                      </FramerMotion>
                      <FramerMotion
                        className={classNames(
                          "__wab_instance",
                          sty.framerMotion__leldk
                        )}
                        delay={0.2}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__tWMxY
                          )}
                        >
                          {
                            "In an ever-changing world, Maerifa Solutions brings together experienced people, state-of-the-art technology, financial acumen and services, to deliver a consultancy-led business-first approach, enabling customers to extract the maximum value from their data for competitive advantage"
                          }
                        </div>
                      </FramerMotion>
                    </Stack__>
                  </Stack__>
                </div>
              </header>
              <section
                data-plasmic-name={"pageContent"}
                data-plasmic-override={overrides.pageContent}
                className={classNames(projectcss.all, sty.pageContent)}
              >
                {(() => {
                  try {
                    return $queries.query.isLoading;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return true;
                    }
                    throw e;
                  }
                })() ? (
                  <Embed
                    data-plasmic-name={"embedHtml"}
                    data-plasmic-override={overrides.embedHtml}
                    className={classNames("__wab_instance", sty.embedHtml)}
                    code={
                      '<svg width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <style>\n    .spinner_5nOS{transform-origin:center;animation:spinner_sEAn .75s infinite linear}\n    @keyframes spinner_sEAn{100%{transform:rotate(360deg)}}\n  </style>\n  <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".15" fill="var(--token-5AI_Gda4ZPGN)"/>\n  <path d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z" class="spinner_5nOS" fill="var(--token-5AI_Gda4ZPGN)"/>\n</svg>'
                    }
                  />
                ) : null}
                {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                  (() => {
                    try {
                      return $queries.query.data.response.data.product_category;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return [];
                      }
                      throw e;
                    }
                  })()
                ).map((__plasmic_item_0, __plasmic_idx_0) => {
                  const currentItem = __plasmic_item_0;
                  const currentIndex = __plasmic_idx_0;
                  return (
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__dVyOw)}
                      key={currentIndex}
                    >
                      <Stack__
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__gWfKc
                        )}
                      >
                        <h2
                          data-plasmic-name={"h2"}
                          data-plasmic-override={overrides.h2}
                          className={classNames(
                            projectcss.all,
                            projectcss.h2,
                            projectcss.__wab_text,
                            sty.h2
                          )}
                        >
                          <React.Fragment>
                            {(() => {
                              try {
                                return currentItem.name;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return "";
                                }
                                throw e;
                              }
                            })()}
                          </React.Fragment>
                        </h2>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__lGrPu
                          )}
                        >
                          {hasVariant(
                            globalVariants,
                            "screen",
                            "mobileOnly"
                          ) ? (
                            <React.Fragment>
                              {(() => {
                                try {
                                  return (
                                    currentItem.short_description ||
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                                  );
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "Our approach is achieved through our industry knowledge and expertise, coupled with shareholder knowledge and network access across diverse industries, encompassing global market leaders in major Financial Institutions, Datacentre, Maritime, Crypto, Gaming and Telco.";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          ) : (
                            <React.Fragment>
                              {(() => {
                                try {
                                  return currentItem.short_description;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "Our approach is achieved through our industry knowledge and expertise, coupled with shareholder knowledge and network access across diverse industries, encompassing global market leaders in major Financial Institutions, Datacentre, Maritime, Crypto, Gaming and Telco.";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          )}
                        </div>
                      </Stack__>
                      {(_par =>
                        !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                        (() => {
                          try {
                            return currentItem.products;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return [];
                            }
                            throw e;
                          }
                        })()
                      ).map((__plasmic_item_1, __plasmic_idx_1) => {
                        const currentItem = __plasmic_item_1;
                        const currentIndex = __plasmic_idx_1;
                        return (
                          <Stack__
                            as={"div"}
                            hasGap={true}
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__wt1Gk
                            )}
                            key={currentIndex}
                          >
                            <Stack__
                              as={"div"}
                              hasGap={true}
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__nOcxN
                              )}
                            >
                              <PlasmicLink__
                                data-plasmic-name={"link"}
                                data-plasmic-override={overrides.link}
                                className={classNames(
                                  projectcss.all,
                                  projectcss.a,
                                  sty.link
                                )}
                                component={Link}
                                href={(() => {
                                  try {
                                    return (
                                      "/build-with-us" +
                                      "?product=" +
                                      currentItem.products_url.url
                                    );
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return undefined;
                                    }
                                    throw e;
                                  }
                                })()}
                                platform={"nextjs"}
                                target={"_blank"}
                              >
                                <h3
                                  data-plasmic-name={"h3"}
                                  data-plasmic-override={overrides.h3}
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.h3,
                                    projectcss.__wab_text,
                                    sty.h3
                                  )}
                                >
                                  <React.Fragment>
                                    {(() => {
                                      try {
                                        return currentItem.products_url.name;
                                      } catch (e) {
                                        if (
                                          e instanceof TypeError ||
                                          e?.plasmicType ===
                                            "PlasmicUndefinedDataError"
                                        ) {
                                          return "Product Name";
                                        }
                                        throw e;
                                      }
                                    })()}
                                  </React.Fragment>
                                </h3>
                              </PlasmicLink__>
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__gbOeC
                                )}
                              >
                                <React.Fragment>
                                  {(() => {
                                    try {
                                      return currentItem.products_url.short_description.endsWith(
                                        "."
                                      )
                                        ? currentItem.products_url.short_description.slice(
                                            0,
                                            -1
                                          )
                                        : currentItem.products_url
                                            .short_description;
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return "Broad range of rackmount datacentre servers optimised for modern enterprise workloads.";
                                      }
                                      throw e;
                                    }
                                  })()}
                                </React.Fragment>
                              </div>
                            </Stack__>
                            <Stack__
                              as={"div"}
                              hasGap={true}
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__keQ3Z
                              )}
                            >
                              <PlasmicImg__
                                data-plasmic-name={"img"}
                                data-plasmic-override={overrides.img}
                                alt={""}
                                className={classNames(sty.img)}
                                displayHeight={"100%"}
                                displayMaxHeight={
                                  hasVariant(
                                    globalVariants,
                                    "screen",
                                    "mobileOnly"
                                  )
                                    ? "125px"
                                    : "none"
                                }
                                displayMaxWidth={"300px"}
                                displayMinHeight={"0"}
                                displayMinWidth={"0"}
                                displayWidth={"auto"}
                                loading={"lazy"}
                                src={(() => {
                                  try {
                                    return (
                                      "https://content.maerifasolutions.com/assets/" +
                                      currentItem.products_url.main_image.id
                                    );
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return "https://www.supermicro.com/files_SYS/images/System/productSelector/SYS-221P-C9R_main.png";
                                    }
                                    throw e;
                                  }
                                })()}
                              />

                              {(
                                hasVariant(
                                  globalVariants,
                                  "screen",
                                  "mobileOnly"
                                )
                                  ? true
                                  : false
                              ) ? (
                                <Button
                                  data-plasmic-name={"button"}
                                  data-plasmic-override={overrides.button}
                                  className={classNames(
                                    "__wab_instance",
                                    sty.button
                                  )}
                                  color2={"clear"}
                                  link={(() => {
                                    try {
                                      return (
                                        "/build-with-us" +
                                        "?product=" +
                                        currentItem.products_url.url
                                      );
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return `/build-with-us`;
                                      }
                                      throw e;
                                    }
                                  })()}
                                  startIcon={
                                    <SquareCheckFilledSvgIcon
                                      className={classNames(
                                        projectcss.all,
                                        sty.svg__rTTxB
                                      )}
                                      role={"img"}
                                    />
                                  }
                                  target={true}
                                >
                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.__wab_text,
                                      sty.text__vSzgo
                                    )}
                                  >
                                    {"Contact Us"}
                                  </div>
                                </Button>
                              ) : null}
                            </Stack__>
                          </Stack__>
                        );
                      })}
                      {(() => {
                        try {
                          return (
                            currentIndex !==
                            $queries.query.data.response.data.product_category
                              .length -
                              1
                          );
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return true;
                          }
                          throw e;
                        }
                      })() ? (
                        <Stack__
                          as={"div"}
                          data-plasmic-name={"accent"}
                          data-plasmic-override={overrides.accent}
                          hasGap={true}
                          className={classNames(projectcss.all, sty.accent)}
                        >
                          <Layer12SvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__pmxR
                            )}
                            role={"img"}
                          />

                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__vEYg
                            )}
                          />
                        </Stack__>
                      ) : null}
                    </Stack__>
                  );
                })}
              </section>
            </div>
          }
          className={classNames("__wab_instance", sty.root)}
        />
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "pageMetadataOverride",
    "heroWrapper",
    "heroInner",
    "heroContent",
    "kicker",
    "h1",
    "pageContent",
    "embedHtml",
    "h2",
    "link",
    "h3",
    "img",
    "button",
    "accent"
  ],
  pageMetadataOverride: ["pageMetadataOverride"],
  heroWrapper: ["heroWrapper", "heroInner", "heroContent", "kicker", "h1"],
  heroInner: ["heroInner", "heroContent", "kicker", "h1"],
  heroContent: ["heroContent", "kicker", "h1"],
  kicker: ["kicker"],
  h1: ["h1"],
  pageContent: [
    "pageContent",
    "embedHtml",
    "h2",
    "link",
    "h3",
    "img",
    "button",
    "accent"
  ],
  embedHtml: ["embedHtml"],
  h2: ["h2"],
  link: ["link", "h3"],
  h3: ["h3"],
  img: ["img"],
  button: ["button"],
  accent: ["accent"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof PageWrapper;
  pageMetadataOverride: typeof PlasmicHead;
  heroWrapper: "header";
  heroInner: "div";
  heroContent: "hgroup";
  kicker: typeof Kicker;
  h1: "h1";
  pageContent: "section";
  embedHtml: typeof Embed;
  h2: "h2";
  link: "a";
  h3: "h3";
  img: typeof PlasmicImg__;
  button: typeof Button;
  accent: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProducts__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProducts__VariantsArgs;
    args?: PlasmicProducts__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProducts__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProducts__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicProducts__ArgProps,
          internalVariantPropNames: PlasmicProducts__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProducts__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProducts";
  } else {
    func.displayName = `PlasmicProducts.${nodeName}`;
  }
  return func;
}

export const PlasmicProducts = Object.assign(
  // Top-level PlasmicProducts renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    pageMetadataOverride: makeNodeComponent("pageMetadataOverride"),
    heroWrapper: makeNodeComponent("heroWrapper"),
    heroInner: makeNodeComponent("heroInner"),
    heroContent: makeNodeComponent("heroContent"),
    kicker: makeNodeComponent("kicker"),
    h1: makeNodeComponent("h1"),
    pageContent: makeNodeComponent("pageContent"),
    embedHtml: makeNodeComponent("embedHtml"),
    h2: makeNodeComponent("h2"),
    link: makeNodeComponent("link"),
    h3: makeNodeComponent("h3"),
    img: makeNodeComponent("img"),
    button: makeNodeComponent("button"),
    accent: makeNodeComponent("accent"),

    // Metadata about props expected for PlasmicProducts
    internalVariantProps: PlasmicProducts__VariantProps,
    internalArgProps: PlasmicProducts__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicProducts;
/* prettier-ignore-end */
