import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/reducer';

const ResultsPanel: React.FC = () => {
    const results = useSelector((state: AppState) => state.queryResults?.RelatedTopics);

    return (
        <div className='results-panel'>
            {results?.map((result, index) => (
                <div>
                    <a key={index} href={result.FirstURL}>{result.Text}</a>
                </div>
            ))}
        </div>
    );
};

export default ResultsPanel;