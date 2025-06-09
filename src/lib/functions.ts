
// Header Images:
interface ImgModule {
    default: string,
}
export function getHeaderImage(slug: string, iterable: [string, unknown][]): string | undefined {
    let header_image: Array<any> = iterable.map(([path, module]) => {
        if (path.includes(slug)) {
            const img_module = module as ImgModule
            return img_module?.default
        }
    })
    header_image = [...header_image].filter((element) => element !== undefined)

    return header_image.join("").length != 0 ? header_image.join("") : undefined;
}
