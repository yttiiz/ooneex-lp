import type { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
	size?: number;
};

export type HeroPropsType = {
	title: string;
	hook: string;
	slogan: string;
	cat: ItemMdxFileType;
};

export type ImageType = {
	src: string;
	alt: string;
};

export type ItemMdxFileType = {
	link: string;
	textContent: string;
};

export type HeaderMdxFileType = {
	items: ItemMdxFileType[];
	login: ItemMdxFileType;
};

export type FeaturePropsType = {
	title: string;
	subtitle: string;
	description: string;
	details: {
		detailsTitle: string;
		detailsDesc: string;
		detailsIcone: string;
	},
	image: ImageType,
};