import sharp from "sharp";
import { type CollectionEntry } from "astro:content";
import postOgImage from "./og-templates/post";
import siteOgImage from "./og-templates/site";

async function svgBufferToPngBuffer(svg: string) {
  const buffer = Buffer.from(svg);
  const pngBuffer = await sharp(buffer)
    .png()
    .toBuffer();
  return pngBuffer;
}

export async function generateOgImageForPost(post: CollectionEntry<"blog">) {
  const svg = await postOgImage(post);
  return svgBufferToPngBuffer(svg);
}

export async function generateOgImageForSite() {
  const svg = await siteOgImage();
  return svgBufferToPngBuffer(svg);
}