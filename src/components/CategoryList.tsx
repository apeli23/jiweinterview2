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
            {
                categories.map((category) => (
                    <a>{category.tag.name}</a>
                ))
            } 
        </>
    )
};
export default CategoryList;