import type { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
	size?: number;
};

export type HeroPropsType = {
	title: string;
	hook: string;
	slogan: string;
	cat: LinkType;
};

export type ImageType = {
	src: string;
	alt: string;
};

export type LinkType = {
	href: string;
	textContent: string;
};

export type HeaderMdxFileType = {
	items: LinkType[];
	login: LinkType;
};

export type FeaturePropsType = {
	title: string;
	subtitle: string;
	description: string;
	details: DetailsElementType[];
	link: LinkType;
	image: { src: ImageMetadata; alt: string };
};

export type DetailsElementType = {
	detailsTitle: string;
	detailsDesc: string;
	detailsIcone: IconDetailsType;
};

export type IconDetailsType =
	| "upload"
	| "lock"
	| "backup"
	| "system"
	| "footprint"
	| "reload";
