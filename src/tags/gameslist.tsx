import styled from '@emotion/styled'
 
export const ListWrapper = styled.ul`
padding: 2rem;
background: #fff;
height: 100%;
margin-top: 2%;
margin-left: 0%;
margin-right: 5%;
margin-bottom: auto;
border-radius: 1rem;
display:flex;
flex-wrap: wrap;
justify-content: space-between;
min-width: 400px;
`;
export const ListContent = styled.div`
    color:red;
    width: 100%;
    cursor:pointer;
`;

export const ListItem = styled.li`
    background: #FFF;
    list-style-type: none;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 60px;
    margin: 1rem;
`;

export const Image = styled.img`
    display: block;
    width: 300px;
    height: 270px;
    -webkit-transition: all 0.3s linear 0s;
    -moz-transition: all 0.3s linear 0s;
    -ms-transition: all 0.3s linear 0s;
    -o-transition: all 0.3s linear 0s;
    transition: all 0.3s linear 0s;
    :hover {
        transform: scale(1.1);
      } 
`;


export const Genre = styled.h3`
    position: absolute;
    top: -36px;
    left: 0;
    background: #e74c3c;
    padding: 10px 15px;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 10px;
  border-radius: 0.7rem;
  color: white;
  border:0px;
  font-weight: bold;
  margin: 10px;
  padding: 1em 3em;
  background-size: 300% 300%;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-image: linear-gradient(to right top, #ed433f, #df3a37, #d2302f, #c42627, #b71b1f);
}
`
export const Column = styled.div`
    width: 100%;
    -webkti-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    float: left;
    

`;

export const Title = styled.div`
    margin: 0px;
    color: #666666;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
`;

export const Module = styled.div`
position: relative;
z-index: 1;
display: block;
min-width: 270px;
height: 370px;
}
`
export const Thumbnail = styled.div`
width: 300px;
height: 300px;
overflow: hidden;
background:black;

`;

export const ThumbnailText = styled.div`
    align-items:center;

    position: absolute;
    top: 20px;    
    right: 20px;
    z-index: 1;
    background: #e74c3c;
    width: 55px;
    height: 55px;
    padding: 12.5px 0;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    color: #FFFFFF;
    font-weight: 700;
    text-align: center;
    -webkti-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
`;

export const Language = styled.div`
    font-size: 18px;
    text-transform: uppercase;
`;

export const Content = styled.div`
    background: #FFF;
    position: absolute;
    text-align: left;
    bottom: 0;
    width: 100%;
    height: 120px;
    padding: 10px;
    -webkti-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
    -moz-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
    -ms-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
    -o-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
    transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
     
`;

export const ListTitle = styled.div`
    margin: 0;
    color: #333333;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: -40px
`;

export const Name = styled.div`
margin: 0;
padding: 0 0 20px;
font-size: 15px;
font-weight: 400;
:hover {
    transform: scale(1.00);
  } 
`;
 
export const Description = styled.div`
    color: #666666;
    font-size: 15px;
    line-height: 1em;
    background: #FFF;
`;

export const Meta = styled.div`
    margin: 30px 0 0;
    color: #999999;
`;

export const Date = styled.div`
    margin: 0 16px 0 0;
    font-size:12px;
`;
