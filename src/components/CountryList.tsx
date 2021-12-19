import type {Country} from '../types';
import styled from '@emotion/styled';

interface Props {
    countries: Country[];
}

const ListWrapper = styled.ul`
padding:0;
display:flex;
flex-wrap: wrap;
`;

const ListItem = styled.li`
list-style-type: none;
flex: 0 0 50%;
text-align: center;

@media (mi-width: 420px) {
    flex: 0 0 33.33
}
`; 
const ListContent = styled.div`
background-color: #f7f7f7`
const CountryList: React.FunctionComponent<Props> = ({countries}) => {
    return(
        <ListWrapper>
             {countries.map((country) => (
                 <ListItem key={country.ID}>
                     <ListContent>
                     <h4>{country.Country}</h4>
                     <div>New Confirmed: {country.NewConfirmed}</div>
                     <div>New Deaths: {country.NewDeaths}</div>
                     </ListContent>
                 </ListItem>
             ))}
        </ListWrapper>
    )
};

export default CountryList