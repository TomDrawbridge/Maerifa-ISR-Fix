// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: umqBp7PH6EsELMxj7VcR5D
// Component: 7rjwun3ZP4RA

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

import NavbarItem from "../../NavbarItem"; // plasmic-import: RtMPv5Ty0hfh/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: umqBp7PH6EsELMxj7VcR5D/projectcss
import sty from "./PlasmicDropdownMenu.module.css"; // plasmic-import: 7rjwun3ZP4RA/css

createPlasmicElementProxy;

export type PlasmicDropdownMenu__VariantMembers = {
  variant: "variant";
};
export type PlasmicDropdownMenu__VariantsArgs = {
  variant?: SingleBooleanChoiceArg<"variant">;
};
type VariantPropType = keyof PlasmicDropdownMenu__VariantsArgs;
export const PlasmicDropdownMenu__VariantProps = new Array<VariantPropType>(
  "variant"
);

export type PlasmicDropdownMenu__ArgsType = {};
type ArgPropType = keyof PlasmicDropdownMenu__ArgsType;
export const PlasmicDropdownMenu__ArgProps = new Array<ArgPropType>();

export type PlasmicDropdownMenu__OverridesType = {
  dropdownMenu?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  heroContent2?: Flex__<"hgroup">;
  heroContent3?: Flex__<"hgroup">;
};

export interface DefaultDropdownMenuProps {
  variant?: SingleBooleanChoiceArg<"variant">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDropdownMenu__RenderFunc(props: {
  variants: PlasmicDropdownMenu__VariantsArgs;
  args: PlasmicDropdownMenu__ArgsType;
  overrides: PlasmicDropdownMenu__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "variant",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.variant
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <div
      data-plasmic-name={"dropdownMenu"}
      data-plasmic-override={overrides.dropdownMenu}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.dropdownMenu,
        { [sty.dropdownMenuvariant]: hasVariant($state, "variant", "variant") }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxvariant]: hasVariant($state, "variant", "variant")
        })}
      />

      <Stack__
        as={"hgroup"}
        data-plasmic-name={"heroContent2"}
        data-plasmic-override={overrides.heroContent2}
        hasGap={true}
        className={classNames(projectcss.all, sty.heroContent2, {
          [sty.heroContent2variant]: hasVariant($state, "variant", "variant")
        })}
      >
        {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))([
          2, 3, 4
        ]).map((__plasmic_item_0, __plasmic_idx_0) => {
          const currentItem = __plasmic_item_0;
          const currentIndex = __plasmic_idx_0;
          return (
            <NavbarItem
              className={classNames("__wab_instance", sty.navbarItem___0SxyD)}
              key={currentIndex}
            />
          );
        })}
      </Stack__>
      <Stack__
        as={"hgroup"}
        data-plasmic-name={"heroContent3"}
        data-plasmic-override={overrides.heroContent3}
        hasGap={true}
        className={classNames(projectcss.all, sty.heroContent3, {
          [sty.heroContent3variant]: hasVariant($state, "variant", "variant")
        })}
      >
        {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
          (() => {
            try {
              return [2, 3];
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
            <NavbarItem
              className={classNames("__wab_instance", sty.navbarItem__xR8Ps)}
              key={currentIndex}
            />
          );
        })}
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  dropdownMenu: ["dropdownMenu", "freeBox", "heroContent2", "heroContent3"],
  freeBox: ["freeBox"],
  heroContent2: ["heroContent2"],
  heroContent3: ["heroContent3"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  dropdownMenu: "div";
  freeBox: "div";
  heroContent2: "hgroup";
  heroContent3: "hgroup";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDropdownMenu__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDropdownMenu__VariantsArgs;
    args?: PlasmicDropdownMenu__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDropdownMenu__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDropdownMenu__ArgsType,
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
          internalArgPropNames: PlasmicDropdownMenu__ArgProps,
          internalVariantPropNames: PlasmicDropdownMenu__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDropdownMenu__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "dropdownMenu") {
    func.displayName = "PlasmicDropdownMenu";
  } else {
    func.displayName = `PlasmicDropdownMenu.${nodeName}`;
  }
  return func;
}

export const PlasmicDropdownMenu = Object.assign(
  // Top-level PlasmicDropdownMenu renders the root element
  makeNodeComponent("dropdownMenu"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    heroContent2: makeNodeComponent("heroContent2"),
    heroContent3: makeNodeComponent("heroContent3"),

    // Metadata about props expected for PlasmicDropdownMenu
    internalVariantProps: PlasmicDropdownMenu__VariantProps,
    internalArgProps: PlasmicDropdownMenu__ArgProps
  }
);

export default PlasmicDropdownMenu;
/* prettier-ignore-end */
