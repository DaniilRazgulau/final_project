import { makeAutoObservable, runInAction } from "mobx";
import { CatalogData } from "../models/CatalogData";
import { CategoriesData } from "../../../../common/models/Category";

class CatalogListStore {

    catalogListDataState: CatalogData | undefined = undefined;
    categoriesState: CategoriesData | undefined = undefined;
    awaiting: boolean = false;

    get productsData () {
        return this.catalogListDataState;
    }
    
    constructor() {
        makeAutoObservable(this);
    }

    loadCategories = async () => {
        try{
            const response = await fetch('http://localhost:3000/categories');
            if(response.status === 200) {
                const data: CategoriesData = await response.json();
                runInAction(() => {
                    this.categoriesState = data;
                })
                console.log(response);
            }
        }
        catch(error) {
            console.log(error);
        }
    }

    loadingData = async (category?: string) => {

        try {            
            runInAction(() => {this.awaiting = true});
            const response = await fetch(`http://localhost:3000/products?category.id=${category}`)
            if(response.status === 200) {
                const data: CatalogData = await response.json();
                runInAction(() => {
                    this.catalogListDataState = data;
                })
            }
        } catch(error) {
            console.log(error);
        }finally {
            runInAction(() => {this.awaiting = false});
        }
    }
}
const store = new CatalogListStore();
export default store