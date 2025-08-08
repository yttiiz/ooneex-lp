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

export type FooterDataMdxType = {
	slogan: string;
	menu: { subtitle: string; items: ItemMdxFileType[] }[];
};

export type WhyOoneexDataMdxType = {
	title: string;
	subtitle: string;
	advantages: string[];
	cat: ItemMdxFileType;
	image: ImageType;
};

export type MedicalDataMdxType = {
	title: string;
	subtitle: string;
	description: string;
	cat: ItemMdxFileType;
	image: ImageType;
};

export type ProofDataMdxType = Pick<
	MedicalDataMdxType,
	"title" | "description"
>;

export type ReviewDataMdxType = Pick<
	MedicalDataMdxType,
	"description" | "image"
> & {
	name: string;
	role: string;
};
