
export const CatalogRepository = {
    async findById(id: string) {
        return await CatalogItem.findById(id);
    }
}
