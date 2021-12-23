import type {Genre} from '../types';

interface Props {
    categories: Genre[];  
}

const CategoryList: React.FunctionComponent<Props> = ({categories}) => {
    categories.map((category) => (
        console.log(category.tag.name)
    ))
    return(
        <>
        works
        </>
    )
};
export default CategoryList;