export default class DataTable {

    total= 0
    search =  ''
    options = {
        sortDesc: [true],
        page: 1,
        itemsPerPage: 10,
        sortBy: ["id"],
    }
    footerProps = {
        "items-per-page-options": [10, 20, 50, 100, 500]
    }
    items = []
    getParams()  {
        return {
            page : this.options.page,
            itemsPerPage : this.options.itemsPerPage,
            sortDesc : this.options.sortDesc ? this.options.sortDesc[0] : [false],
            sortBy : this.options.sortBy ? this.options.sortBy[0] : ['id'],
        }
    }
    constructor() {

    }
}