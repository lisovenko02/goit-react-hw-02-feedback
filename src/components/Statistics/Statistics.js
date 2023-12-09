import { List, ListItems } from "./Statistics.styled";

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
<div>
  <List>
    <ListItems>Good:{good}</ListItems>
    <ListItems>Neutral:{neutral}</ListItems>
    <ListItems>Bad:{bad}</ListItems>
    <ListItems>Total:{total}</ListItems>
    <ListItems>Positive feedback:{positivePercentage}%</ListItems>
  </List>
</div>
);