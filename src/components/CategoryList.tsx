import type {Genre} from '../types';

interface Props {
    categories: Genre[];  
}

const CategoryList: React.FunctionComponent<Props> = ({categories}) => {
    console.log("c_categories",categories)
    categories.map((category) => (
        console.log("props",category)
    ))
    return(
        <>
        works
        </>
    )
};
export default CategoryList;