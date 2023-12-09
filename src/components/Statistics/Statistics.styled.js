import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style: none;
`
export const ListItems = styled.li`
    display: inline-flex;
    margin: 10px;
    text-decoration: none;
    
    position: relative;
    overflow: hidden;
    font-size: 20px;
    line-height: 20px;
    padding: 12px 30px;
    color: gray;
    font-weight: bold;
    text-transform: uppercase;
    font-family: 'Roboto Condensed', Тahoma, sans-serif;
  `