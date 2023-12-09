import { nanoid } from 'nanoid';
import { List, ListButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <List>
            {options.map((option) => 
                <ListButton key={nanoid()} onClick={() => onLeaveFeedback(option)} name={option}>
                    {option.toUpperCase()}
                </ListButton>)}
        </List>

    )
};