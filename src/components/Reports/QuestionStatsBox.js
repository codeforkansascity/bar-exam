import React from 'react';

const QuestionStatsBox = (props) => {
    return <div>
        <h3>{props.title}</h3>
        <h1>{props.number}</h1>
    </div>;
};

export default QuestionStatsBox;